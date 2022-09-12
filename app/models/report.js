import DS from "ember-data";
import { validator, buildValidations } from "ember-cp-validations";

export const Validations = buildValidations({
  bookRating: [
    validator("presence", true),
    validator("number", {
      allowString: true,
      integer: true,
      gt: 0,
      lte: 100
    })
  ],

  presentationUrl: [
    validator("presence", true),
    validator("format", {
      type: "url"
    })
  ],
  videoUrl: [
    validator("presence", true),
    validator("format", {
      type: "url"
    })
  ],
  review: [
    validator("presence", true),
    validator("length", {
      min: 20,
      max: 200
    })
  ],
  book: [validator("belongs-to"), validator("presence", true)],
  speaker: [validator("belongs-to"), validator("presence", true)]
});

export default DS.Model.extend({
  meetingDate: DS.attr("date-string"),
  bookRating: DS.attr("number"),
  presentationUrl: DS.attr("string"),
  videoUrl: DS.attr("string"),
  review: DS.attr("string"),

  user: DS.belongsTo("user"),
  speaker: DS.belongsTo("speaker"),
  book: DS.belongsTo("book"),
  meeting: DS.belongsTo("meeting")
});
