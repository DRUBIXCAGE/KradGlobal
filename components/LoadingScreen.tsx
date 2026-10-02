"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ onComplete }: { onComplete?: () => void }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Quick load timer: fast, elegant, never annoys users
    const timer = setTimeout(() => {
      setLoading(false);
      if (onComplete) onComplete();
    }, 1400);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#05070a] select-none"
        >
          {/* Subtle background glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,168,106,0.12)_0%,_transparent_65%)]" />

          <div className="relative z-10 flex flex-col items-center">
            {/* Monogram crest */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-12 h-12 mb-6 border border-[#c9a86a]/40 rounded-full flex items-center justify-center bg-white/[0.02]"
            >
              <span className="font-editorial text-xs tracking-widest text-[#c9a86a]">
                KG
              </span>
            </motion.div>

            {/* Brand title */}
            <motion.div
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-center"
            >
              <h1 className="font-editorial text-3xl md:text-4xl tracking-[0.25em] text-white font-semibold">
                KRAD <span className="text-[#c9a86a]">GLOBAL</span>
              </h1>
              <p className="mt-2 text-[10px] md:text-xs tracking-[0.3em] uppercase text-slate-400 font-light">
                Connecting Markets • Moving People
              </p>
            </motion.div>

            {/* Thin animated gold progress line */}
            <div className="w-48 h-[1.5px] bg-white/10 rounded-full mt-8 overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.1, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-[#c9a86a] via-[#f5e0b8] to-[#00e5ff] shadow-[0_0_8px_rgba(201,168,106,0.8)]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
