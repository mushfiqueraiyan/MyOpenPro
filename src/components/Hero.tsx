import Image from "next/image";
import { ArrowRight, ShieldCheck, Headset, Star } from "lucide-react";
import heroImg from "../assests/herodoctor.avif";

export default function Hero() {
  return (
    <section className="relative h-200">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5f3f0_1px,transparent_1px),linear-gradient(to_bottom,#e5f3f0_1px,transparent_1px)] bg-size-[40px_40px]" />

      <div className="absolute top-5 left-10 w-70 h-70 bg-teal-200/30 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>

      <div className="absolute top-5 right-10 w-80 h-80 hidden md:flex bg-teal-200/30 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-30 items-center">
        {/* LEFT CONTENT */}
        <div>
          <div className="inline-flex border border-[#0d948944] items-center gap-2 bg-[#DFFCF6] text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-[#15897E] rounded-full" />
            Wellness Pros Available Now
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
            Your Wellness <br />
            Journey <span className="text-[#15897E]">Starts Here</span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-slate-600 max-w-xl text-lg">
            Connect with top professionals, book appointments instantly, and
            take charge of your personal care journey.
          </p>

          {/* CTA */}
          <button className="mt-8 inline-flex items-center gap-3 bg-[#15897E] hover:bg-[#108176] text-white px-6 py-4 rounded-xl font-semibold transition">
            Get Started Now
            <ArrowRight className="w-5 h-5" />
          </button>

          {/* Features */}
          <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              Verified Pros
            </div>
            <div className="flex items-center gap-2">
              <Headset className="w-5 h-5 text-emerald-600" />
              24/7 Support
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-emerald-600" />
              Top Rated
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">
          <div className="relative">
            <div className="absolute -inset-8 bg-emerald-200/40 rounded-4xl blur-2xl" />
            <div className=" absolute bg-[#B2E8E0] p-5 rounded-3xl shadow-xl w-115 h-115 md:w-150 md:h-150  -left-5 -top-5 rotate-6"></div>
            <div className="relative bg-white p-4 rounded-3xl shadow-xl">
              <Image
                src={heroImg}
                alt="Medical professionals"
                width={520}
                height={520}
                className="rounded-2xl object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
