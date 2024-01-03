"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { slideVariants } from "./constants";

interface ImageCarouselI {
  images: string[];
}
export const ImageCarousel = ({ images }: ImageCarouselI) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direction, setDirection] = useState<string>("left");

  const handleDotClick = (index: number) => {
    setDirection(index < currentIndex ? "left" : "right");
    setCurrentIndex(index);
  };

  return (
    <div>
      <AnimatePresence>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          variants={slideVariants}
          initial={direction == "left" ? "hiddenLeft" : "hiddenRight"}
          animate="visible"
          exit={direction == "left" ? "exitRight" : "exitLeft"}
          className="h-40 w-40"
        />
        <div className="flex flex-row items-center justify-center gap-2 py-1">
          {images.map((_, idx) => {
            return (
              <div
                key={idx}
                onClick={() => handleDotClick(idx)}
                className={cn(
                  "h-2 w-2 rounded-full",
                  currentIndex == idx ? "bg-blue-600" : "bg-blue-100",
                )}
              />
            );
          })}
        </div>
      </AnimatePresence>
    </div>
  );
};
