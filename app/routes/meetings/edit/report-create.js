import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";
import RSVP from "rsvp";

export default Route.extend({
  can: service(),

  beforeModel() {
    if (this.can.cannot("create report")) {
      return this.transitionTo("meetings");
    }
  },

  async model({ id }) {
    const meeting = await this.store.findRecord("meeting", id);
    const isCanEnter = await this.can.can("manipulate meeting", meeting);
    if (!isCanEnter) {
      return this.transitionTo("meetings");
    }
    return RSVP.hash({
      books: this.store.findAll("book"),
      speakers: this.store.findAll("speaker"),
      meeting
    });
  }
});
