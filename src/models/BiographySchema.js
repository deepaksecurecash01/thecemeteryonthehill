const BiographySchema = new Schema({
  PersonId: {
    type: Schema.Types.ObjectId,
    ref: "Person",
    required: true,
  },
  Content: {
    type: String,
    required: true,
  },
  EntryDate: {
    type: Date,
    default: Date.now,
  },
  Events: [
    {
      type: Schema.Types.ObjectId,
      ref: "TimelineEvent",
    },
  ],
});

const Biography = mongoose.model("Biography", BiographySchema);
