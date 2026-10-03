"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X, Globe, MessageSquare } from "lucide-react";

interface NavItem {
  name: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Endeavours", href: "/endeavours" },
  { name: "Global Presence", href: "/presence" },
  { name: "Insights", href: "/insights" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "py-3.5 bg-transparent backdrop-blur-sm border-b border-transparent shadow-none"
            : "py-5 bg-[#05070a] border-b border-white/[0.08] shadow-[0_4px_25px_rgba(0,0,0,0.6)]"
        }`}
      >
        <div className="w-full px-6 md:px-12 lg:px-16 xl:px-20 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="group flex items-center gap-3 select-none"
            aria-label="Krad Global Home"
          >
            {/* Monogram Crest */}
            <div className="w-9 h-9 rounded-sm border border-[#c9a86a]/40 bg-gradient-to-br from-white/[0.05] to-transparent flex items-center justify-center transition-all duration-300 group-hover:border-[#c9a86a] group-hover:shadow-[0_0_15px_rgba(201,168,106,0.3)]">
              <span className="font-editorial text-xs font-bold text-[#c9a86a] tracking-widest">
                KG
              </span>
            </div>

            <div className="flex flex-col">
              <span className="font-editorial text-lg md:text-xl font-bold tracking-[0.2em] text-white transition-colors duration-300 group-hover:text-slate-100">
                KRAD <span className="text-[#c9a86a]">GLOBAL</span>
              </span>
              <span className="text-[9px] tracking-[0.22em] text-slate-400 font-light -mt-1 hidden sm:block">
                INDIA • UAE • USA
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(item.href);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative text-xs uppercase tracking-[0.2em] transition-all duration-300 hover:text-white py-1 ${
                    isActive ? "text-[#c9a86a] font-medium" : "text-slate-300"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.span
                      layoutId="navUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-[#c9a86a] to-[#00e5ff]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Live Status & Connect CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] text-[11px] text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-slate-400 font-light">Global Desk:</span>
              <span className="text-slate-200 font-medium">Active</span>
            </div>

            <Link
              href="/contact"
              className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-sm border border-[#c9a86a]/60 bg-gradient-to-r from-[#c9a86a]/15 to-[#c9a86a]/5 hover:from-[#c9a86a]/30 hover:to-[#c9a86a]/15 text-xs font-semibold uppercase tracking-[0.16em] text-[#f8fafc] transition-all duration-300 group hover:shadow-[0_0_20px_rgba(201,168,106,0.35)] hover:border-[#c9a86a]"
            >
              <span>Let&apos;s Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#c9a86a] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-sm border border-white/10 text-slate-300 hover:text-white hover:border-[#c9a86a]/50 transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Full-Screen Mobile Navigation Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-0 z-30 lg:hidden bg-[#05070a]/95 backdrop-blur-2xl flex flex-col justify-between pt-28 pb-10 px-8"
          >
            <div className="flex flex-col gap-6">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#c9a86a] font-medium">
                Navigation Directory
              </span>

              <nav className="flex flex-col gap-5">
                {NAV_ITEMS.map((item, idx) => {
                  const isActive =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname?.startsWith(item.href);

                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * idx, duration: 0.3 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center justify-between text-xl font-editorial tracking-[0.1em] border-b border-white/5 pb-3 transition-colors ${
                          isActive ? "text-[#c9a86a]" : "text-slate-200 hover:text-[#c9a86a]"
                        }`}
                      >
                        <span>{item.name}</span>
                        <ArrowUpRight className="w-4 h-4 text-slate-500" />
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
            </div>

            <div className="flex flex-col gap-4 pt-6 border-t border-white/10">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-[#00e5ff]" />
                  Hubs: India • UAE • USA
                </span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Active
                </span>
              </div>

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-sm bg-gradient-to-r from-[#c9a86a] to-[#b38f51] text-[#05070a] font-bold text-xs uppercase tracking-[0.2em] shadow-lg shadow-[#c9a86a]/20"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Let&apos;s Connect</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
