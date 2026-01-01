"use client";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push("/")}
      className="flex cursor-pointer items-center gap-2 mb-5"
    >
      <ArrowLeft /> Back to Home
    </button>
  );
}
