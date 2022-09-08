import Controller from "@ember/controller";
import { inject as service } from "@ember/service";
import { validator, buildValidations } from "ember-cp-validations";

const Validations = buildValidations({
  email: [
    validator("presence", true),
    validator("format", { type: "email" }),
    validator("ds-error")
  ],
  password: [validator("presence", true)]
});

export default Controller.extend(Validations, {
  session: service(),

  _saveEmailByCheckbox() {
    if (this.get("checkbox")) {
      localStorage["savedEmail"] = this.get("email");
    } else {
      localStorage["savedEmail"] = "";
    }
  },

  actions: {
    async login() {
      try {
        await this.get("session").authenticate("authenticator:jwt", {
          email: this.get("email"),
          password: this.get("password")
        });
        this._saveEmailByCheckbox();
      } catch (e) {
        this.send("error", e);
      }
    },

    error(error, transition) {
      if (error instanceof Error) {
        return true;
      }

      this.set("errors", error.json.errors);
      return false;
    },

    getBack(e) {
      e.preventDefault();
      const lastVisitedRoute = localStorage["lastVisitedRoute"] || "index";
      const lastVisitedRouteQueryId =
        localStorage["lastVisitedRouteQueryId"] || "";
      if (lastVisitedRouteQueryId) {
        this.transitionToRoute(lastVisitedRoute, lastVisitedRouteQueryId);
      } else {
        this.transitionToRoute(lastVisitedRoute);
      }
    }
  },

  resetErrors() {
    this.set("errors", {});
  },

  reset() {
    if (!this.get("checkbox")) {
      this.set("email", "");
    }
    this.set("password", "");
  }
});
