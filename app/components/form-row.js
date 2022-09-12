import Component from "@ember/component";

export default Component.extend({
  classNames: ["form-group", "row"],

  didInsertElement() {
    if (this.element.querySelector(".is-valid")) {
      this.element.querySelector(".is-valid").classList.remove("is-valid");
    }
    if (this.element.querySelector(".is-invalid")) {
      this.element.querySelector(".is-invalid").classList.remove("is-invalid");
    }
  },

  didRender() {
    this._super(...arguments);
    const customSelector = this.element.querySelector(
      ".ember-basic-dropdown-trigger"
    );
    if (customSelector) {
      customSelector.classList.add("form-row-style");
    }
  }
});
