"use client";

import {
  Bone,
  Brain,
  Heart,
  HeartPulse,
  Shield,
  Smile,
  Stethoscope,
  UserCheck,
} from "lucide-react";

export default function Speciality() {
  return (
    <section className="bg-white py-40">
      <div className="mx-auto max-w-6xl px-4">
        {/* Badge */}
        <div className="mb-4 flex justify-center">
          <span className="rounded-full bg-linear-to-r from-[#DAEAFD] to-[#CEFAF3] bg-blue-50 px-4 py-1 text-sm font-medium text-[#374151]">
            ⚡ Wellness Categories
          </span>
        </div>

        {/* Heading */}
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-6xl">
            Find a <span className="text-[#00BBA7]">Wellness Pro</span> by
            specialty
          </h2>
          <p className="mt-4 text-gray-500">
            Connect with world-class specialists across health, wellness, and
            lifestyle services.
          </p>
        </div>

        {/* GRID */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-6">
          {/*  Bone */}
          <div className="md:col-span-2">
            <div className="flex h-full flex-col rounded-xl bg-white p-6 shadow-lg transition hover:shadow-md">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500 text-xl text-white">
                <Bone />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Spine/Bone</h3>
              <p className="mt-2 text-sm text-gray-500">
                Orthopedic specialists for bone, joint, and spine care
              </p>
              <div className="flex-1" />
              <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                <span className="h-2 w-2 rounded-full bg-orange-500" />
                150+ Specialists
              </div>
            </div>
          </div>

          {/* Oral */}
          <div className="md:col-span-2">
            <div className="flex h-full flex-col rounded-xl bg-white p-6 shadow-lg transition hover:shadow-md">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-xl text-white">
                <Smile />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Oral</h3>
              <p className="mt-2 text-sm text-gray-500">
                Dental and oral health professionals
              </p>
              <div className="flex-1" />
              <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                <span className="h-2 w-2 rounded-full bg-blue-600" />
                200+ Specialists
              </div>
            </div>
          </div>

          {/* Skin */}
          <div className="md:col-span-2">
            <div className="flex h-full flex-col rounded-xl bg-white p-6 shadow-lg transition hover:shadow-md">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-pink-500 text-xl text-white">
                <Shield />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Skin</h3>
              <p className="mt-2 text-sm text-gray-500">
                Dermatology and skin care experts
              </p>
              <div className="flex-1" />
              <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                <span className="h-2 w-2 rounded-full bg-pink-500" />
                120+ Specialists
              </div>
            </div>
          </div>

          {/* Natural (Tall) */}
          <div className="md:col-span-2 md:row-span-2">
            <div className="flex h-full flex-col rounded-xl bg-white p-6 shadow-lg transition hover:shadow-md">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500 text-xl text-white">
                <HeartPulse />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Natural</h3>
              <p className="mt-2 text-sm text-gray-500">
                Holistic and naturopathic medicine
              </p>
              <div className="flex-1" />
              <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                80+ Specialists
              </div>
            </div>
          </div>

          {/* Internal */}
          <div className="md:col-span-2">
            <div className="flex h-full flex-col rounded-xl bg-white p-6 shadow-lg transition hover:shadow-md">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-600 text-xl text-white">
                <Stethoscope />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Internal</h3>
              <p className="mt-2 text-sm text-gray-500">
                Internal medicine and primary care
              </p>
              <div className="flex-1" />
              <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                <span className="h-2 w-2 rounded-full bg-purple-600" />
                300+ Specialists
              </div>
            </div>
          </div>

          {/* Mental Health */}
          <div className="md:col-span-2">
            <div className="flex h-full flex-col rounded-xl bg-white p-6 shadow-lg transition hover:shadow-md">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-500 text-xl text-white">
                <Brain />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Mental Health</h3>
              <p className="mt-2 text-sm text-gray-500">
                Psychology and psychiatric care
              </p>
              <div className="flex-1" />
              <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                <span className="h-2 w-2 rounded-full bg-yellow-500" />
                110+ Specialists
              </div>
            </div>
          </div>

          {/* Women's Health */}
          <div className="md:col-span-2">
            <div className="flex h-full flex-col rounded-xl bg-white p-6 shadow-lg transition hover:shadow-md">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-rose-500 text-xl text-white">
                <UserCheck />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Women's Health
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Specialized care for women's health needs
              </p>
              <div className="flex-1" />
              <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                <span className="h-2 w-2 rounded-full bg-rose-500" />
                85+ Specialists
              </div>
            </div>
          </div>

          {/* Cardiovascular */}
          <div className="md:col-span-2">
            <div className="flex h-full flex-col rounded-xl bg-white p-6 shadow-lg transition hover:shadow-md">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-400 text-xl text-white">
                <Heart />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Cardiovascular
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Heart and vascular system specialists
              </p>
              <div className="flex-1" />
              <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                <span className="h-2 w-2 rounded-full bg-orange-400" />
                95+ Specialists
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
