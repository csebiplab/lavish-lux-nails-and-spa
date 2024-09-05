import dbConnect from "@/lib/db.connect";
import testimonialRouteMetaData from "@/models/testimonialMetaDataFile";
import { NextResponse } from "next/server";



export async function PUT(request, { params }) {
  const { id } = params;
  const { title, description, keywords } = await request.json();
  await dbConnect();
  const testimonials = await testimonialRouteMetaData.findByIdAndUpdate(id, {
    title,
    description,
    keywords,
  });
  return NextResponse.json({ testimonials }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await dbConnect();
  const testimonials = await testimonialRouteMetaData.findOne({ _id: id });
  return NextResponse.json({ testimonials }, { status: 200 });
}
