import { db } from "@/lib/db";
import { NextResponse, NextRequest } from "next/server";

export async function GET(req)
{
  await db()
  const reqUrl = req.url;
  return NextResponse.json({
    message: 'Hello from the API',
    req: reqUrl,
  })
}