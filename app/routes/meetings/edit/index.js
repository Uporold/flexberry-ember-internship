import Route from "@ember/routing/route";

export default Route.extend({
  model({ meeting_id }) {
    const data = this.store.findRecord("meeting", meeting_id);
    return data;
  }
});
