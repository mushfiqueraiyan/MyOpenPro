"use client";

import {
  Bookmark,
  Heart,
  MessageCircle,
  MoreHorizontal,
  Share2,
  Sparkles,
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

const page = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then(setPosts);
  }, []);

  const router = useRouter();

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100/50">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-slate-200/50">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-slate-900">Feed</h1>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2.5 rounded-xl hover:bg-slate-100 transition-colors">
                <Share2 className="w-5 h-5 text-slate-500" />
              </button>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-indigo-500 p-0.5">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                  <User className="w-5 h-5 text-slate-600" />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Feed */}
        <main className="max-w-5xl mx-auto px-4 py-6 space-y-4">
          {posts.map((post) => (
            <article
              key={post._id}
              onClick={() => router.push(`/posts/${post._id}`)}
              className="group cursor-pointer bg-white rounded-2xl border border-slate-200/80 hover:border-violet-200 shadow-sm hover:shadow-xl hover:shadow-violet-100/50 transition-all duration-300"
            >
              {/* Post Header */}
              <div className="p-5 pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    {/* Avatar with gradient ring */}
                    <div className="relative flex-shrink-0">
                      <div className="w-11 h-11 rounded-full bg-gradient-to-br from-violet-500 via-purple-500 to-indigo-500 p-0.5">
                        <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                          <User className="w-5 h-5 text-slate-500" />
                        </div>
                      </div>
                      {/* Online indicator */}
                      <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-white" />
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-semibold text-slate-800">
                          Anonymous
                        </span>
                        <span className="px-2 py-0.5 text-xs font-medium bg-gradient-to-r from-violet-100 to-indigo-100 text-violet-700 rounded-full">
                          Member
                        </span>
                      </div>
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

                  <button
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 rounded-lg hover:bg-slate-100 transition-colors opacity-0 group-hover:opacity-100"
                  >
                    <MoreHorizontal className="w-5 h-5 text-slate-400" />
                  </button>
                </div>
              </div>

              {/* Post Content */}
              <div className="px-5 pb-4">
                <h2 className="text-lg font-semibold text-slate-900 leading-snug mb-2 group-hover:text-violet-700 transition-colors duration-200">
                  {post.question}
                </h2>
                <p className="text-slate-500 leading-relaxed line-clamp-2">
                  {post.answer}
                </p>
              </div>

              {/* Divider */}
              <div className="mx-5 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

              {/* Actions */}
              <div className="px-4 py-3 flex items-center justify-between">
                <div className="flex items-center">
                  {/* Like button */}
                  <button
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-xl hover:bg-rose-50 transition-all duration-200 group/btn"
                  >
                    <Heart className="w-[18px] h-[18px] text-slate-400 group-hover/btn:text-rose-500 group-hover/btn:scale-110 transition-all duration-200" />
                    <span className="text-sm font-medium text-slate-500 group-hover/btn:text-rose-600">
                      {post.likes.length}
                    </span>
                  </button>

                  {/* Comment button */}
                  <button
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-xl hover:bg-blue-50 transition-all duration-200 group/btn"
                  >
                    <MessageCircle className="w-[18px] h-[18px] text-slate-400 group-hover/btn:text-blue-500 group-hover/btn:scale-110 transition-all duration-200" />
                    <span className="text-sm font-medium text-slate-500 group-hover/btn:text-blue-600">
                      Comment
                    </span>
                  </button>
                </div>

                <div className="flex items-center gap-0.5">
                  {/* Bookmark button */}
                  <button
                    onClick={(e) => e.stopPropagation()}
                    className="p-2.5 rounded-xl hover:bg-amber-50 transition-all duration-200 group/btn"
                  >
                    <Bookmark className="w-[18px] h-[18px] text-slate-400 group-hover/btn:text-amber-500 group-hover/btn:scale-110 transition-all duration-200" />
                  </button>

                  {/* Share button */}
                  <button
                    onClick={(e) => e.stopPropagation()}
                    className="p-2.5 rounded-xl hover:bg-emerald-50 transition-all duration-200 group/btn"
                  >
                    <Share2 className="w-[18px] h-[18px] text-slate-400 group-hover/btn:text-emerald-500 group-hover/btn:scale-110 transition-all duration-200" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </main>
      </div>
    </div>
  );
};

export default page;
