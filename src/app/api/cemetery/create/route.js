import { db } from "@/lib/db";
import Cemetery from "@/models/Cemetery"; // Assuming you exported the Cemetery model

export async function POST(request) {
  try {
    await db();

    const data = await request.json(); // Parse incoming JSON body
    const newCemetery = new Cemetery(data);

    await newCemetery.save();

    return new Response(
      JSON.stringify({ message: "Data created successfully!" }),
      { status: 201 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: "Failed to create data",
        error: error.message,
      }),
      { status: 500 }
    );
  }
}
