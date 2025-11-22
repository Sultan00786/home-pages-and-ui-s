"use client";
import { NaveBar, PanelSlide } from "@repo/ui/chroniclehq";
import { useMotionValue } from "motion/react";
import { MouseEvent } from "react";
const slides = [
  "/assets/slide1.webp",
  "/assets/slide2.webp",
  "/assets/slide3.jpg",
  "/assets/slide4.webp",
  "/assets/slide5.png",
  "/assets/slide6.webp",
  "/assets/slide7.webp",
  "/assets/slide8.jpg",
];
export default function Home() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  function handleSetMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  return (
    <div onMouseMove={handleSetMouseMove} className="w-full min-h-screen">
      <NaveBar mouseX={mouseX} mouseY={mouseY} />
      <HomeLayout />
    </div>
  );
}

function HomeLayout() {
  return (
    <div className="my-24 w-full h-full flex flex-col items-center px-[30px]">
      <div className=""></div>
      <PanelSlide slideImgs={slides} uiToolbar="/assets/ui-toolbar.png" />
    </div>
  );
}
