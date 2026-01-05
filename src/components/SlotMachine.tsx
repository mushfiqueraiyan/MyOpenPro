"use client";

import { BoltIcon, GiftIcon, SparklesIcon } from "lucide-react";
import { useState } from "react";
import SpinWheel from "@/components/SpinWheel";
import Confetti from "@/components/Confetti";

const SlotMachine = () => {
  const [openSpin, setOpenSpin] = useState(false);

  const [showConfetti, setShowConfetti] = useState(false);
  const [prizes, setPrizes] = useState<string[]>([]);

  const handleSpinEnd = (prize: string) => {
    setPrizes((prev) => [prize, ...prev].slice(0, 5));

    // Show confetti for big wins
    if (
      prize.includes("JACKPOT") ||
      prize.includes("$500") ||
      prize.includes("Diamond")
    ) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 100);
    }
  };

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

        <div className="min-h-screen flex flex-col overflow-hidden relative">
          <Confetti trigger={showConfetti} />

          {/* Ambient Vegas lights */}
          <div className="fixed inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-sapphire/10 rounded-full blur-[100px]" />
          </div>

          {/* Header */}
          <header className="text-center pt-8 pb-4 px-4 relative z-10">
            <div className="inline-block">
              <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground mb-2">
                ✧ Welcome to the ✧
              </p>
              <h1 className="font-display text-6xl md:text-8xl vegas-title tracking-wider mb-3">
                LUCKY SPIN
              </h1>
              <div className="flex items-center justify-center gap-3">
                <span className="jackpot-badge">🎰 Casino Royale</span>
              </div>
            </div>
          </header>

          {/* Main Game Area */}
          <main className="flex-1 flex flex-col items-center justify-center px-4 pb-8 relative z-10">
            <div className="casino-card max-w-xl w-full">
              {/* Stats Bar */}
              <div className="flex justify-between items-center mb-6 text-sm">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border">
                    <span className="text-muted-foreground text-xs uppercase tracking-wider">
                      Wins
                    </span>
                    <span className="font-display text-2xl text-primary">
                      {prizes.length}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setPrizes([])}
                  className="text-accent hover:text-primary transition-colors font-medium text-sm uppercase tracking-wider"
                >
                  Reset
                </button>
              </div>

              {/* Wheel */}
              <div className="flex justify-center py-4">
                <SpinWheel />
              </div>

              {/* Recent Prizes */}
              {prizes.length > 0 && (
                <div className="mt-6 pt-6 border-t border-border/50">
                  <h3 className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4 text-center">
                    🏆 Recent Wins 🏆
                  </h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {prizes.map((prize, i) => (
                      <span
                        key={i}
                        className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                          i === 0
                            ? "bg-primary/20 border-primary/50 text-primary"
                            : "bg-muted/30 border-border text-foreground/70"
                        }`}
                      >
                        {prize}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </main>

          {/* Footer */}
          <footer className="text-center py-6 relative z-10">
            <p className="text-muted-foreground text-sm font-display tracking-wider">
              🎲 Fortune Favors the Bold 🎲
            </p>
            <p className="text-muted-foreground/50 text-xs mt-2">
              Play responsibly • 21+ only
            </p>
          </footer>
        </div>

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
