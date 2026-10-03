"use client";

import React from "react";
import { motion } from "framer-motion";
import { COMPANY_DATA } from "@/data/content";

export default function BrandIntro() {
  const { heading, text, highlightKeywords } = COMPANY_DATA.editorialStatement;
  const words = text.split(" ");

  return (
    <section
      id="about"
      className="relative py-28 md:py-40 bg-[#05070a] border-t border-white/[0.06] overflow-hidden"
      aria-label="Brand Philosophy Statement"
    >
      {/* Ambient background blur */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[radial-gradient(circle,_rgba(201,168,106,0.06)_0%,_transparent_70%)] pointer-events-none blur-3xl" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[radial-gradient(circle,_rgba(0,229,255,0.04)_0%,_transparent_70%)] pointer-events-none blur-3xl" />

      <div className="w-full px-6 md:px-12 lg:px-16 xl:px-20 relative z-10">
        {/* Section Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="w-8 h-[1px] bg-[#c9a86a]" />
          <span className="text-xs uppercase tracking-[0.3em] text-[#c9a86a] font-medium">
            Brand Philosophy
          </span>
        </motion.div>

        {/* Big Editorial Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-editorial text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.12]"
        >
          {heading}
        </motion.h2>

        {/* Animated Editorial Body with Highlighted Words */}
        <div className="mt-10 md:mt-14 w-full">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-slate-300 font-light leading-relaxed flex flex-wrap gap-x-2.5 gap-y-2">
            {words.map((word, index) => {
              // Clean punctuation for keyword matching
              const cleanWord = word.replace(/[.,]/g, "").toUpperCase();
              const isHighlight = highlightKeywords.includes(cleanWord);

              return (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.02,
                    ease: "easeOut",
                  }}
                  className={
                    isHighlight
                      ? "font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] via-[#f5e0b8] to-[#c9a86a] border-b-2 border-[#c9a86a]/60 pb-0.5 inline-block"
                      : "text-slate-300"
                  }
                >
                  {word}
                </motion.span>
              );
            })}
          </p>
        </div>

        {/* 4 Pillars Highlight Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-white/[0.08]"
        >
          {highlightKeywords.map((keyword, i) => (
            <div key={keyword} className="flex flex-col">
              <span className="text-[10px] tracking-[0.25em] text-slate-500 uppercase font-mono">
                0{i + 1} // Core Pillar
              </span>
              <span className="font-editorial text-lg md:text-xl font-semibold tracking-wider text-slate-100 mt-1">
                {keyword}
              </span>
              <div className="w-8 h-[1px] bg-[#c9a86a]/40 mt-3" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
