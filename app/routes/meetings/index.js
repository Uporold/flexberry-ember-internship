import Route from "@ember/routing/route";
import RSVP from "rsvp";
import { PER_PAGE } from "../../controllers/meetings";

export default Route.extend({
  queryParams: {
    page: {
      refreshModel: true
    }
  },

  model({ speaker, date, book, page }) {
    const query = {
      meetingsQueries: {
        _page: page,
        _limit: PER_PAGE,
        speaker,
        date,
        book
      }
    };
    return RSVP.hash({
      books: this.store.findAll("book"),
      speakers: this.store.findAll("speaker"),
      meetings: this.store.query("meeting", query)
    });
  },

  actions: {
    refreshModel() {
      this.refresh();
    }
  },

  resetController(controller) {
    controller.reset();
  }
});
