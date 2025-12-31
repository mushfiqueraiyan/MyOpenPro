import React from "react";

import { Sparkle, Sparkles } from "lucide-react";
import feature1 from "../assests/feature1.webp";
import feature2 from "../assests/feature2.webp";
import feature3 from "../assests/feature3.webp";
import feature4 from "../assests/feature4.webp";

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

const featuredItems = [
  {
    title: "Acapulco Luxury Apartment",
    rating: 5,
    reviews: 1,
    description: "Apartment on the beach in Acapulco",
    status: "Active",
    image: feature1,
  },
  {
    title: "Kokoro Wellness",
    rating: 5,
    reviews: 1,
    description: "State of the art fitness and wellness center...",
    status: "Active",
    image: feature2,
  },
  {
    title: "Hand To Shoulder Austin",
    rating: 5,
    reviews: 1,
    description: "Austin’s premier hand, wrist, elbow and shoulder care",
    status: "Active",
    image: feature3,
  },
  {
    title: "Kyle B",
    rating: 5,
    reviews: 1,
    description: "Business and leadership advisor, serial entrepreneur...",
    status: "Active",
    image: feature4,
  },
  {
    title: "Stephen Kwame Ansong",
    rating: 5,
    reviews: 2,
    description: "Dedicated fitness coach specializing in strength training",
    status: "Inactive",
    image: feature1,
  },
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
