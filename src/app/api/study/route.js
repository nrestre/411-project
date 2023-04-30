import { NextResponse } from "next/server";

import db from "@/lib/db";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (!id) {
    return NextResponse.json({ error: "Missing id" }, { status: 400 });
  }
  const location = await db.study.findUnique({
    where: {
      id: Number(id),
    },
  });
  return NextResponse.json(location);
}

export async function POST(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (!id) {
    return NextResponse.json({ error: "Missing id" }, { status: 400 });
  }
  const { crowdLevel, noiseLevel } = await request.json();
  if (!crowdLevel && !noiseLevel) {
    return NextResponse.json(
      { error: "Missing crowdLevel and noiseLevel" },
      { status: 400 }
    );
  }
  const location = await db.study.findUnique({
    where: {
      id: Number(id),
    },
  });
  const updatedLocation = await db.study.update({
    where: {
      id: Number(id),
    },
    data: {
      crowd_level: (location.crowd_level + crowdLevel) / 2,
      noise_level: (location.noise_level + noiseLevel) / 2,
    },
  });
  return NextResponse.json(updatedLocation);
}
