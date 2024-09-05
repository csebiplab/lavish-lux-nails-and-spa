import dbConnect from "@/lib/db.connect";
import siteMap from "@/models/siteMap";
import { NextResponse } from "next/server";


export async function POST(request) {
  const { title, url } = await request.json();
  await dbConnect();
  await siteMap.create({ title, url });
  return NextResponse.json(
    { message: "Site map url is generated" },
    { status: 201 }
  );
}

export async function GET() {
  await dbConnect();
  const sitemap = await siteMap.find();
  return NextResponse.json({ sitemap });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await dbConnect();
  await siteMap.findByIdAndDelete(id);
  return NextResponse.json(
    { message: "Sitemap url data is deleted" },
    { status: 200 }
  );
}
