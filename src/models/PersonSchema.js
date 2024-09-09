const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PersonSchema = new Schema({
  FullName: {
    type: String,
    required: true,
  },
  Biography: {
    type: String,
    default: "",
  },
  DateOfBirth: {
    type: Date,
    default: null,
  },
  DateOfDeath: {
    type: Date,
    default: null,
  },
  PlaceOfBirth: {
    type: String,
    default: "",
  },
  PlaceOfDeath: {
    type: String,
    default: "",
  },
  BaptismDate: {
    type: Date,
    default: null,
  },
  BaptismPlace: {
    type: String,
    default: "",
  },
  Celebrant: {
    type: String,
    default: "",
  },
  DeathCause: {
    type: String,
    default: "",
  },
  Spouse: [
    {
      type: Schema.Types.ObjectId,
      ref: "Person",
    },
  ],
  Children: [
    {
      type: Schema.Types.ObjectId,
      ref: "Person",
    },
  ],
});

const Person = mongoose.model("Person", PersonSchema);
