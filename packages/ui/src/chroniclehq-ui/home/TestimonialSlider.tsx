import { motion, Variants } from "motion/react";

function TestimonialSlider({
  animateTo = "right",
}: {
  animateTo?: "left" | "right";
}) {
  const numOfTestimonials = 6;

  return (
    <div className="relative w-full h-full flex flex-col  items-center overflow-x-hidden ">
      <div className="absolute top-0 left-0 w-px h-full bg-black-950 shadow-[0px_0px_65px_40px_#000000] z-10" />

      <motion.div
        style={{ translateX: animateTo === "left" ? 0 : -2016 }}
        animate={{ translateX: animateTo === "left" ? -2016 : 0 }}
        transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
        className="w-full h-80 flex items-center gap-4 relative"
      >
        {[...Array(numOfTestimonials)].map((_, index) => (
          <Testimonial key={index} index={index} />
        ))}
        {[...Array(numOfTestimonials)].map((_, index) => (
          <Testimonial key={index} index={index} />
        ))}
      </motion.div>
      <div className="absolute top-0 right-0 w-px h-full bg-black-950 shadow-[0px_0px_65px_40px_#000000] z-10" />
    </div>
  );
}

export default TestimonialSlider;

function Testimonial({ index }: { index: number }) {
  return (
    <div
      key={index}
      className="min-w-[320px] h-80 flex-1 bg-black-500/15 rounded-lg border-black-900/30 border"
    >
      <h1 className="text-white">Testimonial {index + 1}</h1>
    </div>
  );
}
