"use client";

import SpecialityCard from "../components/SpecialityCard";

const categories = [
  {
    title: "Spine/Bone",
    description: "Orthopedic specialists for bone, joint, and spine care",
    specialists: "150+ Specialists",
    color: "bg-orange-500",
    dot: "bg-orange-500",
    icon: "🦴",
  },
  {
    title: "Oral",
    description: "Dental and oral health professionals",
    specialists: "200+ Specialists",
    color: "bg-blue-600",
    dot: "bg-blue-600",
    icon: "😁",
  },
  {
    title: "Skin",
    description: "Dermatology and skin care experts",
    specialists: "120+ Specialists",
    color: "bg-pink-500",
    dot: "bg-pink-500",
    icon: "🧴",
  },
  {
    title: "Natural",
    description: "Holistic and naturopathic medicine",
    specialists: "80+ Specialists",
    color: "bg-emerald-500",
    dot: "bg-emerald-500",
    icon: "🌿",
  },
  {
    title: "Internal",
    description: "Internal medicine and primary care",
    specialists: "300+ Specialists",
    color: "bg-purple-600",
    dot: "bg-purple-600",
    icon: "🩺",
  },
  {
    title: "Mental Health",
    description: "Psychology and psychiatric care",
    specialists: "110+ Specialists",
    color: "bg-yellow-500",
    dot: "bg-yellow-500",
    icon: "🧠",
  },
  {
    title: "Women's Health",
    description: "Specialized care for women's health needs",
    specialists: "85+ Specialists",
    color: "bg-rose-500",
    dot: "bg-rose-500",
    icon: "♀️",
  },
  {
    title: "Cardiovascular",
    description: "Heart and vascular system specialists",
    specialists: "95+ Specialists",
    color: "bg-orange-400",
    dot: "bg-orange-400",
    icon: "❤️",
  },
];

export default function Speciality() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        {/* Badge */}
        <div className="mb-4 flex justify-center">
          <span className="rounded-full bg-blue-50 px-4 py-1 text-xs font-medium text-blue-600">
            ⚡ Wellness Categories
          </span>
        </div>

        {/* Heading */}
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-6xl">
            Find a <span className="text-emerald-500">Wellness Pro</span> by
            specialty
          </h2>
          <p className="mt-4 text-gray-500">
            Connect with world-class specialists across health, wellness, and
            lifestyle services. Our curated network ensures exceptional care
            from highly qualified professionals.
          </p>
        </div>

        {/* CUSTOM GRID */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-6">
          {/* Card 1 – col-span-2 (BIG) */}
          <div className="md:col-span-2">
            <SpecialityCard {...categories[0]} />
          </div>

          {/* Card 2 – normal */}
          <div className="md:col-span-2">
            <SpecialityCard {...categories[1]} />
          </div>

          {/* Card 3 – normal */}
          <div className="md:col-span-2">
            <SpecialityCard {...categories[2]} />
          </div>

          {/* Card 4 – row-span-2 */}
          <div className="md:col-span-2 md:row-span-2">
            <SpecialityCard {...categories[3]} />
          </div>

          {/* Card 5 – normal */}
          <div className="md:col-span-2">
            <SpecialityCard {...categories[4]} />
          </div>

          {/* Card 6 – normal */}
          <div className="md:col-span-2">
            <SpecialityCard {...categories[5]} />
          </div>

          {/* Card 7 – col-span-2 */}
          <div className="md:col-span-2">
            <SpecialityCard {...categories[6]} />
          </div>

          {/* Card 8 – col-span-2 */}
          <div className="md:col-span-2">
            <SpecialityCard {...categories[7]} />
          </div>
        </div>
      </div>
    </section>
  );
}
