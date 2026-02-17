import { Circle, Triangle } from "lucide-react";
export const ArrowDown = () => {
  return (
    <>
      <Circle size="12" className="stroke-fuschia fill-white" />
      <div className="bg-fuschia h-[99px] w-[2px] -mt-2" />
      <Triangle
        size="12"
        className="rotate-180 stroke-fuschia fill-fuschia -mt-2"
      />
    </>
  );
};
