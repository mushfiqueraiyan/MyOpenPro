import { ReactNode } from "react";

interface WheelFrameProps {
  children: ReactNode;
}

const WheelFrame = ({ children }: WheelFrameProps) => {
  // Generate LED lights around the frame
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
      {/* Outer decorative ring with LEDs */}
      <div className="absolute w-[380px] h-[380px] flex items-center justify-center">
        <div className="relative w-full h-full flex items-center justify-center">
          {leds}
        </div>
      </div>

      {/* Chrome frame */}
      <div className="wheel-frame">
        {/* Roulette-style pointer */}
        <div className="roulette-pointer" />

        {/* Inner wheel container */}
        <div className="relative z-10">{children}</div>
      </div>

      {/* Corner decorations */}
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

export default WheelFrame;
