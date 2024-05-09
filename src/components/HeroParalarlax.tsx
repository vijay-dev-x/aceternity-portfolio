"use client";
import React from "react";
import { HeroParallaxUi } from "./ui/HeroParalaraxUi";
import { products } from "@/utils/data";

export default function HeroParalarlax() {
  return <HeroParallaxUi products={products} />;
}
