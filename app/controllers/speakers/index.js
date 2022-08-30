import Controller from "@ember/controller";
import { inject as service } from "@ember/service";

export default Controller.extend({
  speakersService: service("speakers"),

  queryParams: ["search"],
  search: "",

  actions: {
    async deleteSpeaker(speakerModel) {
      await speakerModel.destroyRecord();
    },

    async loadSpeakersByQueryParams(e) {
      e.preventDefault();
      this.set("isLoading", true);
      const data = await this.store.query("speaker", { search: this.search });
      this.set("model", data);
      this.set("isLoading", false);
    }
  },

  resetSearch() {
    this.set("search", "");
  }
});
