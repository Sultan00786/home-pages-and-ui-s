"use client";
import { motion, Variant, Variants } from "motion/react";
import { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../cn";
import { animate } from "motion";

type AnimteToProps = "left" | "right" | "top" | "bottom";
type ItemSliderProps = {
  animateTo?: AnimteToProps;
  animateValue: number;
  duration?: number;
  sliderClassName?: HTMLAttributes<HTMLDivElement>["className"];
  parentClassName?: HTMLAttributes<HTMLDivElement>["className"];
  itemArray: ReactNode[];
  shadowClassName?: HTMLAttributes<HTMLDivElement>["className"];
};

export default function ItemSlider({
  animateTo = "left",
  animateValue,
  duration = 40,
  itemArray,
  sliderClassName = "",
  parentClassName = "",
  shadowClassName = "shadow-[0px_0px_65px_40px_#000000]",
}: ItemSliderProps) {
  const sliderAnimateVarinat: Record<AnimteToProps, Variants> = {
    left: {
      initial: { translateX: 0 },
      animate: { translateX: animateValue },
    },
    right: {
      init: { translateX: animateValue },
      animate: { translateX: 0 },
    },
    top: {
      init: { translateY: 0 },
      animate: { translateY: animateValue },
    },
    bottom: {
      init: { translateY: animateValue },
      animate: { translateY: 0 },
    },
  };
  return (
    <div
      className={cn(
        "relative w-full h-full flex items-center overflow-hidden gap-0",
        (animateTo === "top" || animateTo === "bottom") && "flex-col",
        parentClassName
      )}
    >
      <div
        className={cn(
          "absolute top-0 left-0 w-px h-full bg-black-950 z-10 overhi",
          shadowClassName
        )}
      />
      <motion.div
        initial="init"
        animate="animate"
        variants={sliderAnimateVarinat[animateTo]}
        transition={{ repeat: Infinity, duration: duration, ease: "linear" }}
        className={cn(
          "w-full flex items-center gap-4 relative",
          (animateTo === "top" || animateTo === "bottom") && "flex-col",
          sliderClassName
        )}
      >
        {itemArray.map((Item) => Item)}
        {itemArray.map((Item) => Item)}
      </motion.div>
      <div
        className={cn(
          "absolute top-0 right-0 w-px h-full bg-black-950 z-10",
          shadowClassName
        )}
      />
    </div>
  );
}
