import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Exprience from "@/components/Exprience";
import Footer from "@/components/Footer";
import HeroParalarlax from "@/components/HeroParalarlax";
import MyRecentWork from "@/components/MyRecentWork";
import Skills from "@/components/Skills";
import { Navbar, NavbarDemo } from "@/components/ui/Navbar";
import React from "react";

export default function page() {
  return (
    <div className=" bg-black">
      <Navbar></Navbar>
      <HeroParalarlax></HeroParalarlax>
      <MyRecentWork></MyRecentWork>
      <Skills></Skills>
      <Exprience></Exprience>
      <Education></Education>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}
