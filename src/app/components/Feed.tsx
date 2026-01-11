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
    <div className="mt-4 h-128 md:h-98 overflow-y-auto rounded-3xl mx-2 bg-gradient-to-b from-[#ecfffb] to-[#e6faf5] border border-[#c9fff0]">
      <main className="max-w-5xl mx-auto px-4 py-4 space-y-4">
        {posts.map((post) => (
          <article
            key={post._id}
            className="group rounded-3xl bg-white/90 backdrop-blur border border-slate-200/70 shadow-sm hover:shadow-lg transition-all duration-300"
          >
            {/* Header */}
            <div className="flex items-start justify-between px-4 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00BA89] to-[#00ABDF] p-[2px]">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                    <User className="w-4 h-4 text-slate-500" />
                  </div>
                </div>

                <div className="leading-tight">
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

              <button className="p-2 rounded-full hover:bg-slate-100 transition">
                <MoreHorizontal className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* Content */}
            <div className="px-4 pt-3 pb-2">
              <h2 className="text-[15px] font-semibold text-slate-900 leading-snug">
                {post.question}
              </h2>

              <p className="mt-1.5 text-sm text-slate-600 line-clamp-2">
                {post.answer}{" "}
                <span
                  onClick={() => router.push(`/posts/${post._id}`)}
                  className="text-[#00ABDF] cursor-pointer font-medium hover:underline"
                >
                  see more
                </span>
              </p>
            </div>

            <div className="mx-4 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

            {/* Actions */}
            <div className="flex items-center justify-between px-4 py-2">
              <button
                onClick={() => toggleLike(post._id)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-50 text-rose-600 hover:bg-rose-100 transition"
              >
                <Heart className="w-4 h-4" />
                <span className="text-xs font-medium">{post.likes.length}</span>
              </button>

              <button
                onClick={() =>
                  setOpenCommentPostId(
                    openCommentPostId === post._id ? null : post._id
                  )
                }
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="text-xs font-medium">Comment</span>
              </button>

              <button className="p-2 rounded-full hover:bg-slate-100 transition">
                <Share2 className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* Comment Box */}
            {openCommentPostId === post._id && (
              <div className="flex items-center gap-3 px-4 py-4 border-t border-slate-200 bg-slate-50/60 rounded-b-3xl">
                <input
                  type="text"
                  placeholder="Write a comment…"
                  value={comments[post._id] || ""}
                  onChange={(e) =>
                    setComments((prev) => ({
                      ...prev,
                      [post._id]: e.target.value,
                    }))
                  }
                  className="flex-1 px-4 py-2.5 text-sm bg-white border border-slate-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#00ABDF]/20"
                />

                <button
                  onClick={() => addComment(post._id)}
                  disabled={!comments[post._id]?.trim()}
                  className="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-r from-[#00BA89] to-[#00ABDF] text-white active:scale-95 transition shadow-md disabled:opacity-50"
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
