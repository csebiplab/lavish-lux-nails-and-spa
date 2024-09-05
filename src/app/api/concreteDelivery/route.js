import dbConnect from "@/lib/db.connect";
import concreteDeliveryRouteMetaData from "@/models/concreteDeliveryMetaDataFile";
import { NextResponse } from "next/server";


export async function POST(request) {
  try {
    const { title, description, keywords } = await request.json();
    await dbConnect();
    await concreteDeliveryRouteMetaData.create({
      title,
      description,
      keywords,
    });
    return NextResponse.json(
      { message: "Concrete Delivery MetaData generated" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  await dbConnect();
  const concreteDeliveryRouteAllMetaData =
    await concreteDeliveryRouteMetaData.find();
  return NextResponse.json({ concreteDeliveryRouteAllMetaData });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await concreteDeliveryRouteMetaData.findByIdAndDelete(id);
  return NextResponse.json(
    { message: "Blog route meta deleted" },
    { status: 200 }
  );
}
