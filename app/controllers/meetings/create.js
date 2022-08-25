import Controller from "@ember/controller";

export default Controller.extend({
  actions: {
    async saveMeeting(e) {
      e.preventDefault();
      const meeting = {
        date: this.get("date")
      };
      const newMeeting = this.store.createRecord("meeting", meeting);
      const data = await newMeeting.save();
      this.transitionToRoute("meetings.edit/index", data.id);
    }
  },

  reset() {
    this.set("date", "");
  }
});
