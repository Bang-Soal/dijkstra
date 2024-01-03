import { clsx, type ClassValue } from "clsx";
import { MathpixMarkdownModel as MM } from "mathpix-markdown-it";
import { extendTailwindMerge, twJoin } from "tailwind-merge";

const customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      shadow: [{ shadow: ["highlight"] }],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs));
}

export function join(...inputs: ClassValue[]) {
  return twJoin(clsx(inputs));
}

export function shuffle(array: any[]) {
  return array.sort(() => Math.random() - 0.5);
}

export const renderLatexContent = (content: string) => {
  return MM.render(content);
};

export const scrollToElement = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
