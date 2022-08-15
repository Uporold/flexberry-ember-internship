import Service from "@ember/service";
import ENV from "flexberry-ember-internship/config/environment";

export default Service.extend({
  async getBooks() {
    return fetch(`${ENV.backendURL}/books`).then(response => response.json());
  },

  async createBook(book) {
    return fetch(`${ENV.backendURL}/books`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(book)
    });
  },

  async getBookById(id) {
    return fetch(`${ENV.backendURL}/books/${id}`).then(response =>
      response.json()
    );
  },

  async deleteBookById(id) {
    return fetch(`${ENV.backendURL}/books/${id}`, { method: "DELETE" });
  },

  async updateBook(book) {
    return fetch(`${ENV.backendURL}/books/${book.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(book)
    });
  }
});
