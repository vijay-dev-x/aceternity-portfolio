"use client";
import React from "react";
import { motion } from "framer-motion";
import { textMotion } from "@/utils/textMotion";

export default function TitleText({ text }: { text: string }) {
  return (
    <div>
      <motion.h2
        variants={textMotion}
        initial={"hidden"}
        whileInView={"show"}
        className=" mt-20 pb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-purple-700 to-purple-950 md:text-7xl text-2xl text-center font-bold"
      >
        {text}
      </motion.h2>
    </div>
  );
}
