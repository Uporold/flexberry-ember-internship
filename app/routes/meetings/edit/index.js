import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default Route.extend({
  can: service(),

  async model({ meeting_id }) {
    const meeting = await this.store.findRecord("meeting", meeting_id);
    const isCanEnter = await this.can.can("manipulate meeting", meeting);
    if (!isCanEnter) {
      return this.transitionTo("meetings");
    }
    return meeting;
  },

  setupController(controller) {
    this._super(...arguments);
    controller.set("date", controller.get("model.date"));
  }
});
