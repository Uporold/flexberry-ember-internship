import Controller from "@ember/controller";
import { computed } from "@ember/object";
import { inject as service } from "@ember/service";

export default Controller.extend({
  speakersService: service("speakers"),

  actions: {
    async saveSpeaker() {
      const speaker = {
        id: this.get("model.id"),
        name: this.get("model.name"),
        surname: this.get("model.surname"),
        patronymic: this.get("model.patronymic")
      };
      await this.get("speakersService").updateSpeaker(speaker);
      this.transitionToRoute("speakers.index");
    }
  },

  fullname: computed("model.{name,surname,patronymic}", function() {
    return `${this.get(
      "model.name"
    )} ${this.get("model.surname")} ${this.get("model.patronymic")}`;
  })
});
