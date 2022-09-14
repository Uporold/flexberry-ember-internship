import Controller from "@ember/controller";
import { inject as service } from "@ember/service";

export default Controller.extend({
  currentUser: service(),

  actions: {
    async saveMeeting(e) {
      try {
        e.preventDefault();
        const meeting = {
          date: this.get("date"),
          user: this.get("currentUser.user")
        };
        const newMeeting = this.store.createRecord("meeting", meeting);
        const data = await newMeeting.save();
        this.transitionToRoute("meetings.edit/index", data.id);
      } catch (err) {
        const errorsLogger = this.get("errorsLogger");
        errorsLogger.sendError(err);
      }
    }
  },

  reset() {
    this.set("date", "");
    this.set("user", "");
  }
});
