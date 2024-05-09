"use client";
import React from "react";
import TitleText from "./TitleText";
import Image from "next/image";
import { motion } from "framer-motion";
import { textMotion } from "@/utils/textMotion";

const skiilsData = [
  {
    name: "HTML",
    icon: "/html.png",
    percentage: "92%",
  },
  {
    name: "CSS",
    icon: "/css.png",
    percentage: "90%",
  },
  {
    name: "SCSS",
    icon: "/scss.png",
    percentage: "92%",
  },
  {
    name: "Java Script",
    icon: "/js.png",
    percentage: "81%",
  },
  {
    name: "Type Script",
    icon: "/typescript.svg",
    percentage: "70%",
  },
  {
    name: "Bootstrap",
    icon: "/bootstrap.png",
    percentage: "88%",
  },
  {
    name: "Tailwind",
    icon: "/tailwind.png",
    percentage: "94%",
  },
  {
    name: "Metarial Ui",
    icon: "/metarial-ui.png",
    percentage: "94%",
  },
  {
    name: "Aceternity Ui",
    icon: "/acternity.png",
    percentage: "88%",
  },
  {
    name: "Shadcn Ui",
    icon: "/shadcn.png",
    percentage: "91%",
  },
  {
    name: "React",
    icon: "/react.png",
    percentage: "86%",
  },
  {
    name: "Redux",
    icon: "/redux.png",
    percentage: "85%",
  },
  {
    name: "Next Js",
    icon: "/next-js.png",
    percentage: "85%",
  },
  {
    name: "Node Js",
    icon: "/node-js.png",
    percentage: "78%",
  },
  {
    name: "Express",
    icon: "/express.png",
    percentage: "82%",
  },
  {
    name: "Mongo DB",
    icon: "/mongo-db.png",
    percentage: "90%",
  },
  {
    name: "My Sql",
    icon: "/my-sql.png",
    percentage: "85%",
  },
  {
    name: "Maria DB",
    icon: "/maria-db.png",
    percentage: "82%",
  },
  {
    name: "Firebase",
    icon: "/firebase-1.svg",
    percentage: "87%",
  },
  {
    name: "Stripe",
    icon: "/stripe-4.svg",
    percentage: "70%",
  },
];

export default function Skills() {
  return (
    <div className=" text-white flex flex-col justify-center p-5 items-center">
      <TitleText text="Skills I Have"></TitleText>
      <motion.div
        variants={textMotion}
        initial="hidden"
        whileInView={"show"}
        className=" flex justify-center gap-10 flex-wrap items-center py-20"
      >
        {skiilsData.map((skill, id) => (
          <motion.div
            key={id}
            className=" h-40 w-40 bg-purple-600/10 p-2 hover:bg-purple-600/30 transition duration-300 ease-in flex flex-col gap-1  justify-center items-center rounded-md"
          >
            <Image
              src={skill.icon}
              alt="skill logo"
              height={100}
              width={100}
            ></Image>
            <h1 className=" whitespace-nowrap font-bold text-purple-500">
              {skill.name}
            </h1>
            <p className=" font-extrabold text-white/30">{skill.percentage}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
