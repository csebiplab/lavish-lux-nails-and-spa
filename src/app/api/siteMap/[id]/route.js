import dbConnect from "@/lib/db.connect";
import siteMap from "@/models/siteMap";
import { NextResponse } from "next/server";



export async function PUT(request, { params }) {
  const { id } = params;
  const { title, url } = await request.json();
  await dbConnect();
  const sitemap = await siteMap.findByIdAndUpdate(id, {
    title,
    url,
  });
  return NextResponse.json({ sitemap }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await dbConnect();
  const siteMapData = await siteMap.findOne({ _id: id });
  return NextResponse.json({ siteMapData }, { status: 200 });
}
