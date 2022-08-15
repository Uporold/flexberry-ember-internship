import Controller from "@ember/controller";
import { inject as service } from "@ember/service";

export default Controller.extend({
  booksService: service("books"),

  actions: {
    async deleteBook(id) {
      try {
        await this.get("booksService").deleteBookById(id);
        this.send("refreshModel");
      } catch (err) {
        this.send("error", new Error("Connection failed"));
      }
    }
  }
});
