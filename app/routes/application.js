import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";
import ApplicationRouteMixin from "ember-simple-auth/mixins/application-route-mixin";

export default Route.extend(ApplicationRouteMixin, {
  session: service(),
  currentUser: service(),

  beforeModel() {
    this._super(...arguments);

    this.loadUser();
  },

  sessionAuthenticated() {
    this._super(...arguments);

    this.loadUser();
  },

  sessionInvalidated() {
    this.currentUser.resetCurrentUser();

    window.location.replace("/login");
  },

  loadUser() {
    if (this.session.isAuthenticated) {
      this.currentUser.load();
    }
  },

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
    },

    willTransition(transition) {
      transition.then(() => {
        if (
          transition.targetName !== "register" &&
          transition.targetName !== "login"
        ) {
          localStorage["lastVisitedRoute"] = transition.targetName;
          localStorage["lastVisitedRouteQueryId"] =
            Object.values(transition.params[transition.targetName]) || null;
        }
      });
    }
  }
});
