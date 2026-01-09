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
    <section className="w-full flex justify-center px-4  bg-white">
      <div className="w-full max-w-5xl rounded-3xl bg-[#F7FBFA] shadow-sm border border-gray-100 p-8 text-center">
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
        <button className="w-full md:w-auto px-10 py-4 rounded-xl bg-linear-to-r from-yellow-400 to-orange-500 text-black font-semibold text-sm hover:scale-[1.02] transition">
          🎁 JOIN SeekerPro → SPIN TO WIN + UNLIMITED POSTS
        </button>

        {/* Cancel anytime */}
        <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
          <ShieldCheck size={16} />
          Cancel anytime
        </div>

        {/* Divider */}
        <div className="mt-12 mb-6 text-gray-400 text-sm">
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
        <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Star size={16} className="text-yellow-500" />
            <strong className="text-gray-900">4.9/5</strong>
          </div>

          <div>🏆 1,200+ prizes awarded</div>
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
