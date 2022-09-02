import Controller from "@ember/controller";
import { inject as service } from "@ember/service";

export default Controller.extend({
  booksService: service("books"),
  currentUser: service(),

  actions: {
    async saveBook() {
      const uploadData = this.get("uploadData");
      const bookModel = this.get("model");
      this.set("isUploadingFile", true);
      const book = {
        id: this.get("model.id"),
        name: this.get("model.name"),
        author: this.get("model.author"),
        pagesCount: this.get("model.pagesCount"),
        descriptionUrl: this.get("model.descriptionUrl"),
        coverUrl: this.get("model.coverUrl"),
        tags: this.get("model.tags")
      };
      bookModel.setProperties(book);
      await bookModel.save();
      if (uploadData) {
        await this.get("booksService").saveBookImage(+book.id, uploadData);
      }
      this.set("isUploadingFile", false);
      this.transitionToRoute("books.index");
    },

    changeTags(newTags) {
      this.set("model.tags", [...newTags]);
    },

    changeUploadData(uploadData) {
      this.set("uploadData", uploadData);
    }
  },

  reset() {
    this.set("uploadData", null);
    this.set("isUploadingFile", false);
  }
});
