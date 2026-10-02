"use client";

import React from "react";
import { motion } from "framer-motion";
import { Compass, Sparkles, TrendingUp, Globe2 } from "lucide-react";
import { COMPANY_DATA } from "@/data/content";

export default function Vision() {
  const { heading, subtext } = COMPANY_DATA.visionStatement;

  const futurePillars = [
    {
      title: "Predictive AI Supply Networks",
      description: "Integrating algorithmic trade pattern recognition to proactively anticipate freight congestions and demand spikes.",
    },
    {
      title: "Frictionless Settlement Corridors",
      description: "Developing modern multi-currency clearing frameworks that accelerate cross-border liquidity across Asia and the West.",
    },
    {
      title: "Sustainable Cross-Border Freight",
      description: "Advancing carbon-conscious multimodal routing without sacrificing speed or economic efficiency.",
    },
  ];

  return (
    <section
      id="vision"
      className="relative py-32 md:py-44 bg-[#030508] border-t border-white/[0.06] overflow-hidden"
      aria-label="Krad Global Vision for Future Horizons"
    >
      {/* Background Animated Subtle Coordinate Grid & Rotating Radar Ring */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      {/* Slowly Rotating Concentric Circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white/[0.03] pointer-events-none flex items-center justify-center animate-[spin_120s_linear_infinite]">
        <div className="w-[600px] h-[600px] rounded-full border border-dashed border-[#c9a86a]/10 flex items-center justify-center">
          <div className="w-[400px] h-[400px] rounded-full border border-white/[0.04]" />
        </div>
      </div>

      {/* Atmospheric center aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,_rgba(201,168,106,0.06)_0%,_rgba(0,229,255,0.03)_50%,_transparent_75%)] pointer-events-none blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10 text-center">
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#c9a86a]/30 bg-white/[0.02] text-[11px] uppercase tracking-[0.25em] text-[#c9a86a] mb-8"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#c9a86a]" />
          <span>Strategic Horizon // 2026–2030</span>
        </motion.div>

        {/* Large Cinematic Statement */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.08]"
        >
          THE NEXT OPPORTUNITY
          <br />
          <span className="gold-gradient-text">IS ALWAYS GLOBAL.</span>
        </motion.h2>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 text-base sm:text-xl md:text-2xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed"
        >
          {subtext}
        </motion.p>

        {/* Forward-Looking Strategy Cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {futurePillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="p-6 rounded-sm border border-white/10 bg-[#070b14]/80 backdrop-blur-md hover:border-[#c9a86a]/40 transition-colors"
            >
              <span className="text-[10px] font-mono text-[#c9a86a] tracking-widest uppercase block mb-2">
                0{i + 1} // Horizon Vector
              </span>
              <h3 className="font-editorial text-lg font-bold text-white mb-2">
                {pillar.title}
              </h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
