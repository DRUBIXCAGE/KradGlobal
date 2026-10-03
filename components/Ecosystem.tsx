"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ECOSYSTEM_NODES, EcosystemNode } from "@/data/content";
import { Layers, Network, Sparkles, ArrowUpRight } from "lucide-react";

export default function Ecosystem() {
  const [selectedNode, setSelectedNode] = useState<EcosystemNode>(ECOSYSTEM_NODES[0]);
  const [hoveredNode, setHoveredNode] = useState<EcosystemNode | null>(null);

  const activeNode = hoveredNode || selectedNode;

  return (
    <section
      id="ecosystem"
      className="relative py-28 md:py-36 bg-[#070910] border-t border-white/[0.06] overflow-hidden"
      aria-label="Krad Global Unified Ecosystem"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle,_rgba(201,168,106,0.08)_0%,_rgba(0,229,255,0.04)_40%,_transparent_70%)] pointer-events-none blur-3xl" />

      <div className="w-full px-6 md:px-12 lg:px-16 xl:px-20 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-6 h-[1px] bg-[#c9a86a]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#c9a86a] font-medium">
              Unified Ecosystem
            </span>
            <span className="w-6 h-[1px] bg-[#c9a86a]" />
          </div>

          <h2 className="font-editorial text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            THE GLOBAL COMMERCE
            <br />
            <span className="gold-gradient-text">ECOSYSTEM.</span>
          </h2>

          <p className="mt-4 text-slate-400 text-sm sm:text-base font-light leading-relaxed">
            Krad Global is not a single service agency. We are an interconnected platform where cross-border trade, travel logistics, digital retail, and institutional relationships reinforce one another.
          </p>
        </div>

        {/* Constellation Canvas / Diagram Container */}
        <div className="relative rounded-sm border border-white/10 bg-[#05070a]/90 backdrop-blur-xl p-6 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.8)] min-h-[560px] flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left/Interactive Map Area */}
          <div className="relative w-full lg:w-3/5 aspect-square max-w-[500px] select-none mx-auto">
            {/* SVG Connecting Lines between Center and all outer nodes */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 100 100"
            >
              {ECOSYSTEM_NODES.filter((n) => n.id !== "krad-center").map((node) => {
                const isCurrent = activeNode.id === node.id;
                return (
                  <g key={node.id}>
                    {/* Connecting ray */}
                    <line
                      x1="50"
                      y1="50"
                      x2={node.x}
                      y2={node.y}
                      stroke={isCurrent ? "#c9a86a" : "rgba(255,255,255,0.12)"}
                      strokeWidth={isCurrent ? "0.8" : "0.4"}
                      strokeDasharray={isCurrent ? "2,2" : "none"}
                    >
                      {isCurrent && (
                        <animate
                          attributeName="stroke-dashoffset"
                          from="10"
                          to="0"
                          dur="1s"
                          repeatCount="indefinite"
                        />
                      )}
                    </line>

                    {/* Traveling energy photon */}
                    <circle r="0.8" fill={isCurrent ? "#00e5ff" : "#c9a86a"}>
                      <animateMotion
                        path={`M 50 50 L ${node.x} ${node.y}`}
                        dur={`${2.5 + (node.x % 3)}s`}
                        repeatCount="indefinite"
                      />
                    </circle>
                  </g>
                );
              })}
            </svg>

            {/* Render Nodes as Interactive Buttons */}
            {ECOSYSTEM_NODES.map((node) => {
              const isCenter = node.id === "krad-center";
              const isCurrent = activeNode.id === node.id;

              return (
                <div
                  key={node.id}
                  style={{
                    left: `${node.x}%`,
                    top: `${node.y}%`,
                  }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer"
                  onMouseEnter={() => setHoveredNode(node)}
                  onMouseLeave={() => setHoveredNode(null)}
                  onClick={() => setSelectedNode(node)}
                >
                  {isCenter ? (
                    /* Center Node */
                    <div
                      className={`relative w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 flex flex-col items-center justify-center p-2 text-center transition-all duration-300 ${
                        isCurrent
                          ? "border-[#c9a86a] bg-[#0c1220] shadow-[0_0_30px_rgba(201,168,106,0.6)]"
                          : "border-[#c9a86a]/60 bg-[#090e18] shadow-[0_0_20px_rgba(201,168,106,0.3)]"
                      }`}
                    >
                      <span className="font-editorial text-[10px] text-[#c9a86a] font-bold tracking-widest">
                        CORE HUB
                      </span>
                      <span className="font-editorial text-xs sm:text-sm font-bold text-white tracking-wider mt-0.5">
                        KRAD
                        <br />
                        GLOBAL
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1 animate-pulse" />
                    </div>
                  ) : (
                    /* Peripheral Nodes */
                    <div
                      className={`px-3 py-1.5 rounded-full border text-[11px] font-medium tracking-wider whitespace-nowrap transition-all duration-300 flex items-center gap-1.5 backdrop-blur-md ${
                        isCurrent
                          ? "border-[#c9a86a] bg-[#c9a86a] text-[#05070a] shadow-[0_0_20px_rgba(201,168,106,0.5)] scale-110"
                          : "border-white/15 bg-[#090d16]/90 text-slate-300 hover:text-white hover:border-[#c9a86a]/50"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          node.category === "vertical"
                            ? "bg-[#00e5ff]"
                            : "bg-[#c9a86a]"
                        }`}
                      />
                      <span>{node.name}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right/Info Panel displaying active node mechanics */}
          <div className="w-full lg:w-2/5 p-6 sm:p-8 rounded-sm border border-white/10 bg-[#090e18]/80 backdrop-blur-xl flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeNode.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#c9a86a] font-mono">
                    {activeNode.category.toUpperCase()} NODE
                  </span>
                  <span className="text-slate-600">•</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
                    Interconnected Architecture
                  </span>
                </div>

                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-white tracking-wide">
                  {activeNode.name}
                </h3>

                <p className="mt-4 text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                  {activeNode.description}
                </p>

                <div className="mt-6 p-4 rounded-sm bg-white/[0.02] border border-[#c9a86a]/20">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#c9a86a] font-semibold block mb-1">
                    Systemic Multiplier Impact:
                  </span>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    {activeNode.impact}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00e5ff]" /> Verticals
                <span className="w-2 h-2 rounded-full bg-[#c9a86a] ml-2" /> Enablers
              </span>
              <a
                href="#contact"
                className="text-[#c9a86a] hover:text-white font-semibold uppercase tracking-wider flex items-center gap-1"
              >
                <span>Partner With Us</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
