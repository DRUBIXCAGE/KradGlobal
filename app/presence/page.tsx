import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Globe, MapPin, Sparkles, Building2, Phone, Mail } from "lucide-react";
import GlobalPresence from "@/components/GlobalPresence";
import MarketStory from "@/components/MarketStory";
import Footer from "@/components/Footer";
import { COMPANY_DATA } from "@/data/content";

export const metadata: Metadata = {
  title: "Global Presence & Strategic Hubs | Krad Global",
  description:
    "Explore Krad Global's operational nodes in India, UAE, and the USA. Strategic bilateral corridors, trade routes, and international office locations.",
};

export default function PresencePage() {
  return (
    <div className="min-h-screen bg-[#05070a] text-slate-100 selection:bg-[#c9a86a]/30 selection:text-white">
      {/* Top Floating Navigation */}
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
        {/* Presence Hero */}
        <section className="relative py-20 lg:py-28 overflow-hidden w-full px-6 md:px-12 lg:px-16 xl:px-20 border-b border-white/10">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,_rgba(0,229,255,0.05)_0%,_rgba(201,168,106,0.06)_50%,_transparent_75%)] pointer-events-none blur-3xl" />

          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#c9a86a]/30 bg-white/[0.02] text-[11px] uppercase tracking-[0.25em] text-[#c9a86a] mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>International Footprint // India • UAE • USA</span>
            </div>

            <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-tight mb-6">
              FROM LOCAL ROOTS TO <span className="gold-gradient-text">GLOBAL REACH.</span>
            </h1>

            <p className="text-slate-300 text-lg sm:text-2xl font-light leading-relaxed mb-8">
              Krad Global operates through strategically positioned operational, logistics, and corporate nodes across South Asia, the Arabian Gulf, and North America.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#presence"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-sm bg-[#c9a86a] text-[#05070a] font-bold text-xs uppercase tracking-[0.16em] hover:bg-[#d8b77a] transition-all shadow-lg"
              >
                <span>Interactive Hub Map</span>
                <Globe className="w-4 h-4" />
              </a>
              <Link
                href="/endeavours"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-sm border border-white/20 bg-white/[0.04] text-white font-semibold text-xs uppercase tracking-[0.16em] hover:bg-white/[0.08] transition-all"
              >
                <span>View Endeavours by Country</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Global Presence Map & Stats */}
        <GlobalPresence />

        {/* Regional Hubs & Physical Office Addresses Directory */}
        <section className="py-24 w-full px-6 md:px-12 lg:px-16 xl:px-20 bg-[#070b14] border-t border-white/10">
          <div className="max-w-4xl mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#c9a86a]/30 bg-white/[0.02] text-[11px] uppercase tracking-[0.25em] text-[#c9a86a] mb-4">
              <Building2 className="w-3.5 h-3.5" />
              <span>Commercial Hub Directory</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-white mb-4">
              Regional Desks & Key Hubs
            </h2>
            <p className="text-slate-400 text-base font-light">
              Direct physical operations handling bilateral customs clearance, freight transfers, financial settlement, and executive mobility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {COMPANY_DATA.contactInfo.regionalOffices.map((office) => (
              <div
                key={office.region}
                className="p-8 rounded-sm border border-white/10 bg-[#05070a] hover:border-[#c9a86a]/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#c9a86a]">
                      Regional Node
                    </span>
                    <span className="text-2xl">
                      {office.region === "India" ? "🇮🇳" : office.region === "UAE" ? "🇦🇪" : "🇺🇸"}
                    </span>
                  </div>

                  <h3 className="font-editorial text-2xl font-bold text-white mb-1">
                    {office.region}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-[#c9a86a] mb-4">
                    {office.city}
                  </p>

                  <div className="flex items-start gap-2.5 text-xs text-slate-300 font-light mb-4">
                    <MapPin className="w-4 h-4 text-[#00e5ff] shrink-0 mt-0.5" />
                    <span>{office.address}</span>
                  </div>

                  <div className="p-3 rounded-sm bg-white/[0.03] border border-white/5 text-[11px] text-slate-400">
                    <span className="text-slate-200 font-semibold block mb-1">Core Focus:</span>
                    <span>{office.focus}</span>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                  <Link
                    href={`/contact?region=${office.region.toLowerCase()}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#c9a86a] hover:text-[#f5e0b8] transition-colors"
                  >
                    <span>Connect with Hub</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tri-Continental Market Story */}
        <MarketStory />
      </main>

      <Footer />
    </div>
  );
}
