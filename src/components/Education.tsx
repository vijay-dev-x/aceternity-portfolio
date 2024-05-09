import React from "react";
import TitleText from "./TitleText";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
const content = [
  {
    title: "Higher secondary education.",
    description:
      "Completed my higher secondary education in Science stream at JBC+2 High School in Jamtara, where I gained a strong academic foundation and developed essential skills for future endeavors.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/jbc.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Bachelor's degree",
    description:
      "Attained my Bachelor's degree in English Honours from IGNOU Deoghar, acquiring comprehensive knowledge in English literature and language studies through flexible distance learning.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/ignou.jpeg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Pursuing Full Stack Web Development",
    description:
      "Currently mastering MERN stack web development at AlmaBetter, gaining practical skills for building dynamic web applications.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/almabetter.jpeg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];

export default function Education() {
  return (
    <div>
      <TitleText text="Education"></TitleText>
      <div className="p-10">
        <StickyScroll content={content} />
      </div>
    </div>
  );
}
