"use client";

import { motion, Variants } from "motion/react";
import { useState } from "react";
import { HomeButton } from "../button";
import { cn } from "../../cn";
import { pre } from "motion/react-client";

function PanelSlide({
  slideImgs,
  uiToolbar,
}: {
  slideImgs: string[];
  uiToolbar: string;
}) {
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
  return (
    <div className="">
      <div className="lg-panelSlide:w-[1192px] w-full h-full lg-panelSlide:h-[728px] bg-black-500/10 px-[70px] relative rounded-[0.8rem] border-4 border-black-900/10 overflow-hidden">
        <div className=" h-full relative z-0 flex-col gap-y-[60px]">
          {(currentSlide || currentSlide === 0) && (
            <motion.img
              initial={!previousSlide ? false : animationState}
              animate={!previousSlide ? false : { translateY: 0 }}
              // exit={{ translateY: -800 }}          didn't work
              transition={{ duration: 0.35, ease: "easeInOut", delay: 0.3 }}
              variants={currentSlideAnimation}
              src={slideImgs[currentSlide]}
              alt={`slide-${currentSlide + 1}`}
              key={`current-slide-${currentSlide + 1}`}
              className="w-full rounded-[calc(0.8rem-4px)] absolute inset-0 m-auto"
            />
          )}
          {(previousSlide || previousSlide === 0) && (
            <motion.img
              initial={!previousSlide ? false : { translateY: 0 }}
              animate={!previousSlide ? false : animationState}
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
      {/* <HomeButton
        onClick={() => {
          const slideIndex = Math.floor(Math.random() * 8);
          if (slideIndex > currentSlide) setAnimationState("nextSlide");
          else if (slideIndex < currentSlide) setAnimationState("prevSlid");
          else setAnimationState("");
          setPreviousSlide(currentSlide);
          setCurrentSlide(slideIndex);
        }}
        variant="primary"
      >
        click
      </HomeButton> */}
      <div className="w-full py-4 flex gap-2 items-center justify-center">
        {slideImgs.map((_, index) => (
          <div key={`slide-tab-${index + 1}`} className="ho">
            slide {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PanelSlide;
