import mongoose from "mongoose";

const RenewFormSchema = new mongoose.Schema({
  FullName: {
    type: String,
    required: [true, "Full Name is required."],
    validate: {
      validator: function (v) {
        return /^[A-Za-z]+\s[A-Za-z\s]+$/.test(v); // Ensures full name contains only letters and spaces, with at least two words
      },
      message:
        "Name must only contain letters and spaces, and must include both first and last name.",
    },
  },
  Email: {
    type: String,
    required: [true, "Email is required."],
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      "Please enter a valid email address.",
    ],
  },
  MobileNumber: {
    type: String,
    required: [true, "Phone Number is required."],
    match: [/^[0-9]+$/, "Phone Number must contain only digits."],
  },
  NameOfDeceased: {
    type: String,
    required: [true, "Name of Deceased is required."],
    validate: {
      validator: function (v) {
        return /^[A-Za-z]+\s[A-Za-z\s]+$/.test(v); // Ensures full name contains only letters and spaces, with at least two words
      },
      message:
        "Name must only contain letters and spaces, and must include both first and last name.",
    },
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
  PreferredContactMethod: {
    type: String,
    enum: ["Email", "Phone"],
    required: [true, "Preferred Contact Method is required."],
  },
  PreferredContactDate: {
    type: Number, // Unix Timestamp
    required: [true, "Date of Birth is required."],
    validate: {
      validator: function (v) {
        return v >= Math.floor(Date.now()); // Compare with current Unix timestamp
      },
      message: "Preferred Contact Date must be in the future or today.",
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
RenewFormSchema.pre("validate", function (next) {
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

const RenewForm =
  mongoose.models.RenewForm || mongoose.model("RenewForm", RenewFormSchema);
export default RenewForm;
