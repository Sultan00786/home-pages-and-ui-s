"use client";
import { NaveBar } from "@repo/ui/chroniclehq";
import { useMotionValue } from "motion/react";
import { MouseEvent } from "react";
export default function Home() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  function handleSetMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    mouseX.set(clientX);
    mouseY.set(clientY);
  }
  return (
    <div onMouseMove={handleSetMouseMove} className="w-full min-h-screen">
      <NaveBar mouseX={mouseX} mouseY={mouseY} />
    </div>
  );
}
