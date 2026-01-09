"use client";

import { Clock, Users, Zap } from "lucide-react";
import React, { useState } from "react";
import CoutDown from "@/app/components/CoutDown";

const LimitedTime = () => {
  const [liveUsers] = useState(847);
  const [spots] = useState(22);

  const progress = ((100 - spots) / 100) * 100;

  return (
    <section className="w-full rounded-3xl bg-gradient-to-br from-slate-50 to-slate-100 p-6 space-y-6 shadow-lg shadow-black/5">
      {/* Live Indicator */}
      <div className="flex items-center gap-3">
        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
        </span>
        <span className="text-xs font-semibold uppercase tracking-widest text-emerald-600">
          Live Now
        </span>
      </div>

      {/* Countdown Card */}
      <div className="rounded-2xl bg-white border border-gray-200 p-5 shadow-md space-y-4">
        <div className="flex items-center gap-2 text-gray-500">
          <Clock size={16} />
          <span className="text-xs font-medium uppercase tracking-wider">
            Giveaway Ends In
          </span>
        </div>

        <CoutDown />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-2xl bg-white border border-gray-200 p-4 shadow-sm">
          <div className="flex items-center gap-2 text-gray-500 mb-1">
            <Users size={16} />
            <span className="text-xs">Live visitors</span>
          </div>
          <p className="text-xl font-bold text-gray-900">
            {liveUsers.toLocaleString()}
          </p>
        </div>

        <div className="rounded-2xl bg-gradient-to-br from-emerald-500 to-sky-500 p-4 text-white shadow-md">
          <div className="flex items-center gap-2 opacity-90 mb-1">
            <Zap size={16} />
            <span className="text-xs">Spots left</span>
          </div>
          <p className="text-xl font-extrabold animate-pulse">{spots}</p>
        </div>
      </div>

      {/* Urgency Progress */}
      <div className="space-y-2">
        <div className="h-2 w-full rounded-full bg-gray-200 overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-sky-500 transition-all duration-700"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-xs text-center text-gray-500">
          <span className="font-semibold text-emerald-600">{100 - spots}</span>{" "}
          people entered in the last hour
        </p>
      </div>

      {/* Social Proof */}
      <div className="rounded-xl bg-white border border-gray-200 p-3 shadow-sm">
        <p className="text-xs text-gray-600 animate-pulse">
          <span className="text-emerald-500 font-semibold">✓</span> Sarah K.
          just entered the giveaway
        </p>
      </div>
    </section>
  );
};

export default LimitedTime;
