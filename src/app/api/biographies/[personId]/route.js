// app/api/biography/[personId]/route.js
import { connectMongo } from "@/lib/connectMongo";
import Biography from "@/models/Biography";
import { NextResponse } from "next/server"; // Use Next.js's built-in Response object

export async function GET(req, { params }) {
  try {
    await connectMongo();
    const { personId } = params;

    const biographies = await Biography.find({ person: personId }).populate(
      "person"
    );
    if (biographies.length === 0) {
      return NextResponse.json(
        { error: "No biographies found for this person" },
        { status: 404 }
      );
    }

  return new Response(JSON.stringify(biographies), { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// PUT (Update) biography by ID
export async function PUT(req, { params }) {
  try {
    await connectMongo();
    const { id } = params;
    const { person, date, biographyData } = await req.json();

    const updatedBiography = await Biography.findByIdAndUpdate(
      id,
      { person, date, biographyData },
      { new: true }
    );

    if (!updatedBiography)
      return NextResponse.json({ error: "Not Found" }, { status: 404 });

    return NextResponse.json(updatedBiography, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// DELETE biography by ID
export async function DELETE(req, { params }) {
  try {
    await connectMongo();
    const { id } = params;

    const result = await Biography.findByIdAndDelete(id);
    if (!result)
      return NextResponse.json({ error: "Not Found" }, { status: 404 });

    return NextResponse.json({ message: "Biography deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
