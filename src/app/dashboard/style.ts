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

export const tabsTriggerStyle =
  "inline-flex items-center justify-center text-gray-300 whitespace-nowrap text-3xl font-medium transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-black";

export const DashboardBoxVariant = cva(
  "flex flex-col gap-3 rounded-xl border px-4 py-3",
  {
    variants: {
      variant: {
        primary: "border-[#E2E8F0] bg-[#F8FAFC] ",
        danger: "border-red-200 bg-red-50",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);
