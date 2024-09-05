import dbConnect from "@/lib/db.connect";
import testimonialRouteMetaData from "@/models/testimonialMetaDataFile";
import { NextResponse } from "next/server";



export async function POST(request) {
  try {
    const { title, description, keywords } = await request.json();
    await dbConnect();
    await testimonialRouteMetaData.create({
      title,
      description,
      keywords,
    });
    return NextResponse.json(
      { message: "Testimonial MetaData generated" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error storing metadata:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  await dbConnect();
  const testimonialRouteAllMetaData = await testimonialRouteMetaData.find();
  return NextResponse.json({ testimonialRouteAllMetaData });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await dbConnect();
  await testimonialRouteMetaData.findByIdAndDelete(id);
  return NextResponse.json(
    { message: "Testimonial route meta deleted" },
    { status: 200 }
  );
}
