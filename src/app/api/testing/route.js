import { NextResponse, NextRequest } from "next/server";

export async function GET(req)
{
  const reqUrl = req.url;
  return NextResponse.json({
    message: 'Hello from the API',
    req: reqUrl,
  })
}