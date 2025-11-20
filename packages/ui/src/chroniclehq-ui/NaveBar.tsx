"use client";
import { motion, MotionValue, useMotionTemplate } from "motion/react";
import { cn } from "../cn";
import { HomeButton } from "./button";
import Logo from "./Logo";
const navItems = [
  "Product",
  "Pricing",
  "Templates",
  "Gallery",
  "Solutions",
  "Resources",
];
export default function NaveBar({
  mouseX,
  mouseY,
}: {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}) {
  return (
    <div className="w-full h-[54px] fixed top-0 left-0 z-50">
      <div className=" bg-black-950/60 backdrop-blur-[100px] w-full h-full relative border-b-[0.5px] border-black-100/20">
        <div className="h-full w-full flex items-center justify-between relative pl-6 ">
          <NaveItems />
          <AuthButtons />
          <Logo className="absolute inset-0 m-auto cursor-pointer" />
        </div>
        <motion.div
          className="h-[0.5px] w-full absolute bottom-0"
          style={{
            background: useMotionTemplate`
            radial-gradient(
              180px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255),
              rgba(255, 255, 255, 0.05)
            )
          `,
          }}
        ></motion.div>
      </div>
    </div>
  );
}

function NaveItems() {
  return (
    <div className="flex items-center gap-0.5">
      {navItems.map((item, index) => (
        <NaveItem key={index}>{item}</NaveItem>
      ))}
    </div>
  );
}

function NaveItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="cursor-pointer px-3 py-1.5 roobert-16 text-black-400 hover:text-white hover:bg-black-100/5 transition-all duration-200 rounded-lg">
      {children}
    </div>
  );
}

function AuthButtons() {
  return (
    <div className="flex h-full w-fit">
      <button className="h-full w-fit px-7 flex items-center cursor-pointer roobert-26">
        Login
      </button>
      <HomeButton variant="primary" className={cn("rounded-none h-full")}>
        Try for free
      </HomeButton>
    </div>
  );
}
