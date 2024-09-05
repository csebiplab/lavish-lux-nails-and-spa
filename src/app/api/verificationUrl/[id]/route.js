import dbConnect from "@/lib/db.connect";
import verificationSite from "@/models/siteVerification";
import { NextResponse } from "next/server";


export async function PUT(request, { params }) {
  const { id } = params;
  const { title, url } = await request.json();
  await dbConnect();
  const verificationData = await verificationSite.findByIdAndUpdate(id, {
    title,
    url,
  });
  return NextResponse.json({ verificationData }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await dbConnect();
  const verificationData = await verificationSite.findOne({ _id: id });
  return NextResponse.json({ verificationData }, { status: 200 });
}
