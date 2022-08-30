import Route from "@ember/routing/route";
import RSVP from "rsvp";

export default Route.extend({
  model({ report_id }) {
    return RSVP.hash({
      books: this.store.findAll("book"),
      speakers: this.store.findAll("speaker"),
      report: this.store.findRecord("report", report_id)
    });
  }
});
