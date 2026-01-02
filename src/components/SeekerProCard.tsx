"use client";

import {
  Crown,
  Zap,
  Gift,
  MessageSquare,
  Lock,
  ShieldCheck,
  Star,
} from "lucide-react";

export default function SeekerProCard() {
  return (
    <section className="w-full flex justify-center px-4 py-16 mt-30 bg-white">
      <div className="w-full max-w-3xl rounded-3xl bg-[#F7FBFA] shadow-sm border border-gray-100 p-8 text-center">
        {/* Badge */}
        <div className="flex justify-center mb-4">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-600 text-sm font-medium">
            <Crown size={16} />
            Members Only
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-emerald-700 mb-2">SeekerPro</h1>

        {/* Subtitle */}
        <p className="text-gray-600 mb-8 flex items-center justify-center gap-2">
          <Zap size={16} className="text-emerald-500" />
          One subscription. Unlimited access.
        </p>

        {/* CTA */}
        <button className="w-full md:w-auto px-10 py-4 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold text-sm hover:scale-[1.02] transition">
          🎁 JOIN SeekerPro → SPIN TO WIN + UNLIMITED POSTS
        </button>

        {/* Cancel anytime */}
        <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
          <ShieldCheck size={16} />
          Cancel anytime
        </div>

        {/* Divider */}
        <div className="mt-12 mb-6 flex items-center justify-center gap-2 text-gray-400 text-sm">
          🎁 WHAT YOU GET WITH SEEKERPRO
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
          <Feature icon={<Gift />} title="Entry to all giveaways" active />

          <Feature icon={<MessageSquare />} title="Unlimited forum posts" />

          <Feature icon={<Lock />} title="Unlock exclusive benefits" />

          <Feature icon={<Crown />} title="Priority winner selection" active />
        </div>

        {/* Stats */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className="w-7 h-7 rounded-full flex items-center justify-center bg-emerald-100 border border-white"
                >
                  <svg
                    className="h-4 w-4 text-emerald-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12a5 5 0 100-10 5 5 0 000 10zm0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5z" />
                  </svg>{" "}
                </span>
              ))}
            </div>
            <span>
              Join <strong className="text-gray-900">12,847</strong> members
            </span>
          </div>

          <div className="flex items-center gap-1">
            <Star size={16} className="text-yellow-500" />
            <span>
              <strong className="text-gray-900">4.9/5</strong> rating
            </span>
          </div>

          <div className="flex items-center gap-1">
            🏆 <span>1,200+ prizes awarded</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({
  icon,
  title,
  active = false,
}: {
  icon: React.ReactNode;
  title: string;
  active?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-4 p-4 rounded-xl border ${
        active ? "bg-emerald-50 border-emerald-200" : "bg-white border-gray-200"
      }`}
    >
      <div
        className={`p-2 rounded-lg ${
          active
            ? "bg-emerald-100 text-emerald-600"
            : "bg-gray-100 text-gray-500"
        }`}
      >
        {icon}
      </div>
      <p className="text-sm font-medium text-gray-800">{title}</p>
    </div>
  );
}
