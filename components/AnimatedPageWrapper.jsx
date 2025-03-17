"use client";

import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";

export default function AnimatedPageWrapper({ children }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={usePathname()}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
          duration: 0.75,
        }}
        variants={{
          initialState: {
            opacity: 0,
            y: 20,
          },
          animateState: {
            opacity: 1,
            y: 0,
          },
          exitState: {
            opacity: 0,
            y: 20,
          },
        }}
        className="base-page-size"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
