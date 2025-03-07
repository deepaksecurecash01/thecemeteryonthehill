import { NextResponse } from "next/server";
import Grave from "@/models/Person";
import { connectMongo } from "@/lib/connectMongo";

export async function GET() {
  try {
    await connectMongo();
    const people = await Grave.find();
    return NextResponse.json(people);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    await connectMongo();
    const body = await request.json();
    const newPerson = new Grave(body);
    const savedPerson = await newPerson.save();
    return NextResponse.json(savedPerson, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
