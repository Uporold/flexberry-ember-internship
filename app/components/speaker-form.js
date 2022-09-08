import Component from "@ember/component";
import { Validations } from "../models/speaker";

export default Component.extend(Validations, {
  tagName: "",
  isInvalid: false,

  actions: {
    submitForm(e) {
      e.preventDefault();
      this.set("isInvalid", !this.get("validations.isValid"));
      if (this.get("validations.isValid")) {
        this.onsubmit({
          name: this.get("name"),
          surname: this.get("surname"),
          patronymic: this.get("patronymic")
        });
      }
    }
  },

  didReceiveAttrs() {
    this.setProperties({
      name: this.get("speaker.name"),
      surname: this.get("speaker.surname"),
      patronymic: this.get("speaker.patronymic"),
      fullname: this.get("speaker.fullname")
    });
  }
});
