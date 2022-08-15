import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default Route.extend({
  booksService: service("books"),

  model({ id }) {
    return this.get("booksService").getBookById(id);
  }
});
