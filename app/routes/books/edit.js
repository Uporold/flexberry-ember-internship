import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default Route.extend({
  can: service(),

  resetController(controller) {
    controller.reset();
  },

  async model({ id }) {
    const book = await this.store.findRecord("book", id);

    const isCanEnter = await this.can.can("manipulate book", book);
    if (!isCanEnter) {
      return this.transitionTo("books");
    }

    return book;
  }
});
