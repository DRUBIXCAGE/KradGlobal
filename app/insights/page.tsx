import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Sparkles, BookOpen } from "lucide-react";
import Insights from "@/components/Insights";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Market Insights & Intelligence | Krad Global",
  description:
    "Explore strategic research, trade analyses, supply chain reports, and macroeconomic commentary from Krad Global's operational desks.",
};

export default function InsightsPage() {
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
        {/* Insights Hero */}
        <section className="relative py-20 lg:py-28 overflow-hidden w-full px-6 md:px-12 lg:px-16 xl:px-20 border-b border-white/10">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,_rgba(201,168,106,0.07)_0%,_transparent_70%)] pointer-events-none blur-3xl" />

          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#c9a86a]/30 bg-white/[0.02] text-[11px] uppercase tracking-[0.25em] text-[#c9a86a] mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Executive Intelligence & Analysis</span>
            </div>

            <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-tight mb-6">
              MARKET PERSPECTIVES & <span className="gold-gradient-text">INTELLIGENCE.</span>
            </h1>

            <p className="text-slate-300 text-lg sm:text-2xl font-light leading-relaxed mb-8">
              Real-time dispatches on international trade flows, regulatory updates, cross-border e-commerce algorithms, and institutional mobility from our global research desks.
            </p>
          </div>
        </section>

        {/* Filterable Articles Component */}
        <Insights />
      </main>

      <Footer />
    </div>
  );
}
