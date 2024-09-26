const mongoose = require("mongoose");
const { Schema } = mongoose;

// Person Schema
const personSchema = new Schema(
  {
    FirstName: {
      type: String,
      required: true,
      trim: true,
      note: "First name of the person",
    },
    LastName: {
      type: String,
      required: true,
      trim: true,
      note: "Last name of the person",
    },
    BirthDate: { type: Date, note: "Date of birth" },
    DeathDate: { type: Date, note: "Date of death" },
    BirthPlace: { type: String, note: "Place of birth" },
    DeathPlace: { type: String, note: "Place of death" },
    Occupation: { type: String, note: "Occupation of the person" },
    Notes: { type: String, note: "Additional notes about the person" },
  },
  { timestamps: true }
);

// Plot Schema
const plotSchema = new Schema(
  {
    PlotNumber: {
      type: String,
      required: true,
      unique: true,
      note: "Unique identifier for each plot",
    },
    Section: {
      type: String,
      required: true,
      note: "Section where the plot is located",
    },
    PlotStatus: {
      type: String,
      enum: ["Available", "Occupied", "Reserved", "Expired"],
      default: "Available",
      note: "Current status of the plot",
    },
    Occupant: {
      type: Schema.Types.ObjectId,
      ref: "Person",
      note: "Reference to the person buried in the plot",
    },
    ExpirationDate: { type: Date, note: "Date when the plot's rights expire" },
    PriceId: {
      type: Schema.Types.ObjectId,
      ref: "Price",
      note: "Reference to the pricing information",
    },
    Notes: { type: String, note: "Additional notes about the plot" },
  },
  { timestamps: true }
);

// Timeline Event Schema
const timelineEventSchema = new Schema(
  {
    EventDate: { type: Date, required: true, note: "Date of the event" },
    EventType: {
      type: String,
      enum: ["Birth", "Death", "Interment", "Other"],
      required: true,
      note: "Type of the event",
    },
    Description: {
      type: String,
      required: true,
      note: "Description of the event",
    },
    AssociatedPerson: {
      type: Schema.Types.ObjectId,
      ref: "Person",
      note: "Reference to the person associated with the event",
    },
  },
  { timestamps: true }
);

// Price Schema
const priceSchema = new Schema(
  {
    PlotPrice: { type: Number, required: true, note: "Price of the plot" },
    InternmentRights100Years: {
      type: Number,
      required: true,
      note: "Fee for 100 years internment rights",
    },
    PreparationForInitialInterments: {
      type: Number,
      required: true,
      note: "Fee for initial preparation of interments",
    },
    OngoingMaintenanceFeePerYear: {
      type: Number,
      required: true,
      note: "Yearly maintenance fee",
    },
    Plaque: { type: Number, note: "Fee for installing a plaque" },
  },
  { timestamps: true }
);

// Exporting the models
const Person = mongoose.model("Person", personSchema);
const Plot = mongoose.model("Plot", plotSchema);
const TimelineEvent = mongoose.model("TimelineEvent", timelineEventSchema);
const Price = mongoose.model("Price", priceSchema);

module.exports = { Person, Plot, TimelineEvent, Price };
