import { cva } from "class-variance-authority";

export const PodiumVariants = cva("", {
  variants: {
    rank: {
      first: "",
      second: "mt-16",
      third: "mt-32",
    },
    divider: {
      first: "bg-amber-500",
      second: "bg-gray-300",
      third: "bg-yellow-600",
    },
  },
  defaultVariants: { rank: "first" },
});
