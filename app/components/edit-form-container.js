import Component from "@ember/component";

export default Component.extend({
  init() {
    this._super(...arguments);
    this.set(
      "titleTarget",
      this.get("targetName") ? this.get("targetName") : ""
    );
  },
  actions: {
    submitForm(e) {
      e.preventDefault();
      this.onsubmit();
    }
  }
});
