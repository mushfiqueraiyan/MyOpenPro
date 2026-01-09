"use client";

import { Apple } from "lucide-react";
import circle from "@/assests/signupImage.png";
import Image from "next/image";

export default function SignupSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side */}
        <div className="relative flex flex-col items-center lg:items-start text-center lg:text-left">
          <p className="text-gray-700 mb-12 max-w-md">
            Sign up for OpenMyPro by Blossend and easily connect with trusted
            professionals, all from the comfort of your home. Take the first
            step towards better wellness by registering today and enjoy
            convenient access to the care you need.
          </p>

          {/* Circular Icons */}
          <div className="relative">
            {/* surrounding icons */}
            <Image
              src={circle}
              alt="blossend"
              className="h-100 w-100 rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Right Side - Signup Form */}
        <div className="bg-white rounded-xl shadow-lg p-10">
          <h2 className="text-2xl font-bold mb-6 text-center">Sign up</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Firstname"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <input
              type="text"
              placeholder="Lastname"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-900 transition"
            >
              Submit
            </button>
          </form>

          <div className="flex items-center my-4">
            <hr className="flex-1 border-gray-300" />
            <span className="mx-2 text-gray-400">or</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          <button className="flex items-center justify-center w-full border border-gray-300 py-3 rounded-lg gap-2 hover:bg-gray-50 transition mb-3">
            Continue with Google
          </button>
          <button className="flex items-center justify-center w-full bg-black text-white py-3 rounded-lg gap-2 hover:bg-gray-900 transition">
            <Apple size={20} /> Continue with Apple
          </button>
        </div>
      </div>
    </section>
  );
}
