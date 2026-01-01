import Image from "next/image";
import { notFound } from "next/navigation";
import {
  Star,
  MapPin,
  Phone,
  Mail,
  Calendar,
  MessageCircle,
  ArrowLeft,
} from "lucide-react";
import { featuredItems } from "@/app/data/featured";
import BackButton from "@/ui/ClientButton";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function EliteProProfilePage({ params }: Props) {
  const { id } = await params;

  const pro = featuredItems.find((p) => p.id === Number(id));

  if (!pro) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ================= HEADER ================= */}
      <div className="bg-linear-to-r from-blue-600 to-teal-500 px-6 py-10 mt-3">
        <div className="mx-auto max-w-7xl text-white">
          <BackButton />
        </div>
        <div className="mx-auto max-w-7xl flex items-center gap-6">
          <Image
            src={pro.image}
            alt={pro.title}
            className="rounded-full h-50 w-50 border-4 border-white object-cover"
          />

          <div className="text-white">
            <h1 className="text-3xl font-extrabold">{pro.title}</h1>

            <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1 text-sm">
              Food & Beverage, Hospitality Accommodations & Themed Venue
              Services
            </div>

            <div className="mt-3 flex flex-wrap items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">{pro.rating} Rating</span>
              </div>

              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                {pro.location}
              </div>

              <span className="underline cursor-pointer">Share Profile</span>
            </div>

            <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-white px-4 py-1 text-sm font-medium text-green-600">
              ● Currently Available
            </div>
          </div>
        </div>
      </div>

      {/* ================= BODY ================= */}
      <div className="mx-auto max-w-370 px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-8">
          {/* CONTACT INFO */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-5 shadow-sm flex gap-4">
              <div className="rounded-full bg-teal-50 p-2">
                <Phone className="text-teal-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="font-medium">{pro.phone}</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 shadow-sm flex gap-4">
              <div className="rounded-full bg-teal-50 p-2">
                <Mail className="text-teal-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium">{pro.email}</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 shadow-sm flex gap-4">
              <div className="rounded-full bg-teal-50 p-2">
                <MapPin className="text-teal-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-medium">
                  Parque Vía Reforma 2020, Ciudad de México, CDMX
                </p>
              </div>
            </div>
          </div>

          {/* ABOUT */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-bold mb-4">About</h2>
            <p className="text-gray-700">{pro.about}</p>

            {/* <h3 className="mt-6 font-semibold">Specialties & Services</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {pro.services.map((service) => (
                <span
                  key={service}
                  className="rounded-full bg-teal-50 px-4 py-1 text-sm font-medium text-teal-700"
                >
                  {service}
                </span>
              ))}
            </div> */}
          </div>

          {/* REVIEWS */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Reviews</h2>
              <button className="rounded-lg bg-teal-600 px-4 py-2 text-sm font-semibold text-white">
                + Write Review
              </button>
            </div>

            <div className="flex items-center gap-2 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-teal-500 text-teal-500" />
              ))}
              <span className="font-semibold">5.0</span>
              <span className="text-sm text-gray-500">(1 review)</span>
            </div>

            <div className="bg-teal-50 rounded-xl p-5">
              <div className="flex items-center justify-between">
                <p className="font-semibold">Pablo Diaz</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-teal-500 text-teal-500"
                    />
                  ))}
                </div>
              </div>

              <p className="mt-2 text-sm text-gray-700">
                Great apartment with awesome view in Acapulco, Mexico. Highly
                recommended for a weekend getaway from fast-paced life.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold mb-4">Book an Appointment</h3>
            <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-teal-600 py-3 text-sm font-semibold text-white">
              <Calendar className="h-4 w-4" />
              Schedule Now
            </button>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold mb-4">Want to chat?</h3>
            <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-teal-600 py-3 text-sm font-semibold text-white">
              <MessageCircle className="h-4 w-4" />
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
