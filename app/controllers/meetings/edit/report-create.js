import Controller from "@ember/controller";
import { getAverageBookRating } from "../../../utils/utils";
import { inject as service } from "@ember/service";

export default Controller.extend({
  currentUser: service(),

  actions: {
    async saveReport(reportData) {
      const report = {
        meetingDate: this.get("model.meeting.date"),
        bookRating: reportData.bookRating,
        presentationUrl: reportData.presentationUrl,
        videoUrl: reportData.videoUrl,
        review: reportData.review,
        book: reportData.book,
        speaker: reportData.speaker,
        meeting: this.get("model.meeting"),
        user: this.get("currentUser.user")
      };
      const newReport = this.store.createRecord("report", report);

      await newReport.save();

      const reports = report.book.get("reports");
      const rating = getAverageBookRating(reports);
      report.book.set("rating", rating);
      await report.book.save();

      this.transitionToRoute(
        "meetings.edit/index",
        this.get("model.meeting.id")
      );
    }
  }
});
