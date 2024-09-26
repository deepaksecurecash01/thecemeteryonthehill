import mongoose from "mongoose";
import countries from "@/json/ListOfCountries.json"; // Import the list of countries from a JSON file

// Define the schema for the purchase form
const PurchaseFormSchema = new mongoose.Schema({
  FullName: {
    type: String,
    required: [true, "Full Name is required."],
    match: [/^\S+\s\S+$/, "Name must include both first and last name."],
  },
  Address: {
    type: String,
    required: [true, "Address is required."],
  },
  City: {
    type: String,
    required: [true, "Suburb is required."],
  },
  State: {
    type: String,
    required: [true, "State is required."],
  },
  PostalCode: {
    type: String,
    required: [true, "Post Code is required."],
    validate: {
      validator: function (v) {
        if (this.Country === "Australia") {
          return /^\d{4}$/.test(v); // Australian postal code must be 4 digits
        }
        return /^\d+$/.test(v); // For other countries, digits only
      },
      message: function () {
        return this.Country === "Australia"
          ? "Australian postal code must contain 4 digits."
          : "Invalid post code format for the selected country.";
      },
    },
  },
  Country: {
    type: String,
    enum: countries, // Use countries list from JSON
    required: [true, "Country is required."],
  },
  PhoneNumber: {
    type: String,
    required: [true, "Phone Number is required."],
    match: [/^[0-9]+$/, "Phone Number must contain only digits."],
  },
  Email: {
    type: String,
    required: [true, "Email is required."],
    validate: {
      validator: function (v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); // Simple email validation
      },
      message: "Please enter a valid email address.",
    },
  },
  PlotNumber: {
    type: String,
    required: [true, "Plot Number is required."],
  },
  Amount: {
    type: Number,
    required: [true, "Amount is required."],
    min: [0, "Amount must be a positive number."],
  },

  PaymentDetails: {
    AmountPaid: {
      type: Number,
      required: [true, "Amount Paid is required."],
      min: [0, "Amount Paid must be a positive number."],
    },
    Currency: {
      type: String,
      required: [true, "Currency is required."],
    },
    PaymentIntentId: {
      type: String,
      required: [true, "Payment Intent ID is required."],
    },
    PaymentMethodId: {
      type: String,
      required: [true, "Payment Method ID is required."],
    },
    
    PaymentStatus: {
      type: String,
      enum: [
        "succeeded",
        "pending",
        "failed",
        "canceled",
        "requires_payment_method",
      ],
      required: [true, "Payment status is required."],
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

// Pre-save hook to ensure amounts are positive
PurchaseFormSchema.pre("save", function (next) {
  if (this.Amount < 0) {
    this.invalidate("Amount", "Amount must be greater than zero.");
  }
  if (this.AmountPaid < 0) {
    this.invalidate("AmountPaid", "Amount Paid must be greater than zero.");
  }
  next();
});

export default mongoose.models.PurchaseForm ||
  mongoose.model("PurchaseForm", PurchaseFormSchema);
