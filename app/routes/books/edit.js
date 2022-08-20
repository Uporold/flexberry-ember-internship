import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default Route.extend({
  booksService: service("books"),

  resetController(controller) {
    controller.reset();
  },

  model({ id }) {
    return this.store.findRecord("book", id);
  }
});
