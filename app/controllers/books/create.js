import Controller from "@ember/controller";
import { inject as service } from "@ember/service";

export default Controller.extend({
  booksService: service("books"),
  currentUser: service(),

  actions: {
    async saveBook(bookData, uploadData) {
      this.set("isUploadingFile", true);
      const book = {
        name: bookData.name,
        author: bookData.author,
        pagesCount: bookData.pagesCount,
        descriptionUrl: bookData.descriptionUrl,
        coverUrl: bookData.coverUrl,
        tags: bookData.tags,
        user: this.get("currentUser.user")
      };
      const newBook = this.store.createRecord("book", book);
      const data = await newBook.save();
      if (uploadData) {
        await this.get("booksService").saveBookImage(+data.id, uploadData);
      }
      this.set("isUploadingFile", false);
      this.transitionToRoute("books.index");
    }
  },

  reset() {
    this.set("isUploadingFile", false);
    this.set("user", "");
  }
});
