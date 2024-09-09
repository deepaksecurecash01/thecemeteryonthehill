const plotSchema = new mongoose.Schema(
  {
    PlotNumber: {
      type: String,
      required: true,
      unique: true,
      description: "Unique identifier for each plot.",
    },
    Section: {
      type: String,
      required: true,
      description:
        "The section where the plot is located (e.g., Ashes Wall, New Ashes Bed).",
    },
    PlotStatus: {
      type: String,
      enum: ["Available", "Occupied", "Reserved", "Expired"],
      default: "Available",
      description: "Current status of the plot.",
    },
    Occupant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Person",
      description:
        "Reference to the person buried in the plot. Null if the plot is unoccupied.",
    },
    Prices: {
      PlotPrice: {
        type: Number,
        required: true,
        description: "Price of the plot itself.",
      },
      InternmentRights100Years: {
        type: Number,
        required: true,
        description: "Fee for interment rights for 100 years.",
      },
      PreparationForInitialInterments: {
        type: Number,
        required: true,
        description: "Fee for the initial preparation of the plot for burial.",
      },
      OngoingMaintenanceFeePerYear: {
        type: Number,
        required: true,
        description: "Annual maintenance fee for the plot upkeep.",
      },
      Plaque: {
        type: Number,
        required: false,
        description: "Optional cost for installing a plaque.",
      },
    },
    ExpirationDate: {
      type: Date,
      description: "Date when the plot's interment rights expire.",
    },
    Notes: {
      type: String,
      description: "Any additional notes regarding the plot.",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Plot", plotSchema);
