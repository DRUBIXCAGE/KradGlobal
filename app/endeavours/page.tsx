import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink, Globe, MapPin, Users, Sparkles } from "lucide-react";
import { getAllEndeavours } from "@/data/content";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Endeavours & Business Verticals | Krad Global",
  description:
    "Explore Krad Global's 6 core business endeavours spanning Global Travel, Import-Export, Global Trading, Digital Commerce, Corporate Solutions, and Future Ventures.",
};

export default function EndeavoursIndexPage() {
  const endeavours = getAllEndeavours();

  return (
    <div className="min-h-screen bg-[#05070a] text-slate-100 selection:bg-[#c9a86a]/30 selection:text-white">
      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-[#05070a]/90 backdrop-blur-xl border-b border-white/[0.08] py-4">
        <div className="w-full px-6 md:px-12 lg:px-16 xl:px-20 flex items-center justify-between">
          <Link
            href="/"
            className="group flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-[#c9a86a] transition-transform group-hover:-translate-x-1" />
            <span>Return to Krad Global Home</span>
          </Link>

          <Link
            href="/#contact"
            className="px-4 py-2 rounded-sm border border-[#c9a86a]/50 text-xs font-semibold uppercase tracking-[0.16em] text-[#c9a86a] hover:bg-[#c9a86a]/10 transition-colors"
          >
            Commercial Desk
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-32 pb-24 w-full px-6 md:px-12 lg:px-16 xl:px-20">
        {/* Header Section */}
        <div className="max-w-4xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#c9a86a]/30 bg-white/[0.02] text-[11px] uppercase tracking-[0.25em] text-[#c9a86a] mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Portfolio Directory // 6 Active Endeavours</span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-tight mb-6">
            STRATEGIC <span className="gold-gradient-text">ENDEAVOURS.</span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            Krad Global operates through distinct, specialized corporate entities. Each endeavour possesses its own operational mandate, dedicated web portal, country jurisdiction, and experienced leadership team.
          </p>
        </div>

        {/* Endeavours Grid Ordered 01 to 06 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {endeavours.map((item) => (
            <div
              key={item.id}
              className="group card-interactive relative rounded-sm border border-white/10 bg-[#080c16] hover:border-[#c9a86a]/50 p-8 sm:p-10 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header: Order & Country */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
                  <span className="font-mono text-sm font-bold text-[#c9a86a] tracking-widest uppercase">
                    ENDEAVOUR // ORDER 0{item.order}
                  </span>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-xs text-slate-300">
                    <MapPin className="w-3.5 h-3.5 text-[#00e5ff]" />
                    <span>{item.country}</span>
                  </div>
                </div>

                {/* Title & Tagline */}
                <Link href={`/endeavours/${item.id}`} className="block group-hover:text-[#c9a86a] transition-colors">
                  <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-white mb-2">
                    {item.title}
                  </h2>
                </Link>

                <p className="text-xs uppercase tracking-[0.2em] text-[#c9a86a] font-medium mb-4">
                  {item.tagline}
                </p>

                <p className="text-sm text-slate-300 font-light leading-relaxed mb-6">
                  {item.shortDescription}
                </p>

                {/* Dedicated Website Card */}
                <div className="p-4 rounded-sm border border-white/10 bg-white/[0.02] flex items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-2 overflow-hidden">
                    <Globe className="w-4 h-4 text-[#00e5ff] shrink-0" />
                    <span className="text-xs font-mono text-slate-300 truncate">
                      {item.websiteUrl}
                    </span>
                  </div>

                  <a
                    href={item.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[#c9a86a] hover:text-[#e5c583] font-medium shrink-0"
                    title={`Open ${item.websiteUrl}`}
                  >
                    <span>Visit</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                {/* Team & Operational Hubs info */}
                <div className="space-y-2 mb-8 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <Users className="w-3.5 h-3.5 text-[#c9a86a]" />
                    <span>Team: {item.teamMembers.map((t) => t.name).join(", ")}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Action CTA */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <Link
                  href={`/endeavours/${item.id}`}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white hover:text-[#c9a86a] transition-colors"
                >
                  <span>Explore Full Endeavour Dossier</span>
                  <ArrowRight className="w-4 h-4 text-[#c9a86a] transition-transform group-hover:translate-x-1" />
                </Link>

                <a
                  href={item.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-sm border border-white/15 bg-white/[0.03] hover:border-[#c9a86a] text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-300 hover:text-white transition-all"
                >
                  Website ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
