import DS from "ember-data";

export default DS.Model.extend({
  email: DS.attr("string"),
  username: DS.attr("string"),
  password: DS.attr(),
  passwordConfirmation: DS.attr(),

  isAdmin: DS.attr("boolean", { defaultValue: false })
});
