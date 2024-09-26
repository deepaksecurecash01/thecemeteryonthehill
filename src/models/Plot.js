import mongoose from "mongoose";

const plotSchema = new mongoose.Schema({
  PlotNumber: { type: String, required: true, unique: true },
  Section: { type: String, required: true },
  PlotStatus: {
    type: String,
    enum: ["Available", "Occupied", "Reserved", "Expired"],
    default: "Available",
  },
  Occupants: [{ type: mongoose.Schema.Types.ObjectId, ref: "Person" }], // Array of references to Person model
  ExpirationDate: { type: Date },
  Price: {
    PlotPrice: { type: Number, required: true },
    InternmentRights: { type: Number, required: true },
    PreparationForInitialInterments: { type: Number, required: true },
    OngoingMaintenanceFeePerYear: { type: Number, required: true },
    Plaque: { type: Number, required: true },
  },
  Notes: { type: String },
});

const Plot = mongoose.models.Plot || mongoose.model("Plot", plotSchema);
export default Plot;
