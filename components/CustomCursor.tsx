"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // Smooth springs for cursor dot and ring
  const cursorX = useSpring(0, { damping: 28, stiffness: 350 });
  const cursorY = useSpring(0, { damping: 28, stiffness: 350 });

  const glowX = useSpring(0, { damping: 45, stiffness: 150 });
  const glowY = useSpring(0, { damping: 45, stiffness: 150 });

  useEffect(() => {
    // Disable on touch devices or reduced motion
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isTouch || prefersReducedMotion) return;

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      glowX.set(e.clientX);
      glowY.set(e.clientY);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Track interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest("button, a, input, select, textarea, [data-interactive='true']");
      setIsHovering(!!interactive);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseover", handleMouseOver, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, glowX, glowY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Ambient subtle light glow behind cursor */}
      <motion.div
        className="fixed top-0 left-0 w-96 h-96 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none z-30 opacity-20 blur-3xl custom-cursor-element"
        style={{
          x: glowX,
          y: glowY,
          background:
            "radial-gradient(circle, rgba(201, 168, 106, 0.25) 0%, rgba(0, 229, 255, 0.12) 40%, transparent 70%)",
        }}
      />

      {/* Main cursor ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full border custom-cursor-element flex items-center justify-center -translate-x-1/2 -translate-y-1/2 transition-colors duration-200"
        style={{
          x: cursorX,
          y: cursorY,
          width: isHovering ? 48 : isClicking ? 20 : 30,
          height: isHovering ? 48 : isClicking ? 20 : 30,
          borderColor: isHovering ? "rgba(201, 168, 106, 0.9)" : "rgba(255, 255, 255, 0.45)",
          backgroundColor: isHovering ? "rgba(201, 168, 106, 0.08)" : "transparent",
          backdropFilter: isHovering ? "blur(2px)" : "none",
        }}
      >
        {/* Center dot */}
        <motion.div
          className="rounded-full bg-[#c9a86a]"
          style={{
            width: isHovering ? 4 : 4,
            height: isHovering ? 4 : 4,
          }}
        />
      </motion.div>
    </>
  );
}
