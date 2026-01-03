import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import getMongoClient from "@/app/lib/mongodb";

export async function POST(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const client = await getMongoClient();
    const db = client.db("openpro");

    const postId = params.id;
    const userId = "demo-user"; // replace with auth later

    if (!ObjectId.isValid(postId)) {
      return NextResponse.json({ error: "Invalid post ID" }, { status: 400 });
    }

    const post = await db
      .collection("posts")
      .findOne({ _id: new ObjectId(postId) });

    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    const alreadyLiked = post.likes?.includes(userId);

    const update: any = alreadyLiked
      ? { $pull: { likes: userId } }
      : { $addToSet: { likes: userId } };

    await db
      .collection("posts")
      .updateOne({ _id: new ObjectId(postId) }, update);

    return NextResponse.json({ success: true, liked: !alreadyLiked });
  } catch (err) {
    console.error("LIKE POST ERROR:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
