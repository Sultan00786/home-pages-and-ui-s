import { ReactNode } from "react";
import { cn } from "../cn";
import "../styles.css";
function button({
  children,
  variant,
}: {
  children: ReactNode;
  variant: "primary" | "secondary";
}) {
  return (
    <div
      className={cn(
        "h-12 px-7 rounded-[1] flex items-center",
        variant === "primary"
          ? "bg-white text-black-950"
          : "bg-black-950 text-white"
      )}
    >
      {children}
    </div>
  );
}

export default button;
