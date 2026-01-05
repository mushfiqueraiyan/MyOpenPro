import { useState, useEffect, ReactNode } from "react";
import { SpinWheel as SpinWheelGame, ISpinWheelProps } from "spin-wheel-game";

// ============ CONFETTI COMPONENT ============
const Confetti = ({ trigger }: { trigger: boolean }) => {
  const [particles, setParticles] = useState<
    Array<{
      id: number;
      x: number;
      color: string;
      delay: number;
      size: number;
    }>
  >([]);

  useEffect(() => {
    if (trigger) {
      const colors = [
        "#D69E2E",
        "#E53E3E",
        "#48BB78",
        "#4299E1",
        "#9F7AEA",
        "#ED64A6",
      ];
      const newParticles = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 0.5,
        size: Math.random() * 8 + 4,
      }));
      setParticles(newParticles);

      const timer = setTimeout(() => setParticles([]), 3000);
      return () => clearTimeout(timer);
    }
  }, [trigger]);

  if (particles.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute animate-fall"
          style={{
            left: `${particle.x}%`,
            top: "-20px",
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            animationDelay: `${particle.delay}s`,
            borderRadius: Math.random() > 0.5 ? "50%" : "0",
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
        />
      ))}
    </div>
  );
};

// ============ WHEEL FRAME COMPONENT ============
const WheelFrame = ({ children }: { children: ReactNode }) => {
  const ledCount = 24;
  const leds = Array.from({ length: ledCount }, (_, i) => {
    const angle = (i / ledCount) * 360;
    const delay = (i / ledCount) * 1.5;
    const colors = ["bg-primary", "bg-secondary", "bg-accent", "bg-sapphire"];
    const color = colors[i % colors.length];

    return (
      <div
        key={i}
        className={`led-light ${color} absolute`}
        style={{
          transform: `rotate(${angle}deg) translateY(-170px)`,
          animationDelay: `${delay}s`,
          boxShadow: `0 0 8px currentColor, 0 0 16px currentColor`,
        }}
      />
    );
  });

  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute w-[380px] h-[380px] flex items-center justify-center">
        <div className="relative w-full h-full flex items-center justify-center">
          {leds}
        </div>
      </div>
      <div className="wheel-frame">
        <div className="roulette-pointer" />
        <div className="relative z-10">{children}</div>
      </div>
      <div className="absolute -top-4 -left-4 text-3xl star-decoration">✦</div>
      <div
        className="absolute -top-4 -right-4 text-3xl star-decoration"
        style={{ animationDelay: "0.5s" }}
      >
        ✦
      </div>
      <div
        className="absolute -bottom-4 -left-4 text-3xl star-decoration"
        style={{ animationDelay: "1s" }}
      >
        ✦
      </div>
      <div
        className="absolute -bottom-4 -right-4 text-3xl star-decoration"
        style={{ animationDelay: "1.5s" }}
      >
        ✦
      </div>
    </div>
  );
};

// ============ SPIN WHEEL COMPONENT ============
const segments = [
  { segmentText: "🎁 $100", segColor: "#E53E3E" },
  { segmentText: "⭐ 50 Pts", segColor: "#1A1A2E" },
  { segmentText: "🎉 JACKPOT", segColor: "#D69E2E" },
  { segmentText: "💎 Diamond", segColor: "#1A1A2E" },
  { segmentText: "🔥 2x Bonus", segColor: "#E53E3E" },
  { segmentText: "🌟 VIP Pass", segColor: "#1A1A2E" },
  { segmentText: "💰 $500", segColor: "#D69E2E" },
  { segmentText: "🎲 Try Again", segColor: "#E53E3E" },
];

const SpinWheel = ({ onSpinEnd }: { onSpinEnd?: (prize: string) => void }) => {
  const [winner, setWinner] = useState<string | null>(null);

  const handleSpinEnd = (result: string) => {
    setWinner(result);
    onSpinEnd?.(result);
  };

  const spinWheelProps: ISpinWheelProps = {
    segments,
    onFinished: handleSpinEnd,
    primaryColor: "#0D0D1A",
    contrastColor: "#FAFAF9",
    buttonText: "SPIN",
    size: 290,
    upDuration: 100,
    downDuration: 1000,
    fontFamily: "Bangers",
    arrowLocation: "top",
    showTextOnSpin: true,
    isOnlyOnce: false,
    isSpinSound: true,
  };

  return (
    <div className="flex flex-col items-center gap-8">
      <WheelFrame>
        <SpinWheelGame {...spinWheelProps} />
      </WheelFrame>
      {winner && (
        <div className="prize-display animate-scale-in">
          <p className="text-muted-foreground text-xs uppercase tracking-[0.3em] mb-2">
            🎰 Winner 🎰
          </p>
          <p className="text-3xl font-display text-primary drop-shadow-[0_0_10px_hsl(var(--primary))]">
            {winner}
          </p>
        </div>
      )}
    </div>
  );
};

// ============ MAIN PAGE ============
const Index = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [prizes, setPrizes] = useState<string[]>([]);

  const handleSpinEnd = (prize: string) => {
    setPrizes((prev) => [prize, ...prev].slice(0, 5));
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
    <div className="min-h-screen flex flex-col overflow-hidden relative">
      <Confetti trigger={showConfetti} />
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-sapphire/10 rounded-full blur-[100px]" />
      </div>
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
      <main className="flex-1 flex flex-col items-center justify-center px-4 pb-8 relative z-10">
        <div className="casino-card max-w-xl w-full">
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
          <div className="flex justify-center py-4">
            <SpinWheel onSpinEnd={handleSpinEnd} />
          </div>
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
      <footer className="text-center py-6 relative z-10">
        <p className="text-muted-foreground text-sm font-display tracking-wider">
          🎲 Fortune Favors the Bold 🎲
        </p>
        <p className="text-muted-foreground/50 text-xs mt-2">
          Play responsibly • 21+ only
        </p>
      </footer>
    </div>
  );
};

export default Index;
