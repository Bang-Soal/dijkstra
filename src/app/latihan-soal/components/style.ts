import { cva } from "class-variance-authority";

export const OptionBoxVariants = cva(
  "group flex cursor-pointer flex-row items-center gap-3 rounded-lg p-1 hover:bg-gray-800 hover:text-white",
  {
    variants: {
      variant: { inactive: "bg-gray-100", active: "bg-gray-800 text-white" },
    },
    defaultVariants: {
      variant: "inactive",
    },
  },
);
