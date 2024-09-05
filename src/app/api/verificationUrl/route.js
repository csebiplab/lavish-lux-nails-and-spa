import dbConnect from "@/lib/db.connect";
import verificationSite from "@/models/siteVerification";
import { NextResponse } from "next/server";



export async function POST(request) {
  const { title, url } = await request.json();
  await dbConnect();
  await verificationSite.create({ title, url });
  return NextResponse.json(
    { message: "verification ownership url and meta title is generated" },
    { status: 201 }
  );
}

export async function GET() {
  await dbConnect();
  const verificationUrl = await verificationSite.find();
  return NextResponse.json({ verificationUrl });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await dbConnect();
  await verificationSite.findByIdAndDelete(id);
  return NextResponse.json(
    { message: "Verification sitemap data deleted" },
    { status: 200 }
  );
}
