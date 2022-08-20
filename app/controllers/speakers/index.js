import Controller from "@ember/controller";
import { inject as service } from "@ember/service";

export default Controller.extend({
  speakersService: service("speakers"),

  queryParams: ["search"],
  search: "",

  actions: {
    async deleteSpeaker(id) {
      try {
        await this.get("speakersService").deleteSpeakerById(id);
        this.send("refreshModel");
      } catch (err) {
        this.send("error", new Error("Connection failed"));
      }
    },

    async loadSpeakersByQueryParams(e) {
      e.preventDefault();
      this.set("isLoading", true);
      const data = await this.get("speakersService").getSpeakers(this.search);
      this.set("model", data);
      this.set("isLoading", false);
    }
  },

  resetSearch() {
    this.set("search", "");
  }
});
