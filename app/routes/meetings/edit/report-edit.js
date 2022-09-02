import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";
import RSVP from "rsvp";

export default Route.extend({
  can: service(),

  async model({ report_id }) {
    const report = await this.store.findRecord("report", report_id);
    const isCanEnter = await this.can.can("manipulate report", report);
    if (!isCanEnter) {
      return this.transitionTo("meetings");
    }
    return RSVP.hash({
      books: this.store.findAll("book"),
      speakers: this.store.findAll("speaker"),
      report
    });
  }
});
