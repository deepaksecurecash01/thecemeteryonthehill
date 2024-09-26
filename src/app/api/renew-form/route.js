import { NextResponse } from "next/server";
import { connectMongo } from "@/lib/connectMongo";
import RenewForm from "@/models/Renew";

// Handler for POST requests (form submission)
export async function POST(req) {
  try {
    await connectMongo();
    const formData = await req.json();
    console.log(formData);

 
    // Create a new RenewForm entry
    const newRenewForm = new RenewForm({
      ...formData,
      Created_At: Math.floor(Date.now() / 1000),
      Updated_At: Math.floor(Date.now() / 1000),
      Updated_By: "System",
    });

    // Save the new entry to the database
    await newRenewForm.save();

    return NextResponse.json(
      { message: "Form submitted successfully!" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error submitting form:", error);
    return NextResponse.json(
      { error: "Failed to submit form, please try again." },
      { status: 500 }
    );
  }
}

// Handler for GET requests (fetch all entries)
export async function GET() {
  try {
    await connectMongo();

    // Retrieve all entries from the RenewForm collection
    const renewFormEntries = await RenewForm.find();

    return NextResponse.json(renewFormEntries, { status: 200 });
  } catch (error) {
    console.error("Error fetching entries:", error);
    return NextResponse.json(
      { error: "Failed to fetch entries, please try again." },
      { status: 500 }
    );
  }
}
