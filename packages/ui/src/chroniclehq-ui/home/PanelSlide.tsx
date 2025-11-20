"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { HomeButton } from "../button";
import { cn } from "../../cn";

function PanelSlide({
  slideImgs,
  uiToolbar,
}: {
  slideImgs: string[];
  uiToolbar: string;
}) {
  const [currentSlide, setCurrentSlide] = useState(5);
  const [previousSlide, setPreviousSlide] = useState<null | number>(null);
  return (
    <div className="">
      <div className="lg-panelSlide:w-[1192px] w-full h-full lg-panelSlide:h-[728px] bg-black-500/10 px-[70px] relative rounded-[0.8rem] border-4 border-black-900/10 overflow-hidden">
        <div className=" h-full relative z-0 flex-col gap-y-[60px]">
          {currentSlide && (
            <motion.img
              initial={{ translateY: 800 }}
              animate={{ translateY: 0 }}
              // exit={{ translateY: -800 }}          didn't work
              transition={{ duration: 0.35, ease: "easeInOut", delay: 0.3 }}
              src={slideImgs[currentSlide]}
              alt={`slide-${currentSlide + 1}`}
              key={`current-slide-${currentSlide + 1}`}
              className="w-full rounded-[calc(0.8rem-4px)] absolute inset-0 m-auto"
            />
          )}
          {previousSlide && (
            <motion.img
              initial={{ translateY: 0 }}
              animate={{ translateY: -800 }}
              transition={{ duration: 0.35, ease: "easeInOut", delay: 0.3 }}
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
      <HomeButton
        onClick={() => {
          setPreviousSlide(currentSlide);
          setCurrentSlide(Math.floor(Math.random() * 8));
        }}
        variant="primary"
      >
        click
      </HomeButton>
    </div>
  );
}

export default PanelSlide;
