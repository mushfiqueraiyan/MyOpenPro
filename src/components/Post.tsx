"use client";

import ForumQuestion from "@/components/ForumQuestion";
import LimitedTime from "@/components/LimitedTime";
import Popup from "@/components/Popup";
import SeekerProCard from "@/components/SeekerProCard";
// import SlotMachine from "@/components/SlotMachine";
import React, { useEffect, useState } from "react";
import Feed from "@/components/Feed";
import SpinWheel from "@/components/SpinWheel";

const PostFeed = () => {
  const [showExitPopup, setShowExitPopup] = useState(false);
  const [hasShownPopup, setHasShownPopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show popup when user scrolls past 60% of the hero section
      const scrollPercent =
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
        100;

      if (scrollPercent > 30 && !hasShownPopup) {
        setShowExitPopup(true);
        setHasShownPopup(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasShownPopup]);

  const handleClosePopup = () => {
    setShowExitPopup(false);
  };

  const handleRemindLater = () => {
    setShowExitPopup(false);
    // Could set a cookie/localStorage to remind later
  };

  return (
    <div className="py-10 mb-30">
      {/* Top Prize Banner */}
      <div className="text-center mb-14">
        <div
          className="
            inline-flex items-center justify-center rounded-3xl
            bg-[#E7F3F1] px-3 py-1
            shadow-[0_0_25px_rgba(21,137,126,0.55)]
            ring-2 ring-[#15897E]/30
            animate-pulse
          "
        >
          🎉
          <span className="ml-1 text-sm font-bold text-[#15897E]">
            $10,000+
          </span>
          <span className="ml-1 text-sm text-gray-700">
            in prizes this month
          </span>
        </div>
      </div>

      {/* Main Grid */}
      <div
        className="
          grid
          grid-cols-1
          lg:grid-cols-[1fr_2.5fr_1fr]
          gap-10
          max-w-[1400px]
          mx-auto
          px-4
        "
      >
        {/* LEFT COLUMN */}
        <div className="lg:self-start">
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-300">
            <div className="bg-linear-to-r from-[#D3EBF5] to-[#CEE6E6] px-4 py-2">
              <p className="text-sm text-center uppercase tracking-wider text-foreground">
                ⚡ Limited Time Offer
              </p>
            </div>
            <LimitedTime />
          </div>
        </div>

        {/* MIDDLE COLUMN (WIDE) */}
        <div>
          <div className="h-full bg-card/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-300">
            <div className="bg-linear-to-r from-[#D3EBF5] to-[#CEE6E6] px-4 py-2 ">
              <p className="text-xs text-center uppercase tracking-wider text-foreground">
                💬 Weekly Question
              </p>
            </div>
            <ForumQuestion />
            <Feed />
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="lg:self-start">
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-300">
            <div className="bg-linear-to-r from-[#CFE5E1] to-[#E8F2F0] px-4 py-2">
              <p className="text-xs font-medium text-center uppercase tracking-wider text-foreground">
                🎰 Instant Win Game
              </p>
            </div>
            {/* <SpinWheel /> */}
          </div>
        </div>
      </div>

      {/* Bottom Card */}
      <div className="mt-16 max-w-[1400px] mx-auto px-4">
        <SeekerProCard />
      </div>

      {/* Exit Popup */}
      <Popup
        isVisible={showExitPopup}
        onClose={handleClosePopup}
        onRemindLater={handleRemindLater}
      />
    </div>
  );
};

export default PostFeed;
