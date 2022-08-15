import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default Route.extend({
  booksService: service("books"),

  resetController(controller) {
    controller.reset();
  },

  model({ id }) {
    return this.get("booksService").getBookById(id);
  },

  // Временное решение
  afterModel(book) {
    if (Object.keys(book).length === 0) {
      return new Promise(() => {
        this.intermediateTransitionTo("404", { path: "404" });
      });
    }
  }
});
