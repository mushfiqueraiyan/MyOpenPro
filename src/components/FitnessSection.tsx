import React from "react";
import { Dumbbell, Sparkle, Sparkles } from "lucide-react";
import feature1 from "../assests/feature1.webp";
import feature2 from "../assests/feature2.webp";
import feature3 from "../assests/feature3.webp";
import feature4 from "../assests/feature4.webp";

import CareCard from "./CareCard";
import FitnessCard from "./FitnessCard";
import { StaticImageData } from "next/image";

type Fit = {
  title: string;
  rating: number;
  reviews: number;
  description: string;
  status: string;
  image: StaticImageData;
};

const stats = [
  { value: "5+", label: "Fitness Partner", color: "text-blue-600" },
  { value: "50+", label: "Trainers Expert", color: "text-green-600" },
  {
    value: "1k+",
    label: "Happy clients",
    color: "text-purple-600",
  },
  { value: "97%", label: "Client Satisfaction", color: "text-orange-500" },
];

const featuredItems: Fit[] = [
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
const FitnessSection = () => {
  return (
    <div>
      <section className="bg-white pt-5 pb-10">
        <div className="mx-auto max-w-7xl px-4">
          {/* Header */}
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full">
              <Dumbbell color="blue" size={60} />
            </div>
            <h2 className="text-5xl font-bold text-gray-900">
              Fitness, Exercise & Performance Coaching
            </h2>
            <p className="mt-3 text-gray-500">
              Unlock your full potential with Blossend’s network of fitness,
              sports medicine, and performance experts.
            </p>
            <p className="mt-1 font-medium text-blue-500">
              Book premium fitness & coaching services alongside your wellness
              appointments.
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
              <FitnessCard key={item.title} {...item} />
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

export default FitnessSection;
