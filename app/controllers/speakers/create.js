import Controller from "@ember/controller";
import { inject as service } from "@ember/service";

export default Controller.extend({
  speakersService: service("speakers"),

  actions: {
    async saveSpeaker() {
      const speaker = {
        name: this.get("name"),
        surname: this.get("surname"),
        patronymic: this.get("patronymic")
      };
      await this.get("speakersService").createSpeaker(speaker);
      this.transitionToRoute("speakers.index");
    }
  },

  reset() {
    this.set("name", "");
    this.set("surname", "");
    this.set("patronymic", "");
  }
});
