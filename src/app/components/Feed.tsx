"use client";

import {
  Heart,
  MessageCircle,
  MoreHorizontal,
  Send,
  Share2,
  User,
} from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

type Post = {
  _id: string;
  question: string;
  answer: string;
  likes: string[];
  createdAt?: string;
};

const Page = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [comments, setComments] = useState<Record<string, string>>({});
  const [openCommentPostId, setOpenCommentPostId] = useState<string | null>(
    null
  );

  const router = useRouter();

  useEffect(() => {
    const fetchPosts = () => {
      fetch("/api/posts")
        .then((res) => res.json())
        .then(setPosts)
        .catch(console.error);
    };

    fetchPosts();
    const interval = setInterval(fetchPosts, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleLike = (postId: string) => {
    setPosts((prev) =>
      prev.map((post) =>
        post._id === postId ? { ...post, likes: [...post.likes, "me"] } : post
      )
    );
  };

  const addComment = async (postId: string) => {
    const content = comments[postId];
    if (!content?.trim()) return;

    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ postId, content }),
      });

      if (!res.ok) throw new Error("Failed to add comment");

      toast.success("Comment sent!");

      setComments((prev) => ({
        ...prev,
        [postId]: "",
      }));

      setOpenCommentPostId(null);
    } catch (err) {
      toast.error("Something went wrong!");
      console.error(err);
    }
  };

  return (
    <div className="mt-4 h-128 md:h-90 overflow-y-auto border border-[#9bffe6] bg-[#eafffa] rounded-3xl mx-2">
      <main className="max-w-5xl mx-auto px-3 py-4 space-y-3">
        {posts.map((post) => (
          <article
            key={post._id}
            className="rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition"
          >
            {/* Header */}
            <div className="flex items-start justify-between px-3 pt-3">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-[#23705d] p-0.5">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                    <User className="w-4 h-4 text-slate-500" />
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-800">
                    Anonymous
                  </p>
                  <span className="text-xs text-slate-400">
                    {new Date(post.createdAt || "").toLocaleDateString(
                      "en-US",
                      {
                        month: "short",
                        day: "numeric",
                      }
                    )}
                  </span>
                </div>
              </div>

              <button className="p-1.5 rounded-md hover:bg-slate-100">
                <MoreHorizontal className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* Content */}
            <div className="px-3 pt-2 pb-1">
              <h2 className="text-md font-semibold text-slate-900">
                {post.question}
              </h2>

              <p className="mt-1 text-sm text-slate-600 line-clamp-2">
                {post.answer}{" "}
                <span
                  onClick={() => router.push(`/posts/${post._id}`)}
                  className="text-blue-500 cursor-pointer font-medium"
                >
                  see more
                </span>
              </p>
            </div>

            <div className="mx-3 h-px bg-slate-100" />

            {/* Actions */}
            <div className="flex items-center justify-between px-3 py-1.5">
              <button
                onClick={() => toggleLike(post._id)}
                className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg hover:bg-rose-50"
              >
                <Heart className="w-4 h-4 text-rose-500" />
                <span className="text-xs font-medium text-slate-600">
                  {post.likes.length}
                </span>
              </button>

              <button
                onClick={() =>
                  setOpenCommentPostId(
                    openCommentPostId === post._id ? null : post._id
                  )
                }
                className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg hover:bg-blue-50"
              >
                <MessageCircle className="w-4 h-4 text-slate-400" />
                <span className="text-xs font-medium text-slate-500">
                  Comment
                </span>
              </button>

              <Share2 className="w-4 h-4 text-slate-400" />
            </div>

            {/* Comment Box */}
            {openCommentPostId === post._id && (
              <div className="flex items-center gap-3 p-4 border-t border-slate-200">
                <input
                  type="text"
                  placeholder="Write a comment..."
                  value={comments[post._id] || ""}
                  onChange={(e) =>
                    setComments((prev) => ({
                      ...prev,
                      [post._id]: e.target.value,
                    }))
                  }
                  className="flex-1 px-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                />

                <button
                  onClick={() => addComment(post._id)}
                  disabled={!comments[post._id]?.trim()}
                  className="flex items-center justify-center h-11 w-11 rounded-xl bg-linear-to-r from-[#00BA89] to-[#00ABDF] text-white active:scale-95 transition shadow-md"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            )}
          </article>
        ))}
      </main>
    </div>
  );
};

export default Page;
