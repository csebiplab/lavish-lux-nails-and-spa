import dbConnect from "@/lib/db.connect";
import homeRouteMetaData from "@/models/homeMetaDataFile";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { title, description, keywords } = await request.json();
  await dbConnect();
  const home = await homeRouteMetaData.findByIdAndUpdate(id, {
    title,
    description,
    keywords,
  });
  return NextResponse.json({ home }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await dbConnect();
  const home = await homeRouteMetaData.findOne({ _id: id });
  return NextResponse.json({ home }, { status: 200 });
}
