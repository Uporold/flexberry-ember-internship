import Controller from "@ember/controller";
import ENV from "flexberry-ember-internship/config/environment";
import { inject as service } from "@ember/service";

export default Controller.extend({
  session: service(),
  currentUser: service(),
  i18n: service(),

  locales: Object.freeze(["ru", "en"]),

  init() {
    this._super(...arguments);
    this.set(
      "currentLocale",
      localStorage.getItem("locale") || ENV.i18n.defaultLocale
    );
    this.set("i18n.locale", this.get("currentLocale"));
  },

  actions: {
    async logout(e) {
      e.preventDefault();

      this.session.invalidate();
    },

    changeLocale(locale) {
      localStorage.setItem("locale", locale);
      this.set("currentLocale", locale);
      this.set("i18n.locale", this.get("currentLocale"));
    }
  }
});
