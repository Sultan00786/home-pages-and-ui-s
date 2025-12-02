"use client";
import {
  ClickSlider,
  ItemSlider,
  LogoMarquee,
  NaveBar,
  PanelSlide,
  ScrollPopUpComponent,
  ScrollSlideItem,
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

const templateInfo = [
  {
    index: 1,
    imageUrl: "/assets/Outputs-1-scaled.jpg",
    heading: "Accelerate Your Business Growth",
    subHeading: "Unlock data-driven insights to scale faster and smarter.",
  },
  {
    index: 2,
    imageUrl: "/assets/Outputs-2-scaled.jpg",
    heading: "Smart Marketing Automation",
    subHeading: "Streamline campaigns with intelligent tools that boost ROI.",
  },
  {
    index: 3,
    imageUrl: "/assets/Outputs-3-scaled.jpg",
    heading: "Advanced Analytics Dashboard",
    subHeading: "Transform raw data into actionable business intelligence.",
  },
  {
    index: 4,
    imageUrl: "/assets/Outputs-4-scaled.jpg",
    heading: "Customer Engagement Reinvented",
    subHeading: "Deliver personalized experiences that increase retention.",
  },
  {
    index: 5,
    imageUrl: "/assets/Outputs-5-scaled.webp",
    heading: "Optimize Your Sales Pipeline",
    subHeading: "Visualize performance metrics and close deals faster.",
  },
  {
    index: 6,
    imageUrl: "/assets/Outputs-6-scaled.jpg",
    heading: "Real-Time Performance Tracking",
    subHeading: "Monitor KPIs instantly and make confident decisions.",
  },
  {
    index: 7,
    imageUrl: "/assets/Outputs-7-scaled.jpg",
    heading: "Drive Impactful Brand Strategy",
    subHeading: "Strengthen your presence with data-backed creative insights.",
  },
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
      <div className="mt-40" />
      <ClickSlider templates={templateInfo} />
      <NaveBar mouseX={mouseX} mouseY={mouseY} />
      <HomeLayout />
    </div>
  );
}

function HomeLayout() {
  return (
    <div className="my-24 w-full h-full flex flex-col items-center px-[30px]">
      <PanelSlide slideImgs={slides} uiToolbar="/assets/ui-toolbar.png" />
      <div className="h-[800px] w-full mt-[300px] flex flex-col items-center">
        <ItemSlider
          animateValue={-2016}
          animateTo="bottom"
          duration={10}
          itemArray={[...Array(6)].map((_, index) => (
            <Testimonial key={index} index={index} />
          ))}
        />
      </div>
      <div className="h-[800px] w-full mt-[300px] flex flex-col items-center">
        <ItemSlider
          animateValue={-2256}
          animateTo="top"
          duration={44}
          sliderClassName="gap-14"
          itemArray={[...Array(6)].map((_, index) => (
            <ScrollSlideItem key={index} index={index} />
          ))}
        />
      </div>
    </div>
  );
}
