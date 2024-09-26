import mongoose from "mongoose";

const biographySchema = new mongoose.Schema({
  person: {
       type: mongoose.Schema.Types.ObjectId,
    ref: "Person",
    required: true,
  },
  date: { type: Date, required: true },
  biographyData: [
    {
      year: { type: String, required: true },
      description: { type: String, required: true },
    },
  ],
});

const Biography =
  mongoose.models.Biography || mongoose.model("Biography", biographySchema);
export default Biography;
