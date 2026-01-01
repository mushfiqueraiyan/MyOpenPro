import { Sparkle, Sparkles } from "lucide-react";
import FeaturedCard from "./FeaturedCard";
import { featuredItems } from "@/app/data/featured";
const stats = [
  { value: "30+", label: "Featured Pros", color: "text-blue-600" },
  { value: "100+", label: "Wellness Experts", color: "text-green-600" },
  { value: "15K+", label: "Clients Served", color: "text-purple-600" },
  { value: "98%", label: "Satisfaction Rate", color: "text-orange-500" },
];

export default function FeaturedSection() {
  return (
    <section className="bg-white pt-5 pb-10">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full">
            <Sparkles color="#00A663" size={60} />
          </div>
          <h2 className="text-5xl font-bold text-gray-900">Featured</h2>
          <p className="mt-3 text-gray-500">
            Discover highly-rated professionals ready to provide expert care,
            just a click away!
          </p>
          <p className="mt-1 font-medium text-emerald-600">
            Trusted by thousands of clients.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-10 grid grid-cols-2 gap-6 rounded-xl  bg-white p-6 shadow-md md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
              <p className="mt-1 text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {featuredItems.map((item) => (
            <FeaturedCard key={item.title} {...item} />
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
  );
}
