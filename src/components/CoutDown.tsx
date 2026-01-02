"use client";

import Countdown, { CountdownRenderProps } from "react-countdown";

export default function CountdownTimer() {
  const targetDate = Date.now() + 5 * 60 * 60 * 1000; // 5 hours

  const renderer = ({ hours, minutes, seconds }: CountdownRenderProps) => (
    <div className="flex items-center gap-3">
      <div className="bg-white p-5 rounded-xl font-bold text-2xl shadow-emerald-100 shadow-xl text-[#15897E]">
        {String(hours).padStart(2, "0")}
      </div>
      <div className="bg-white p-5 rounded-xl font-bold text-2xl shadow-emerald-100 shadow-xl text-[#15897E]">
        {String(minutes).padStart(2, "0")}
      </div>
      <div className="bg-white p-5 rounded-xl font-bold text-2xl shadow-emerald-100 shadow-xl text-[#15897E]">
        {String(seconds).padStart(2, "0")}
      </div>
    </div>
  );

  return <Countdown date={targetDate} renderer={renderer} />;
}
