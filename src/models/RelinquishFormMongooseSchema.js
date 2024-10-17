const { mongoose } = require("../config/db.js");

const LeaseSchema = {
  LeaseNumber: {
    type: String,
  },
  Payment: {
    type: Number,
  },
  PaymentDate: {
    type: String,
  },
  LeaseTerm: {
    type: Number,
  },
  Expiration: {
    type: String,
  },
  Name: {
    type: String,
  },
  Email: {
    type: String,
  },
  Mobile: {
    type: String,
  },
  Address: {
    type: String,
  },
  Suburb: {
    type: String,
  },
  State: {
    type: String,
  },
  Postcode: {
    type: String,
  },
  Country: {
    type: String,
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
};

const LeaseHistorySchema = {
  ...LeaseSchema, // Reuse Lease fields
  added_by: { type: String }, // Additional fields
  added_at: { type: Number },
};

const schema = new mongoose.Schema({
  PlotNumber: { type: String, required: true },
  Term: { type: Number, required: true },
  Type: { type: String, required: true },
  PlotCost: { type: Number, required: true },
  Status: {
    type: String,
    enum: ["Available", "Expired", "Interment - Heritage"],
  },
  Attachments: [
    {
      path: String,
      Description: String,
      Added_at: String,
      MIME: String,
    },
  ],
  IsAvailable: {
    type: Boolean,
    default: false,
  },

  Lease: { type: LeaseSchema }, // Make Lease optional
  LeaseHistory: [{ type: LeaseHistorySchema }], // Make LeaseHistory optional
});

module.exports = mongoose.model("Plot", schema);
