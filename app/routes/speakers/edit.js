import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default Route.extend({
  speakersService: service("speakers"),

  model({ id }) {
    return this.get("speakersService").getSpeakerById(id);
  },

  // Временное решение
  afterModel(speaker) {
    if (Object.keys(speaker).length === 0) {
      return new Promise(() => {
        this.intermediateTransitionTo("404", { path: "404" });
      });
    }
  }
});
