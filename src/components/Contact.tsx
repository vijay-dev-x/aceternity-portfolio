"use client";
import React from "react";
import TitleText from "./TitleText";
import { SignupFormDemo } from "./ui/InputDemo";
import { motion } from "framer-motion";

import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconHeart,
  IconHome,
  IconMail,
  IconPhone,
} from "@tabler/icons-react";

export default function Contact() {
  return (
    <div className=" overflow-hidden ">
      <TitleText text="Contact Me"></TitleText>
      <div className=" max-w-7xl md:flex-row flex-col justify-center items-center mx-auto  text-white flex gap-20 ">
        <motion.div className=" border m-10  border-purple-500 p-5 rounded-md shadow-sm  hover:border-2 transition duration-300 ease-in shadow-purple-500 ">
          <SignupFormDemo></SignupFormDemo>
        </motion.div>
        <div className=" px-5 flex flex-col gap-5 ">
          <button className="   mx-auto w-[70%] md:w-[100%] hover:scale-105 transition duration-200 relative inline-flex h-16 overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex px-20 h-full w-full cursor-pointer items-center justify-center rounded-xl bg-slate-950 py-1 text-sm font-medium text-white/80 backdrop-blur-3xl">
              <p className=" p-1 bg-purple-500 rounded-full flex gap-4">
                <IconPhone></IconPhone>
              </p>
              <div className=" mx-4">
                <p>Phone</p>
                <p>+917320037118</p>
              </div>
            </span>
          </button>
          <button className="  mx-auto w-[70%] md:w-[100%] hover:scale-105 transition duration-200 relative inline-flex h-16 overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex px-20 h-full w-full cursor-pointer items-center justify-center rounded-xl bg-slate-950 py-1 text-sm font-medium text-white/80 backdrop-blur-3xl">
              <p className="p-1 bg-purple-500 rounded-full">
                <IconMail></IconMail>
              </p>
              <div className=" mx-4">
                <p>Email</p>
                <p>vm2218943@gmail.com</p>
              </div>
            </span>
          </button>
          <button className="  mx-auto w-[70%] md:w-[100%] hover:scale-105 transition duration-200 relative inline-flex h-16 overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex px-20 h-full w-full cursor-pointer items-center justify-center rounded-xl bg-slate-950 py-1 text-sm font-medium text-white/80 backdrop-blur-3xl">
              <p className=" bg-purple-500 p-1 rounded-full">
                <IconHome></IconHome>
              </p>
              <div className=" mx-4">
                <p> Location</p>
                <p className=" flex items-center">
                  Jamtara, Jharkhand{" "}
                  <IconHeart
                    size={15}
                    className=" text-red-500/60  mx-1"
                  ></IconHeart>
                </p>
              </div>
            </span>
          </button>
          <button className=" mx-auto w-[70%] md:w-[100%] hover:scale-105 transition duration-200 relative inline-flex h-16 overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex px-20 h-full w-full cursor-pointer items-center justify-center rounded-xl bg-slate-950 py-1 text-sm font-medium text-white/80 backdrop-blur-3xl">
              <p className=" bg-purple-500 p-1 rounded-full">
                <IconBrandLinkedin></IconBrandLinkedin>
              </p>
              <div className=" mx-4">
                <p> LinkedIn</p>
                <p className=" flex items-center">@vijay-dev-x</p>
              </div>
            </span>
          </button>
          <button className=" mx-auto w-[70%] md:w-[100%] mb-5 md:m-0 hover:scale-105 transition duration-200 relative inline-flex h-16 overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex px-20 h-full w-full cursor-pointer items-center justify-center rounded-xl bg-slate-950 py-1 text-sm font-medium text-white/80 backdrop-blur-3xl">
              <p className=" bg-purple-500 p-1 rounded-full">
                <IconBrandGithub></IconBrandGithub>
              </p>
              <div className=" mx-4">
                <p> Github</p>
                <p className=" flex items-center">@vijay.dev.x</p>
              </div>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
