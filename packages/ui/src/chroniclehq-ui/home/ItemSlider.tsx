"use client";
import { motion } from "motion/react";
import { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../cn";

type ItemSliderProps = {
  animateTo?: "left" | "right" | "top" | "bottom";
  sliderClassName?: HTMLAttributes<HTMLDivElement>["className"];
  parentClassName?: HTMLAttributes<HTMLDivElement>["className"];
  itemArray: ReactNode[];
  shadowClassName?: HTMLAttributes<HTMLDivElement>["className"];
};

export default function ItemSlider({
  animateTo = "left",
  itemArray,
  sliderClassName = "",
  parentClassName = "",
  shadowClassName = "shadow-[0px_0px_65px_40px_#000000]",
}: ItemSliderProps) {
  return (
    <div
      className={cn(
        "relative w-full h-full flex items-center overflow-x-hidden ",
        parentClassName
      )}
    >
      <div
        className={cn(
          "absolute top-0 left-0 w-px h-full bg-black-950 z-10",
          shadowClassName
        )}
      />

      <motion.div
        style={{ translateX: animateTo === "left" ? 0 : -2016 }}
        animate={{ translateX: animateTo === "left" ? -2016 : 0 }}
        transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
        className={cn(
          "w-full flex items-center gap-4 relative",
          sliderClassName
        )}
      >
        {itemArray.map((Item, index) => Item)}
        {itemArray.map((Item, index) => Item)}
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
