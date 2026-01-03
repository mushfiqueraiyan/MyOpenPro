"use client";

import Countdown from "react-countdown";
import { useEffect, useState } from "react";

export default function CountdownTimer() {
  const [targetDate, setTargetDate] = useState<number | null>(null);

  useEffect(() => {
    setTargetDate(Date.now() + 5 * 60 * 60 * 1000);
  }, []);

  if (!targetDate) return null;

  return (
    <Countdown
      date={targetDate}
      renderer={({ hours, minutes, seconds }) => (
        <div className="flex items-center gap-3">
          {[hours, minutes, seconds].map((v, i) => (
            <div
              key={i}
              className="bg-white p-5 rounded-xl font-bold text-2xl shadow-emerald-100 shadow-xl text-[#15897E]"
            >
              {String(v).padStart(2, "0")}
            </div>
          ))}
        </div>
      )}
    />
  );
}
