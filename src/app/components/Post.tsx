"use client";

import { BoltIcon, CircleCheck, GiftIcon, SparklesIcon } from "lucide-react";
import ForumQuestion from "@/app/components/ForumQuestion";
import LimitedTime from "@/app/components/LimitedTime";
import Popup from "@/app/components/Popup";
import SeekerProCard from "@/app/components/SeekerProCard";
import React, { useEffect, useState } from "react";
import Feed from "@/app/components/Feed";
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
    <div className="py-10 mb-20">
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
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-400 hidden md:block">
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
          <div className="h-160 md:h-130  bg-card/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-400">
            <div className="bg-gradient-to-r from-[#D3EBF5] to-[#CEE6E6] px-4 py-2 ">
              <p className="text-xs text-center uppercase tracking-wider text-foreground">
                💬 Weekly Question
              </p>
            </div>
            <ForumQuestion />
          </div>
          <Feed />
        </div>

        {/* RIGHT COLUMN - Instant Win Teaser Card */}
        <div className="lg:self-start">
          <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl shadow-black/5">
            {/* Header */}
            <div className="bg-gradient-to-r from-emerald-100 to-teal-100 px-5 py-3">
              <p className="text-center text-xs font-semibold uppercase tracking-widest text-emerald-700">
                🎰 Instant Win Game
              </p>
            </div>

            <div className="relative p-6 text-center">
              {/* Glow */}
              <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-emerald-200/30 via-transparent to-sky-200/30 blur-3xl" />

              {/* Badge */}
              <div className="mb-4 flex items-center justify-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-semibold text-emerald-700">
                  <GiftIcon className="h-4 w-4" />
                  Spin & Win
                </span>
              </div>

              {/* Headline */}
              <h2 className="text-3xl font-extrabold text-gray-900">
                Win{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-teal-600 bg-clip-text text-transparent">
                  AirPods Pro 4
                </span>
              </h2>
              <p className="mt-1 text-sm text-gray-500">or Apple Watch Ultra</p>

              {/* Slot Teaser */}
              <div className="relative my-7 flex justify-center">
                <div className="absolute h-36 w-36 rounded-full bg-emerald-300/30 blur-3xl" />
                <div className="relative flex items-center gap-3 rounded-2xl bg-white px-6 py-4 shadow-lg">
                  {["🎧", "⌚", "🎁"].map((icon, i) => (
                    <div
                      key={i}
                      className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-50 text-2xl shadow-inner"
                    >
                      {icon}
                    </div>
                  ))}
                  <div className="absolute -right-3 top-1/2 h-10 w-3 -translate-y-1/2 rounded-full bg-gradient-to-b from-teal-400 to-teal-700 shadow-md" />
                </div>
              </div>

              {/* Odds */}
              <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-xs font-semibold text-sky-600">
                <CircleCheck className="h-4 w-4 text-sky-500" />
                First 100 spins have higher win rates
              </div>

              {/* Wheel */}
              <div className="mb-6">
                <Wheel
                  segments={segments}
                  badPrizes={badPrizes}
                  onFinished={handleSpinEnd}
                  onStartSpin={handleStartSpin}
                  lastPrize={lastPrize}
                  bigWins={bigWins}
                />

                {lastPrize && (
                  <div className="mt-6">
                    <p className="text-sm text-gray-500">You won</p>
                    <h3
                      className={`mt-2 text-4xl font-extrabold ${
                        bigWins.includes(lastPrize)
                          ? "animate-pulse text-yellow-400"
                          : "text-gray-900"
                      }`}
                    >
                      {lastPrize} {bigWins.includes(lastPrize) && "🎉"}
                    </h3>
                    <p className="mt-2 text-sm font-semibold text-emerald-600">
                      Congratulations!
                    </p>
                  </div>
                )}
              </div>

              {/* CTA */}
              <button
                onClick={() => setOpenSpin(true)}
                className="group relative flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 via-sky-500 to-blue-500 px-6 py-4 text-sm font-extrabold text-white shadow-lg transition hover:scale-[1.03] hover:shadow-2xl"
              >
                <BoltIcon className="h-5 w-5 animate-pulse" />
                SPIN TO WIN
              </button>

              {/* Trust */}
              <p className="mt-3 text-xs text-gray-400">
                No purchase required • Instant result
              </p>

              {/* Recent Winners */}
              <div className="mt-6 text-left">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Recent Winners
                </p>
                <ul className="space-y-1 text-sm text-gray-600">
                  {prizes.length > 0 ? (
                    prizes
                      .slice(0, 3)
                      .map((prize, i) => (
                        <li key={i}>🏆 Someone won {prize} · just now</li>
                      ))
                  ) : (
                    <>
                      <li>🏆 Mike R. won AirPods Pro · 2m ago</li>
                      <li>🏆 Lisa T. won Apple Watch · 4m ago</li>
                      <li>🏆 John D. won $500 · 6m ago</li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Card */}
      <div className="mt-16 w-auto mx-auto px-1 md:px-4   ">
        <SeekerProCard />
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
                className={`mt-3 text-4xl font-extrabold drop-shadow-2xl md:text-8xl ${
                  bigWins.includes(lastPrize)
                    ? "animate-pulse text-yellow-300"
                    : "text-white"
                }`}
              >
                {lastPrize}
                {bigWins.includes(lastPrize) ? " 🎉" : ""}
              </h3>
              <p className="mt-2 text-4xl font-bold text-white md:text-6xl">
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
