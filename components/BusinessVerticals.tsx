"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight, X, CheckCircle2, ArrowRight } from "lucide-react";
import { BUSINESS_VERTICALS, BusinessVertical } from "@/data/content";

export default function BusinessVerticals() {
  const [selectedVertical, setSelectedVertical] = useState<BusinessVertical | null>(null);
  const [activeTab, setActiveTab] = useState(0);

  const nextCard = () => {
    setActiveTab((prev) => (prev + 1) % BUSINESS_VERTICALS.length);
  };

  const prevCard = () => {
    setActiveTab((prev) => (prev - 1 + BUSINESS_VERTICALS.length) % BUSINESS_VERTICALS.length);
  };

  const handleInquire = (verticalTitle: string) => {
    setSelectedVertical(null);
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      // Dispatch custom event or let contact form pick it up
      window.dispatchEvent(new CustomEvent("select-business-interest", { detail: verticalTitle }));
    }
  };

  return (
    <section
      id="businesses"
      className="relative py-28 md:py-36 bg-[#070a10] border-t border-white/[0.06] overflow-hidden"
      aria-label="Krad Global Business Verticals"
    >
      {/* Background radial gradient */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(201,168,106,0.07)_0%,_transparent_70%)] pointer-events-none blur-3xl" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[radial-gradient(circle,_rgba(0,229,255,0.04)_0%,_transparent_70%)] pointer-events-none blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-[#c9a86a]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[#c9a86a] font-medium">
                Our Core Verticals
              </span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
              ONE GLOBAL PLATFORM.
              <br />
              <span className="gold-gradient-text">MULTIPLE POSSIBILITIES.</span>
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end gap-4">
            <p className="text-slate-400 text-sm max-w-md font-light leading-relaxed md:text-right">
              Diversified commercial operations engineered to build bridges across international supply chains, high-velocity markets, and corporate mobility.
            </p>

            {/* Desktop Navigation Arrows */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={prevCard}
                className="w-11 h-11 rounded-sm border border-white/15 bg-white/[0.03] hover:border-[#c9a86a] hover:bg-[#c9a86a]/10 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300"
                aria-label="Previous business vertical"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextCard}
                className="w-11 h-11 rounded-sm border border-white/15 bg-white/[0.03] hover:border-[#c9a86a] hover:bg-[#c9a86a]/10 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300"
                aria-label="Next business vertical"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Desktop / Tablet Grid & Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BUSINESS_VERTICALS.map((vertical, index) => {
            return (
              <motion.div
                key={vertical.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative h-[480px] rounded-sm overflow-hidden border border-white/10 hover:border-[#c9a86a]/50 transition-all duration-500 flex flex-col justify-between p-8 bg-[#090d16] hover:shadow-[0_20px_40px_rgba(0,0,0,0.8),_0_0_30px_rgba(201,168,106,0.15)] cursor-pointer"
                onClick={() => setSelectedVertical(vertical)}
              >
                {/* Background Image with Zoom on Hover */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110 opacity-30 group-hover:opacity-40"
                  style={{ backgroundImage: `url('${vertical.image}')` }}
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#05070a] via-[#05070a]/80 to-transparent pointer-events-none" />

                {/* Top Content: Number & Arrow */}
                <div className="relative z-10 flex items-start justify-between">
                  <span className="font-editorial text-4xl sm:text-5xl font-light text-white/30 group-hover:text-[#c9a86a] transition-colors duration-300">
                    {vertical.number}
                  </span>

                  <div className="w-10 h-10 rounded-full border border-white/20 bg-black/40 backdrop-blur-md flex items-center justify-center text-slate-300 group-hover:text-[#05070a] group-hover:bg-[#c9a86a] group-hover:border-[#c9a86a] transition-all duration-300 group-hover:rotate-45">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom Content: Title & Summary */}
                <div className="relative z-10 flex flex-col">
                  <span className="text-[10px] tracking-[0.25em] uppercase text-[#c9a86a] font-medium mb-2">
                    {vertical.tagline}
                  </span>

                  <h3 className="font-editorial text-2xl font-bold tracking-wide text-white group-hover:text-slate-100 transition-colors">
                    {vertical.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-slate-300 font-light leading-relaxed line-clamp-3">
                    {vertical.shortDescription}
                  </p>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.16em] text-[#c9a86a]">
                    <span>Explore Capabilities</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Detailed Capabilities Modal Drawer */}
      <AnimatePresence>
        {selectedVertical && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedVertical(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0a0e18] border border-[#c9a86a]/40 rounded-sm shadow-[0_25px_60px_rgba(0,0,0,0.9)] p-6 sm:p-10 text-white"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedVertical(null)}
                className="absolute top-6 right-6 p-2 rounded-full border border-white/15 bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 hover:text-white transition-colors"
                aria-label="Close vertical details"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Content */}
              <div className="flex items-center gap-3 mb-3">
                <span className="font-editorial text-2xl text-[#c9a86a] font-bold">
                  {selectedVertical.number}
                </span>
                <span className="w-6 h-[1px] bg-[#c9a86a]" />
                <span className="text-xs uppercase tracking-[0.25em] text-slate-400">
                  Business Vertical Specification
                </span>
              </div>

              <h3 className="font-editorial text-3xl sm:text-4xl font-bold tracking-wide text-white">
                {selectedVertical.title}
              </h3>

              <p className="mt-2 text-sm text-[#e5c583] font-medium tracking-wide">
                {selectedVertical.tagline}
              </p>

              {/* Full Description */}
              <div className="mt-6 text-sm sm:text-base text-slate-300 font-light leading-relaxed border-t border-white/10 pt-6">
                {selectedVertical.fullDescription}
              </div>

              {/* Key Pillars */}
              <div className="mt-8">
                <h4 className="text-xs uppercase tracking-[0.25em] text-[#c9a86a] font-semibold mb-4">
                  Operational Pillars
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedVertical.keyPillars.map((pillar, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 p-3 rounded-sm bg-white/[0.03] border border-white/5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#c9a86a] shrink-0" />
                      <span className="text-xs text-slate-200">{pillar}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Metrics */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10">
                {selectedVertical.metrics.map((metric, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider text-slate-400">
                      {metric.label}
                    </span>
                    <span className="text-sm font-semibold text-white mt-1">
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="mt-10 flex flex-wrap items-center justify-end gap-4 pt-6 border-t border-white/10">
                <button
                  onClick={() => setSelectedVertical(null)}
                  className="px-5 py-2.5 rounded-sm border border-white/15 text-xs uppercase tracking-wider text-slate-300 hover:text-white transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={() => handleInquire(selectedVertical.title)}
                  className="px-6 py-2.5 rounded-sm bg-gradient-to-r from-[#c9a86a] to-[#b89555] text-[#05070a] font-bold text-xs uppercase tracking-[0.16em] hover:shadow-[0_0_20px_rgba(201,168,106,0.4)] transition-all"
                >
                  Inquire About This Vertical
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
