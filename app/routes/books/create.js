import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default Route.extend({
  can: service(),

  beforeModel() {
    if (this.can.cannot("create book")) {
      return this.transitionTo("books");
    }
  },

  setupController(controller) {
    this._super(...arguments);
    controller.set("tags", []);
  },

  resetController(controller) {
    controller.reset();
  }
});
