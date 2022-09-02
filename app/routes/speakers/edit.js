import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default Route.extend({
  can: service(),

  async model({ id }) {
    const speaker = await this.store.findRecord("speaker", id);

    const isCanEnter = await this.can.can("manipulate speaker", speaker);
    if (!isCanEnter) {
      return this.transitionTo("speakers");
    }

    return speaker;
  }
});
