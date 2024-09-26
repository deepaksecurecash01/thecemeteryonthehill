// app/api/biography/route.js
import { connectMongo } from "@/lib/connectMongo";
import Biography from "@/models/Biography";

export async function GET() {
  await connectMongo();
  const biographies = await Biography.find().populate("person");
  return new Response(JSON.stringify(biographies), { status: 200 });
}

export async function POST(request) {
  const { person, date, biographyData } = await request.json();
  await connectMongo();

  const newBiography = new Biography({
    person,
    date,
    biographyData,
  });

  await newBiography.save();
  return new Response(JSON.stringify(newBiography), { status: 201 });
}
