import Controller from "@ember/controller";

export default Controller.extend({
  queryParams: ["search", "tags_like"],
  search: "",
  tags_like: "",

  actions: {
    async deleteBook(bookModel) {
      try {
        await bookModel.destroyRecord();
        bookModel.unloadRecord();
      } catch (err) {
        const errorsLogger = this.get("errorsLogger");
        errorsLogger.sendError(err);
      }
    },

    async loadBooksByQueryParams(e) {
      try {
        e.preventDefault();
        this.set("isLoading", true);
        const data = await this.store.query("book", {
          search: this.search,
          tags_like: this.tags_like
        });
        this.set("model", data);
        this.set("isLoading", false);
      } catch (err) {
        const errorsLogger = this.get("errorsLogger");
        errorsLogger.sendError(err);
      }
    }
  },

  resetSearch() {
    this.set("search", "");
    this.set("tags_like", "");
  }
});
