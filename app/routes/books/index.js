import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default Route.extend({
  booksService: service("books"),

  model() {
    return this.get("booksService").getBooks();
  },

  actions: {
    refreshModel() {
      this.refresh();
    }
  }
});
