import Route from "@ember/routing/route";
import RSVP from "rsvp";

export default Route.extend({
  model({ id }) {
    return RSVP.hash({
      books: this.store.findAll("book"),
      speakers: this.store.findAll("speaker"),
      meeting: this.store.findRecord("meeting", id)
    });
  },

  resetController(controller) {
    controller.reset();
  }
});
