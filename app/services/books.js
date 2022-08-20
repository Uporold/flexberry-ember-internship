import Service from "@ember/service";
import ENV from "flexberry-ember-internship/config/environment";
import { getQuery } from "../utils/utils";

export default Service.extend({
  _executeBookUploadRequest(book, uploadData, method) {
    return new Promise(async (resolve, reject) => {
      try {
        const savedBookPromise = await fetch(
          `${ENV.backendURL}/books${method === "PATCH" ? `/${book.id}` : ""}`,
          {
            method,
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(book)
          }
        );

        const savedBook = await savedBookPromise.json();

        if (!uploadData) {
          resolve();
        }

        uploadData.url = `${ENV.fileUploadURL}`;
        uploadData
          .submit()
          .done(async result => {
            try {
              const dataToUpload = {
                entityName: "books",
                id: savedBook.id,
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
      } catch (e) {
        reject(e);
      }
    });
  },

  async getBooks(search, tags_like) {
    const queryParams = getQuery(search, tags_like);
    return fetch(`${ENV.backendURL}/books${queryParams}`).then(response =>
      response.json()
    );
  },

  async createBook(book, uploadData) {
    await this._executeBookUploadRequest(book, uploadData, "POST");
  },

  async getBookById(id) {
    return fetch(`${ENV.backendURL}/books/${id}`).then(response =>
      response.json()
    );
  },

  async deleteBookById(id) {
    return fetch(`${ENV.backendURL}/books/${id}`, { method: "DELETE" });
  },

  async updateBook(book, uploadData) {
    await this._executeBookUploadRequest(book, uploadData, "PATCH");
  }
});
