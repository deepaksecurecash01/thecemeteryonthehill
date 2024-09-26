import { connectMongo } from "@/lib/connectMongo";
import Plot from "@/models/Plot";

export default async function handler(req, res) {
  const { method } = req;
  await connectMongo();

  switch (method) {
    case "GET":
      try {
        const plot = await Plot.findById(req.query.id).populate(
          "Occupants"
        );
        if (!plot) {
          return res.status(404).json({ message: "Plot not found" });
        }
        res.status(200).json(plot);
      } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
      }
      break;

    case "PUT":
      try {
        const {
          PlotNumber,
          Section,
          PlotStatus,
          Occupants,
          ExpirationDate,
          Price,
          Notes,
        } = req.body;

        const plot = await Plot.findByIdAndUpdate(
          req.query.id,
          {
            PlotNumber,
            Section,
            PlotStatus,
            Occupants,
            ExpirationDate,
            Price,
            Notes,
          },
          { new: true } // Return the updated document
        ).populate("Occupants", "FirstName LastName");

        if (!plot) {
          return res.status(404).json({ message: "Plot not found" });
        }
        res.status(200).json(plot);
      } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
      }
      break;

    case "DELETE":
      try {
        const plot = await Plot.findByIdAndDelete(req.query.id);
        if (!plot) {
          return res.status(404).json({ message: "Plot not found" });
        }
        res.status(204).end(); // No content to return after deletion
      } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
      }
      break;

    // Handle other methods (POST) if needed
  }
}
