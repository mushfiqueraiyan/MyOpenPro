"use client";

import Image, { StaticImageData } from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  Star,
  MapPin,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import eliteOne from "../assests/elitepro1.png";
import eliteTwo from "../assests/elitePro2.png";
import eliteThree from "../assests/elitepro3.png";
import eliteFour from "../assests/elitepro4.png";

type Pro = {
  id: number;
  name: string;
  location: string;
  price: string;
  rating: number;
  reviews: number;
  image: StaticImageData;
};

const pros: Pro[] = [
  {
    id: 1,
    name: "Alyssa Cappelletti",
    location: "Austin, TX",
    price: "$0.00 / visit*",
    rating: 5.0,
    reviews: 2,
    image: eliteOne,
  },
  {
    id: 2,
    name: "Mihael Rosano",
    location: "Tlalpan, CDMX",
    price: "$0.00 / visit*",
    rating: 5.0,
    reviews: 1,
    image: eliteTwo,
  },
  {
    id: 3,
    name: "Walking Tall",
    location: "Asheville, NC",
    price: "$0.00 / visit*",
    rating: 5.0,
    reviews: 1,
    image: eliteThree,
  },
  {
    id: 4,
    name: "Acapulco Luxury Apartment",
    location: "Ciudad de Mexico, CDMX",
    price: "$0.00 / visit*",
    rating: 5.0,
    reviews: 1,
    image: eliteFour,
  },
  {
    id: 5,
    name: "Mihael Rosano",
    location: "Tlalpan, CDMX",
    price: "$0.00 / visit*",
    rating: 5.0,
    reviews: 1,
    image: eliteTwo,
  },
];

export default function ElitePros() {
  return (
    <section className="py-20 bg-white">
      <div className=" px-4">
        {/* Header */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-sm font-medium text-teal-700">
            ✨ Elite Wellness Network ✨
          </span>
        </div>
        <h2 className="text-center text-4xl md:text-5xl font-extrabold text-gray-900">
          Meet Our <span className="text-teal-500">Elite</span> Pros
        </h2>
        <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
          Connect with world-class professionals who combine cutting-edge
          expertise with compassionate care.
        </p>

        {/* Available Now */}
        <div className="mt-12 flex items-center justify-center gap-3">
          <h3 className="text-3xl font-bold text-teal-500">Available Now</h3>
          <span className="h-4 w-4 rounded-full bg-green-500" />
        </div>
        <p className="mt-2 text-center text-gray-600">
          Professionals accepting clients right now!
        </p>
        <div className="mt-6 flex justify-end max-w-7xl mx-auto">
          <button className="text-md font-medium text-teal-500 hover:underline">
            See all
          </button>
        </div>
        {/* Slider */}
        <div className="relative mt-10 max-w-350 mx-auto">
          <div className="absolute top-1/2 -left-10 md:-left-16 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-[#15897E] text-transparent!  p-2 shadow-lg swiper-button-prev">
            <ChevronLeft color="white" size={24} />
          </div>

          {/* Right Arrow */}
          <div className="absolute top-1/2  -right-10 md:-right-16 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-[#15897E] text-transparent! p-2 shadow-lg swiper-button-next">
            <ChevronRight color="white" size={24} />
          </div>

          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            spaceBetween={20}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              0: { slidesPerView: 1 }, // mobile
              640: { slidesPerView: 2 }, // tablet
              1024: { slidesPerView: 4 }, // desktop
            }}
            className="max-w-7xl mx-auto"
          >
            {pros.map((pro) => (
              <SwiperSlide key={pro.id}>
                <div className="relative overflow-hidden rounded-xl shadow-sm h-75 gap-2 flex">
                  <Image
                    src={pro.image}
                    alt={pro.name}
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-black/35 p-4 flex flex-col justify-between">
                    <div className="flex flex-col gap-1 mt-30">
                      <h4 className="font-semibold text-white">{pro.name}</h4>
                      <div className="mt-1 flex items-center gap-1 text-sm text-white">
                        <MapPin className="h-4 w-4" />
                        {pro.location}
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <div className="text-sm font-medium text-white">
                          {pro.price}
                        </div>
                        <div className="flex items-center gap-1 text-sm">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium text-white">
                            {pro.rating}
                          </span>
                          <span className="text-white">({pro.reviews})</span>
                        </div>
                      </div>
                      <button className="relative group mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-linear-to-r from-blue-600 to-teal-500 px-4 py-2 text-sm font-semibold text-white hover:opacity-90">
                        <Calendar className="h-4 w-4" />
                        Instant Book
                        <span
                          className=" absolute -bottom-1 left-0 h-1.5 w-full bg-linear-to-r from-cyan-400 to-blue-600 blur-[1px]
      shadow-[0_0_12px_rgba(56,189,248,0.9)] scale-x-0 group-hover:scale-x-88 origin-center transition-transform duration-300 ease-in-out"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
