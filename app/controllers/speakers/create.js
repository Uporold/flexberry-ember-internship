import Controller from "@ember/controller";
import { inject as service } from "@ember/service";

export default Controller.extend({
  currentUser: service(),
  isInvalid: false,

  actions: {
    async saveSpeaker(speakerData) {
      const speaker = {
        name: speakerData.name,
        surname: speakerData.surname,
        patronymic: speakerData.patronymic,
        user: this.get("currentUser.user")
      };
      const newSpeaker = this.store.createRecord("speaker", speaker);
      await newSpeaker.save();

      this.transitionToRoute("speakers.index");
    }
  }
});
