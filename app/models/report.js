import DS from "ember-data";

export default DS.Model.extend({
  meetingDate: DS.attr("date-string"),
  bookRating: DS.attr("number"),
  presentationUrl: DS.attr("string"),
  videoUrl: DS.attr("string"),
  review: DS.attr("string"),

  speaker: DS.belongsTo("speaker"),
  book: DS.belongsTo("book"),
  meeting: DS.belongsTo("meeting")
});
