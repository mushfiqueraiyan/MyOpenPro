"use client";
import { Clock, Users, Zap } from "lucide-react";
import React, { useState } from "react";
import CoutDown from "@/components/CoutDown";

const LimitedTime = () => {
  const [liveUsers, setLiveUsers] = useState(847);
  const [spots, setSpots] = useState(23);

  return (
    <div>
      {" "}
      <div className="h-full bg-[#F9FAFA] w-full  space-y-6 p-6">
        {/* Live indicator */}
        <div className="flex items-center gap-2 text-neon-green">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full  "></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
          </span>
          <span className="text-sm  uppercase text-blue-500 tracking-wider">
            Live Now
          </span>
        </div>

        {/* Timer */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-muted-foreground mb-5">
            <Clock className="w-4 h-4" color="#ADB2BB" />
            <span className="text-xs uppercase tracking-wider text-gray-500">
              Giveaway Ends In
            </span>
          </div>

          {/* <div className="flex items-center gap-3">
            <div className="bg-white p-5 rounded-xl font-bold text-2xl  shadow-emerald-100 shadow-xl  text-[#15897E]">
              23
            </div>
            <div className="bg-white p-5 rounded-xl font-bold text-2xl  shadow-emerald-100 shadow-xl  text-[#15897E]">
              12
            </div>
            <div className="bg-white p-5 rounded-xl font-bold text-2xl  shadow-emerald-100 shadow-xl  text-[#15897E]">
              36
            </div>
          </div> */}

          <CoutDown />
        </div>

        {/* Stats */}
        <div className="space-y-3 text-gray-600 pt-4 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="w-4 h-4" />
              <span className="text-xs">Live visitors</span>
            </div>
            <span className="text-foreground text-gray-700 font-semibold">
              {liveUsers.toLocaleString()}
            </span>
          </div>

          <div className="flex items-center text-blue-400 justify-between">
            <div className="flex items-center gap-2 text-hot-orange">
              <Zap className="w-4 h-4" />
              <span className="text-xs">Spots left</span>
            </div>
            <span className="text-hot-orange font-bold animate-pulse">
              {spots}
            </span>
          </div>
        </div>

        {/* Urgency bar */}
        <div className="space-y-2">
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-linear-to-r from-[#15897E] to-[#2770F8] rounded-full transition-all duration-1000"
              style={{ width: `${(spots / 100) * 100}%` }}
            />
          </div>
          <p className="text-xs text-muted-foreground text-center my-5 text-gray-600">
            <span className="text-[#15897E] font-bold">{100 - spots} </span>
            people entered in last hour
          </p>
        </div>

        {/* Social proof ticker */}
        <div className="bg-card/50 border text-gray-600 border-gray-300 rounded-lg p-3 overflow-hidden">
          <div className="animate-bounce-subtle">
            <p className="text-xs text-muted-foreground">
              <span className="text-neon-green">✓</span> Sarah K. just entered
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LimitedTime;
