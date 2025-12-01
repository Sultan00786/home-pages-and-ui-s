import { cn } from "../../cn";

function ScrollSlideItem({ index }: { index: number }) {
  return (
    <div
      className={cn(
        "min-w-[620px] min-h-80 flex-1 rounded-2xl bg-black-900/30 p-1"
      )}
    >
      <div className="flex-1 bg-black-950 h-full rounded-[calc(1rem-4px)]">
        <h1 className="text-white">Slide Item {index + 1}</h1>
      </div>
    </div>
  );
}

export default ScrollSlideItem;
