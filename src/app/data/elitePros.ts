import { StaticImageData } from "next/image";
import eliteOne from "../../assests/elitepro1.png";
import eliteTwo from "../../assests/elitePro2.png";
import eliteThree from "../../assests/elitepro3.png";
import eliteFour from "../../assests/elitepro4.png";

export type Pro = {
  id: number;
  name: string;
  location: string;
  price: string;
  rating: number;
  reviews: number;
  image: StaticImageData;
  phone: string;
  email: string;
  services: string[];
  bio: string;
};

export const pros: Pro[] = [
  {
    id: 1,
    name: "Alyssa Cappelletti",
    location: "Austin, TX",
    price: "$0.00 / visit*",
    rating: 5,
    reviews: 2,
    image: eliteOne,
    phone: "+1 512-555-1234",
    email: "alyssa@elitecare.com",
    services: ["Wellness Coaching", "Therapy", "Consultation"],
    bio: "Certified wellness professional with over 8 years of experience helping clients improve mental and physical well-being.",
  },
  {
    id: 2,
    name: "Mihael Rosano",
    location: "Tlalpan, CDMX",
    price: "$0.00 / visit*",
    rating: 5,
    reviews: 1,
    image: eliteTwo,
    phone: "+52 55-1234-5678",
    email: "mihael@elitecare.com",
    services: ["Physical Therapy", "Rehab", "Massage"],
    bio: "Specialized in physical rehabilitation and recovery programs for active professionals.",
  },
  {
    id: 3,
    name: "Walking Tall",
    location: "Asheville, NC",
    price: "$0.00 / visit*",
    rating: 5,
    reviews: 1,
    image: eliteThree,
    phone: "+1 828-555-9988",
    email: "walkingtall@elitecare.com",
    services: ["Posture Therapy", "Mobility Training"],
    bio: "Focused on posture correction and long-term mobility improvement.",
  },
  {
    id: 4,
    name: "Acapulco Luxury Apartment",
    location: "Ciudad de Mexico, CDMX",
    price: "$0.00 / visit*",
    rating: 5,
    reviews: 1,
    image: eliteFour,
    phone: "+52 55-9999-8888",
    email: "acapulco@elitecare.com",
    services: ["Luxury Wellness Stay", "Private Therapy"],
    bio: "High-end wellness experience combining comfort and professional care.",
  },
  {
    id: 5,
    name: "Acapulco Luxury Apartment",
    location: "Ciudad de Mexico, CDMX",
    price: "$0.00 / visit*",
    rating: 5,
    reviews: 1,
    image: eliteTwo,
    phone: "+52 55-9999-8888",
    email: "acapulco@elitecare.com",
    services: ["Luxury Wellness Stay", "Private Therapy"],
    bio: "High-end wellness experience combining comfort and professional care.",
  },
];
