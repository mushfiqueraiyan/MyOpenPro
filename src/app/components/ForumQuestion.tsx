"use client";

import {
  BoltIcon,
  MessageSquare,
  Send,
  Trophy,
  User,
  Users,
} from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";

type Post = {
  _id: string;
  question: string;
  content: string;
  createdAt?: string;
};

const ForumQuestion = () => {
  const [answer, setAnswer] = useState("");
  const [posts, setPosts] = useState<Post[]>([]);
  const question = "What's the one thing you wish existed that doesn't yet?";

  const submitAnswer = async () => {
    if (!answer.trim()) {
      toast.error("Answer can’t be empty");
      return;
    }

    const res = await fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: { question, answer } }),
    });

    if (!res.ok) {
      toast.error("Something went wrong");
      return;
    }

    const newPost: Post = await res.json();
    setPosts((prev) => [newPost, ...prev]);
    toast.success("Answer submitted");
    setAnswer("");
  };

  return (
    <section className="bg-gradient-to-br from-slate-50 to-slate-100 px-6 py-8 ">
      {/* Top Meta */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-2 rounded-full bg-sky-100 px-4 py-1.5 text-sm font-medium text-sky-600">
            <MessageSquare size={16} />
            Forum Question
          </span>

          <span className="hidden md:flex items-center gap-1 text-sm text-gray-500">
            <Users size={16} /> 2.4k answers
          </span>
        </div>

        <span className=" hidden md:flex items-center gap-1 text-sm font-semibold text-emerald-600">
          <BoltIcon size={16} />
          First 100 judged
        </span>
      </div>

      {/* Prize */}
      <div className="flex items-center gap-4 mb-6">
        <div className="rounded-2xl bg-emerald-100 p-3">
          <Trophy className="text-emerald-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900">
          Best answer wins{" "}
          <span className="bg-gradient-to-r from-emerald-500 to-sky-500 bg-clip-text text-transparent">
            iPhone 17 Pro Max
          </span>
        </h1>
      </div>

      {/* Main Card */}
      <div className="rounded-2xl border border-gray-200 bg-white shadow-lg shadow-black/5 p-6 space-y-5">
        {/* Question */}
        <p className="text-xl font-semibold text-gray-800 leading-snug">
          {question}
        </p>

        {/* Input */}
        <div className="flex items-center flex-col md:flex-row gap-3">
          <button className="hidden md:flex p-4 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-emerald-500 text-white shadow-md hover:scale-105 transition">
            <User size={20} />
          </button>

          <div className="relative w-full">
            <textarea
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              maxLength={500}
              placeholder="Share your idea…"
              className="w-full h-28 resize-none rounded-xl border border-gray-300 bg-gray-50 p-4 pr-12 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-sky-500/40"
            />
            <span className="absolute bottom-3 right-4 text-xs text-gray-400">
              {answer.length}/500
            </span>
          </div>

          <button
            onClick={submitAnswer}
            className="h-11 px-5 rounded-xl w-full justify-center md:w-fit bg-gradient-to-r from-sky-500 to-emerald-500 text-white font-semibold shadow-md hover:scale-[1.03] transition flex items-center gap-2"
          >
            <Send size={16} />
            Post
          </button>
        </div>
      </div>

      {/* Participation */}
      <div className="mt-6 flex items-center justify-between rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="h-8 w-8 flex items-center justify-center text-[#201f1f] rounded-full border-2 border-white bg-gradient-to-br from-emerald-200 to-sky-200"
              >
                {" "}
              </div>
            ))}
          </div>

          <span className="text-sm text-gray-600">
            <strong className="text-gray-900">+2,394</strong> participating
          </span>
        </div>

        <p className="text-sm hidden md:flex text-gray-500">
          ⚡ Winner announced Friday
        </p>
      </div>
    </section>
  );
};

export default ForumQuestion;
