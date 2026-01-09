"use client";

export default function InteractiveMap() {
  return (
    <div className="p-10 max-w-7xl mx-auto mb-20">
      <h1 className="text-5xl font-bold mb-4">
        Reach Our <span className="text-emerald-500">Location</span>
      </h1>

      <div className="w-full h-125 rounded-xl overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps?q=23.8103,90.4125&z=12&output=embed"
          width="100%"
          height="100%"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="border-0"
        />
      </div>
    </div>
  );
}
