"use client";

import {
  Bookmark,
  Heart,
  MessageCircle,
  MoreHorizontal,
  Share2,
  User,
} from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

type Post = {
  _id: string;
  question: string;
  answer: string;
  likes: string[];
  createdAt?: string;
};

const Page = () => {
  const [posts, setPosts] = useState<Post[]>([]);
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

  return (
    <div className="bg-gradient-to-b from-slate-50 via-white to-slate-100/50 ">
      <main className="max-w-5xl mx-auto px-4 py-6 space-y-4">
        {posts.slice(0, 6).map((post) => (
          <article
            key={post._id}
            className="group border border-gray-300 bg-white rounded-2xl  hover:border-violet-200 shadow-sm hover:shadow-xl hover:shadow-violet-100/50 transition-all duration-300"
          >
            {/* Header */}
            <div className="p-5 pb-3 flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-violet-500 to-indigo-500 p-0.5">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                    <User className="w-5 h-5 text-slate-500" />
                  </div>
                </div>

                <div>
                  <p className="font-semibold text-slate-800">Anonymous</p>
                  <span className="text-sm text-slate-400">
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

              <button className="p-2 rounded-lg hover:bg-slate-100">
                <MoreHorizontal className="w-5 h-5 text-slate-400" />
              </button>
            </div>

            {/* Content */}
            <div className="px-5 pb-4">
              <h2 className="text-lg font-semibold text-slate-900 mb-2">
                {post.question}
              </h2>
              <p className="text-slate-500 line-clamp-2">
                {post.answer}{" "}
                <span
                  onClick={() => router.push(`/posts/${post._id}`)}
                  className="text-blue-500 cursor-pointer"
                >
                  see more...
                </span>
              </p>
            </div>

            <div className="mx-5 h-px bg-slate-200" />

            {/* Actions */}
            <div className="px-4 py-3 flex items-center justify-between">
              <button
                onClick={() => toggleLike(post._id)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl hover:bg-rose-50"
              >
                <Heart className="w-[18px] h-[18px] text-rose-500" />
                <span className="text-sm font-medium text-slate-600">
                  {post.likes.length}
                </span>
              </button>

              <button className="flex items-center gap-1.5 px-3 py-2 rounded-xl hover:bg-blue-50">
                <MessageCircle className="w-[18px] h-[18px] text-slate-400" />
                <span className="text-sm font-medium text-slate-500">
                  Comment
                </span>
              </button>

              <div className="flex items-center gap-2">
                <Bookmark className="w-5 h-5 text-slate-400" />
                <Share2 className="w-5 h-5 text-slate-400" />
              </div>
            </div>
          </article>
        ))}

        {/* LOAD MORE */}
        {posts.length > 6 && (
          <div className="flex justify-center pt-8">
            <button
              onClick={() => router.push("/feed")}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium hover:from-violet-700 hover:to-indigo-700 transition-all duration-200 shadow-lg shadow-violet-500/25"
            >
              Load more
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default Page;
