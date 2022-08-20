import Service from "@ember/service";
import ENV from "flexberry-ember-internship/config/environment";
import { getQuery } from "../utils/utils";

export default Service.extend({
  async getSpeakers(search) {
    const queryParams = getQuery(search);
    return fetch(`${ENV.backendURL}/speakers${queryParams}`).then(response =>
      response.json()
    );
  },

  async getSpeakerById(id) {
    return fetch(`${ENV.backendURL}/speakers/${id}`).then(response =>
      response.json()
    );
  },

  async deleteSpeakerById(id) {
    return fetch(`${ENV.backendURL}/speakers/${id}`, { method: "DELETE" });
  },

  async createSpeaker(speaker) {
    return fetch(`${ENV.backendURL}/speakers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(speaker)
    });
  },

  async updateSpeaker(speaker) {
    return fetch(`${ENV.backendURL}/speakers/${speaker.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(speaker)
    });
  }
});
