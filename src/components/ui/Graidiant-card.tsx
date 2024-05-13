"use client";
import React from "react";
import { BackgroundGradient } from "./background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { textMotion } from "@/utils/textMotion";

export function BackgroundGradientDemo({ data }: { data: any }) {
  return (
    <motion.div
      variants={textMotion}
      initial="hidden"
      whileInView={"show"}
      className=" flex justify-center items-center mx-auto"
    >
      <BackgroundGradient className="rounded-[22px] flex flex-col  w-[250px] mx-auto  h-2xl md:w-[500px] py-4 px-35 md:px-40 bg-white dark:bg-zinc-900">
        <div className=" px-30 text-center">
          <p className="text-sm  text-white/80  font-semibold">
            {data.duration}
          </p>
          <p className=" text-white/60 whitespace-nowrap">{data.stack}</p>
          <p className="text-base sm:text-xl font-bold text-black mt-4 mb-2 dark:text-neutral-200/80">
            {data.disc}
          </p>
        </div>
      </BackgroundGradient>
    </motion.div>
  );
}
