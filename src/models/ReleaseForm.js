import mongoose from "mongoose";
import ReturnAshesDetails from "./ReturnAshesDetails";

const ReleaseFormSchema = new mongoose.Schema({
  FullName: {
    type: String,
    required: [true, "Full Name is required."],
    match: [/^\S+\s\S+$/, "Name must include both first and last name."],
  },
  Email: {
    type: String,
    required: [true, "Email is required."],
    validate: {
      validator: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
      message: "Please enter a valid email address.",
    },
  },
  NameOfDeceased: {
    type: String,
    required: [true, "Name of Deceased is required."],
    match: [/^\S+\s\S+$/, "Name must include both first and last name."],
  },
  DateOfBirth: {
    type: Number, // Unix Timestamp
    required: [true, "Date of Birth is required."],
    validate: {
      validator: function (v) {
        return v <= Math.floor(Date.now()); // Compare with current Unix timestamp
      },
      message: "Date of Birth must be in the past or today.",
    },
  },
  DateOfDeath: {
    type: Number, // Unix Timestamp
    required: [true, "Date of Death is required."],
    validate: {
      validator: function (v) {
        return v <= Math.floor(Date.now()); // Compare with current Unix timestamp
      },
      message: "Date of Death must be in the past or today.",
    },
  },
  PlotNumber: {
    type: String,
    default: null,
  },
  InternmentType: {
    type: String,
    enum: ["Ashes", "Burial"],
    required: [true, "Internment Type is required."],
  },
  Attachments: {
    Id: {
      type: String,
      required: [true, "ID attachment is required."],
    },
    Signature: {
      type: String,
      required: [true, "Signature attachment is required."],
    },
  },
  Status: {
    type: String,
    enum: ["Pending", "Approved", "Rejected"],
    default: "Pending", // Set default value to "Pending"
    required: [true, "Status is required."],
  },
  Comments: {
    type: String,
  },
  ReturnAshes: {
    type: Boolean,
    required: [true, "Returned status is required."],
  },
  ReturnAshesDetails: {
    type: ReturnAshesDetails,
    required: function () {
      return this.ReturnAshes; // Include if Returned is true
    },
  },
  Created_At: {
    type: Number, // Unix Timestamp
    required: [true, "Creation timestamp is required."],
  },
  Updated_At: {
    type: Number, // Unix Timestamp
    required: [true, "Update timestamp is required."],
  },
  Updated_By: {
    type: String,
    required: [true, "Updater information is required."],
  },
});

// Custom validation to ensure DateOfDeath is after DateOfBirth
ReleaseFormSchema.pre("validate", function (next) {
  if (
    this.DateOfBirth &&
    this.DateOfDeath &&
    this.DateOfBirth >= this.DateOfDeath
  ) {
    this.invalidate(
      "DateOfDeath",
      "Date of Death must be after Date of Birth."
    );
  }
  next();
});

export default mongoose.models.ReleaseForm ||
  mongoose.model("ReleaseForm", ReleaseFormSchema);
