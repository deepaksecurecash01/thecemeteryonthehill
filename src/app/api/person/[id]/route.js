import { NextResponse } from "next/server";
import { connectMongo } from "@/lib/connectMongo";
import Person from "@/models/Person";

export async function GET(request, { params }) {
  try {
    await connectMongo();
    const person = await Person.findById(params.id);
    if (!person)
      return NextResponse.json({ error: "Person not found" }, { status: 404 });
    return NextResponse.json(person);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch person" },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params }) {
  try {
    await connectMongo();
    const body = await request.json();
    const updatedPerson = await Person.findByIdAndUpdate(params.id, body, {
      new: true,
    }).populate("biographies");
    return NextResponse.json(updatedPerson);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update person" },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    await connectMongo();
    await Person.findByIdAndDelete(params.id);
    return NextResponse.json({ message: "Person deleted" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete person" },
      { status: 500 }
    );
  }
}
