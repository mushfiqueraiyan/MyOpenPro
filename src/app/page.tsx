import Alternative from "@/components/Alternative";
import CareSection from "@/components/CareSection";
import ElitePros from "@/components/ElitePros";
import FeaturedSection from "@/components/FeaturedSection";
import FitnessSection from "@/components/FitnessSection";
import Hero from "@/components/Hero";
import NewBlossend from "@/components/NewBlossend";
import Speciality from "@/components/Speciality";
import Map from "@/components/Map";
import PostFeed from "@/components/Post";

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
