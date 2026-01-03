"use client";

import { BoltIcon, GiftIcon, SparklesIcon } from "lucide-react";
import { useState } from "react";
import Spin from "@/components/Spin";

const SlotMachine = () => {
  const [openSpin, setOpenSpin] = useState(false);

  return (
    <div>
      {" "}
      <div className="mx-auto w-full bg-[#FBFBFB]  px-6 py-8 text-center ">
        {/* Top Badge */}
        <div className="mb-4 flex items-center justify-center gap-2">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1 text-sm font-medium text-emerald-700">
            <GiftIcon className="h-4 w-4" />
            Spin & Win
          </span>
          <SparklesIcon className="h-4 w-4 text-emerald-500" />
        </div>

        {/* Title */}
        <h1 className="text-3xl  font-extrabold text-gray-800">
          WIN{" "}
          <span className="bg-linear-to-r from-emerald-400 to-teal-600 bg-clip-text text-transparent">
            AirPods Pro 4
          </span>
        </h1>
        <p className="mt-1 text-sm text-gray-500">or Apple Watch Ultra</p>

        {/* Spinner Area */}
        <div className="relative my-8 flex items-center justify-center">
          {/* Glow */}
          <div className="absolute h-40 w-40 rounded-full bg-emerald-200/40 blur-3xl" />

          {/* Slot */}
          <div className="relative flex items-center gap-3 rounded-2xl bg-white px-6 py-5 shadow-lg">
            <Prize icon="🎧" />
            <Prize icon="⌚" />
            <Prize icon="🎁" />

            {/* Handle */}
            <div className="absolute -right-4 top-1/2 h-12 w-4 -translate-y-1/2 rounded-full bg-linear-to-b from-teal-400 to-teal-700 shadow-md" />
          </div>
        </div>

        {/* Info Badge */}
        <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-blue-300 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-xs text-white">
            ✓
          </span>
          First 100 spins = 90% chance to win!
        </div>

        {/* CTA */}
        <button
          onClick={() => setOpenSpin(true)}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-[#12888A] via-[#1180C2] to-[#2472F2] text-white px-5 py-4 text-sm font-extrabold  shadow-lg transition hover:scale-[1.02] hover:shadow-xl"
        >
          <BoltIcon className="h-5 w-5" />
          JOIN SeekerPro → SPIN TO WIN
        </button>

        {openSpin && <Spin />}

        {/* Footer */}
        <p className="mt-3 text-xs text-gray-400">
          No purchase necessary • Instant results
        </p>

        {/* Recent Winners */}
        <div className="mt-6 text-left">
          <p className="mb-2 text-xs font-semibold text-gray-500">
            Recent Winners:
          </p>
          <ul className="space-y-1 text-sm text-gray-600">
            <li>🏆 Mike R. won AirPods Pro · 2m ago</li>
            <li>🏆 Lisa T. won Apple Watch · 2m ago</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SlotMachine;

function Prize({ icon }: { icon: string }) {
  return (
    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gray-50 text-2xl shadow-inner">
      {icon}
    </div>
  );
}
