"use client";

import { motion, Variants } from "motion/react";
import { useEffect, useState } from "react";
import { HomeButton } from "../button";
import { cn } from "../../cn";
import { pre, s } from "motion/react-client";

type SideTabesProps = {
  slideImgs: string[];
  currentSlide: number;
  setAnimationState: React.Dispatch<
    React.SetStateAction<"nextSlide" | "prevSlid" | "">
  >;
  setPreviousSlide: React.Dispatch<React.SetStateAction<null | number>>;
  setCurrentSlide: React.Dispatch<React.SetStateAction<number>>;
};

type SidePanelPros = {
  slideImgs: string[];
  uiToolbar: string;
};

function PanelSlide({ slideImgs, uiToolbar }: SidePanelPros) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [previousSlide, setPreviousSlide] = useState<null | number>(null);
  const [animationState, setAnimationState] = useState<
    "nextSlide" | "prevSlid" | ""
  >("");
  const currentSlideAnimation: Variants = {
    nextSlide: {
      translateY: 800,
    },
    prevSlid: {
      translateY: -800,
    },
  };
  const previousSlideAnimation: Variants = {
    nextSlide: {
      translateY: -800,
    },
    prevSlid: {
      translateY: 800,
    },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(currentSlide);
      if (currentSlide < slideImgs.length) {
        setPreviousSlide(currentSlide);
        setCurrentSlide(currentSlide + 1);
        setAnimationState("nextSlide");
      } else {
        setPreviousSlide(currentSlide);
        setCurrentSlide(0);
        setAnimationState("prevSlid");
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide, slideImgs.length]);
  return (
    <div className="">
      <div className="lg-panelSlide:w-[1192px] w-full h-full lg-panelSlide:h-[728px] bg-black-500/10 px-[70px] relative rounded-[0.8rem] border-4 border-black-900/10 overflow-hidden">
        <div className=" h-full relative z-0 flex-col gap-y-[60px]">
          {currentSlide !== null && currentSlide !== undefined && (
            <motion.img
              initial={previousSlide === null ? false : animationState}
              animate={previousSlide === null ? false : { translateY: 0 }}
              // exit={{ translateY: -800 }}          didn't work
              transition={{ duration: 0.35, ease: "easeInOut", delay: 0.3 }}
              variants={currentSlideAnimation}
              src={slideImgs[currentSlide]}
              alt={`slide-${currentSlide + 1}`}
              key={`current-slide-${currentSlide + 1}`}
              className="w-full rounded-[calc(0.8rem-4px)] absolute inset-0 m-auto"
            />
          )}
          {previousSlide !== null && previousSlide !== undefined && (
            <motion.img
              initial={previousSlide === null ? false : { translateY: 0 }}
              animate={previousSlide === null ? false : animationState}
              transition={{ duration: 0.35, ease: "easeInOut", delay: 0.3 }}
              variants={previousSlideAnimation}
              src={slideImgs[previousSlide]}
              alt={`slide-${previousSlide + 1}`}
              key={`previous-slide-${currentSlide + 1}`}
              className="w-full rounded-[calc(0.8rem-4px)] absolute inset-0 m-auto "
            />
          )}
        </div>
        <div className="">
          <img
            src={uiToolbar}
            alt="ui-toolbar"
            className="flex-1 absolute inset-0 z-10"
          />
        </div>
      </div>
      <SlideTabes
        slideImgs={slideImgs}
        currentSlide={currentSlide}
        setAnimationState={setAnimationState}
        setPreviousSlide={setPreviousSlide}
        setCurrentSlide={setCurrentSlide}
      />
    </div>
  );
}

export default PanelSlide;

function SlideTabes({
  slideImgs,
  currentSlide,
  setAnimationState,
  setPreviousSlide,
  setCurrentSlide,
}: SideTabesProps) {
  return (
    <div className="w-full py-4 flex gap-0.5 items-center justify-center">
      {slideImgs.map((_, index) => (
        <div
          key={`slide-tab-${index + 1}`}
          className={cn(
            "cursor-pointer py-1.5 px-3 roobert-16 hover:text-white transition-all duration-300 rounded-lg",
            index === currentSlide
              ? "text-white delay-300"
              : "text-black-400 delay-300"
          )}
          onClick={() => {
            if (index === currentSlide) return;
            if (index > currentSlide) setAnimationState("nextSlide");
            else setAnimationState("prevSlid");
            setPreviousSlide(currentSlide);
            setCurrentSlide(index);
          }}
        >
          slide {index + 1}
        </div>
      ))}
    </div>
  );
}
