import React, { useEffect } from "react";
import { cn } from "../../cn";
import { ArrowRight } from "lucide-react";
import { motion, stagger, useAnimate, useInView } from "motion/react";

function ScrollPopUpComponent() {
  const [scope, animate] = useAnimate();
  const inView = useInView(scope);
  const popUpText = "Choose a template, paste in a rough.";
  useEffect(() => {
    if (inView) {
      animate([
        [
          scope.current,
          {
            scale: 1,
          },
          {
            duration: 0.1,
            type: "spring",
            damping: 9,
            mass: 0.3,
            stiffness: 100,
          },
        ],
        [
          scope.current,
          {
            width: "500px",
          },
          {
            duration: 0.5,
          },
        ],
        [
          "p",
          {
            display: "flex",
          },
          { delay: -0.4 },
        ],
        [
          "span",
          {
            display: "block",
          },
          {
            duration: 0.4,
            delay: stagger(0.03, { startDelay: -0.2 }),
            ease: [0.17, 0.67, 0.83, 0.67],
          },
        ],
        [
          "span",
          {
            display: "block",
          },
          {
            duration: 0.4,
            delay: stagger(0.03, { startDelay: -0.2 }),
            ease: "easeInOut",
          },
        ],
        [
          "button",
          {
            opacity: 1,
            display: "flex",
            translateX: 0,
          },
          {
            duration: 0.4,
            delay: -1.2,
          },
        ],
        [
          "button",
          {
            scale: [1, 0.9, 1],
          },
          {
            duration: 0.3,
            delay: -0.5,
            ease: "easeInOut",
          },
        ],
      ]);
    }
  });
  return (
    <motion.div
      style={{ scale: 0.6 }}
      className="flex w-fit h-[60px] items-center gap-4 py-4 px-6 relative bg-text-chroniclehq-black-950 rounded-md overflow-hidden border border-solid border-black-100/20 shadow-[0px_0px_30px_10px_#ffffff14]"
      ref={scope}
    >
      <div className="flex items-center gap-3 relative flex-1 grow">
        <TwincalPencil
          className="relative w-4 h-4 aspect-[1]"
          aria-hidden="true"
        />
        <p className="relative items-center justify-center w-fit -mt-px roobert-18 font-normal text-white text-lg tracking-[0] leading-[normal] select-none hidden">
          {popUpText.split("").map((char, index) => (
            <span key={index} className="hidden">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </p>
      </div>

      <motion.button
        initial={{ opacity: 0, translateX: -5 }}
        type="button"
        className="flex-col items-start justify-center gap-2.5 relative hidden"
      >
        <div className="justify-center p-1 self-stretch w-full flex bg-black-50 rounded-[5px] items-center gap-2.5 relative">
          <ArrowRight
            className="relative w-4 h-4 text-black select-none"
            aria-hidden="true"
          />
        </div>
      </motion.button>
    </motion.div>
  );
}

export default ScrollPopUpComponent;

function TwincalPencil({ className }: { className?: string }) {
  return (
    <div className={cn(className)}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_114_188)">
          <path
            d="M10 3.33326L12.6667 5.99993M14.116 4.54126C14.4685 4.18888 14.6665 3.71091 14.6666 3.2125C14.6666 2.71409 14.4687 2.23607 14.1163 1.8836C13.7639 1.53112 13.286 1.33307 12.7876 1.33301C12.2892 1.33295 11.8111 1.53088 11.4587 1.88326L2.56133 10.7826C2.40654 10.9369 2.29207 11.127 2.228 11.3359L1.34733 14.2373C1.3301 14.2949 1.3288 14.3562 1.34356 14.4145C1.35833 14.4728 1.38861 14.5261 1.43119 14.5686C1.47378 14.6111 1.52708 14.6413 1.58544 14.656C1.64379 14.6707 1.70504 14.6693 1.76266 14.6519L4.66466 13.7719C4.87344 13.7084 5.06345 13.5947 5.218 13.4406L14.116 4.54126Z"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.40002 2.3999V4.3999M4.40003 3.3999H2.40002"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.6 10.7998V12.3998M14.4 11.5998H12.8"
            stroke="white"
            strokeWidth="0.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.39999 0.799805V1.9998M7.99999 1.3998H6.79999"
            stroke="white"
            strokeWidth="0.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_114_188">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
