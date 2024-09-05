import { NextResponse, NextRequest } from "next/server";
import BiographyData from "@/json/BiographyData";

export async function GET(req) {
  const reqUrl = req.url;
  return NextResponse.json(BiographyData);
}
