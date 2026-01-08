"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  ArrowLeft,
  Clock,
  Heart,
  MessageCircle,
  Send,
  Share2,
  ThumbsUp,
  User,
} from "lucide-react";

interface Post {
  _id: string;
  question: string;
  answer: string;
  likes: string[];
  createdAt?: string;
}

interface Comment {
  _id: string;
  postId: string;
  content: string;
  createdAt: string;
}

export default function IndividualPostPage() {
  const params = useParams();
  const postId = params.id;

  if (!postId || Array.isArray(postId)) {
    return <p>Invalid Post ID</p>;
  }

  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [like, setLike] = useState(0);

  // Format date nicely
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return "Just now";
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return date.toLocaleDateString();
  };

  // Load post
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch("/api/posts");
        const allPosts: Post[] = await res.json();
        const found = allPosts.find((p) => p._id === postId);
        setPost(found || null);
        setLike(found?.likes.length || 0);
      } catch (err) {
        console.error("Failed to fetch post:", err);
      }
    };

    fetchPost();
  }, [postId]);

  // Load comments
  const loadComments = async () => {
    try {
      const res = await fetch(`/api/comments?postId=${postId}`);
      const data = await res.json();
      console.log("Fetched comments:", data); // Debug
      setComments(Array.isArray(data) ? data : data.comments || []);
    } catch (err) {
      console.error("Failed to load comments:", err);
      setComments([]);
    }
  };

  useEffect(() => {
    loadComments();
  }, [postId]);

  // Toggle like
  const toggleLike = async () => {
    setLike((prev) => prev + 1);
  };

  // Add comment
  const addComment = async () => {
    if (!newComment.trim()) return;

    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ postId, content: newComment }),
      });

      if (!res.ok) throw new Error("Failed to add comment");

      const data = await res.json();
      setComments([
        ...comments,
        data.comment || {
          _id: data._id || Math.random().toString(),
          postId,
          content: newComment,
          createdAt: new Date().toISOString(),
        },
      ]);
      setNewComment("");
    } catch (err) {
      console.error(err);
    }
  };

  if (!post) return <p className="text-center mt-10">Loading post...</p>;

  const router = useRouter();

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-blue-50">
      {/* Header */}
      <header
        onClick={() => router.push("/feed")}
        className="sticky cursor-pointer top-0 z-10 bg-white/80 backdrop-blur-md border-b border-slate-200/60"
      >
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
          <button className="p-2 rounded-xl hover:bg-slate-100 transition-colors duration-200">
            <ArrowLeft className="w-5 h-5 text-slate-600" />
          </button>
          <h1 className="text-lg font-semibold text-slate-800">Post</h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-6 space-y-6">
        {/* Post Card */}
        <article className="bg-white rounded-2xl shadow-sm shadow-slate-200/50 border border-gray-700 overflow-hidden hover:shadow-md hover:shadow-slate-200/50 transition-all duration-300">
          <div className="p-6 space-y-4">
            <h2 className="text-2xl flex items-center gap-3 font-bold text-slate-900 leading-tight">
              <div className="bg-emerald-600  p-2 rounded-full">
                <User color="white" size={30} />
              </div>{" "}
              {post.question}
            </h2>
            <p className="text-slate-600 leading-relaxed text-base">
              {post.answer}
            </p>

            <div className="flex items-center justify-between pt-4 border-t  border-gray-400">
              <div className="flex items-center gap-2 text-slate-400">
                <Clock className="w-4 h-4" />
                <span className="text-sm">
                  {post.createdAt ? formatDate(post.createdAt) : ""}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={toggleLike}
                  className="flex items-center gap-1 px-3 py-1 rounded-lg hover:bg-red-300 transition-colors duration-200"
                >
                  <Heart className="w-4 h-4" />
                  <span>{like}</span>
                </button>

                <button className="flex items-center gap-2 px-3 py-1 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors duration-200">
                  <MessageCircle className="w-4 h-4" />
                  <span>{comments.length}</span>
                </button>

                <button className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors duration-200">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </article>

        {/* Comments Section */}
        <section className="bg-white rounded-2xl shadow-sm shadow-slate-200/50 border border-gray-700 overflow-hidden">
          {/* Comments Header */}
          <div className="px-6 py-4 border-b border-slate-100">
            <h3 className="text-lg font-semibold text-slate-800">
              Comments{" "}
              <span className="ml-2 text-sm font-normal text-slate-400">
                ({comments.length})
              </span>
            </h3>
          </div>

          {/* Comment Input */}
          <div className="p-4 border-b border-gray-400 bg-slate-50/50">
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-semibold text-sm shrink-0">
                Y
              </div>
              <div className="flex-1 flex gap-2">
                <input
                  type="text"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Write a comment..."
                  className="flex-1 px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-all duration-200"
                />
                <button
                  onClick={addComment}
                  disabled={!newComment.trim()}
                  className="px-5 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-medium rounded-xl flex items-center gap-2 transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  <Send className="w-4 h-4" />
                  <span className="hidden sm:inline">Send</span>
                </button>
              </div>
            </div>
          </div>

          {/* Comments List */}
          <div className="divide-y divide-gray-500">
            {comments.length === 0 ? (
              <div className="p-8 text-center">
                <MessageCircle className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <p className="text-slate-400">No comments yet. Be the first!</p>
              </div>
            ) : (
              comments.map((comment) => (
                <div
                  key={comment._id}
                  className="p-4 hover:bg-slate-50/50 transition-colors duration-200"
                >
                  <div className="flex gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-slate-800">
                          Anonymous
                        </span>
                        <span className="text-slate-400 text-sm">•</span>
                        <span className="text-slate-400 text-sm">
                          {formatDate(comment.createdAt)}
                        </span>
                      </div>
                      <p className="text-slate-600 leading-relaxed">
                        {comment.content}
                      </p>

                      <div className="flex items-center gap-4 mt-2">
                        <button className="text-slate-400 hover:text-blue-500 text-sm flex items-center gap-1 transition-colors duration-200">
                          <ThumbsUp className="w-4 h-4" />
                          <span>Like</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
