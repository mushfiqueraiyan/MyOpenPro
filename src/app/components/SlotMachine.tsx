"use client";

import { BoltIcon, CircleCheck, GiftIcon, SparklesIcon } from "lucide-react";
import { useState } from "react";
import Wheel from "./Wheel";

const SlotMachine = () => {
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

  return (
    <div>
      {/* Main teaser section */}
      <div className="mx-auto w-full max-w-md bg-[#FBFBFB] px-6 py-8 text-center">
        {/* ... (all your existing teaser content unchanged) ... */}
        <div className="mb-4 flex items-center justify-center gap-2">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1 text-sm font-medium text-emerald-700">
            <GiftIcon className="h-4 w-4" />
            Spin & Win
          </span>
          <SparklesIcon className="h-4 w-4 text-emerald-500" />
        </div>

        <h1 className="text-3xl font-extrabold text-gray-800">
          WIN{" "}
          <span className="bg-gradient-to-r from-emerald-400 to-teal-600 bg-clip-text text-transparent">
            AirPods Pro 4
          </span>
        </h1>
        <p className="mt-1 text-sm text-gray-500">or Apple Watch Ultra</p>

        <div className="relative my-8 flex items-center justify-center">
          <div className="absolute h-40 w-40 rounded-full bg-emerald-200/40 blur-3xl" />
          <div className="relative flex items-center gap-3 rounded-2xl bg-white px-6 py-5 shadow-lg">
            <Prize icon="🎧" />
            <Prize icon="⌚" />
            <Prize icon="🎁" />
            <div className="absolute -right-4 top-1/2 h-12 w-4 -translate-y-1/2 rounded-full bg-gradient-to-b from-teal-400 to-teal-700 shadow-md" />
          </div>
        </div>

        <div className="mx-auto mb-5 flex items-center gap-2 rounded-full border border-blue-300 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-xs text-white">
            <CircleCheck />
          </span>
          First 100 spins = 90% chance to win!
        </div>

        <button
          onClick={() => setOpenSpin(true)}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#12888A] via-[#1180C2] to-[#2472F2] px-5 py-4 text-sm font-extrabold text-white shadow-lg transition hover:scale-[1.02] hover:shadow-xl"
        >
          <BoltIcon className="h-5 w-5" />
          SPIN TO WIN
        </button>

        <p className="mt-3 text-xs text-gray-400">
          No purchase necessary • Instant results
        </p>

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
  );
};

function Prize({ icon }: { icon: string }) {
  return (
    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gray-50 text-2xl shadow-inner">
      {icon}
    </div>
  );
}

export default SlotMachine;
