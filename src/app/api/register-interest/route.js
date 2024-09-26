import { NextResponse } from "next/server";
import RegisterInterest from "@/models/RegisterInterest";
import { connectMongo } from "@/lib/connectMongo";

// POST request handler for form submission
export async function POST(req) {
  try {
    await connectMongo();

    // Parse the incoming request body
    const formData = await req.json();
    console.log(formData);
    // Create a new entry in the RegisterInterest collection
    const newEntry = new RegisterInterest({
      ...formData,
      Created_At: Math.floor(Date.now() / 1000),
      Updated_At: Math.floor(Date.now() / 1000),
      Updated_By: "System",
    });

    // Save to the database
    await newEntry.save();

    return NextResponse.json(
      { message: "Form submitted successfully!" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Form submission error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
