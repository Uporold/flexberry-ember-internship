import Controller from "@ember/controller";
import { debounce } from "@ember/runloop";

export default Controller.extend({
  queryParams: ["search"],
  search: "",

  async _loadSpeakersByQueryParams() {
    try {
      this.set("isLoading", true);
      const data = await this.store.query("speaker", { search: this.search });
      this.set("model", data);
      this.set("isLoading", false);
    } catch (err) {
      const errorsLogger = this.get("errorsLogger");
      errorsLogger.sendError(err);
    }
  },

  actions: {
    async deleteSpeaker(speakerModel) {
      try {
        await speakerModel.destroyRecord();
        speakerModel.unloadRecord();
      } catch (err) {
        const errorsLogger = this.get("errorsLogger");
        errorsLogger.sendError(err);
      }
    },

    loadSpeakersByQueryParamsWithDebounce() {
      debounce(this, this._loadSpeakersByQueryParams, 1500);
    }
  },

  resetSearch() {
    this.set("search", "");
  }
});
