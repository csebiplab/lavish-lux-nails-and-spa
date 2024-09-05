import dbConnect from "@/lib/db.connect";
import contactRouteMetaData from "@/models/contactMetaDataFile";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { title, description, keywords } = await request.json();
  await dbConnect();
  const contactUs = await contactRouteMetaData.findByIdAndUpdate(id, {
    title,
    description,
    keywords,
  });
  return NextResponse.json({ contactUs }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await dbConnect();
  const contactUs = await contactRouteMetaData.findOne({ _id: id });
  return NextResponse.json({ contactUs }, { status: 200 });
}
