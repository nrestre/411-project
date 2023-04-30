import { NextResponse } from "next/server";

import db from "@/lib/db";

export async function GET() {
  const locations = await db.study.findMany();
  return NextResponse.json(locations);
}
