import Service from "@ember/service";
import ENV from "flexberry-ember-internship/config/environment";

export default Service.extend({
  async saveBookImage(bookId, uploadData) {
    return new Promise(async (resolve, reject) => {
      uploadData.url = `${ENV.fileUploadURL}`;
      uploadData
        .submit()
        .done(async result => {
          try {
            const dataToUpload = {
              entityName: "books",
              id: bookId,
              fileName: result.filename
            };

            await fetch(`${ENV.backendURL}/saveURL`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(dataToUpload)
            });

            resolve();
          } catch (e) {
            reject(e);
          }
        })
        .fail((jqXhr, textStatus, errorThrown) => {
          reject(errorThrown);
        });
    });
  }
});
