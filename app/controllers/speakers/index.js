import Controller from "@ember/controller";
import { inject as service } from "@ember/service";

export default Controller.extend({
  speakersService: service("speakers"),

  actions: {
    async deleteSpeaker(id) {
      try {
        await this.get("speakersService").deleteSpeakerById(id);
        this.send("refreshModel");
      } catch (err) {
        this.send("error", new Error("Connection failed"));
      }
    }
  }
});
