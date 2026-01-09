import Alternative from "@/app/components/Alternative";
import CareSection from "@/app/components/CareSection";
import ElitePros from "@/app/components/ElitePros";
import FeaturedSection from "@/app/components/FeaturedSection";
import FitnessSection from "@/app/components/FitnessSection";
import Hero from "@/app/components/Hero";
import NewBlossend from "@/app/components/NewBlossend";
import Speciality from "@/app/components/Speciality";
import Map from "@/app/components/Map";
import PostFeed from "@/app/components/Post";

export default function Home() {
  return (
    <div className="">
      <PostFeed />
      <Hero />
      <ElitePros />
      <FeaturedSection />
      <CareSection />
      <FitnessSection />
      <NewBlossend />
      <Alternative />

      {/* Speciality */}
      <Speciality />
      <Map />
    </div>
  );
}
