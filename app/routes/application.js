import Route from "@ember/routing/route";

export default Route.extend({
  actions: {
    error(error, transition) {
      let notFound =
        error &&
        error.httpErrorResponse &&
        error.httpErrorResponse.status === 404;
      if (transition) {
        transition.abort();
      }
      if (notFound) {
        this.intermediateTransitionTo("404", { path: "404" });
      } else {
        this.intermediateTransitionTo("error", { error: error.message });
      }
    }
  }
});
