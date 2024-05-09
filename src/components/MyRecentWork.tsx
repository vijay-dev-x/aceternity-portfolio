"use client";
import React from "react";
import TitleText from "./TitleText";
import { motion } from "framer-motion";
import { textMotion } from "@/utils/textMotion";
import Catagory from "./Catagory";

export default function MyRecentWork() {
  return (
    <div>
      <TitleText text={"My recent works"}></TitleText>
      <motion.p
        className=" text-gray-400 text-sm text-center pb-10"
        variants={textMotion}
        initial={"hidden"}
        whileInView={"show"}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio.
      </motion.p>
      <Catagory></Catagory>
    </div>
  );
}
