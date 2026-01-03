"use client";

import { useState } from "react";

const PRIZES = [
  "10% OFF",
  "Free Coffee",
  "Try Again",
  "20% OFF",
  "Gift Card",
  "Nothing 😅",
];

export default function SpinWheel() {
  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [winner, setWinner] = useState<string | null>(null);

  const sliceAngle = 360 / PRIZES.length;

  const spinWheel = () => {
    if (spinning) return;

    setSpinning(true);
    setWinner(null);

    const randomSpin = Math.random() * 360;
    const fullRotations = 5 * 360;
    const finalRotation = rotation + fullRotations + randomSpin;

    setRotation(finalRotation);

    setTimeout(() => {
      const normalized = finalRotation % 360;
      const index = PRIZES.length - Math.floor(normalized / sliceAngle) - 1;

      setWinner(PRIZES[index]);
      setSpinning(false);
    }, 4000);
  };

  return (
    <div className="flex flex-col items-center gap-6 mt-5">
      {/* Wheel Container */}
      <div className="relative w-72 h-72">
        {/* Center Pointer */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="w-0 h-0 border-l-6 border-r-6 border-b-[14px] border-l-transparent border-r-transparent border-b-red-600 translate-y-[-6px]" />
        </div>

        {/* Wheel */}
        <div className="absolute inset-0 rounded-full border-8 border-gray-800 overflow-hidden">
          <div
            className="absolute inset-0 transition-transform duration-4000 ease-out"
            style={{ transform: `rotate(${rotation}deg)` }}
          >
            {PRIZES.map((prize, i) => {
              const angle = sliceAngle * i;
              const textAngle = angle + sliceAngle / 2;

              return (
                <div
                  key={i}
                  className="absolute inset-0"
                  style={{ transform: `rotate(${angle}deg)` }}
                >
                  {/* Slice background */}
                  <div
                    className="absolute top-0 left-1/2 w-1 h-1/2 origin-bottom"
                    style={{
                      backgroundColor: i % 2 === 0 ? "#e5e7eb" : "#d1d5db",
                    }}
                  />

                  {/* Text */}
                  <div
                    className="absolute inset-0 flex items-center justify-end pr-6"
                    style={{
                      transform: `rotate(${sliceAngle / 7}deg)`,
                    }}
                  >
                    <span
                      className="text-xs font-semibold whitespace-nowrap"
                      style={{
                        transform: `rotate(-${textAngle}deg)`,
                      }}
                    >
                      {prize}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Spin Button */}
      <button
        onClick={spinWheel}
        disabled={spinning}
        className="px-6 py-2 bg-black text-white rounded-md disabled:opacity-50"
      >
        {spinning ? "Spinning..." : "Spin"}
      </button>

      {/* Result */}
      {winner && (
        <div className="text-xl font-semibold text-green-600">
          🎉 You won: {winner}
        </div>
      )}
    </div>
  );
}
