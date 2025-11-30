import { motion } from "motion/react";

function LogoMarquee({ brands }: { brands: string[] }) {
  return (
    <div className="relative h-[90px] w-[940px] flex flex-col items-center justify-between py-5 overflow-hidden">
      <div className="absolute top-0 left-0 w-px h-full bg-black-950 shadow-[0px_0px_100px_150px_#000000] z-10" />

      <motion.div
        style={{ translateX: 0 }}
        animate={{ translateX: -1940 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="w-full h-full flex items-center gap-13"
      >
        {brands.map((logo, index) => (
          <img key={index} src={logo} alt="brand" className="h-[50px]" />
        ))}
        {brands.map((logo, index) => (
          <img key={index} src={logo} alt="brand" className="h-[50px]" />
        ))}
      </motion.div>
      <div className="absolute top-0 right-0 w-px h-full bg-black-950 shadow-[0px_0px_100px_100px_#000000] z-10" />
    </div>
  );
}

export default LogoMarquee;
