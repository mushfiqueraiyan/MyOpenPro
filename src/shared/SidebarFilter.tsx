"use client";
import { useState } from "react";
import { MapPin } from "lucide-react";

const practices = [
  "Allergy & Immunology",
  "Therapists & Mental Health Specialists, Psychiatrists",
  "Business & Marketing Services",
  "Dentistry & Oral Health",
  "Facial",
  "Hair Coloring",
  "Sports Massage",
  "Barbering",
  "One-On-One Personal Training",
  "Gym / Fitness Center",
];
const SidebarFilter = () => {
  const [distance, setDistance] = useState(5);
  const [selected, setSelected] = useState<string[]>([]);

  const togglePractice = (item: string) => {
    setSelected((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const selectAll = () => {
    setSelected(practices);
  };

  return (
    <div>
      <div className="w-full max-w-sm rounded-xl  p-5 ">
        {/* Zip Code */}
        <div className="mb-6">
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Zip Code
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder=""
              className="w-full rounded-lg border px-3 py-2 pr-28 text-sm focus:border-teal-500 focus:outline-none"
            />
            <button className="absolute right-3 top-1/2 flex -translate-y-1/2 items-center gap-1 text-sm text-teal-600 hover:underline">
              <MapPin size={16} />
              Use my location
            </button>
          </div>
        </div>

        {/* Distance */}
        <div className="mb-6">
          <p className="mb-2 text-sm font-medium text-gray-700">Distance</p>
          <input
            type="range"
            min={1}
            max={50}
            value={distance}
            onChange={(e) => setDistance(Number(e.target.value))}
            className="w-full accent-teal-600"
          />
          <p className="mt-1 text-center text-sm text-gray-600">
            within {distance} miles
          </p>
        </div>

        {/* By Practice */}
        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm font-semibold underline">By practice</p>
          <button
            onClick={selectAll}
            className="text-sm text-gray-700 hover:underline"
          >
            Select All
          </button>
        </div>

        {/* Practice List */}
        <div className="space-y-3">
          {practices.map((item) => (
            <label
              key={item}
              className="flex cursor-pointer items-start justify-between gap-3 text-sm text-gray-700"
            >
              <span>{item}</span>
              <input
                type="checkbox"
                checked={selected.includes(item)}
                onChange={() => togglePractice(item)}
                className="mt-1 h-4 w-4 rounded border-gray-300 accent-teal-600"
              />
            </label>
          ))}
        </div>

        {/* Show more */}
        <button className="mt-3 text-sm text-teal-600 hover:underline">
          Show more
        </button>

        {/* Apply Button */}
        <button className="mt-6 w-full rounded-lg border border-teal-600 px-4 py-2 text-sm font-medium text-teal-600 transition hover:bg-teal-50">
          Apply
        </button>
      </div>
    </div>
  );
};

export default SidebarFilter;
