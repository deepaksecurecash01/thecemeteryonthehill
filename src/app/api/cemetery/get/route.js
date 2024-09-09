import { db } from "@/lib/db";
import Cemetery from "@/models/Cemetery";

export async function GET() {
  try {
    await db();

    const cemeteryData = await Cemetery.find({}); // Fetch all cemetery data

    return new Response(JSON.stringify(cemeteryData), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Failed to fetch data", error: error.message }),
      { status: 500 }
    );
  }
}
