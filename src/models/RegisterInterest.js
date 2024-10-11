import mongoose from "mongoose";

const RegisterInterestSchema = new mongoose.Schema({
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
  PlotNumber: {
    type: String,
    required: [true, "Plot number is required."],
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

const Interest =
  mongoose.models.Plot_Interest ||
  mongoose.model("Plot_Interest", RegisterInterestSchema);
export default Interest;
