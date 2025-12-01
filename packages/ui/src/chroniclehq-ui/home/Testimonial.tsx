"use client";
import { cn } from "../../cn";

export default function Testimonial({ index }: { index: number }) {
  return (
    <div
      key={index}
      className={cn(
        "min-w-[320px] h-80 flex-1 bg-black-500/15 rounded-lg border-black-900/30 border"
      )}
    >
      <h1 className="text-white">Testimonial {index + 1}</h1>
    </div>
  );
}
