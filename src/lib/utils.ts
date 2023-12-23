import { clsx, type ClassValue } from "clsx";
import { twJoin, twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function join(...inputs: ClassValue[]) {
  return twJoin(clsx(inputs));
}

export function shuffle(array: any[]) {
  return array.sort(() => Math.random() - 0.5);
}
