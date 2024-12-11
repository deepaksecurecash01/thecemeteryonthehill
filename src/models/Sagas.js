const schema = new mongoose.Schema({
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

module.exports = mongoose.model("Saga", schema);
