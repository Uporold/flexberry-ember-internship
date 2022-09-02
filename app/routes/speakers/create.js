import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default Route.extend({
  can: service(),

  beforeModel() {
    if (this.can.cannot("create speaker")) {
      return this.transitionTo("speakers");
    }
  },
  resetController(controller) {
    controller.reset();
  }
});
