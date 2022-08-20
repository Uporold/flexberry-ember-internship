import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default Route.extend({
  speakersService: service("speakers"),

  model({ search }) {
    return this.get("speakersService").getSpeakers(search);
  },

  resetController(controller) {
    controller.resetSearch();
  },

  actions: {
    refreshModel() {
      this.refresh();
    }
  }
});
