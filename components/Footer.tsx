"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUp, Globe, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const [legalModal, setLegalModal] = useState<string | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getLegalContent = (type: string) => {
    switch (type) {
      case "Privacy Policy":
        return {
          title: "Privacy Policy",
          content:
            "Krad Global is committed to safeguarding the privacy and commercial confidentiality of our clients, suppliers, and partners across all jurisdictions including India, the UAE, the USA, and international markets. Personal and corporate data collected through our digital interfaces is strictly utilized for trade facilitation, inquiry response, and contractual coordination. We do not sell or monetize client data.",
        };
      case "Terms":
        return {
          title: "Terms & Conditions of Commercial Engagement",
          content:
            "All transactions, sourcing inquiries, corporate mobility bookings, and trade engagements facilitated by Krad Global entities are governed by international commercial trade law, Incoterms 2020 definitions, and respective regional regulatory frameworks across our operating hubs in India, the UAE, and the USA.",
        };
      case "Cookie Policy":
        return {
          title: "Cookie & Tracking Policy",
          content:
            "This corporate portal uses essential and functional cookies to remember user preferences, facilitate performance metrics, and deliver an optimized browsing experience. By utilizing this site, you consent to standard analytical usage tracking in accordance with global data protection standards.",
        };
      default:
        return { title: "", content: "" };
    }
  };

  return (
    <footer className="relative bg-[#030407] border-t border-white/10 text-white pt-20 pb-12 overflow-hidden">
      <div className="w-full px-6 md:px-12 lg:px-16 xl:px-20">
        {/* Top Tier: Brand, Tagline & Scroll To Top */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-16 border-b border-white/10 gap-8">
          <div>
            <div className="flex items-center gap-3 select-none mb-3">
              <div className="w-8 h-8 rounded-sm border border-[#c9a86a]/60 bg-white/[0.04] flex items-center justify-center">
                <span className="font-editorial text-xs font-bold text-[#c9a86a] tracking-widest">
                  KG
                </span>
              </div>
              <span className="font-editorial text-2xl font-bold tracking-[0.2em] text-white">
                KRAD <span className="text-[#c9a86a]">GLOBAL</span>
              </span>
            </div>
            <p className="text-xs tracking-[0.2em] uppercase text-slate-400 font-light">
              Connecting Markets. Moving People. Creating Possibilities.
            </p>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="self-start md:self-auto flex items-center gap-2 px-4 py-2.5 rounded-sm border border-white/15 bg-white/[0.02] hover:border-[#c9a86a] hover:bg-[#c9a86a]/10 text-slate-300 hover:text-white text-xs uppercase tracking-wider transition-all"
            aria-label="Back to top of page"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#c9a86a]" />
          </button>
        </div>

        {/* Middle Tier: Structured Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 py-16 border-b border-white/10 text-xs">
          {/* Column 1: Company */}
          <div className="flex flex-col gap-4">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#c9a86a] font-semibold">
              Company
            </span>
            <ul className="space-y-2.5 text-slate-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Group
                </Link>
              </li>
              <li>
                <Link href="/endeavours" className="hover:text-white transition-colors">
                  All Endeavours
                </Link>
              </li>
              <li>
                <Link href="/presence" className="hover:text-white transition-colors">
                  Global Presence
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-white transition-colors">
                  Market Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Commercial Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Business Endeavours */}
          <div className="flex flex-col gap-4">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#c9a86a] font-semibold">
              Endeavours
            </span>
            <ul className="space-y-2.5 text-slate-400">
              <li>
                <Link href="/endeavours/global-travel" className="hover:text-white transition-colors">
                  01 // Global Travel
                </Link>
              </li>
              <li>
                <Link href="/endeavours/import-export" className="hover:text-white transition-colors">
                  02 // Import & Export
                </Link>
              </li>
              <li>
                <Link href="/endeavours/global-trading" className="hover:text-white transition-colors">
                  03 // Global Trading
                </Link>
              </li>
              <li>
                <Link href="/endeavours/digital-commerce" className="hover:text-white transition-colors">
                  04 // Digital Commerce
                </Link>
              </li>
              <li>
                <Link href="/endeavours/business-solutions" className="hover:text-white transition-colors">
                  05 // Business Solutions
                </Link>
              </li>
              <li>
                <Link href="/endeavours/future-ventures" className="hover:text-white transition-colors">
                  06 // Future Ventures
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Global Presence */}
          <div className="flex flex-col gap-4">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#c9a86a] font-semibold">
              Operating Hubs
            </span>
            <ul className="space-y-2.5 text-slate-400">
              <li>
                <Link href="/presence#india" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>🇮🇳</span> Mumbai & Delhi, India
                </Link>
              </li>
              <li>
                <Link href="/presence#uae" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>🇦🇪</span> DIFC / Dubai, UAE
                </Link>
              </li>
              <li>
                <Link href="/presence#usa" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>🇺🇸</span> New York & Delaware, USA
                </Link>
              </li>
              <li>
                <Link href="/presence" className="hover:text-[#c9a86a] transition-colors flex items-center gap-1.5 font-medium">
                  <span>🌐</span> View Corridors Map →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div className="flex flex-col gap-4">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#c9a86a] font-semibold">
              Legal
            </span>
            <ul className="space-y-2.5 text-slate-400">
              <li>
                <button
                  onClick={() => setLegalModal("Privacy Policy")}
                  className="hover:text-white transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => setLegalModal("Terms")}
                  className="hover:text-white transition-colors text-left"
                >
                  Terms
                </button>
              </li>
              <li>
                <button
                  onClick={() => setLegalModal("Cookie Policy")}
                  className="hover:text-white transition-colors text-left"
                >
                  Cookie Policy
                </button>
              </li>
            </ul>
          </div>

          {/* Column 5: Social & Institutional */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 flex flex-col gap-4">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#c9a86a] font-semibold">
              Connect
            </span>
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-sm border border-white/10 bg-white/[0.02] flex items-center justify-center text-slate-400 hover:text-white hover:border-[#c9a86a] transition-all"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.77v8.37H6.46v-8.37M7.85 6.4a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-sm border border-white/10 bg-white/[0.02] flex items-center justify-center text-slate-400 hover:text-white hover:border-[#c9a86a] transition-all"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-sm border border-white/10 bg-white/[0.02] flex items-center justify-center text-slate-400 hover:text-white hover:border-[#c9a86a] transition-all"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-sm border border-white/10 bg-white/[0.02] flex items-center justify-center text-slate-400 hover:text-white hover:border-[#c9a86a] transition-all"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
            <p className="text-[11px] text-slate-500 leading-relaxed mt-2">
              Corporate Desk operating across IST, GST, and EST standard financial market hours.
            </p>
          </div>
        </div>

        {/* Bottom Tier: Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-4">
          <p>© 2026 Krad Global. All rights reserved.</p>
          <p className="tracking-widest uppercase text-[10px]">
            India • UAE • USA • Global Markets
          </p>
        </div>
      </div>

      {/* Legal Dialog Modal */}
      <AnimatePresence>
        {legalModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLegalModal(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative z-10 w-full max-w-lg bg-[#0a0e18] border border-[#c9a86a]/40 rounded-sm p-8 text-white shadow-2xl"
            >
              <button
                onClick={() => setLegalModal(null)}
                className="absolute top-6 right-6 text-slate-400 hover:text-white"
                aria-label="Close legal modal"
              >
                <X className="w-5 h-5" />
              </button>
              <h3 className="font-editorial text-xl font-bold text-white mb-4">
                {getLegalContent(legalModal).title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                {getLegalContent(legalModal).content}
              </p>
              <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
                <button
                  onClick={() => setLegalModal(null)}
                  className="px-4 py-2 rounded-sm bg-[#c9a86a] text-[#05070a] font-bold text-xs uppercase tracking-wider"
                >
                  I Understand
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
}
