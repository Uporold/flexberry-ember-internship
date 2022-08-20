import Component from "@ember/component";
import { computed } from "@ember/object";

export default Component.extend({
  classNames: ["col-sm-10", "input-group", "input-group-lg"],
  isFileChosen: computed("uploadData", function() {
    return this.get("uploadData") && this.get("uploadData").files.length;
  }),

  ifRemoveButtonDisabled: computed("isFileChosen", function() {
    return !this.get("isFileChosen");
  }),

  fileName: computed("isFileChosen", function() {
    return this.get("isFileChosen")
      ? this.get("uploadData").files[0].name
      : "Выберите файл";
  }),

  didInsertElement() {
    this._super(...arguments);

    const onFileAdd = (e, uploadData) => {
      this.set("uploadData", uploadData);
    };

    if (!this.$(".custom-file-input").fileupload("instance")) {
      // Initialize jQuery fileupload plugin (https://github.com/blueimp/jQuery-File-Upload/wiki/API).
      this.$(".custom-file-input").fileupload({
        // Disable autoUpload.
        autoUpload: false,

        // Type of data that is expected back from the server.
        dataType: "json",

        // Maximum number of files to be selected and uploaded.
        maxNumberOfFiles: 1,

        // Enable single file uploads.
        singleFileUploads: true,

        // Disable drag&drop file adding.
        dropZone: null,

        // File add handler.
        add: onFileAdd
      });
    }
  },

  willDestroyElement() {
    this._super(...arguments);
    if (this.$(".custom-file-input").fileupload("instance")) {
      this.$(".custom-file-input").fileupload("destroy");
    }
  },

  actions: {
    removeFile() {
      this.set("uploadData", null);
    }
  }
});
