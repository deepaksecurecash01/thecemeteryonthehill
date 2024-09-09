const HolderSchema = new Schema({
  DeceasedDetails: {
    Name: {
      type: String,
      required: true,
    },
    DateOfBirth: {
      type: Date,
      default: null,
    },
    DateOfDeath: {
      type: Date,
      default: null,
    },
    PlaceOfBirth: {
      type: String,
      default: "",
    },
    PlaceOfDeath: {
      type: String,
      default: "",
    },
  },
  InternmentDetails: {
    Description: {
      type: String,
      required: true,
    },
  },
  LeaseDetails: {
    LeaseNumber: {
      type: String,
      required: true,
    },
    PaymentAmount: {
      type: Number,
      required: true,
    },
    LeaseTerm: {
      type: String,
      required: true,
    },
    LeaseExpirationDate: {
      type: Date,
      required: true,
    },
  },
  Plot: {
    type: Schema.Types.ObjectId,
    ref: "Plot",
    required: true,
  },
});

const Holder = mongoose.model("Holder", HolderSchema);
