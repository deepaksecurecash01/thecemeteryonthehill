import mongoose from "mongoose";

const schema = new mongoose.Schema({
  FullName: {
    type: String,
    required: true,
  },
  NameOfDeceased: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  DateOfBirth: {
    type: String,
    required: true,
  },
  DateOfDeath: {
    type: String,
    required: true,
  },
  PlotRow: {
    type: String,
    required: true,
  },
  PlotNumber: {
    type: String,
    required: true,
  },
  InternmentType: {
    type: String,
    enum: ["Ashes", "Burial"],
    required: true,
  },
  Signature: {
    type: String,
    required: true,
  },
  Attachments: {
    type: String,
  },
  Status: {
    type: String,
    enum: ["Approved", "Rejected"],
  },
  Comments: {
    type: String,
    validate: {
      validator: (value) => Tools.validator_check(value, "Inline"),
    },
  },
  Created_At: {
    type: Number, // unix Timestamp
    required: true,
  },
  Updated_At: {
    type: Number, // unix Timestamp
    required: true,
  },
  Updated_By: String,
});

module.exports = mongoose.model("Plot_Releases", schema);
