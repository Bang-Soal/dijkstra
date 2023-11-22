import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");
const { createThemes } = require("tw-colors");
const colors = require("tailwindcss/colors");

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 180s linear infinite",
        "slide-down-item": "slideDownItem 500ms cubic-bezier(0.4, 0, 0.2, 1)",
        "slide-up-item": "slideUpItem 500ms cubic-bezier(0.4, 0, 0.2, 1)",
        "slide-down-content":
          "slideDownContent 500ms cubic-bezier(0.4, 0, 0.2, 1)",
        "slide-up-content": "slideUpContent 500ms cubic-bezier(0.4, 0, 0.2, 1)",
        "scale-in": "scaleIn 200ms ease",
        "scale-out": "scaleOut 200ms ease",
        "fade-in": "fadeIn 200ms ease",
        "fade-out": "fadeOut 200ms ease",
        "enter-from-left": "enterFromLeft 250ms ease",
        "enter-from-right": "enterFromRight 250ms ease",
        "exit-to-left": "exitToLeft 250ms ease",
        "exit-to-right": "exitToRight 250ms ease",
      },
      boxShadow: {
        "inner-xl": "inset 0 40px 40px 0 rgb(0 0 0 / 0.05)",
      },
      fontWeight: {
        100: "100",
        200: "200",
        300: "300",
        400: "400",
        500: "500",
        600: "600",
        700: "700",
        800: "800",
        900: "900",
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
      },
      keyframes: {
        slideDownItem: {
          from: { flexGrow: "0", overflow: "hidden", height: "44" },
          to: { flexGrow: "1", overflow: "visible" },
        },
        slideUpItem: {
          from: { flexGrow: "1", overflow: "visible" },
          to: { flexGrow: "0", overflow: "hidden", height: "44" },
        },
        slideDownContent: {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        slideUpContent: {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        enterFromRight: {
          from: { opacity: "0", transform: "translateX(200px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        enterFromLeft: {
          from: { opacity: "0", transform: "translateX(-200px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        exitToRight: {
          from: { opacity: "1", transform: "translateX(0)" },
          to: { opacity: "0", transform: "translateX(200px)" },
        },
        exitToLeft: {
          from: { opacity: "1", transform: "translateX(0)" },
          to: { opacity: "0", transform: "translateX(-200px)" },
        },
        scaleIn: {
          from: { opacity: "0", transform: "rotateX(-10deg) scale(0.9)" },
          to: { opacity: "1", transform: "rotateX(0deg) scale(1)" },
        },
        scaleOut: {
          from: { opacity: "1", transform: "rotateX(0deg) scale(1)" },
          to: { opacity: "0", transform: "rotateX(-10deg) scale(0.95)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        fadeOut: {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }: { addVariant: Function }) {
      addVariant("children", "&>*");
    }),
    createThemes({
      light: {
        "surface-100": colors.white,
        "surface-200": colors.gray[100],
        "surface-300": colors.gray[200],
        "surface-400": colors.gray[300],
        "surface-500": colors.gray[400],
        "surface-600": colors.gray[500],
        "surface-700": colors.gray[600],
        "content-100": colors.gray[900],
        "content-200": colors.gray[700],
        "content-300": colors.gray[500],
      },
    }),
  ],
};

export default config;
