import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";

export interface ModalI {
  open: boolean;
  setOpen: (value: boolean) => void;
  children?: ReactNode;
}

export const Modal = ({ open, setOpen, children }: ModalI) => {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50"
          />

          <motion.div
            initial={{ y: "100vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100vh", opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="fixed inset-0 z-20 flex cursor-pointer items-center justify-center p-4"
            onClick={(e) => {
              e.preventDefault();
              setOpen(false);
            }}
          >
            <div
              className="flex w-full flex-col gap-3 rounded-lg bg-white p-5 shadow-xl lg:max-w-screen-md lg:px-10 lg:py-6"
              onClick={(e) => e.stopPropagation()}
            >
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
