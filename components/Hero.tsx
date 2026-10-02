"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Compass, ShieldCheck, Zap } from "lucide-react";

interface CityNode {
  name: string;
  code: string;
  lat: number;
  lng: number;
  country: string;
  flag: string;
  accent: string;
}

const HUBS: CityNode[] = [
  { name: "INDIA", code: "BOM/DEL", lat: 20.5937, lng: 78.9629, country: "India", flag: "🇮🇳", accent: "#c9a86a" },
  { name: "UAE", code: "DXB", lat: 25.2048, lng: 55.2708, country: "United Arab Emirates", flag: "🇦🇪", accent: "#00e5ff" },
  { name: "USA", code: "NYC", lat: 40.7128, lng: -74.006, country: "United States", flag: "🇺🇸", accent: "#38bdf8" },
  { name: "GLOBAL", code: "WORLD", lat: 51.5074, lng: -0.1278, country: "Global Markets", flag: "🌐", accent: "#f5e0b8" },
];

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [activeHub, setActiveHub] = useState<CityNode>(HUBS[0]);

  // Handle Canvas 3D Globe with Arcs & Real-Time Pulse
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    // Resize handler
    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener("resize", handleResize);

    // Globe parameters
    const globeRadius = Math.min(width, height) * (width < 768 ? 0.38 : 0.35);
    let rotationY = 0.5;
    let rotationX = 0.25;
    let targetRotationY = 0.5;
    let targetRotationX = 0.25;
    let isDragging = false;
    let previousMouseX = 0;
    let previousMouseY = 0;

    // Generate Globe Dot Matrix (spherical distribution)
    const DOTS_COUNT = 900;
    const dots: { x: number; y: number; z: number; baseLat: number; baseLng: number }[] = [];

    for (let i = 0; i < DOTS_COUNT; i++) {
      // Golden spiral distribution on sphere
      const phi = Math.acos(-1 + (2 * i) / DOTS_COUNT);
      const theta = Math.sqrt(DOTS_COUNT * Math.PI) * phi;
      const x = Math.cos(theta) * Math.sin(phi);
      const y = Math.sin(theta) * Math.sin(phi);
      const z = Math.cos(phi);

      // Derive approximate lat/lng
      const baseLat = 90 - (phi * 180) / Math.PI;
      const baseLng = ((theta * 180) / Math.PI) % 360 - 180;

      dots.push({ x, y, z, baseLat, baseLng });
    }

    // Helper: convert lat/lng to 3D point on unit sphere
    const latLngToVector = (lat: number, lng: number) => {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lng + 180) * (Math.PI / 180);
      return {
        x: -(Math.sin(phi) * Math.cos(theta)),
        y: Math.cos(phi),
        z: Math.sin(phi) * Math.sin(theta),
      };
    };

    // Connecting Trade/Flight Arcs: India -> UAE -> USA -> Global
    const connections = [
      { from: HUBS[0], to: HUBS[1], progress: 0.1, speed: 0.006, color: "#c9a86a" },
      { from: HUBS[1], to: HUBS[2], progress: 0.45, speed: 0.005, color: "#00e5ff" },
      { from: HUBS[2], to: HUBS[3], progress: 0.7, speed: 0.0055, color: "#e5c583" },
      { from: HUBS[3], to: HUBS[0], progress: 0.2, speed: 0.0048, color: "#38bdf8" },
    ];

    // Mouse drag interaction
    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      previousMouseX = e.clientX;
      previousMouseY = e.clientY;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - previousMouseX;
      const deltaY = e.clientY - previousMouseY;
      targetRotationY += deltaX * 0.005;
      targetRotationX += deltaY * 0.005;
      previousMouseX = e.clientX;
      previousMouseY = e.clientY;
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    // Render loop
    let tick = 0;
    const render = () => {
      tick++;
      // Auto-rotation when not dragging
      if (!isDragging) {
        targetRotationY += 0.002;
      }
      // Damped smooth rotation
      rotationY += (targetRotationY - rotationY) * 0.05;
      rotationX += (targetRotationX - rotationX) * 0.05;
      // Clamp vertical tilt
      rotationX = Math.max(-0.6, Math.min(0.6, rotationX));

      ctx.clearRect(0, 0, width, height);

      // Globe center position
      const centerX = width > 1024 ? width * 0.68 : width * 0.5;
      const centerY = height * 0.52;

      // Outer ambient aura
      const auraGradient = ctx.createRadialGradient(
        centerX,
        centerY,
        globeRadius * 0.6,
        centerX,
        centerY,
        globeRadius * 1.5
      );
      auraGradient.addColorStop(0, "rgba(201, 168, 106, 0.06)");
      auraGradient.addColorStop(0.5, "rgba(0, 229, 255, 0.03)");
      auraGradient.addColorStop(1, "transparent");
      ctx.fillStyle = auraGradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, globeRadius * 1.5, 0, Math.PI * 2);
      ctx.fill();

      // Atmospheric outer rim ring
      ctx.strokeStyle = "rgba(201, 168, 106, 0.15)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(centerX, centerY, globeRadius * 1.05, 0, Math.PI * 2);
      ctx.stroke();

      // Equator / Orbit Ring
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(0.3);
      ctx.strokeStyle = "rgba(255, 255, 255, 0.04)";
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 8]);
      ctx.beginPath();
      ctx.ellipse(0, 0, globeRadius * 1.35, globeRadius * 0.45, 0, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      // Project 3D vector with rotation
      const project = (vec: { x: number; y: number; z: number }, scale = 1) => {
        // Rotate around Y
        const cosY = Math.cos(rotationY);
        const sinY = Math.sin(rotationY);
        const x1 = vec.x * cosY - vec.z * sinY;
        const z1 = vec.z * cosY + vec.x * sinY;

        // Rotate around X
        const cosX = Math.cos(rotationX);
        const sinX = Math.sin(rotationX);
        const y2 = vec.y * cosX - z1 * sinX;
        const z2 = z1 * cosX + vec.y * sinX;

        // Orthographic projection with slight perspective
        const r = globeRadius * scale;
        return {
          screenX: centerX + x1 * r,
          screenY: centerY - y2 * r,
          depth: z2,
          visible: z2 > -0.2, // Front hemisphere view
        };
      };

      // 1. Draw Globe Particle Dots
      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];
        const proj = project(dot);

        if (proj.visible) {
          const alpha = Math.max(0.1, (proj.depth + 0.3) / 1.3);
          const size = proj.depth > 0.4 ? 1.8 : 1.2;

          ctx.fillStyle =
            i % 7 === 0
              ? `rgba(201, 168, 106, ${alpha * 0.85})`
              : i % 13 === 0
              ? `rgba(0, 229, 255, ${alpha * 0.75})`
              : `rgba(255, 255, 255, ${alpha * 0.4})`;

          ctx.beginPath();
          ctx.arc(proj.screenX, proj.screenY, size, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // 2. Draw Great-Circle Trade/Flight Arcs
      connections.forEach((conn) => {
        conn.progress = (conn.progress + conn.speed) % 1;

        const v1 = latLngToVector(conn.from.lat, conn.from.lng);
        const v2 = latLngToVector(conn.to.lat, conn.to.lng);

        const p1 = project(v1);
        const p2 = project(v2);

        // Compute 3D midpoint elevated above surface for realistic arc
        const midX = (v1.x + v2.x) * 0.5;
        const midY = (v1.y + v2.y) * 0.5;
        const midZ = (v1.z + v2.z) * 0.5;
        const len = Math.sqrt(midX * midX + midY * midY + midZ * midZ) || 1;
        const elevation = 1.35; // Arc altitude
        const arcMidVec = {
          x: (midX / len) * elevation,
          y: (midY / len) * elevation,
          z: (midZ / len) * elevation,
        };
        const pMid = project(arcMidVec);

        // Draw arc line if either endpoint is visible
        if (p1.visible || p2.visible) {
          ctx.beginPath();
          ctx.moveTo(p1.screenX, p1.screenY);
          ctx.quadraticCurveTo(pMid.screenX, pMid.screenY, p2.screenX, p2.screenY);
          ctx.strokeStyle = conn.color;
          ctx.lineWidth = 1.2;
          ctx.globalAlpha = 0.35;
          ctx.stroke();
          ctx.globalAlpha = 1.0;

          // Draw animated glowing photon packet traveling the arc
          const t = conn.progress;
          // Quadratic Bezier interpolation in 2D projection space
          const qx = (1 - t) * (1 - t) * p1.screenX + 2 * (1 - t) * t * pMid.screenX + t * t * p2.screenX;
          const qy = (1 - t) * (1 - t) * p1.screenY + 2 * (1 - t) * t * pMid.screenY + t * t * p2.screenY;

          // Photon head
          ctx.fillStyle = "#ffffff";
          ctx.beginPath();
          ctx.arc(qx, qy, 2.5, 0, Math.PI * 2);
          ctx.fill();

          // Photon glow
          ctx.fillStyle = conn.color;
          ctx.beginPath();
          ctx.arc(qx, qy, 6, 0, Math.PI * 2);
          ctx.globalAlpha = 0.5;
          ctx.fill();
          ctx.globalAlpha = 1.0;
        }
      });

      // 3. Draw Hub Anchor Points & Pulse Rings
      HUBS.forEach((hub) => {
        const vec = latLngToVector(hub.lat, hub.lng);
        const proj = project(vec);

        if (proj.visible) {
          const isCurrent = activeHub.name === hub.name;
          const pulse = (Math.sin(tick * 0.08) + 1) * 0.5;

          // Outer pulse ring
          ctx.strokeStyle = hub.accent;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(proj.screenX, proj.screenY, 7 + pulse * 6, 0, Math.PI * 2);
          ctx.globalAlpha = 0.5 - pulse * 0.3;
          ctx.stroke();
          ctx.globalAlpha = 1.0;

          // Inner solid core
          ctx.fillStyle = hub.accent;
          ctx.beginPath();
          ctx.arc(proj.screenX, proj.screenY, isCurrent ? 4 : 3, 0, Math.PI * 2);
          ctx.fill();

          // Text label next to hub
          ctx.font = "600 10px var(--font-outfit), sans-serif";
          ctx.fillStyle = "#ffffff";
          ctx.fillText(hub.name, proj.screenX + 10, proj.screenY + 3);

          ctx.font = "300 8px var(--font-outfit), sans-serif";
          ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
          ctx.fillText(hub.code, proj.screenX + 10, proj.screenY + 12);
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      cancelAnimationFrame(animationFrameId);
    };
  }, [activeHub]);

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#05070a] pt-24 pb-16 lg:py-0"
      aria-label="Krad Global Hero Section"
    >
      {/* Background Gradients & Coordinate Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[radial-gradient(ellipse_at_center,_rgba(201,168,106,0.1)_0%,_rgba(0,229,255,0.05)_40%,_transparent_70%)] pointer-events-none blur-3xl" />

      {/* Interactive 3D Canvas Globe in Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-auto cursor-grab active:cursor-grabbing">
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>

      {/* Main Content Layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col justify-between min-h-[85vh]">
        {/* Top Corridor Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap items-center gap-2 pt-6"
        >
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#c9a86a]/30 bg-black/40 backdrop-blur-md text-[11px] uppercase tracking-[0.2em] text-[#e5c583]">
            <span className="w-2 h-2 rounded-full bg-[#00e5ff] animate-ping" />
            <Compass className="w-3.5 h-3.5 text-[#c9a86a]" />
            <span>Strategic Corridors Active</span>
          </div>

          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-[11px] text-slate-300 backdrop-blur-md">
            <span>India</span>
            <span className="text-slate-500">→</span>
            <span>UAE</span>
            <span className="text-slate-500">→</span>
            <span>USA</span>
            <span className="text-slate-500">→</span>
            <span className="text-[#00e5ff]">Global Markets</span>
          </div>
        </motion.div>

        {/* Hero Editorial Headlines & CTAs */}
        <div className="max-w-2xl py-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-[#c9a86a] font-medium mb-4 flex items-center gap-2">
              <span className="w-6 h-[1px] bg-[#c9a86a]" />
              Diversified International Group
            </p>

            <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.08]">
              GLOBAL <span className="gold-gradient-text">BUSINESS.</span>
              <br />
              WITHOUT <span className="blue-gradient-text">BORDERS.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-xl"
          >
            Krad Global connects people, products, opportunities and markets across{" "}
            <span className="text-white font-medium">India</span>,{" "}
            <span className="text-white font-medium">UAE</span>,{" "}
            <span className="text-white font-medium">USA</span> and beyond.
          </motion.p>

          {/* Primary & Secondary CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#businesses"
              className="px-7 py-3.5 rounded-sm bg-gradient-to-r from-[#c9a86a] via-[#dfc085] to-[#c9a86a] text-[#05070a] font-semibold text-xs uppercase tracking-[0.2em] transition-all duration-300 hover:shadow-[0_0_25px_rgba(201,168,106,0.5)] hover:scale-[1.02] flex items-center gap-2.5 group"
            >
              <span>Explore Krad Global</span>
              <ArrowDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>

            <a
              href="#contact"
              className="px-7 py-3.5 rounded-sm border border-white/20 bg-white/[0.04] hover:bg-white/[0.08] hover:border-[#c9a86a]/60 text-slate-200 font-semibold text-xs uppercase tracking-[0.2em] transition-all duration-300 flex items-center gap-2 group backdrop-blur-md"
            >
              <span>Start a Conversation</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#c9a86a] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>
        </div>

        {/* Bottom Interactive Location Indicator Badges & Scroll Prompter */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 pt-8 pb-4 border-t border-white/[0.08]">
          {/* Floating Location Indicators: INDIA, UAE, USA, GLOBAL */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] tracking-[0.2em] uppercase text-slate-400 font-light mr-1">
              Key Hubs:
            </span>
            {HUBS.map((hub) => {
              const isSelected = activeHub.name === hub.name;
              return (
                <button
                  key={hub.name}
                  onClick={() => setActiveHub(hub)}
                  className={`px-3 py-1.5 rounded-sm border text-[11px] font-medium tracking-[0.16em] uppercase transition-all duration-300 flex items-center gap-1.5 backdrop-blur-md ${
                    isSelected
                      ? "border-[#c9a86a] bg-[#c9a86a]/15 text-white shadow-[0_0_12px_rgba(201,168,106,0.3)]"
                      : "border-white/10 bg-black/40 text-slate-400 hover:text-slate-200 hover:border-white/20"
                  }`}
                >
                  <span>{hub.flag}</span>
                  <span>{hub.name}</span>
                </button>
              );
            })}
          </div>

          {/* Scroll to explore prompter */}
          <a
            href="#about"
            className="flex items-center gap-2 text-[10px] tracking-[0.28em] uppercase text-slate-400 hover:text-[#c9a86a] transition-colors group"
          >
            <span>SCROLL TO EXPLORE</span>
            <motion.span
              animate={{ y: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            >
              ↓
            </motion.span>
          </a>
        </div>
      </div>
    </section>
  );
}
