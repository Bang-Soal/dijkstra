import { clsx, type ClassValue } from "clsx";
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

export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
