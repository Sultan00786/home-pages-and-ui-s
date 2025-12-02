"use client";
import {
  DOMAttributes,
  HTMLAttributes,
  MouseEventHandler,
  ReactNode,
  useState,
} from "react";
import { cn } from "../cn";
import { motion, Variants } from "motion/react";
import "../styles.css";

type IconButtonProps<T> = {
  children: ReactNode;
  className?: HTMLAttributes<T>["className"];
  onClick?: DOMAttributes<HTMLButtonElement>["onClick"];
};
export function HomeButton({
  children,
  variant = "primary",
  className,
  onClick,
}: {
  children: ReactNode;
  variant: "primary" | "secondary";
  className?: string;
  onClick?: MouseEventHandler<HTMLElement> | undefined;
}) {
  const buttonVariants = {
    rest: {},
    hover: {},
  };

  const textTopVariants: Variants = {
    "not-hover": {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.24,
        delay: 0.05,
      },
    },
    hover: {
      opacity: 0,
      y: -15,
      transition: {
        duration: 0.24,
      },
    },
  };

  const textBottomVariants: Variants = {
    "not-hover": {
      opacity: 0,
      y: 15,
      transition: {
        duration: 0.24,
      },
    },
    hover: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.24,
        delay: 0.05,
      },
    },
  };
  return (
    <motion.button
      initial="not-hover"
      whileHover="hover"
      // animate="rest"
      variants={buttonVariants}
      className={cn(
        "h-12 w-fit px-7 rounded-[1] flex items-center cursor-pointer relative overflow-hidden roobert-16 font-semibold",
        variant === "primary"
          ? "bg-white text-black"
          : "bg-black-950 text-white border border-white inset shadow-sm",
        className
      )}
      onClick={onClick}
    >
      <div className="opacity-0">{children}</div>
      <motion.div
        variants={textTopVariants}
        className="absolute inset-0 flex items-center justify-center"
      >
        {children}
      </motion.div>
      <motion.div
        variants={textBottomVariants}
        className="absolute inset-0 flex items-center justify-center"
      >
        {children}
      </motion.div>
    </motion.button>
  );
}

export function IconButton<T>({
  children,
  className,
  onClick,
}: IconButtonProps<T>) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "p-1 bg-black-200/20 border border-black-900/80 hover:bg-black-200/10 duration-200 cursor-pointer",
        className
      )}
    >
      {children}
    </button>
  );
}
