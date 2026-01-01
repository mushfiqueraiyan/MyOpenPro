"use client";
import { ArrowRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";

type FitnessProp = {
  id: number;
  title: string;
  rating: number;
  reviews: number;
  description: string;
  about: string;
  phone: string;
  email: string;
  location: string;
  status: string;
  image: StaticImageData;
};
const FitnessCard = ({
  id,
  about,
  location,
  phone,
  title,
  rating,
  reviews,
  description,
  status,
  image,
}: FitnessProp) => {
  const router = useRouter();

  return (
    <div>
      <div
        onClick={() => router.push(`/featured/${id}`)}
        className="rounded-xl cursor-pointer border-t-3 hover:border-t transform duration-300 ease-in border-[#2ad4ce] bg-[#f2fef836] p-4 shadow-md transition hover:shadow-md"
      >
        <div className="flex items-center gap-3">
          {/* Image */}
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-emerald-50">
            {image ? (
              <Image
                src={image}
                alt={title}
                className="h-full w-full rounded-lg object-cover"
              />
            ) : (
              <span className="text-xl">🏥</span>
            )}
          </div>

          {/* Title */}
          <h3 className="text-md font-semibold text-gray-900">{title}</h3>
        </div>

        {/* Rating */}
        <div className="mt-1 text-sm text-orange-500">
          ⭐ {rating}.0{" "}
          <span className="text-gray-400">({reviews} review)</span>
        </div>

        {/* Description */}
        <p className="mt-2 mb-4 text-sm text-gray-500 line-clamp-3">
          {description}
        </p>

        <hr className="text-emerald-100" />

        {/* Footer */}
        <div className="mt-4 flex items-center justify-between">
          <span
            className={`flex items-center gap-1 text-xs font-medium ${
              status === "Active" ? "text-emerald-600" : "text-gray-400"
            }`}
          >
            ● {status}
          </span>

          <span className="text-xs text-gray-400">
            <ArrowRight size={15} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default FitnessCard;
