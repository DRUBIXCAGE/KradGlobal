"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="w-full relative"
    >
      {/* Top subtle golden shimmer indicator during route transitions */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#c9a86a] to-transparent pointer-events-none z-50 animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite] opacity-75" />
      {children}
    </motion.div>
  );
}
