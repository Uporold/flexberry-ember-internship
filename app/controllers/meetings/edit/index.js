import Controller from "@ember/controller";
import { inject as service } from "@ember/service";

export default Controller.extend({
  currentUser: service(),

  actions: {
    async deleteReport(reportModel) {
      await reportModel.destroyRecord();
      reportModel.unloadRecord();
    },

    async saveMeeting(e) {
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
    },

    changeDateAction(date) {
      this.set("date", date);
    }
  }
});
