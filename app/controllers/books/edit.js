import Controller from "@ember/controller";
import { inject as service } from "@ember/service";

export default Controller.extend({
  booksService: service("books"),

  actions: {
    async saveBook() {
      const book = {
        id: this.get("model.id"),
        name: this.get("model.name"),
        author: this.get("model.author"),
        pagesCount: this.get("model.pagesCount"),
        descriptionUrl: this.get("model.descriptionUrl"),
        coverUrl: this.get("model.coverUrl"),
        tags: this.get("model.tags")
      };
      await this.get("booksService").updateBook(book);
      this.transitionToRoute("books.index");
    },

    changeTags(newTags) {
      this.set("model.tags", [...newTags]);
    }
  }
});
