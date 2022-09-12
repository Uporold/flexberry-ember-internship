import DS from "ember-data";
import { validator, buildValidations } from "ember-cp-validations";

export const Validations = buildValidations({
  name: [validator("presence", true)],
  author: [validator("presence", true)],
  pagesCount: [
    validator("presence", true),
    validator("number", {
      allowString: true,
      integer: true,
      gt: 1
    })
  ],
  descriptionUrl: [
    validator("presence", true),
    validator("format", {
      type: "url"
    })
  ]
});

export default DS.Model.extend(Validations, {
  name: DS.attr("string"),
  author: DS.attr("string"),
  pagesCount: DS.attr("number"),
  descriptionUrl: DS.attr("string"),
  coverUrl: DS.attr("string"),
  tags: DS.attr(),
  rating: DS.attr("number"),

  user: DS.belongsTo("user"),
  reports: DS.hasMany("report")
});
