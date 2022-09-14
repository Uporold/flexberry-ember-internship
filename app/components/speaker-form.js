import Component from "@ember/component";
import { validator, buildValidations } from "ember-cp-validations";
import { inject as service } from "@ember/service";

const Validations = buildValidations({
  name: [validator("presence", true)],
  surname: [validator("presence", true)],
  patronymic: [validator("presence", true)]
});

export default Component.extend(Validations, {
  i18n: service(),
  tagName: "",
  isInvalid: false,

  actions: {
    submitForm(e) {
      try {
        e.preventDefault();
        this.set("isInvalid", !this.get("validations.isValid"));
        if (this.get("validations.isValid")) {
          this.onsubmit({
            name: this.get("name"),
            surname: this.get("surname"),
            patronymic: this.get("patronymic")
          });
        }
      } catch (err) {
        const errorsLogger = this.get("errorsLogger");
        errorsLogger.sendError(err);
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
