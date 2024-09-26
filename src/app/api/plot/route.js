import { connectMongo } from "@/lib/connectMongo";
import Plot from "@/models/Plot";

export async function GET(req) {
  await connectMongo();

  try {
    const plots = await Plot.find().populate("Occupants");
    return new Response(JSON.stringify(plots), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Server error", error: error.message }),
      { status: 500 }
    );
  }
}

export async function POST(req) {
  await connectMongo();

  try {
    const {
      PlotNumber,
      Section,
      PlotStatus,
      Occupants, // Array of occupant IDs
      ExpirationDate,
      Price, // Pricing details
      Notes,
    } = await req.json();

    const plot = new Plot({
      PlotNumber,
      Section,
      PlotStatus,
      Occupants,
      ExpirationDate,
      Price,
      Notes,
    });

    await plot.save();
    return new Response(JSON.stringify(plot), { status: 201 });
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Server error", error: error.message }),
      { status: 500 }
    );
  }
}

// Add handlers for PUT and DELETE methods if needed
