import ElitePros from "@/components/ElitePros";
import FeaturedSection from "@/components/FeaturedSection";
import Hero from "@/components/Hero";
import Speciality from "@/components/Speciality";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <ElitePros />
      <FeaturedSection />

      {/* Speciality */}
      <Speciality />
    </div>
  );
}
