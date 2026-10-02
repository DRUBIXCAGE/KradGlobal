"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Building2, ChevronRight, Compass, Shield, Sparkles } from "lucide-react";
import { MARKET_STORIES, MarketStory as MarketStoryType } from "@/data/content";

export default function MarketStory() {
  const [selectedMarketIndex, setSelectedMarketIndex] = useState(0);
  const currentStory = MARKET_STORIES[selectedMarketIndex];

  return (
    <section
      id="story"
      className="relative py-28 md:py-36 bg-[#070a12] border-t border-white/[0.06] overflow-hidden"
      aria-label="Tri-Continental Strategic Story"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-[#c9a86a]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[#c9a86a] font-medium">
                Tri-Continental Axis
              </span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
              THREE STRATEGIC CORRIDORS.
              <br />
              <span className="gold-gradient-text">ONE UNIFIED VISION.</span>
            </h2>
          </div>

          {/* Regional Navigation Tabs */}
          <div className="flex items-center gap-2 p-1.5 rounded-sm bg-white/[0.03] border border-white/10">
            {MARKET_STORIES.map((market, idx) => {
              const isSelected = selectedMarketIndex === idx;
              return (
                <button
                  key={market.id}
                  onClick={() => setSelectedMarketIndex(idx)}
                  className={`px-4 sm:px-6 py-2.5 rounded-sm text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 flex items-center gap-2 ${
                    isSelected
                      ? "bg-[#c9a86a] text-[#05070a] shadow-[0_0_15px_rgba(201,168,106,0.4)]"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <span>{market.flag}</span>
                  <span>{market.country}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Cinematic Storytelling Showcase Panel */}
        <div className="relative rounded-sm overflow-hidden border border-white/10 bg-[#05070a] shadow-[0_25px_60px_rgba(0,0,0,0.8)] min-h-[580px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStory.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px]"
            >
              {/* Left Column: Visual Imagery with dark vignette */}
              <div className="relative lg:col-span-7 h-[320px] lg:h-auto overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out scale-105"
                  style={{ backgroundImage: `url('${currentStory.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#05070a]/40 to-[#05070a] hidden lg:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05070a] via-[#05070a]/60 to-transparent lg:hidden" />

                {/* Floating Tag */}
                <div className="absolute top-6 left-6 z-10 px-3.5 py-1.5 rounded-sm bg-black/60 backdrop-blur-md border border-white/15 text-[10px] tracking-[0.2em] uppercase text-white flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff]" />
                  <span>{currentStory.coordinates}</span>
                </div>
              </div>

              {/* Right Column: Editorial Narrative & Focus Areas */}
              <div className="relative lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between bg-[#05070a] z-10">
                <div>
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c9a86a] font-medium mb-3">
                    <span>{currentStory.flag}</span>
                    <span>{currentStory.country} Strategic Operations</span>
                  </div>

                  {/* Headline */}
                  <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-white tracking-wide leading-snug">
                    &ldquo;{currentStory.headline}&rdquo;
                  </h3>

                  <p className="mt-4 text-xs sm:text-sm text-[#e5c583] italic border-l border-[#c9a86a] pl-3 py-1">
                    {currentStory.quote}
                  </p>

                  <p className="mt-5 text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                    {currentStory.subtext}
                  </p>

                  {/* Focus Areas List */}
                  <div className="mt-8 space-y-2">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-medium">
                      Operational Pillars:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                      {currentStory.focusAreas.map((area, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 p-2 rounded-sm bg-white/[0.03] border border-white/5 text-[11px] text-slate-200"
                        >
                          <ChevronRight className="w-3 h-3 text-[#c9a86a] shrink-0" />
                          <span>{area}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Navigation Indicator */}
                <div className="mt-10 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <span>Economic Hubs: {currentStory.keyHubs.join(" • ")}</span>
                  <button
                    onClick={() =>
                      setSelectedMarketIndex((prev) => (prev + 1) % MARKET_STORIES.length)
                    }
                    className="flex items-center gap-1.5 text-[#c9a86a] hover:text-white font-semibold uppercase tracking-wider transition-colors"
                  >
                    <span>Next Corridor</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
