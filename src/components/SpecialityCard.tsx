type WellnessCategoryCardProps = {
  title: string;
  description: string;
  specialists: string;
  color: string;
  dot: string;
  icon: string;
};

export default function WellnessCategoryCard({
  title,
  description,
  specialists,
  color,
  dot,
  icon,
}: WellnessCategoryCardProps) {
  return (
    <div className="flex h-full flex-col rounded-xl  bg-white p-6 shadow-lg transition hover:shadow-md">
      {/* Icon */}
      <div
        className={`mb-4 flex h-10 w-10 items-center justify-center rounded-lg text-white ${icon}`}
      >
        {icon}
      </div>

      {/* Title */}
      <h3 className="font-semibold text-gray-900 text-md">{title}</h3>

      {/* Description */}
      <p className="mt-2 text-sm text-gray-500">{description}</p>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Footer */}
      <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
        <span className={`h-2 w-2 rounded-full ${dot}`} />
        {specialists}
      </div>
    </div>
  );
}
