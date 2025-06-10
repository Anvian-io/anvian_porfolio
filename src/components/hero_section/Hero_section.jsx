"use client";
import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import components from "../index";
import { ColourfulText } from "@/components/ui/colourful-text";
import { Cover } from "../ui/cover";
import { EvervaultCard, Icon } from "../ui/evervault-card";
import { motion } from "motion/react";
import { LampContainer } from "../ui/lamp";
export function Hero_section() {
  return (
    <BackgroundLines className="flex items-center justify-center w-full px-4">
      <div className="flex w-full items-center FLEX">
        {/* Left side - Image */}
        <div className="w-1/2 h-[300px] flex items-center justify-center">
          <components.GlobeDemo />
        </div>

        {/* Right side - Text */}
        <div className="w-1/2 flex flex-col items-center justify-center">
          <motion.p
            className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 dark:from-neutral-400 dark:to-white text-[10rem] font-sans py-2 md:py-2 relative z-20 font-bold tracking-tight"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            {/* <ColourfulText text="Anvian" /> */}
            Anvian
          </motion.p>

          <div className="max-w-xl text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              Design Your Vision. <Cover>Develop Your Future</Cover>
            </motion.h2>
          </div>
        </div>
      </div>
    </BackgroundLines>
  );
}
