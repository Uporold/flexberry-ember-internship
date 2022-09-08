import Controller from "@ember/controller";
import ENV from "flexberry-ember-internship/config/environment";
import { validator, buildValidations } from "ember-cp-validations";

const Validations = buildValidations({
  email: [
    validator("presence", true),
    validator("format", { type: "email" }),
    validator("ds-error")
  ],
  username: [validator("presence", true)],
  password: [
    validator("presence", true),
    validator("length", {
      min: 4,
      max: 8
    }),
    validator("length", {
      isWarning: true,
      min: 6,
      message: "Password is weak"
    })
  ],
  passwordConfirmation: [
    validator("presence", true),
    validator("confirmation", { on: "password" })
  ]
});

export default Controller.extend(Validations, {
  iAmRobot: true,
  resetCaptcha: false,

  actions: {
    async saveUser() {
      let newUser;
      try {
        const user = {
          email: this.get("email"),
          username: this.get("username"),
          password: this.get("password"),
          passwordConfirmation: this.get("passwordConfirmation")
        };
        newUser = this.store.createRecord("user", user);
        await newUser.save();

        this.transitionToRoute("index");
      } catch (e) {
        e.user = newUser;
        this.send("error", e);
      }
    },

    error(error, transition) {
      this.set("errors", error.user.errors);
      return false;
    },

    resetDSDataErrors() {
      if (this.get("errors")) {
        this.resetErrors();
      }
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
    },

    async verified(key) {
      try {
        const { success } = await (await fetch(
          `${ENV.backendURL}/recaptcha?key=${key}`
        )).json();

        this.set("iAmRobot", !success);
      } catch (error) {
        this.set("resetCaptcha", true);
      }
    },

    expired() {
      this.set("iAmRobot", true);
    }
  },

  resetErrors() {
    this.set("errors", {});
  },

  reset() {
    this.set("email", "");
    this.set("username", "");
    this.set("password", "");
    this.set("passwordConfirmation", "");
  }
});
