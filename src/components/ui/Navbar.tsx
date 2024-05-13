"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../Navbar-menu";
import { cn } from "@/utils/cn";
import { IconExternalLink } from "@tabler/icons-react";

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-0  inset-x-0 w-[100%] bg-black mx-auto z-50",
        className
      )}
    >
      <div className=" flex p-2 justify-between items-center px-5 md:px-20 shadow-sm shadow-white/10 ">
        <p className=" text-lg md:text-2xl text-white/80">
          Dev
          <span className=" text-2xl md:text-4xl font-bold text-purple-500">
            X
          </span>
        </p>
        {/* <Image src={"/logo.svg"} height={60} width={60} alt="logo"></Image> */}
        <div className=" hidden md:block">
          <Menu setActive={setActive}>
            <MenuItem setActive={setActive} active={active} item="Services">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/web-dev">Web Development</HoveredLink>
                <HoveredLink href="/interface-design">
                  Interface Design
                </HoveredLink>
                <HoveredLink href="/seo">
                  Search Engine Optimization
                </HoveredLink>
                <HoveredLink href="/branding">Branding</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Products">
              <div className="  text-sm grid grid-cols-2 gap-10 p-4">
                <ProductItem
                  title="Algochurn"
                  href="https://algochurn.com"
                  src="https://assets.aceternity.com/demos/algochurn.webp"
                  description="Prepare for tech interviews like never before."
                />
                <ProductItem
                  title="Tailwind Master Kit"
                  href="https://tailwindmasterkit.com"
                  src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                  description="Production ready Tailwind css components for your next project"
                />
                <ProductItem
                  title="Moonbeam"
                  href="https://gomoonbeam.com"
                  src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                  description="Never write from scratch again. Go from idea to blog in minutes."
                />
                <ProductItem
                  title="Rogue"
                  href="https://userogue.com"
                  src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                  description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                />
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Pricing">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/hobby">Hobby</HoveredLink>
                <HoveredLink href="/individual">Individual</HoveredLink>
                <HoveredLink href="/team">Team</HoveredLink>
                <HoveredLink href="/enterprise">Enterprise</HoveredLink>
              </div>
            </MenuItem>
          </Menu>
        </div>
        <div>
          <a
            href="  "
            target="_blank"
            className=" text-white text-sm px-3 font-semibold cursor-pointer bg-purple-500 hover:text-black transition duration-200 flex gap-1 shadow-sm shadow-purple-500 md:px-5 justify-center items-center  md:py-2 py-1.5 rounded-xl border-purple-500/80 border-2"
          >
            Resume
            <IconExternalLink></IconExternalLink>
          </a>
        </div>
      </div>
    </div>
  );
}
