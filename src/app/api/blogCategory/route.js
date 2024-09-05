import dbConnect from "@/lib/db.connect";
import blogCategory from "@/models/blogCategory";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { name, slug, description } = await request.json();
    await dbConnect();
    await blogCategory.create({
      name,
      slug,
      description,
    });
    return NextResponse.json(
      { message: "BLog category is generated" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error to create category:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  await dbConnect();
  const blogCategories = await blogCategory.find();
  return NextResponse.json({ blogCategories });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await blogCategory.findByIdAndDelete(id);
  return NextResponse.json(
    { message: "Blog category is  deleted" },
    { status: 200 }
  );
}
