import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default Route.extend({
  speakersService: service("speakers"),

  model() {
    return this.get("speakersService").getSpeakers();
  },

  actions: {
    refreshModel() {
      this.refresh();
    }
  }
});
