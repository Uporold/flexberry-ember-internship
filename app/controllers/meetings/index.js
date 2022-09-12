import Controller from "@ember/controller";
import { computed } from "@ember/object";

export const PER_PAGE = 2;

export default Controller.extend({
  queryParams: ["speaker", "date", "book", "page"],
  speaker: "",
  date: "",
  book: "",
  page: 1,

  pages: computed("model.meetings.meta.total", function() {
    const total = Number(this.get("model.meetings.meta.total"));
    if (Number.isNaN(total) || total <= 0) {
      return [];
    }

    return new Array(Math.ceil(total / PER_PAGE))
      .fill()
      .map((value, index) => index + 1);
  }),

  selectedBook: computed("book", function() {
    const book = this.get("book");
    return book ? this.get("model.books").findBy("id", book) : null;
  }),

  selectedSpeaker: computed("speaker", function() {
    const speaker = this.get("speaker");
    return speaker ? this.get("model.speakers").findBy("id", speaker) : null;
  }),

  selectedDate: computed("date", function() {
    const date = this.get("date");
    return date ? new Date(date) : "";
  }),

  isDisabledIncrementItem: computed("pages", function() {
    return this.get("page") === this.get("pages").length;
  }),

  isDisabledDecrementItem: computed("pages", function() {
    return this.get("page") === 1;
  }),

  actions: {
    async deleteMeeting(meetingModel) {
      try {
        const reports = meetingModel.reports;
        await meetingModel.destroyRecord();
        reports.forEach(report => {
          report.unloadRecord();
        });
        meetingModel.unloadRecord();
        if (this.get("page") > 1 && this.get("model.meetings").length === 0) {
          this.set("page", this.get("page") - 1);
        }
        this.send("refreshModel");
      } catch (err) {
        const errorsLogger = this.get("errorsLogger");
        errorsLogger.sendError(err);
      }
    },

    changeBook(book) {
      this.set("book", book ? book.get("id") : "");
    },

    changeSpeaker(speaker) {
      this.set("speaker", speaker ? speaker.get("id") : "");
    },

    changeDate(date) {
      this.set("date", date.toISOString());
    },

    incrementPage(e) {
      e.preventDefault();
      if (this.get("page") < this.get("pages").length) {
        this.set("page", this.get("page") + 1);
      }
    },

    decrementPage(e) {
      e.preventDefault();
      if (this.get("page") !== 1) {
        this.set("page", this.get("page") - 1);
      }
    },

    async loadMeetingsByQueryParams(e) {
      try {
        e.preventDefault();
        this.set("page", 1);
        const query = {
          meetingsQueries: {
            speaker: this.speaker,
            date: this.date,
            book: this.book,
            _page: this.page,
            _limit: PER_PAGE
          }
        };
        this.set("isLoading", true);
        const data = await this.store.query("meeting", query);
        this.set("model.meetings", data);
        this.set("isLoading", false);
      } catch (err) {
        const errorsLogger = this.get("errorsLogger");
        errorsLogger.sendError(err);
      }
    },

    clearFilters() {
      this.clearFilters();
    }
  },

  clearFilters() {
    this.set("book", "");
    this.set("speaker", "");
    this.set("date", "");
    this.set("selectedDate", "");
  },

  reset() {
    this.clearFilters();
    this.set("page", 1);
  }
});
