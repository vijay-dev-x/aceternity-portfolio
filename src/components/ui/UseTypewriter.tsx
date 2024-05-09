"use client";
import { TypewriterEffectSmooth } from "./Typewriter";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "Projects",
    },
    {
      text: "with",
    },
    {
      text: "Vijay's Tech stack",
      className: " dark:text-purple-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        The road to Freedom starts from here
      </p>
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
