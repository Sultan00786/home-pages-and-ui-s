import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { IconButton } from "../button";
import { exit } from "process";

type TemplateProps = {
  imageUrl: string;
  heading: string;
  subHeading: string;
  index: number;
};
type ClickSliderProps = {
  templates: TemplateProps[];
};

type ImageComponentProps = {
  src?: string;
  id: number;
  currId: number;
};
function ClickSlider({ templates }: ClickSliderProps) {
  const [activeIndex, setActiveIndex] = useState({
    ultraPrev: 3,
    prevIndex: 4,
    currIndex: 5,
    nextIndex: 6,
    ultraNext: 0,
  });

  function handleSlideRight() {
    const dec = (num: number) => (num === 0 ? 6 : num - 1);
    setActiveIndex((prev) => ({
      ultraPrev: dec(prev.ultraPrev),
      prevIndex: dec(prev.prevIndex),
      currIndex: dec(prev.currIndex),
      nextIndex: dec(prev.nextIndex),
      ultraNext: dec(prev.ultraNext),
    }));
  }

  function handleSlideLeft() {
    const inc = (num: number) => (num === 6 ? 0 : num + 1);
    setActiveIndex((prev) => ({
      ultraPrev: inc(prev.ultraPrev),
      prevIndex: inc(prev.prevIndex),
      currIndex: inc(prev.currIndex),
      nextIndex: inc(prev.nextIndex),
      ultraNext: inc(prev.ultraNext),
    }));
  }
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="w-full">
        <motion.div className="flex items-center justify-center gap-4">
          <motion.img
            initial={{ scale: 0.92 }}
            animate={{ scale: 0.92 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="aspect-video object-cover h-[500px] rounded-lg border border-black-900/60"
            src={templates[activeIndex.ultraPrev]?.imageUrl}
            alt="template"
            layoutId={`template-img-${activeIndex.ultraPrev}`}
            key={activeIndex.ultraPrev}
          />
          <motion.img
            initial={{ scale: 0.92 }}
            animate={{ scale: 0.92 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="aspect-video object-cover h-[500px] rounded-lg border border-black-900/60"
            src={templates[activeIndex.prevIndex]?.imageUrl}
            alt="template"
            layoutId={`template-img-${activeIndex.prevIndex}`}
            key={activeIndex.prevIndex}
          />
          <motion.img
            initial={{ scale: 0.92 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="aspect-video object-cover h-[500px] rounded-lg border border-black-900/60"
            src={templates[activeIndex.currIndex]?.imageUrl}
            alt="template"
            layoutId={`template-img-${activeIndex.currIndex}`}
            key={activeIndex.currIndex}
          />
          <motion.img
            initial={{ scale: 0.92 }}
            animate={{ scale: 0.92 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="aspect-video object-cover h-[500px] rounded-lg border border-black-900/60"
            src={templates[activeIndex.nextIndex]?.imageUrl}
            alt="template"
            layoutId={`template-img-${activeIndex.nextIndex}`}
            key={activeIndex.nextIndex}
          />
          <motion.img
            initial={{ scale: 0.92 }}
            animate={{ scale: 0.92 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="aspect-video object-cover h-[500px] rounded-lg border border-black-900/60"
            src={templates[activeIndex.ultraNext]?.imageUrl}
            alt="template"
            layoutId={`template-img-${activeIndex.ultraNext}`}
            key={activeIndex.ultraNext}
          />
        </motion.div>
      </div>
      <div className="md:w-[700px] flex items-center justify-between">
        <div>
          <h1 className="roobert-20 font-semibold">
            {`0${activeIndex.currIndex + 1}. ${templates[activeIndex.currIndex]?.heading}`}
          </h1>
          <p className="roobert-18">
            {templates[activeIndex.currIndex]?.subHeading}
          </p>
        </div>
        <div className="flex gap-3">
          <IconButton onClick={handleSlideLeft} className="p-1">
            <ChevronLeft />
          </IconButton>
          <IconButton onClick={handleSlideRight} className="p-1">
            <ChevronRight />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default ClickSlider;

{
  /* <ImageComponent
  src={templates[activeIndex.ultraPrev]?.imageUrl}
  id={activeIndex.ultraPrev}
  currId={activeIndex.currIndex}
/>
<ImageComponent
  src={templates[activeIndex.prevIndex]?.imageUrl}
  id={activeIndex.prevIndex}
  currId={activeIndex.currIndex}
/>
<ImageComponent
  src={templates[activeIndex.currIndex]?.imageUrl}
  id={activeIndex.currIndex}
  currId={activeIndex.currIndex}
/>
<ImageComponent
  src={templates[activeIndex.nextIndex]?.imageUrl}
  id={activeIndex.nextIndex}
  currId={activeIndex.currIndex}
/>
<ImageComponent
  src={templates[activeIndex.ultraNext]?.imageUrl}
  id={activeIndex.ultraNext}
  currId={activeIndex.currIndex}
/> */
}
function ImageComponent({ src, id, currId }: ImageComponentProps) {
  return (
    <motion.img
      style={{
        scale: 0.92,
      }}
      animate={
        currId === id && {
          scale: 1,
          transition: { delay: 0.3, duration: 0.7 },
        }
      }
      transition={{ duration: 10, ease: "easeInOut" }}
      className="aspect-video object-cover h-[500px] rounded-lg border border-black-900/60"
      src={src}
      alt="template"
      layoutId={`template-img-${id}`}
      key={id}
    />
  );
}
