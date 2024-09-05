import dbConnect from "@/lib/db.connect";
import concreteDeliveryRouteMetaData from "@/models/concreteDeliveryMetaDataFile";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { title, description, keywords } = await request.json();
  await dbConnect();
  const concreteDelivery =
    await concreteDeliveryRouteMetaData.findByIdAndUpdate(id, {
      title,
      description,
      keywords,
    });
  return NextResponse.json({ concreteDelivery }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await dbConnect();
  const concreteDelivery = await concreteDeliveryRouteMetaData.findOne({
    _id: id,
  });
  return NextResponse.json({ concreteDelivery }, { status: 200 });
}
