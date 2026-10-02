"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Shield, Layers, Globe, Network, Sparkles } from "lucide-react";
import { WHY_PRINCIPLES } from "@/data/content";

export default function WhyKrad() {
  const getIcon = (name: string) => {
    switch (name) {
      case "Globe":
        return <Globe className="w-5 h-5 text-[#c9a86a]" />;
      case "Layers":
        return <Layers className="w-5 h-5 text-[#c9a86a]" />;
      case "Network":
        return <Network className="w-5 h-5 text-[#c9a86a]" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-[#c9a86a]" />;
      default:
        return <Shield className="w-5 h-5 text-[#c9a86a]" />;
    }
  };

  return (
    <section
      id="why"
      className="relative py-28 md:py-36 bg-[#05070a] border-t border-white/[0.06] overflow-hidden"
      aria-label="Why Global Partners Choose Krad Global"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(201,168,106,0.05)_0%,_transparent_70%)] pointer-events-none blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#c9a86a]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#c9a86a] font-medium">
              Institutional Advantage
            </span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            WHY GLOBAL PARTNERS
            <br />
            <span className="gold-gradient-text">CHOOSE KRAD.</span>
          </h2>

          <p className="mt-4 text-slate-400 text-base font-light leading-relaxed">
            We reject siloed thinking. By combining cross-border mobility, physical freight mastery, digital commerce architectures, and regulatory navigation, we create unprecedented commercial velocity.
          </p>
        </div>

        {/* 4 Editorial Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {WHY_PRINCIPLES.map((principle, index) => (
            <motion.div
              key={principle.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="relative p-8 sm:p-10 rounded-sm border border-white/10 bg-[#090d16]/70 backdrop-blur-md hover:border-[#c9a86a]/40 transition-all duration-400 group hover:shadow-[0_15px_35px_rgba(0,0,0,0.6)] flex flex-col justify-between"
            >
              <div>
                {/* Header with Number and Icon */}
                <div className="flex items-center justify-between mb-6 pb-6 border-b border-white/10">
                  <span className="font-editorial text-3xl sm:text-4xl font-light text-[#c9a86a]/80 group-hover:text-[#c9a86a] transition-colors">
                    {principle.number}
                  </span>
                  <div className="w-10 h-10 rounded-sm border border-white/10 bg-white/[0.02] flex items-center justify-center">
                    {getIcon(principle.icon)}
                  </div>
                </div>

                {/* Title & Tagline */}
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#c9a86a] font-medium block mb-1">
                  {principle.tagline}
                </span>

                <h3 className="font-editorial text-2xl font-bold text-white tracking-wide mb-4 group-hover:text-slate-100">
                  {principle.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-6">
                  {principle.description}
                </p>
              </div>

              {/* Specific Bullet Points */}
              <div className="space-y-2 pt-6 border-t border-white/5">
                {principle.points.map((pt, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c9a86a] mt-1.5 shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
