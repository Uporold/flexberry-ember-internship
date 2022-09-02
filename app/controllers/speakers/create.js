import Controller from "@ember/controller";
import { inject as service } from "@ember/service";

export default Controller.extend({
  currentUser: service(),

  actions: {
    async saveSpeaker() {
      const speaker = {
        name: this.get("name"),
        surname: this.get("surname"),
        patronymic: this.get("patronymic"),
        user: this.get("currentUser.user")
      };
      const newSpeaker = this.store.createRecord("speaker", speaker);
      await newSpeaker.save();

      this.transitionToRoute("speakers.index");
    }
  },

  reset() {
    this.set("name", "");
    this.set("surname", "");
    this.set("patronymic", "");
    this.set("user", "");
  }
});
