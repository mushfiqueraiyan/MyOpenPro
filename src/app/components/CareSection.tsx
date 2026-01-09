import React from "react";

import { Sparkle, Sparkles } from "lucide-react";
import { featuredItems } from "@/app/data/featured";

import CareCard from "./CareCard";

const stats = [
  { value: "Elite Only", label: "Verified Excellence", color: "text-blue-600" },
  { value: "Top Rated", label: "Best Team Care", color: "text-green-600" },
  {
    value: "Quality Assured",
    label: "Peak Performance",
    color: "text-purple-600",
  },
  { value: "100%", label: "Client Excellence", color: "text-orange-500" },
];

const CareSection = () => {
  return (
    <div>
      <section className="bg-white pt-5 pb-10">
        <div className="mx-auto max-w-7xl px-4">
          {/* Header */}
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full">
              <Sparkles color="#00A663" size={60} />
            </div>
            <h2 className="text-5xl font-bold text-gray-900">
              TeamCare Elites
            </h2>
            <p className="mt-3 text-gray-500">
              Premier centers hand-selected for outstanding care, top
              performance, and verified excellence in physical rehabilitation &
              wellness.
            </p>
            <p className="mt-1 font-medium text-emerald-600">
              Elite quality. Proven results.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-2 gap-6 rounded-xl  bg-white p-6 shadow-md md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className={`text-2xl font-bold ${stat.color}`}>
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Cards */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {featuredItems.map((item) => (
              <CareCard key={item.title} {...item} />
            ))}
          </div>

          {/* Button */}
          <div className="mt-12 text-center">
            <button className="rounded-lg bg-linear-to-r from-emerald-600 to-blue-600 px-8 py-3 font-medium text-white shadow-md transition hover:opacity-90">
              See All Featured Centers & Wellness Professionals
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareSection;
