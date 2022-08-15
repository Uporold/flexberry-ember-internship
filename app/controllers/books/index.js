import Controller from "@ember/controller";
import { inject as service } from "@ember/service";

export default Controller.extend({
  booksService: service("books"),

  queryParams: ["search", "tags_like"],
  search: "",
  tags_like: "",

  actions: {
    async deleteBook(id) {
      try {
        await this.get("booksService").deleteBookById(id);
        this.send("refreshModel");
      } catch (err) {
        this.send("error", new Error("Connection failed"));
      }
    },

    async loadBooksByQueryParams(e) {
      e.preventDefault();
      this.set("isLoading", true);
      const data = await this.get("booksService").getBooks(
        this.search,
        this.tags_like
      );
      this.set("model", data);
      this.set("isLoading", false);
    }
  },

  resetSearch() {
    this.set("search", "");
    this.set("tags_like", "");
  }
});
