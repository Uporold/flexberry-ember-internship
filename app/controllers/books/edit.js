import Controller from "@ember/controller";
import { inject as service } from "@ember/service";

export default Controller.extend({
  booksService: service("books"),
  currentUser: service(),

  actions: {
    async saveBook(bookData, uploadData) {
      const bookModel = this.get("model");
      this.set("isUploadingFile", true);
      bookModel.setProperties(bookData);
      await bookModel.save();
      if (uploadData) {
        await this.get("booksService").saveBookImage(+bookData.id, uploadData);
      }
      this.set("isUploadingFile", false);
      this.transitionToRoute("books.index");
    }
  },

  reset() {
    this.set("isUploadingFile", false);
  }
});
