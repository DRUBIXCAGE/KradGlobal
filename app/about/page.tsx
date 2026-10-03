import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Compass, ShieldCheck, Globe, Sparkles } from "lucide-react";
import BrandIntro from "@/components/BrandIntro";
import WhyKrad from "@/components/WhyKrad";
import Ecosystem from "@/components/Ecosystem";
import Vision from "@/components/Vision";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Krad Global | Institutional Profile & Philosophy",
  description:
    "Learn about Krad Global: our international operating philosophy, cross-border corridors across India, UAE, and USA, and our unified commercial ecosystem.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#05070a] text-slate-100 selection:bg-[#c9a86a]/30 selection:text-white">
      {/* Top Floating Glass Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-[#05070a]/90 backdrop-blur-xl border-b border-white/[0.08] py-4">
        <div className="w-full px-6 md:px-12 lg:px-16 xl:px-20 flex items-center justify-between">
          <Link
            href="/"
            className="group flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-[#c9a86a] transition-transform group-hover:-translate-x-1" />
            <span>Return to Krad Global Home</span>
          </Link>

          <div className="flex items-center gap-4">
            <Link
              href="/endeavours"
              className="text-xs uppercase tracking-[0.2em] text-slate-400 hover:text-[#c9a86a] transition-colors"
            >
              Endeavours
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 rounded-sm bg-[#c9a86a] text-[#05070a] font-bold text-xs uppercase tracking-[0.16em] hover:bg-[#d8b77a] transition-all"
            >
              Contact Desk
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-28">
        {/* About Hero */}
        <section className="relative py-20 lg:py-28 overflow-hidden w-full px-6 md:px-12 lg:px-16 xl:px-20 border-b border-white/10">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,_rgba(201,168,106,0.08)_0%,_rgba(0,229,255,0.03)_50%,_transparent_75%)] pointer-events-none blur-3xl" />

          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#c9a86a]/30 bg-white/[0.02] text-[11px] uppercase tracking-[0.25em] text-[#c9a86a] mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Institutional Profile // About Krad Global</span>
            </div>

            <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-tight mb-6">
              BUILT FOR A <span className="gold-gradient-text">WORLD THAT MOVES.</span>
            </h1>

            <p className="text-slate-300 text-lg sm:text-2xl font-light leading-relaxed mb-8">
              Krad Global operates at the intersection of people, physical commerce, and digital trade. We engineer long-term strategic conduits connecting South Asia, the GCC, and North America.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/endeavours"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-sm bg-[#c9a86a] text-[#05070a] font-bold text-xs uppercase tracking-[0.16em] hover:bg-[#d8b77a] transition-all shadow-lg"
              >
                <span>Explore 6 Endeavours</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/presence"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-sm border border-white/20 bg-white/[0.04] text-white font-semibold text-xs uppercase tracking-[0.16em] hover:bg-white/[0.08] transition-all"
              >
                <span>Global Presence & Hubs</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Brand Philosophy Section */}
        <BrandIntro />

        {/* Institutional Advantage Section */}
        <WhyKrad />

        {/* Global Commerce Ecosystem Section */}
        <Ecosystem />

        {/* Vision & Horizon Vectors */}
        <Vision />
      </main>

      <Footer />
    </div>
  );
}
