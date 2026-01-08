"use client";

import { BoltIcon, CircleCheck, GiftIcon, SparklesIcon } from "lucide-react";
import ForumQuestion from "@/components/ForumQuestion";
import LimitedTime from "@/components/LimitedTime";
import Popup from "@/components/Popup";
import SeekerProCard from "@/components/SeekerProCard";
import React, { useEffect, useState } from "react";
import Feed from "@/components/Feed";
import Wheel from "./Wheel"; // Adjust path if needed
import Image from "next/image";
import air from "@/assests/air.webp";

const PostFeed = () => {
  const [showExitPopup, setShowExitPopup] = useState(false);
  const [hasShownPopup, setHasShownPopup] = useState(false);
  const [openSpin, setOpenSpin] = useState(false);
  const [prizes, setPrizes] = useState<string[]>([]);
  const [lastPrize, setLastPrize] = useState<string>("");

  const segments = [
    "$50",
    "Try Again",
    "$100",
    "Sorry",
    "$200",
    "No Prize",
    "$500",
    "Sorry",
    "$1,000",
    "Try Again",
    "$100",
    "$35",
  ];

  const badPrizes = ["Try Again", "Better Luck", "No Prize", "Sorry"];

  const bigWins = ["$500", "$1,000"];

  const handleSpinEnd = (prize: string) => {
    setPrizes((prev) => [prize, ...prev].slice(0, 5));
    setLastPrize(prize);
  };

  const handleStartSpin = () => {
    setLastPrize("");
  };

  const closeModal = () => {
    setOpenSpin(false);
    setLastPrize("");
  };

  useEffect(() => {
    const handleScroll = () => {
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
  };

  return (
    <div className="py-10 mb-32">
      {/* Top Prize Banner */}

      {/* Main Grid */}
      <div
        className="
          grid
          grid-cols-1
          lg:grid-cols-[1fr_2.5fr_1fr]
          gap-10
          max-w-410
          mx-auto
          px-4
        "
      >
        {/* LEFT COLUMN */}
        <div className="lg:self-start">
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hidden md:block">
            <div className="bg-gradient-to-r from-[#D3EBF5] to-[#CEE6E6] px-4 py-2">
              <p className="text-sm text-center uppercase tracking-wider text-foreground">
                ⚡ Limited Time Offer
              </p>
            </div>
            <div className="text-center my-3">
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
            <LimitedTime />
          </div>
        </div>

        {/* MIDDLE COLUMN (WIDE) */}
        <div>
          <div className="h-245 bg-card/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800">
            <div className="bg-gradient-to-r from-[#D3EBF5] to-[#CEE6E6] px-4 py-2 ">
              <p className="text-xs text-center uppercase tracking-wider text-foreground">
                💬 Weekly Question
              </p>
            </div>
            <ForumQuestion />
            <Feed />
          </div>
        </div>

        {/* RIGHT COLUMN - Instant Win Teaser Card */}
        <div className="lg:self-start">
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800">
            <div className="bg-gradient-to-r from-[#CFE5E1] to-[#E8F2F0] px-4 py-2">
              <p className="text-xs font-medium text-center uppercase tracking-wider text-foreground">
                🎰 Instant Win Game
              </p>
            </div>

            {/* Teaser content (integrated directly - opens full-screen modal) */}
            <div className="p-6 text-center">
              {/* Top Badge */}
              <div className="mb-4 flex items-center justify-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1 text-sm font-medium text-emerald-700">
                  <GiftIcon className="h-4 w-4" />
                  Spin & Win
                </span>
                <SparklesIcon className="h-4 w-4 text-emerald-500" />
              </div>

              {/* Title */}
              <h1 className="text-2xl font-extrabold text-gray-800">
                WIN{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-teal-600 bg-clip-text text-transparent">
                  AirPods Pro 4
                </span>
              </h1>
              <p className="mt-1 text-sm text-gray-500">or Apple Watch Ultra</p>

              {/* Teaser Slot Display */}
              <div className="relative my-6 flex items-center justify-center">
                <div className="absolute h-32 w-32 rounded-full bg-emerald-200/40 blur-3xl" />
                <div className="relative flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-50 text-2xl shadow-inner">
                    🎧
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-50 text-2xl shadow-inner">
                    ⌚
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-50 text-2xl shadow-inner">
                    🎁
                  </div>
                  <div className="absolute -right-3 top-1/2 h-10 w-3 -translate-y-1/2 rounded-full bg-gradient-to-b from-teal-400 to-teal-700 shadow-md" />
                </div>
              </div>

              {/* Info Badge */}
              <div className="mx-auto mb-5 flex items-center gap-2 rounded-full border border-blue-300 bg-blue-50 px-4 py-2 text-xs font-medium text-blue-600">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-xs text-white">
                  <CircleCheck className="h-3 w-3" />
                </span>
                First 100 spins = 90% chance to win!
              </div>

              <div>
                <Wheel
                  segments={segments}
                  badPrizes={badPrizes}
                  onFinished={handleSpinEnd}
                  onStartSpin={handleStartSpin}
                  lastPrize={lastPrize}
                  bigWins={bigWins}
                />
                {lastPrize && (
                  <div className="mt-3 text-center">
                    <p className="text-xl text-black md:text-5xl">You won:</p>
                    <h3
                      className={`mt-6 text-4xl font-extrabold drop-shadow-2xl md:text-5xl ${
                        bigWins.includes(lastPrize)
                          ? "animate-pulse text-yellow-300"
                          : "text-black"
                      }`}
                    >
                      {lastPrize}
                      {bigWins.includes(lastPrize) ? " 🎉" : ""}
                    </h3>
                    <p className="my-5 text-xl font-bold text-black md:text-xl">
                      Congratulations!
                    </p>
                  </div>
                )}
              </div>

              {/* CTA Button - opens full-screen modal */}
              <button
                onClick={() => setOpenSpin(true)}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#12888A] via-[#1180C2] to-[#2472F2] px-5 py-4 text-sm font-extrabold text-white shadow-lg transition hover:scale-[1.02] hover:shadow-xl"
              >
                <BoltIcon className="h-5 w-5" />
                SPIN TO WIN
              </button>

              {/* Footer */}
              <p className="mt-3 text-xs text-gray-400">
                No purchase necessary • Instant results
              </p>

              {/* Recent Winners (dynamic) */}
              <div className="mt-6 text-left">
                <p className="mb-2 text-xs font-semibold text-gray-500">
                  Recent Winners:
                </p>
                <ul className="space-y-1 text-sm text-gray-600">
                  {prizes.length > 0 ? (
                    prizes.map((prize, index) => (
                      <li key={index}>
                        🏆 A player won {prize} ·{" "}
                        {index === 0 ? "just now" : `${(index + 1) * 2}m ago`}
                      </li>
                    ))
                  ) : (
                    <>
                      <li>🏆 Mike R. won AirPods Pro · 2m ago</li>
                      <li>🏆 Lisa T. won Apple Watch · 3m ago</li>
                      <li>🏆 John D. won $500 · 5m ago</li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Card */}
      <div className="mt-16 max-w-350 mx-auto px-4 flex items-center pl-0 md:pl-20">
        <div>
          <SeekerProCard />
        </div>
        <div className="hidden md:block">
          <SeekerProCard />
        </div>
      </div>

      {/* Full-screen spin modal */}
      {openSpin && (
        <div className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center px-4 overflow-hidden">
          <button
            onClick={closeModal}
            className="absolute right-6 top-6 text-5xl text-white opacity-80 hover:opacity-100"
          >
            ×
          </button>

          <h2 className="mb-6 text-3xl font-extrabold text-white drop-shadow-2xl md:text-7xl">
            Spin the Wheel!
          </h2>
          <p className="mb-8 text-xl text-white/90 md:text-3xl">
            Good luck! 🍀
          </p>

          <Wheel
            segments={segments}
            badPrizes={badPrizes}
            onFinished={handleSpinEnd}
            onStartSpin={handleStartSpin}
            lastPrize={lastPrize}
            bigWins={bigWins}
          />

          {lastPrize && (
            <div className="mt-12 text-center">
              <p className="text-3xl text-white/90 md:text-5xl">You won:</p>
              <h3
                className={`mt-6 text-4xl font-extrabold drop-shadow-2xl md:text-8xl ${
                  bigWins.includes(lastPrize)
                    ? "animate-pulse text-yellow-300"
                    : "text-white"
                }`}
              >
                {lastPrize}
                {bigWins.includes(lastPrize) ? " 🎉" : ""}
              </h3>
              <p className="mt-8 text-4xl font-bold text-white md:text-6xl">
                Congratulations!
              </p>
            </div>
          )}
        </div>
      )}

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
