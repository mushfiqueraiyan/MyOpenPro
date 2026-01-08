import {
  BoltIcon,
  Globe,
  MessageSquare,
  Trophy,
  User,
  Users,
  Zap,
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
  const [question, setQuestion] = useState(
    "What's the one thing you wish existed that doesn't yet?"
  );

  const cont = {
    question,
    answer,
  };

  const submitAnswer = async () => {
    const res = await fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: cont }),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("API ERROR:", errorText);
      toast.error("Something went wrong!");
      return;
    }

    const newPost: Post = await res.json();
    setPosts((prev) => [newPost, ...prev]);
    toast.success("Post added successfully!");
    setAnswer("");
  };

  return (
    <div className="bg-[#FBFBFB] py-5 px-5">
      <div className="flex items-center gap-4 pb-5">
        <div className="flex items-center gap-2 bg-[#CDE5F0] rounded-full px-4 py-1">
          <MessageSquare className="w-4 h-4 text-blue-400" />
          <span className="text-sm  text-blue-400">Forum Question</span>
        </div>

        <div className="flex items-center gap-1 text-sm text-gray-400">
          <Users size={16} /> 2.4k answers
        </div>
      </div>

      {/* Text */}

      <div className="flex gap-3 items-center">
        <div className="bg-[#CAE3DF] p-3 rounded-2xl">
          <Trophy color="#158978" />
        </div>
        <h1 className="text-3xl font-bold text-left text-gray-800">
          Best post wins{" "}
          <span className="bg-linear-to-r from-[#158B81] via-[#178EA5] to-[#178EB6] bg-clip-text text-transparent font-semibold">
            iPhone 17 Pro Max
          </span>
        </h1>
      </div>

      {/* <div className="flex items-center gap-3 text-left my-4 text-gray-500">
        <Globe className="w-5 h-5 text-blue-500" />
        <p className="text-sm lg:text-base">
          Your voice seen by
          <span className="text-foreground font-semibold text-gray-700">
            {" "}
            150K+ users
          </span>{" "}
          & millions of visitors
        </p>
      </div> */}

      {/* Text area */}

      <div className="bg-card border border-gray-600 rounded-xl p-5 mt-6 space-y-4">
        <p className="text-2xl font-medium text-gray-700 text-foreground text-left">
          {question}
        </p>

        <div className="flex items-center gap-2 w-full">
          <button className="hidden md:flex transition cursor-pointer hover:scale-[1.02] hover:shadow-xl font-bold bg-linear-to-r from-[#12888A] via-[#1180C2] to-[#2472F2] flex items-center text-white p-3 rounded-full text-center justify-center gap-3">
            <User />
          </button>
          <div className="relative w-full">
            <textarea
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Type your answer here..."
              className="w-full h-20 bg-muted/50 border border-gray-400 rounded-lg p-4 text-foreground placeholder:text-muted-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
            />
            <div className="absolute bottom-3 right-3 text-xs text-muted-foreground">
              0/500
            </div>
          </div>
          <button
            onClick={submitAnswer}
            className=" transition cursor-pointer hover:scale-[1.02] hover:shadow-xl font-bold bg-linear-to-r from-[#12888A] via-[#1180C2] to-[#2472F2] flex items-center text-white p-3 rounded-xl text-center justify-center gap-3"
          >
            Answer
          </button>
        </div>
      </div>

      <div className="flex my-4 items-center justify-between rounded-xl bg-white px-4 py-3 shadow-sm border border-gray-300 rounded-2xl">
        {/* Left: Avatars + Count */}
        <div className="flex items-center gap-3">
          {/* Avatars */}
          <div className="flex -space-x-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-emerald-100"
              >
                <svg
                  className="h-4 w-4 text-emerald-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12a5 5 0 100-10 5 5 0 000 10zm0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5z" />
                </svg>
              </div>
            ))}
          </div>

          {/* Text */}
          <span className="text-sm text-gray-600">
            <span className="font-semibold text-gray-900">+2,394</span>{" "}
            participating
          </span>
        </div>

        {/* Right: Badge */}
        <div className="flex items-center gap-1 text-sm font-semibold text-sky-500">
          <BoltIcon className="h-4 w-4" />
          First 100 judged
        </div>
      </div>

      <p className="text-gray-600 text-sm">⚡ Winner announced Friday</p>
    </div>
  );
};

export default ForumQuestion;
