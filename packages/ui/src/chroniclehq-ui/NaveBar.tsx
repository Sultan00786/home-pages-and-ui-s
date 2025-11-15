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
export default function NaveBar() {
  return (
    <div className="w-full h-[54px] fixed top-0 left-0 flex items-center justify-between ">
      <div className="h-full w-full flex items-center justify-between relative pl-10 ">
        <NaveItems />
        <AuthButtons />
        <Logo className="absolute inset-0 m-auto cursor-pointer" />
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
