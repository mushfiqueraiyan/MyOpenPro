import getMongoClient from "@/app/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { postId, content } = await req.json();

  const client = await getMongoClient();
  const db = client.db("openpro");

  await db.collection("comments").insertOne({
    postId,
    content,
    createdAt: new Date(),
  });

  return NextResponse.json({ success: true });
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const postId = searchParams.get("postId");

  const client = await getMongoClient();
  const db = client.db("openpro");

  const comments = await db.collection("comments").find({ postId }).toArray();

  return NextResponse.json(comments);
}
