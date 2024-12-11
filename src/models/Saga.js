import mongoose from "mongoose";

const biographySchema = new mongoose.Schema({
  Title: { type: String, required: true },
  Events: [
    {
      Date: { type: String, required: true },
      Description: { type: String, required: true },
    },
  ],
  URL: { type: String, required: true },
  Images: [String],
  Status: {
    type: String,
    required: true,
    enum: ["Active", "Archived"],
  },
  Archived: { type: Number },
  ArchivedBy: { type: String },
});

const Saga = mongoose.models.Saga || mongoose.model("Saga", biographySchema);
export default Saga;



