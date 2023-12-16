import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { infiniteSliderVariants } from "./constants";

interface InfiniteSliderI {
  images: string[];
}
export const InfiniteSlider = ({ images }: InfiniteSliderI) => {
  const minWidth = images.length * 150;
  const sliderVariants = infiniteSliderVariants(minWidth, images.length);
  return (
    <div className="w-full -skew-x-12 overflow-hidden rounded-2xl bg-gray-800">
      <div className="flex h-full w-full skew-x-6 flex-col items-center justify-center px-10 py-10">
        <p className="text-center text-2xl font-bold text-white">
          Enabling students to get into top PTNs
        </p>
        <motion.div
          className={cn(
            "flex skew-x-12 flex-row items-center gap-10 overflow-hidden py-4",
          )}
          variants={sliderVariants}
          animate="animate"
          style={{ minWidth: `${minWidth * 3}px` }}
        >
          {images.concat(images, images).map((image, index) => (
            <div key={index}>
              <Image src={image} alt={"ivy"} width={120} height={120} />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
