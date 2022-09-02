import Controller from "@ember/controller";

export default Controller.extend({
  queryParams: ["search"],
  search: "",

  actions: {
    async deleteSpeaker(speakerModel) {
      await speakerModel.destroyRecord();
      speakerModel.unloadRecord();
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
