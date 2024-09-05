import { NextResponse } from "next/server";
import blogTag from "@/models/blogTag";
import dbConnect from "@/lib/db.connect";

export async function POST(request) {
  try {
    const { name, slug, description } = await request.json();
    await dbConnect();
    await blogTag.create({
      name,
      slug,
      description,
    });
    return NextResponse.json(
      { message: "Blog tag is generated" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error to create tag", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  await dbConnect();
  const blogTags = await blogTag.find();
  return NextResponse.json({ blogTags });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await dbConnect();
  await blogTag.findByIdAndDelete(id);
  return NextResponse.json(
    { message: "Blog tag is  deleted" },
    { status: 200 }
  );
}
