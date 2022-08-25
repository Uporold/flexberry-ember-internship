import DS from "ember-data";

export default DS.Model.extend({
  name: DS.attr("string"),
  author: DS.attr("string"),
  pagesCount: DS.attr("number"),
  descriptionUrl: DS.attr("string"),
  coverUrl: DS.attr("string"),
  tags: DS.attr(),
  rating: DS.attr("number"),

  reports: DS.hasMany("report")
});
