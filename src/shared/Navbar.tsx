"use client";

import Image from "next/image";
import { Search, Bell, ChevronDown, Menu } from "lucide-react";
import logo from "../assests/logo.avif";
import { useState } from "react";

export default function Navbar() {
  type ProCateogry = "Wellness Pro" | "Doctor Pro" | "Self Pro";

  const [search, setSearch] = useState<ProCateogry>("Wellness Pro");

  return (
    <div className="relative">
      <div className="absolute -top-3.5 inset-0 bg-[linear-gradient(to_right,#e5f3f0_1px,transparent_1px),linear-gradient(to_bottom,#e5f3f0_1px,transparent_1px)] bg-size-[40px_40px] -z-10" />
      <nav className="max-w-7xl mx-auto bg-white border border-gray-200 rounded-4xl mt-5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 gap-4">
            {/* Left: Logo */}
            <div className="flex items-center gap-2">
              <Image src={logo} alt="Open My Pro" />
            </div>

            {/* Center: Search */}
            <div className="flex-1 max-w-2xl">
              <div className=" items-center hidden md:flex bg-gray-100 rounded-full px-4 py-2 gap-2">
                <Menu className="w-5 h-5 text-gray-600" />
                <select
                  value={search}
                  onChange={(e) => setSearch(e.target.value as ProCateogry)}
                  className="bg-transparent outline-none text-sm text-gray-600"
                >
                  <option>Wellness Pro</option>
                  <option>Doctor Pro</option>
                  <option>Self Pro</option>
                </select>

                <span className="text-gray-300">|</span>

                <input
                  type="text"
                  placeholder={`Search Pro ${search}`}
                  className="flex-1 bg-transparent outline-none text-sm"
                />

                <Search
                  size={30}
                  className=" text-gray-100 rounded-full p-2 bg-black"
                />
              </div>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                Company
                <ChevronDown className="w-4 h-4" />
              </button>

              <Bell className="w-5 h-5 text-gray-600 cursor-pointer" />

              <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center text-white font-semibold text-sm">
                G
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
