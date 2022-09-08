import Controller from "@ember/controller";
import { getAverageBookRating } from "../../../utils/utils";

export default Controller.extend({
  actions: {
    async saveReport(reportData) {
      const reportModel = this.get("model.report");
      const report = {
        bookRating: reportData.bookRating,
        presentationUrl: reportData.presentationUrl,
        videoUrl: reportData.videoUrl,
        review: reportData.review,
        book: reportData.book,
        speaker: reportData.speaker
      };

      let isRatingChanged =
        this.get("model.report.bookRating") !== reportData.bookRating;
      let isBookChanged = this.get("model.report.book") !== reportData.book;

      reportModel.setProperties(report);
      await reportModel.save();

      if (isRatingChanged || isBookChanged) {
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
