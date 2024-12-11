// app/api/Saga/route.js
import { connectMongo } from "@/lib/connectMongo";
import Saga from "@/models/Saga";

export async function GET() {
  await connectMongo();
  const biographies = await Saga.find();
  return new Response(JSON.stringify(biographies), { status: 200 });
}

export async function POST(request) {
  const { person, date, SagaData } = await request.json();
  await connectMongo();

  const newSaga = new Saga({
    person,
    date,
    SagaData,
  });

  await newSaga.save();
  return new Response(JSON.stringify(newSaga), { status: 201 });
}
