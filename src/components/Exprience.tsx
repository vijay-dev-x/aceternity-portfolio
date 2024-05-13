import React from "react";
import { BackgroundGradientDemo } from "./ui/Graidiant-card";
import TitleText from "./TitleText";

const EducationData = [
  {
    duration: "Jan 2024 - Mar-2024",
    disc: "AlmaBetter Trainee",
    stack: "Mern stack ",
  },
  {
    duration: "Mar 2024 - Apr-2024",
    disc: "Internship at Bharat Inter",
    stack: "Full Stack mern Projects ",
  },
];
export default function Exprience() {
  return (
    <div className="p-5 mx-auto">
      <TitleText text="Exprience"></TitleText>
      <div className=" my-10 flex gap-10 flex-col md:flex-row">
        {EducationData.map((data, id) => (
          <BackgroundGradientDemo key={id} data={data}></BackgroundGradientDemo>
        ))}
      </div>
    </div>
  );
}
