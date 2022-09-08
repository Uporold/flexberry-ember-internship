import DS from "ember-data";
import { computed } from "@ember/object";
import { validator, buildValidations } from "ember-cp-validations";

export const Validations = buildValidations({
  name: [validator("presence", true)],
  surname: [validator("presence", true)],
  patronymic: [validator("presence", true)]
});

export default DS.Model.extend(Validations, {
  name: DS.attr("string"),
  surname: DS.attr("string"),
  patronymic: DS.attr("string"),

  fullname: computed("name", "surname", "patronymic", function() {
    return `${this.surname} ${this.name} ${this.patronymic}`;
  }),

  user: DS.belongsTo("user"),
  reports: DS.hasMany("report")
});
