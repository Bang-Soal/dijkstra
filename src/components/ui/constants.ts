export const slideVariants = {
  hiddenRight: {
    x: "100%",
    opacity: 0,
  },
  hiddenLeft: {
    x: "-100%",
    opacity: 0,
  },
  visible: {
    x: "0",
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.6,
      duration: 1,
    },
  },
  exitRight: {
    opacity: 0,
    x: "100%",
    transition: {
      duration: 0.5,
    },
  },
  exitLeft: {
    x: "-100%",
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};
