import Route from "@ember/routing/route";

export default Route.extend({
  model({ search, tags_like }) {
    return this.store.query("book", { search, tags_like });
  },

  resetController(controller) {
    controller.resetSearch();
  }
});
