"use client";

import { useState, useRef, useEffect } from "react";

interface WheelProps {
  segments: string[];
  badPrizes: string[];
  onFinished: (prize: string) => void;
  onStartSpin: () => void;
  lastPrize: string;
  bigWins: string[];
}

const Wheel: React.FC<WheelProps> = ({
  segments,
  badPrizes,
  onFinished,
  onStartSpin,
  lastPrize,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [canvasSize, setCanvasSize] = useState(360);

  // Responsive size
  useEffect(() => {
    const updateSize = () => {
      const size = Math.min(window.innerWidth * 0.9, 380);
      setCanvasSize(Math.max(size, 300));
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const segColors = segments.map((_, i) =>
    i % 2 === 0 ? "#dc2626" : "#0f172a"
  );

  const spin = () => {
    if (isSpinning) return;

    onStartSpin();
    setIsSpinning(true);

    const segmentAngle = 360 / segments.length;

    const good: number[] = [];
    const bad: number[] = [];

    segments.forEach((s, i) =>
      badPrizes.includes(s) ? bad.push(i) : good.push(i)
    );

    const winIndex =
      Math.random() < 0.9 && good.length
        ? good[Math.floor(Math.random() * good.length)]
        : bad[Math.floor(Math.random() * bad.length)] || 0;

    const centerAngle = winIndex * segmentAngle + segmentAngle / 2;
    const spins = 6 + Math.floor(Math.random() * 4);
    const target = spins * 360 + centerAngle;

    const duration = 6000;
    const start = performance.now();
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 4);

    const animate = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      const eased = easeOut(progress);
      const angle = target * eased;

      setRotation(angle);
      draw(angle);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setIsSpinning(false);
        onFinished(segments[winIndex]);
      }
    };

    requestAnimationFrame(animate);
  };

  const draw = (rot = 0) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;

    canvas.width = canvasSize * dpr;
    canvas.height = canvasSize * dpr;
    canvas.style.width = `${canvasSize}px`;
    canvas.style.height = `${canvasSize}px`;

    // 🔥 CRITICAL FIX
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);

    const center = canvasSize / 2;
    const radius = center * 0.9;

    ctx.clearRect(0, 0, canvasSize, canvasSize);

    ctx.save();
    ctx.translate(center, center);
    ctx.rotate(-Math.PI / 2 + (rot * Math.PI) / 180);

    const arc = (2 * Math.PI) / segments.length;

    segments.forEach((label, i) => {
      ctx.beginPath();
      ctx.arc(0, 0, radius, i * arc, (i + 1) * arc);
      ctx.lineTo(0, 0);
      ctx.fillStyle = segColors[i];
      ctx.fill();
      ctx.strokeStyle = "#fff";
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.save();
      ctx.rotate(i * arc + arc / 2);
      ctx.fillStyle = "#fff";
      ctx.font = `bold ${canvasSize / 18}px system-ui`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(label, radius * 0.7, 0);
      ctx.restore();
    });

    ctx.restore();

    // Pointer
    ctx.beginPath();
    ctx.moveTo(center - 15, 10);
    ctx.lineTo(center + 15, 10);
    ctx.lineTo(center, 45);
    ctx.fillStyle = "#fff";
    ctx.fill();
  };

  useEffect(() => {
    draw(rotation);
  }, [rotation, canvasSize]);

  return (
    <div className="relative inline-block">
      <canvas ref={canvasRef} />

      <button
        onClick={spin}
        disabled={isSpinning}
        className="absolute top-1/2 left-1/2 z-10 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-sm font-bold uppercase text-white shadow-xl disabled:opacity-60"
      >
        {isSpinning ? "Spinning…" : lastPrize ? "Spin Again" : "Spin Now"}
      </button>
    </div>
  );
};

export default Wheel;
