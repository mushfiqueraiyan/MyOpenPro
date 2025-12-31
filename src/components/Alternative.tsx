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

import userIcon from "../assests/userIcon.png";

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
    image: userIcon,
  },
  {
    id: 2,
    name: "Mihael Rosano",
    location: "Tlalpan, CDMX",
    price: "$0.00 / visit*",
    rating: 5.0,
    reviews: 1,
    image: userIcon,
  },
  {
    id: 3,
    name: "Walking Tall",
    location: "Asheville, NC",
    price: "$0.00 / visit*",
    rating: 5.0,
    reviews: 1,
    image: userIcon,
  },
  {
    id: 4,
    name: "Acapulco Luxury Apartment",
    location: "Ciudad de Mexico, CDMX",
    price: "$0.00 / visit*",
    rating: 5.0,
    reviews: 1,
    image: userIcon,
  },
  {
    id: 5,
    name: "Mihael Rosano",
    location: "Tlalpan, CDMX",
    price: "$0.00 / visit*",
    rating: 5.0,
    reviews: 1,
    image: userIcon,
  },
];

const Alternative = () => {
  return (
    <div>
      <div className="mt-12 flex items-center justify-center gap-3">
        <h3 className="text-2xl font-bold text-[#0E968A]">
          Alternative Blossend Pros
        </h3>
      </div>
      <div className="h-1 w-35 bg-linear-to-r from-[#0E968A] via-[#37D0BC] to-[#17BAA7] mx-auto my-3" />

      <div className="relative mt-10 max-w-350 mx-auto">
        <div className="absolute top-1/2 -left-10 md:-left-16 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-white text-transparent!  p-2 shadow-xl swiper-button-prevv2">
          <ChevronLeft color="black" size={24} />
        </div>

        {/* Right Arrow */}
        <div className="absolute top-1/2  -right-10 md:-right-16 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-white  text-transparent! p-2 shadow-xl swiper-button-nextt2">
          <ChevronRight color="black" size={24} />
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".swiper-button-nextt2",
            prevEl: ".swiper-button-prevv2",
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
                  <div className="flex flex-col  mt-35">
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
  );
};

export default Alternative;
