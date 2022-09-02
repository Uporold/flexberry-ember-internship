import Route from "@ember/routing/route";

export default Route.extend({
  model({ search }) {
    return this.store.query("speaker", { search });
  },

  resetController(controller) {
    controller.resetSearch();
  }
});
