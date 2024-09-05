import dbConnect from "@/lib/db.connect";
import homeRouteMetaData from "@/models/homeMetaDataFile";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, description, keywords } = await request.json();
    await dbConnect();
    await homeRouteMetaData.create({
      title,
      description,
      keywords,
    });
    return NextResponse.json(
      { message: "Home MetaData generated" },
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
  const homeRouteAllMetaData = await homeRouteMetaData.find();
  return NextResponse.json({ homeRouteAllMetaData });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await homeRouteMetaData.findByIdAndDelete(id);
  return NextResponse.json(
    { message: "Blog route meta deleted" },
    { status: 200 }
  );
}
