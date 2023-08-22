import { getComments, saveComment } from "@/lib/comments";
import { NextRequest, NextResponse } from "next/server";

type BlogPageParams = {
  params: {
    slug: string;
  };
};

export async function GET(request: NextRequest, { params }: BlogPageParams) {
  const comments = await getComments(params.slug);
  return NextResponse.json(comments);
}

export async function POST(request: NextRequest, { params }: BlogPageParams) {
  console.log("POST");
  const form = await request.formData();
  const username = form.get("username") as string;
  const comment = form.get("comment") as string;
  await saveComment(username, comment, params.slug);
  return NextResponse.json("comment saved");
}
