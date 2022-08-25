import DS from "ember-data";
import { computed } from "@ember/object";

export default DS.Model.extend({
  name: DS.attr("string"),
  surname: DS.attr("string"),
  patronymic: DS.attr("string"),

  fullname: computed("name", "surname", "patronymic", function() {
    return `${this.surname} ${this.name} ${this.patronymic}`;
  }),

  reports: DS.hasMany("report")
});
