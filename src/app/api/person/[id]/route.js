import { NextResponse } from "next/server";
import { connectMongo } from "@/lib/connectMongo";
import Grave from "@/models/Person";

export async function GET(request, { params }) {
  try {
    await connectMongo();
    const person = await Grave.findById(params.id);
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
    const updatedPerson = await Grave.findByIdAndUpdate(params.id, body, {
      new: true,
    })
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
    await Grave.findByIdAndDelete(params.id);
    return NextResponse.json({ message: "Person deleted" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete person" },
      { status: 500 }
    );
  }
}
