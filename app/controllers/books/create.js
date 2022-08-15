import Controller from "@ember/controller";
import ENV from "flexberry-ember-internship/config/environment";
import { inject as service } from "@ember/service";

export default Controller.extend({
  booksService: service("books"),

  actions: {
    async saveBook() {
      const uploadData = this.get("uploadData");
      this.set("isUploadingFile", true);
      const book = {
        name: this.get("name"),
        author: this.get("author"),
        pagesCount: this.get("pagesCount"),
        descriptionUrl: this.get("descriptionUrl"),
        coverUrl: this.get("coverUrl")
          ? this.get("coverUrl")
          : `${ENV.rootURL}images/book-cover.jpg`,
        tags: this.get("tags")
      };
      await this.get("booksService").createBook(book, uploadData);
      this.set("isUploadingFile", false);
      this.transitionToRoute("books.index");
    },

    changeTags(newTags) {
      this.set("tags", [...newTags]);
    },

    changeUploadData(uploadData) {
      this.set("uploadData", uploadData);
    }
  },

  reset() {
    this.set("name", "");
    this.set("author", "");
    this.set("pagesCount", "");
    this.set("descriptionUrl", "");
    this.set("coverUrl", "");
    this.set("tags", []);
    this.set("uploadData", null);
    this.set("isUploadingFile", false);
  }
});
