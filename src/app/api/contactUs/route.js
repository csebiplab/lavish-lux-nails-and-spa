import dbConnect from "@/lib/db.connect";
import contactRouteMetaData from "@/models/contactMetaDataFile";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, description, keywords } = await request.json();
    await dbConnect();
    await contactRouteMetaData.create({
      title,
      description,
      keywords,
    });
    return NextResponse.json(
      { message: "Contact us MetaData generated" },
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
  const contactRouteAllMetaData = await contactRouteMetaData.find();
  return NextResponse.json({ contactRouteAllMetaData });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await dbConnect();
  await contactRouteMetaData.findByIdAndDelete(id);
  return NextResponse.json(
    { message: "Blog route meta deleted" },
    { status: 200 }
  );
}
