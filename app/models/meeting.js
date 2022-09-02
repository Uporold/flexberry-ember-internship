import DS from "ember-data";

export default DS.Model.extend({
  date: DS.attr("date"),

  user: DS.belongsTo("user"),
  reports: DS.hasMany("report")
});
