import Component from "@ember/component";

export default Component.extend({
  classNames: ["form-group", "row"],

  didRender() {
    this._super(...arguments);
    const customSelector = this.element.querySelector(
      ".ember-basic-dropdown-trigger"
    );
    if (customSelector) {
      customSelector.classList.add("form-row-style");

      const selectedItem = customSelector.querySelector(
        ".ember-power-select-selected-item"
      );

      const selectArrow = customSelector.querySelector(
        ".ember-power-select-status-icon"
      );
      if (selectedItem && selectArrow) {
        selectedItem.style.marginLeft = "0";
        selectArrow.style.right = "10px";
      }
    }
  }
});
