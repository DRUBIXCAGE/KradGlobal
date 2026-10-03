"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Globe, MapPin, Navigation, ShieldCheck, Zap } from "lucide-react";
import { COMPANY_DATA } from "@/data/content";

interface LocationDetail {
  id: string;
  name: string;
  flag: string;
  coordinates: string;
  hubs: string;
  strategicFocus: string;
  corridors: string;
  pin: { x: number; y: number }; // percentage on map
}

const LOCATIONS: LocationDetail[] = [
  {
    id: "india",
    name: "India",
    flag: "🇮🇳",
    coordinates: "19.0760° N, 72.8777° E",
    hubs: "Mumbai (BKC) • New Delhi • Bengaluru",
    strategicFocus: "Manufacturing Sourcing, Outbound Tourism & Commodity Origination",
    corridors: "Direct trade lanes to UAE & USA East Coast",
    pin: { x: 67.5, y: 52 },
  },
  {
    id: "uae",
    name: "United Arab Emirates",
    flag: "🇦🇪",
    coordinates: "25.2048° N, 55.2708° E",
    hubs: "Dubai (DIFC / Jafza) • Abu Dhabi",
    strategicFocus: "Corporate Operations, Re-Export & Middle Eastern Commercial Hub",
    corridors: "Central nexus connecting South Asia with Western markets",
    pin: { x: 59.5, y: 47 },
  },
  {
    id: "usa",
    name: "United States",
    flag: "🇺🇸",
    coordinates: "40.7128° N, 74.0060° W",
    hubs: "New York • Delaware • West Coast Ports",
    strategicFocus: "Digital Commerce Distribution, High-Volume E-Commerce & Strategic Capital",
    corridors: "Direct consumer fulfillment and enterprise sales",
    pin: { x: 26, y: 38 },
  },
];

export default function GlobalPresence() {
  const [activeLocation, setActiveLocation] = useState<LocationDetail>(LOCATIONS[0]);

  return (
    <section
      id="presence"
      className="relative py-28 md:py-36 bg-[#05070a] border-t border-white/[0.06] overflow-hidden"
      aria-label="Krad Global Strategic Presence"
    >
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,_rgba(0,229,255,0.04)_0%,_rgba(201,168,106,0.05)_40%,_transparent_75%)] pointer-events-none blur-3xl" />

      <div className="w-full px-6 md:px-12 lg:px-16 xl:px-20 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#c9a86a]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#c9a86a] font-medium">
              Worldwide Footprint
            </span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            FROM LOCAL ROOTS
            <br />
            <span className="gold-gradient-text">TO GLOBAL REACH.</span>
          </h2>

          <p className="mt-4 text-slate-400 text-base font-light leading-relaxed">
            Operating through strategically positioned corporate and operational nodes across South Asia, the GCC, and North America to facilitate seamless bilateral business.
          </p>
        </div>

        {/* Qualitative Strategic Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {COMPANY_DATA.globalStats.map((stat, idx) => {
            // Dynamic text sizing based on metric character length so words like MULTIPLE and INTERNATIONAL never get trimmed
            const getMetricSize = (str: string) => {
              const len = str.length;
              if (len >= 12) return "text-xl sm:text-2xl lg:text-[1.35rem] xl:text-2xl 2xl:text-3xl";
              if (len >= 8) return "text-2xl sm:text-3xl lg:text-[1.75rem] xl:text-3xl 2xl:text-4xl";
              if (len >= 6) return "text-2xl sm:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl";
              return "text-3xl sm:text-4xl lg:text-5xl";
            };

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-5 sm:p-6 rounded-sm border border-white/10 bg-white/[0.02] backdrop-blur-md hover:border-[#c9a86a]/40 transition-all duration-300 flex flex-col justify-between min-w-0"
              >
                <div>
                  <div className={`font-editorial font-bold gold-gradient-text mb-2 tracking-normal leading-tight break-normal overflow-visible ${getMetricSize(stat.metric)}`}>
                    {stat.metric}
                  </div>
                  <div className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-white font-semibold mb-2">
                    {stat.label}
                  </div>
                </div>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Interactive World Map Canvas / SVG Container */}
        <div className="relative rounded-sm border border-white/10 bg-[#090d16]/90 p-6 md:p-10 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
          {/* Subtle Grid overlay */}
          <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

          {/* Location Selection Pills */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-[#c9a86a]" />
              <span className="text-xs uppercase tracking-[0.2em] text-slate-300 font-medium">
                Select Active Hub:
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {LOCATIONS.map((loc) => {
                const isActive = activeLocation.id === loc.id;
                return (
                  <button
                    key={loc.id}
                    onClick={() => setActiveLocation(loc)}
                    className={`px-4 py-2 rounded-sm text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-300 flex items-center gap-2 ${
                      isActive
                        ? "bg-[#c9a86a] text-[#05070a] shadow-[0_0_15px_rgba(201,168,106,0.4)]"
                        : "bg-white/[0.04] text-slate-300 hover:text-white border border-white/10 hover:border-white/20"
                    }`}
                  >
                    <span>{loc.flag}</span>
                    <span>{loc.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* The World Map SVG with Curved Connecting Arcs */}
          <div className="relative w-full aspect-[2/1] min-h-[300px] max-h-[520px] select-none flex items-center justify-center">
            <svg
              viewBox="0 0 1000 500"
              className="w-full h-full object-contain filter drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* World Landmass Silhouettes (Simplified stylized polygon continents) */}
              <g fill="#141c2c" stroke="#1f2c42" strokeWidth="0.8">
                {/* North America */}
                <path d="M 120 70 L 220 60 L 280 80 L 310 130 L 290 190 L 240 220 L 210 250 L 190 230 L 170 170 L 130 150 Z" />
                {/* South America */}
                <path d="M 270 270 L 340 300 L 360 360 L 310 440 L 270 410 L 250 330 Z" />
                {/* Europe */}
                <path d="M 460 80 L 550 70 L 570 130 L 530 170 L 470 160 L 450 120 Z" />
                {/* Africa */}
                <path d="M 460 180 L 560 180 L 590 260 L 550 360 L 490 350 L 450 250 Z" />
                {/* Asia */}
                <path d="M 570 70 L 800 60 L 850 150 L 810 230 L 730 250 L 660 210 L 580 150 Z" />
                {/* Australia */}
                <path d="M 770 320 L 860 310 L 880 370 L 800 410 L 750 360 Z" />
              </g>

              {/* Equator & Meridian Grid Lines */}
              <line x1="0" y1="250" x2="1000" y2="250" stroke="rgba(255,255,255,0.05)" strokeDasharray="3,3" />
              <line x1="500" y1="0" x2="500" y2="500" stroke="rgba(255,255,255,0.05)" strokeDasharray="3,3" />

              {/* Connecting Flight/Trade Lines between USA (260, 190), UAE (595, 235), India (675, 260) */}
              <g fill="none">
                {/* USA to UAE Arc */}
                <path
                  d="M 260 190 Q 420 110 595 235"
                  stroke="#c9a86a"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                  opacity="0.75"
                >
                  <animate attributeName="stroke-dashoffset" from="100" to="0" dur="4s" repeatCount="indefinite" />
                </path>

                {/* UAE to India Arc */}
                <path
                  d="M 595 235 Q 635 220 675 260"
                  stroke="#00e5ff"
                  strokeWidth="2"
                  strokeDasharray="4,4"
                  opacity="0.8"
                >
                  <animate attributeName="stroke-dashoffset" from="50" to="0" dur="2.5s" repeatCount="indefinite" />
                </path>

                {/* India to Global Route */}
                <path
                  d="M 675 260 Q 770 190 840 210"
                  stroke="#e5c583"
                  strokeWidth="1.5"
                  strokeDasharray="4,4"
                  opacity="0.5"
                />
              </g>

              {/* Location Pins on Map */}
              {LOCATIONS.map((loc) => {
                const posX = loc.pin.x * 10;
                const posY = loc.pin.y * 5;
                const isCurrent = activeLocation.id === loc.id;

                return (
                  <g
                    key={loc.id}
                    className="cursor-pointer"
                    onClick={() => setActiveLocation(loc)}
                  >
                    {/* Pulsing ring */}
                    <circle
                      cx={posX}
                      cy={posY}
                      r={isCurrent ? "14" : "9"}
                      fill="none"
                      stroke={isCurrent ? "#c9a86a" : "#00e5ff"}
                      strokeWidth="1.5"
                      opacity="0.7"
                    >
                      <animate
                        attributeName="r"
                        values={isCurrent ? "8;18;8" : "6;12;6"}
                        dur="2s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        values="0.8;0.2;0.8"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    </circle>

                    {/* Solid node */}
                    <circle
                      cx={posX}
                      cy={posY}
                      r={isCurrent ? "5" : "3.5"}
                      fill={isCurrent ? "#ffffff" : "#c9a86a"}
                    />

                    {/* Text tag */}
                    <text
                      x={posX + 10}
                      y={posY + 4}
                      fill={isCurrent ? "#ffffff" : "#94a3b8"}
                      fontSize={isCurrent ? "12" : "10"}
                      fontWeight={isCurrent ? "bold" : "normal"}
                      letterSpacing="1px"
                    >
                      {loc.name.toUpperCase()}
                    </text>
                  </g>
                );
              })}
            </svg>

            {/* Floating Information Panel for Active Hub */}
            <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:left-6 sm:bottom-6 sm:max-w-md p-5 rounded-sm bg-[#05070a]/95 backdrop-blur-xl border border-[#c9a86a]/40 shadow-2xl">
              <div className="flex items-center justify-between gap-4 mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{activeLocation.flag}</span>
                  <span className="font-editorial text-lg font-bold text-white tracking-wide">
                    {activeLocation.name} Hub
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#00e5ff] tracking-wider">
                  {activeLocation.coordinates}
                </span>
              </div>

              <div className="space-y-2 text-xs pt-2 border-t border-white/10">
                <div>
                  <span className="text-slate-400">Key Hubs: </span>
                  <span className="text-slate-200 font-medium">{activeLocation.hubs}</span>
                </div>
                <div>
                  <span className="text-slate-400">Strategic Role: </span>
                  <span className="text-[#e5c583]">{activeLocation.strategicFocus}</span>
                </div>
                <div>
                  <span className="text-slate-400">Corridors: </span>
                  <span className="text-slate-300">{activeLocation.corridors}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
