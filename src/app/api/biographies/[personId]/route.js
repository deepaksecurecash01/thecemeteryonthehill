// app/api/Saga/[personId]/route.js
import { connectMongo } from "@/lib/connectMongo";
import Saga from "@/models/Saga";
import { NextResponse } from "next/server"; // Use Next.js's built-in Response object

export async function GET(request, { params }) {
  try {
    const { personId } = params;

    if (!personId) {
      return NextResponse.json(
        { error: "personId parameter is required" },
        { status: 400 }
      );
    }

    await connectMongo();

    const biography = await Saga.findOne({ URL: personId });

    if (!biography) {
      return NextResponse.json(
        { error: "Biography not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(biography);
  } catch (error) {
    console.error("Error fetching biography:", error);
    return NextResponse.json(
      { error: "Failed to fetch biography" },
      { status: 500 }
    );
  }
}
