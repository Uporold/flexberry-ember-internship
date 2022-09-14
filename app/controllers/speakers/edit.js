import Controller from "@ember/controller";
import { inject as service } from "@ember/service";

export default Controller.extend({
  currentUser: service(),

  actions: {
    async saveSpeaker(speakerData) {
      try {
        const speakerModel = this.get("model");
        const speaker = {
          name: speakerData.name,
          surname: speakerData.surname,
          patronymic: speakerData.patronymic
        };
        speakerModel.setProperties(speaker);
        await speakerModel.save();
        this.transitionToRoute("speakers.index");
      } catch (err) {
        const errorsLogger = this.get("errorsLogger");
        errorsLogger.sendError(err);
      }
    }
  }
});
