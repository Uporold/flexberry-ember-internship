import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default Route.extend({
  booksService: service("books"),

  model({ search, tags_like }) {
    return this.store.query("book", { search, tags_like });
  },

  resetController(controller) {
    controller.resetSearch();
  }
});
