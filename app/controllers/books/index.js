import Controller from "@ember/controller";
import { inject as service } from "@ember/service";

export default Controller.extend({
  booksService: service("books"),

  queryParams: ["search", "tags_like"],
  search: "",
  tags_like: "",

  actions: {
    async deleteBook(bookModel) {
      await bookModel.destroyRecord();
    },

    async loadBooksByQueryParams(e) {
      e.preventDefault();
      this.set("isLoading", true);
      const data = await this.store.query("book", {
        search: this.search,
        tags_like: this.tags_like
      });
      this.set("model", data);
      this.set("isLoading", false);
    }
  },

  resetSearch() {
    this.set("search", "");
    this.set("tags_like", "");
  }
});
