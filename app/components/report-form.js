import Component from "@ember/component";
import { Validations } from "../models/report";

export default Component.extend(Validations, {
  tagName: "",
  isInvalid: false,

  actions: {
    submitForm(e) {
      e.preventDefault();
      this.set("isInvalid", !this.get("validations.isValid"));
      if (this.get("validations.isValid")) {
        this.onsubmit({
          bookRating: this.get("bookRating"),
          presentationUrl: this.get("presentationUrl"),
          videoUrl: this.get("videoUrl"),
          review: this.get("review"),
          book: this.get("book"),
          speaker: this.get("speaker")
        });
      }
    }
  },

  didReceiveAttrs() {
    this.setProperties({
      bookRating: this.get("modelCopy.report.bookRating"),
      presentationUrl: this.get("modelCopy.report.presentationUrl"),
      videoUrl: this.get("modelCopy.report.videoUrl"),
      review: this.get("modelCopy.report.review"),
      books: this.get("modelCopy.books"),
      book: this.get("modelCopy.report.book"),
      speakers: this.get("modelCopy.speakers"),
      speaker: this.get("modelCopy.report.speaker"),
      meetingId:
        this.get("modelCopy.report.meeting.id") ||
        this.get("modelCopy.meeting.id")
    });
  }
});
