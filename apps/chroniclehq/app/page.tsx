"use client";
import {
  ItemSlider,
  LogoMarquee,
  NaveBar,
  PanelSlide,
  ScrollPopUpComponent,
  Testimonial,
} from "@repo/ui/chroniclehq";
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

const logos = [
  "/assets/logo-openai.svg",
  "/assets/logo-hubspot.svg",
  "/assets/logo-figma.svg",
  "/assets/logo-plaid.svg",
  "/assets/logo-binance.svg",
  "/assets/logo-atlassian.svg",
  "/assets/logo-meta.webp",
  "/assets/logo-reforge.webp",
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
      <PanelSlide slideImgs={slides} uiToolbar="/assets/ui-toolbar.png" />
      <div className="h-[600px] w-full mt-[300px] flex flex-col items-center">
        <ItemSlider
          itemArray={[...Array(6)].map((_, index) => (
            <Testimonial key={index} index={index} />
          ))}
        />
      </div>
    </div>
  );
}
