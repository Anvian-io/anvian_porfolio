import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import components from "../index";
export function Hero_section() {
  return (
    <BackgroundLines className="flex items-center justify-center w-full px-4">
      <div className="flex w-full items-center">
        {/* Left side - Image */}
        <div className="w-1/2 h-[600px] flex items-center justify-center">
          <components.GlobeDemo/>
        </div>

        {/* Right side - Text */}
        <div className="w-1/2 flex flex-col items-center justify-center">
          <h2 className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-5xl md:text-6xl lg:text-8xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
            Anvian
          </h2>
          <p className="max-w-xl text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
            Design Your Vision. Develop Your Future
          </p>
        </div>
      </div>
    </BackgroundLines>
  );
}
