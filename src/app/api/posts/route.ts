import getMongoClient from "@/app/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { content } = await req.json();

    if (!content?.answer || content.answer.trim() === "") {
      return NextResponse.json({ error: "Empty answer" }, { status: 400 });
    }

    const client = await getMongoClient();
    const db = client.db("openpro");

    const post = {
      question: content.question,
      answer: content.answer,
      likes: [],
      createdAt: new Date(),
    };

    const result = await db.collection("posts").insertOne(post);

    return NextResponse.json({
      _id: result.insertedId,
      ...post,
    });
  } catch (error) {
    console.error("SERVER ERROR:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  const client = await getMongoClient();
  const db = client.db("openpro");

  const posts = await db
    .collection("posts")
    .find()
    .sort({ createdAt: -1 })
    .toArray();

  return NextResponse.json(posts);
}
