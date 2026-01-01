"use client";

import Image from "next/image";
import { Search, Bell, ChevronDown, Menu, X, Filter } from "lucide-react";
import logo from "../assests/logo.avif";
import { useState } from "react";

export default function Navbar() {
  type ProCateogry = "Wellness Pro" | "Doctor Pro" | "Self Pro";

  const [search, setSearch] = useState<ProCateogry>("Wellness Pro");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="relative">
      <div className="absolute -top-3.5 inset-0 bg-[linear-gradient(to_right,#e5f3f0_1px,transparent_1px),linear-gradient(to_bottom,#e5f3f0_1px,transparent_1px)] bg-size-[40px_40px] -z-10" />
      <nav className="max-w-7xl mx-auto bg-white border border-gray-200 rounded-4xl mt-5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 gap-4">
            {/* Left: Logo */}
            <div className="flex items-center gap-2">
              <Image width={50} height={50} src={logo} alt="Open My Pro" />
            </div>

            {/* Center: Search */}
            <div className="flex-1 max-w-2xl">
              <div className=" items-center hidden md:flex bg-gray-100 rounded-full px-4 py-2 gap-2">
                <Menu
                  onClick={() => setSidebarOpen(true)}
                  className="w-5 h-5 text-gray-600 cursor-pointer hover:text-emerald-600 transform duration-300"
                />
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

      <div
        className={`fixed inset-0 z-50 transition-transform transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } bg-white w-90 shadow-lg`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-bold flex items-center justify-between gap-3">
            Search Filter <Filter />
          </h2>
          <button onClick={() => setSidebarOpen(false)}>
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        <ul className="p-4 flex flex-col gap-4">
          <li>
            <a href="#" className="hover:text-teal-500">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-teal-500">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-teal-500">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-teal-500">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0  z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
