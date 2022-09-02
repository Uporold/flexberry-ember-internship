import Controller from "@ember/controller";
import { getAverageBookRating } from "../../../utils/utils";
import { inject as service } from "@ember/service";

export default Controller.extend({
  currentUser: service(),

  actions: {
    async saveReport() {
      const report = {
        meetingDate: this.get("model.meeting.date"),
        bookRating: this.get("bookRating"),
        presentationUrl: this.get("presentationUrl"),
        videoUrl: this.get("videoUrl"),
        review: this.get("review"),
        book: this.get("book"),
        speaker: this.get("speaker"),
        meeting: this.get("model.meeting"),
        user: this.get("currentUser.user")
      };
      const newReport = this.store.createRecord("report", report);

      await newReport.save();

      const reports = this.get("book.reports");
      const rating = getAverageBookRating(reports);
      this.set("book.rating", rating);
      await report.book.save();

      this.transitionToRoute(
        "meetings.edit/index",
        this.get("model.meeting.id")
      );
    }
  },

  reset() {
    this.set("bookRating", "");
    this.set("presentationUrl", "");
    this.set("videoUrl", "");
    this.set("review", "");
    this.set("book", "");
    this.set("speaker", "");
    this.set("meeting", "");
    this.set("user", "");
  }
});
