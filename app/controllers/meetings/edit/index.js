import Controller from "@ember/controller";

export default Controller.extend({
  actions: {
    async deleteReport(reportModel) {
      await reportModel.destroyRecord();
      reportModel.unloadRecord();
    },

    async saveMeeting(e) {
      e.preventDefault();
      const meetingModel = this.get("model");
      const meeting = {
        date: this.get("model.date")
      };
      let isDateChanged = !!meetingModel.changedAttributes().date;
      if (isDateChanged) {
        meetingModel.setProperties(meeting);

        meetingModel.reports.forEach(async reportModel => {
          reportModel.set("meetingDate", meeting.date);
          await reportModel.save();
        });

        await meetingModel.save();
      }
      this.transitionToRoute("meetings");
    }
  }
});
