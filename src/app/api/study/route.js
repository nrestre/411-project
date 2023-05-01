import { NextResponse } from "next/server";

import db from "@/lib/db";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    const locations = await db.study.findMany();
    return NextResponse.json(locations);
  }

  const location = await db.study.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!location) {
    return NextResponse.json({ error: "Location not found" }, { status: 404 });
  }

  return NextResponse.json(location);
}

export async function POST(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  if (!id) {
    return NextResponse.json({ error: "Missing id" }, { status: 400 });
  }

  const { crowdLevel, noiseLevel } = await req.json();
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
  if (!location) {
    return NextResponse.json({ error: "Location not found" }, { status: 404 });
  }

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
