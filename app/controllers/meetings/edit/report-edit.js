import Controller from "@ember/controller";
import { getAverageBookRating } from "../../../utils/utils";

export default Controller.extend({
  init() {
    this._super(...arguments);
  },

  actions: {
    async saveReport() {
      const reportModel = this.get("model.report");
      const report = {
        bookRating: this.get("model.report.bookRating"),
        presentationUrl: this.get("model.report.presentationUrl"),
        videoUrl: this.get("model.report.videoUrl"),
        review: this.get("model.report.review"),
        book: this.get("model.report.book"),
        speaker: this.get("model.report.speaker")
      };

      let isRatingChanged = !!reportModel.changedAttributes().bookRating;

      reportModel.setProperties(report);
      await reportModel.save();

      if (isRatingChanged) {
        const books = this.get("model.books");
        const reports = this.get("model.report.book.reports");
        const bookModel = books.findBy("id", this.get("model.report.book.id"));
        let rating = getAverageBookRating(reports);
        bookModel.set("rating", rating);
        await bookModel.save();
      }
      this.transitionToRoute(
        "meetings.edit/index",
        this.get("model.report.meeting.id")
      );
    }
  }
});
