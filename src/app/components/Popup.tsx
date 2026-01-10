import { AlertTriangle, Bell, Gift, Lock, X, Zap } from "lucide-react";
import React, { useState } from "react";

interface Popup {
  isVisible: boolean;
  onClose: () => void;
  onRemindLater: () => void;
}

const Popup = ({ isVisible, onClose, onRemindLater }: Popup) => {
  const [email, setEmail] = useState("");

  if (!isVisible) return null;

  return (
    <div>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm px-4">
        <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
          >
            <X size={20} />
          </button>

          {/* Warning Badge */}
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
              <AlertTriangle size={16} />
              WAIT! YOU’RE ABOUT TO MISS THIS
            </span>
          </div>

          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="flex h-28 w-28 items-center justify-center rounded-2xl bg-emerald-50">
              <span className="text-5xl">📱</span>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-center text-2xl font-bold text-emerald-700 mb-2">
            iPhone 17 Pro Max
          </h2>

          {/* Subtitle */}
          <p className="text-center text-sm text-gray-600 mb-6">
            Leave without entering? Giveaway closes in{" "}
            <span className="font-semibold text-blue-600">24hrs</span>
          </p>

          {/* Email */}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full h-12 bg-muted/50 border border-gray-100 rounded-lg px-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          />

          {/* Primary CTA */}
          <button className="w-full mt-5 rounded-xl bg-linear-to-r from-yellow-300 to-orange-300 py-3 text-sm font-semibold text-gray-900 hover:scale-[1.02] transition mb-3">
            🎁 JOIN NOW & ENTER
          </button>

          {/* Secondary CTA */}
          <button
            onClick={onRemindLater}
            className="w-full rounded-xl border border-gray-200 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition flex items-center justify-center gap-2"
          >
            <Bell size={16} />
            Remind Me Later
          </button>

          {/* Footer */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <Lock size={14} /> Cancel anytime
            </div>
            <div className="flex items-center gap-1">
              <Zap size={14} /> Instant entry
            </div>
            <div className="flex items-center gap-1">
              <Gift size={14} /> Real prizes
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
