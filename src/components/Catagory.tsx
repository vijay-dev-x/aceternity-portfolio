import { catagoriesId, products } from "@/utils/data";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { textMotion } from "@/utils/textMotion";
import { ThreeDCardDemo } from "./ui/Card";

export default function Category() {
  const [selectedId, setSelectedId] = useState<number | null>(0);
  const filteredProduct = selectedId
    ? products.filter((product) => product.catagoryId === selectedId)
    : products;

  return (
    <motion.div
      variants={textMotion}
      initial={"hidden"}
      whileInView={"show"}
      className="text-white p-5 flex flex-col items-center"
    >
      <div className=" flex gap-5">
        <button
          onClick={() => setSelectedId(0)}
          className={` border-purple-500 border-[1px] px-5 py-2 rounded-md ${
            selectedId === 0 && "bg-purple-500 font-semibold"
          }`}
        >
          All
        </button>
        {catagoriesId.map((catagory) => (
          <button
            key={catagory.id}
            onClick={() => setSelectedId(catagory.id)}
            className={` border-purple-500 border-[1px] px-5 py-2 rounded-md ${
              selectedId === catagory.id && "bg-purple-500 font-semibold "
            }`}
          >
            {catagory.name}
          </button>
        ))}
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5">
        {filteredProduct.map((product, index) => (
          <ThreeDCardDemo key={index} product={product}></ThreeDCardDemo>
        ))}
      </div>
    </motion.div>
  );
}
