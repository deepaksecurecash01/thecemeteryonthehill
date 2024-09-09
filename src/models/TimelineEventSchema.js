const TimelineEventSchema = new Schema({
  EventDate: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
});

const TimelineEvent = mongoose.model("TimelineEvent", TimelineEventSchema);
