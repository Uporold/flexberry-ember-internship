import Component from "@ember/component";
import ENV from "flexberry-ember-internship/config/environment";
import { Validations } from "../models/book";

export default Component.extend(Validations, {
  tagName: "",
  isInvalid: false,

  actions: {
    submitForm(e) {
      e.preventDefault();
      this.set("isInvalid", !this.get("validations.isValid"));
      if (this.get("validations.isValid")) {
        this.onsubmit(
          {
            id: this.get("id"),
            name: this.get("name"),
            author: this.get("author"),
            pagesCount: this.get("pagesCount"),
            descriptionUrl: this.get("descriptionUrl"),
            coverUrl: this.get("coverUrl")
              ? this.get("coverUrl")
              : `${ENV.rootURL}images/book-cover.jpg`,
            tags: this.get("tags")
          },
          this.get("uploadData")
        );
      }
    },

    changeTags(newTags) {
      this.set("tags", [...newTags]);
    },

    changeUploadData(uploadData) {
      this.set("uploadData", uploadData);
    }
  },

  didReceiveAttrs() {
    this.setProperties({
      id: this.get("book.id"),
      name: this.get("book.name"),
      author: this.get("book.author"),
      pagesCount: this.get("book.pagesCount"),
      descriptionUrl: this.get("book.descriptionUrl"),
      coverUrl: this.get("book.coverUrl"),
      uploadData: this.get("book.uploadData"),
      tags: this.get("book.tags") ? this.get("book.tags") : []
    });
  }
});
