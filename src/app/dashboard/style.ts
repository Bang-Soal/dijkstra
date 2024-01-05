import { cva } from "class-variance-authority";

export const DashboardButtonVariants = cva(
  "flex flex-row items-center gap-3 text-lg",
  {
    variants: {
      variant: {
        active: "text-black",
        inactive: "text-[#D1D5DB]",
      },
    },
    defaultVariants: {
      variant: "active",
    },
  },
);
