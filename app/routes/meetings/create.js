import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default Route.extend({
  can: service(),

  beforeModel() {
    if (this.can.cannot("create meeting")) {
      return this.transitionTo("meetings");
    }
  },

  resetController(controller) {
    controller.reset();
  }
});
