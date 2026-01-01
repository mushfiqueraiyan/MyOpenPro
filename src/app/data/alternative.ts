import { StaticImageData } from "next/image";
import userIcon from "../../assests/userIcon.png";

type Pro = {
  id: number;
  name: string;
  location: string;
  price: string;
  rating: number;
  reviews: number;
  image: StaticImageData;
  phone: string;
  email: string;

  about: string;
};

export const pros: Pro[] = [
  {
    id: 1,
    name: "Alyssa Cappelletti",
    location: "Austin, TX",
    email: "alyssa@example.com",
    phone: "+1 512-555-1234",
    about:
      "Wellness professional specializing in nutrition and personal training.",
    price: "$0.00 / visit*",
    rating: 5.0,
    reviews: 2,
    image: userIcon,
  },
  {
    id: 2,
    name: "Mihael Rosano",
    location: "Tlalpan, CDMX",
    email: "mihael@example.com",
    phone: "+52 55 1234 5678",
    about: "Expert in physiotherapy and holistic wellness solutions.",
    price: "$0.00 / visit*",
    rating: 5.0,
    reviews: 1,
    image: userIcon,
  },
  {
    id: 3,
    name: "Walking Tall",
    location: "Asheville, NC",
    email: "walkingtall@example.com",
    phone: "+1 828-555-9876",
    about: "Focused on outdoor wellness programs and lifestyle coaching.",
    price: "$0.00 / visit*",
    rating: 5.0,
    reviews: 1,
    image: userIcon,
  },
  {
    id: 4,
    name: "Acapulco Luxury Apartment",
    location: "Ciudad de Mexico, CDMX",
    email: "info@acapulcoluxury.com",
    phone: "+52 55 9876 5432",
    about: "Luxury wellness stay with premium services and amenities.",
    price: "$0.00 / visit*",
    rating: 5.0,
    reviews: 1,
    image: userIcon,
  },
  {
    id: 5,
    name: "Mihael Rosano",
    location: "Tlalpan, CDMX",
    email: "mihael@example.com",
    phone: "+52 55 1234 5678",
    about: "Expert in physiotherapy and holistic wellness solutions.",
    price: "$0.00 / visit*",
    rating: 5.0,
    reviews: 1,
    image: userIcon,
  },
];
