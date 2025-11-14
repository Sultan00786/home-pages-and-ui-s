"use client";
import { ReactNode, useState } from "react";
import { cn } from "../cn";
import { motion, Variants } from "motion/react";
import "../styles.css";
export function HomeButton({
  children,
  variant = "primary",
  className,
}: {
  children: ReactNode;
  variant: "primary" | "secondary";
  className?: string;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const buttonVariants = {
    rest: {},
    hover: {},
  };

  const textTopVariants: Variants = {
    rest: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        delay: 0.1,
      },
    },
    hover: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2,
      },
    },
  };

  const textBottomVariants: Variants = {
    rest: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        delay: 0.1,
      },
    },
  };
  return (
    <motion.button
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={buttonVariants}
      className={cn(
        "h-12 w-fit px-7 rounded-[1] flex items-center cursor-pointer relative overflow-hidden",
        variant === "primary"
          ? "bg-white text-black-950"
          : "bg-black-950 text-white border border-white inset shadow-sm",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="opacity-0">{children}</div>
      <motion.div
        variants={textTopVariants}
        transition={{
          duration: 0.3,
          delay: isHovered ? 0 : 0.1,
        }}
        className="absolute inset-0 flex items-center justify-center"
      >
        {children}
      </motion.div>
      <motion.div
        variants={textBottomVariants}
        transition={{
          duration: 0.3,
          delay: isHovered ? 0.1 : 0,
        }}
        className="absolute inset-0 flex items-center justify-center"
      >
        {children}
      </motion.div>
    </motion.button>
  );
}
