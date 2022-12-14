import Controller from "@ember/controller";
import { inject as service } from "@ember/service";

export default Controller.extend({
  currentUser: service(),

  actions: {
    async deleteReport(reportModel) {
      try {
        await reportModel.destroyRecord();
        reportModel.unloadRecord();
      } catch (err) {
        const errorsLogger = this.get("errorsLogger");
        errorsLogger.sendError(err);
      }
    },

    async saveMeeting(e) {
      try {
        e.preventDefault();
        const meetingModel = this.get("model");
        const meeting = {
          date: this.get("date")
        };
        let isDateChanged =
          this.get("model.date").getTime() !== this.get("date").getTime();
        if (isDateChanged) {
          meetingModel.setProperties(meeting);

          meetingModel.reports.forEach(async reportModel => {
            reportModel.set("meetingDate", meeting.date);
            await reportModel.save();
          });

          await meetingModel.save();
        }
        this.transitionToRoute("meetings");
      } catch (err) {
        const errorsLogger = this.get("errorsLogger");
        errorsLogger.sendError(err);
      }
    },

    changeDateAction(date) {
      this.set("date", date);
    }
  }
});
