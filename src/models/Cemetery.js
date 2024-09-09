const mongoose = require("mongoose");

// Deceased Schema
const DeceasedSchema = new mongoose.Schema({
  Last_Name: { type: String, required: true },
  First_Name: { type: String, required: true },
  Maiden_Name: { type: String, default: "" },
  Gender: { type: String, required: true, enum: ["Male", "Female", "Other"] },
  Birthdate: { type: Date, required: true },
  Birthplace: { type: String, required: true },
  Baptism_Date: { type: Date },
  Baptism_Place: { type: String },
  Address: { type: String, required: true },
});

// Internment Schema
const InternmentSchema = new mongoose.Schema({
  Type: { type: String, required: true, enum: ["Grave", "Ashes", "Other"] },
  Date: { type: Date, required: true },
  Plot_Number: { type: String, required: true },
  GPS: { type: String },
  Celebrant: { type: String, default: "" },
  Death_Date: { type: Date, required: true },
  Date_Place: { type: String, required: true },
  Cause_of_Death: { type: String, required: true },
  Age_of_Death: { type: Number, required: true, min: 0 },
  Status: {
    type: String,
    enum: ["internment-current", "internment-completed"], // Enum values for Internment Status
    required: true,
  },
});

// Lease Schema
const LeaseSchema = new mongoose.Schema({
  Number: { type: String, required: true, unique: true },
  Payment: { type: String, required: true },
  Payment_Date: { type: Date, required: true },
  Term_Years: { type: Number, required: true, min: 1 },
  Expiration: { type: Date, required: true },
  Name: { type: String, required: true },
  Email: { type: String, required: true, match: /.+\@.+\..+/ },
  Mobile: { type: String, required: true, match: /^[0-9\-\+]{9,15}$/ },
  Address: { type: String, required: true },
});

// Prices Schema
const PricesSchema = new mongoose.Schema({
  plot_Price: { type: Number, required: true, min: 0 },
  Internment_Rights_100_Years: { type: Number, required: true, min: 0 },
  Preparation_for_initial_Interments: { type: Number, required: true, min: 0 },
  Ongoing_maintenance_Fee_per_year: { type: Number, required: true, min: 0 },
  Plaque: { type: Number, required: true, min: 0 },
});

// Holder Schema (which combines Deceased, Internment, and Lease)
const HolderSchema = new mongoose.Schema({
  Deceased: { type: DeceasedSchema, required: true },
  Internment: { type: InternmentSchema, required: true },
  Lease: { type: LeaseSchema, required: true },
});

// Plot Schema
const PlotSchema = new mongoose.Schema(
  {
    Plot_Number: { type: String, required: true, unique: true },
    Status: {
      type: String,
      enum: ["available", "assigned", "expired"], // Enum values for Status
      required: true,
    },
    
    prices: { type: PricesSchema, required: true },
    Holders: { type: [HolderSchema], default: [] }, // Multiple holders can be associated with a plot
  },
  { timestamps: true }
);

// Normal Plots & Ashes Sections Schema
const SectionSchema = new mongoose.Schema({
  A: { type: [PlotSchema], default: [] },
  B: { type: [PlotSchema], default: [] },
  C: { type: [PlotSchema], default: [] },
  D: { type: [PlotSchema], default: [] },
  E: { type: [PlotSchema], default: [] },
  F: { type: [PlotSchema], default: [] },
  G: { type: [PlotSchema], default: [] },
  H: { type: [PlotSchema], default: [] },
  I: { type: [PlotSchema], default: [] },
  J: { type: [PlotSchema], default: [] },
  K: { type: [PlotSchema], default: [] },
  L: { type: [PlotSchema], default: [] },
  M: { type: [PlotSchema], default: [] },
  N: { type: [PlotSchema], default: [] },
  O: { type: [PlotSchema], default: [] },
  P: { type: [PlotSchema], default: [] },
});

// Main Cemetery Schema
const CemeterySchema = new mongoose.Schema(
  {
    NormalPlots: { type: SectionSchema, required: true },
    AshesSections: {
      SandStoneAshesBed: { type: [PlotSchema], default: [] },
      NewAshesBed: { type: [PlotSchema], default: [] },
      HistoricAshesBed: { type: [PlotSchema], default: [] },
      RoseGardenBed: { type: [PlotSchema], default: [] },
      AshesWall1: { type: [PlotSchema], default: [] },
      AshesWall2: { type: [PlotSchema], default: [] },
      FrontFence: { type: [PlotSchema], default: [] },
    },
  },
  { timestamps: true }
);

// Indexes for better query performance
CemeterySchema.index({ "NormalPlots.A.Plot_Number": 1 });
CemeterySchema.index({ "AshesSections.SandStoneAshesBed.Plot_Number": 1 });

const Cemetery = mongoose.models.Cemetery || mongoose.model("Cemetery", CemeterySchema);

module.exports = Cemetery;
