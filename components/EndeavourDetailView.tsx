"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Globe,
  ExternalLink,
  MapPin,
  ShieldCheck,
  Users,
  Compass,
  Briefcase,
  CheckCircle2,
  Mail,
  Send,
  Building2,
  Sparkles,
  Share2,
  Check,
} from "lucide-react";
import { BusinessVertical, TeamMember } from "@/data/content";

interface EndeavourDetailViewProps {
  endeavour: BusinessVertical;
  allEndeavours: BusinessVertical[];
}

export default function EndeavourDetailView({
  endeavour,
  allEndeavours,
}: EndeavourDetailViewProps) {
  const [copiedLink, setCopiedLink] = useState(false);
  const [activeTab, setActiveTab] = useState<"operations" | "services" | "team">("operations");
  const [contactSubject, setContactSubject] = useState(`Inquiry regarding ${endeavour.title}`);

  // Find previous and next endeavours in order
  const currentIndex = allEndeavours.findIndex((e) => e.id === endeavour.id);
  const prevEndeavour =
    currentIndex > 0 ? allEndeavours[currentIndex - 1] : allEndeavours[allEndeavours.length - 1];
  const nextEndeavour =
    currentIndex < allEndeavours.length - 1 ? allEndeavours[currentIndex + 1] : allEndeavours[0];

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-[#05070a] text-slate-100 selection:bg-[#c9a86a]/30 selection:text-white">
      {/* Top Floating Glass Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-[#05070a]/90 backdrop-blur-xl border-b border-white/[0.08] py-4 transition-all duration-300">
        <div className="w-full px-6 md:px-12 lg:px-16 xl:px-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/#businesses"
              className="group flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4 text-[#c9a86a] transition-transform group-hover:-translate-x-1" />
              <span>Back to Overview</span>
            </Link>

            <span className="hidden sm:inline-block text-white/20">|</span>

            <Link
              href="/endeavours"
              className="hidden sm:inline-block text-xs uppercase tracking-[0.2em] text-slate-400 hover:text-[#c9a86a] transition-colors"
            >
              All Endeavours ({allEndeavours.length})
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleCopyLink}
              className="p-2 rounded-sm border border-white/10 text-slate-400 hover:text-white hover:border-[#c9a86a]/50 transition-colors"
              title="Copy page link"
              aria-label="Copy share link"
            >
              {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
            </button>

            {/* Individual Website Direct Link Button */}
            <a
              href={endeavour.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-gradient-to-r from-[#c9a86a] to-[#b38f51] hover:from-[#d8b77a] hover:to-[#c49e5d] text-[#05070a] font-bold text-xs uppercase tracking-[0.16em] transition-all shadow-md shadow-[#c9a86a]/20"
            >
              <span>Visit Website</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </nav>

      {/* Main Container */}
      <main className="pt-28 pb-24 w-full px-6 md:px-12 lg:px-16 xl:px-20">
        {/* Breadcrumb Hierarchy */}
        <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-slate-400 mb-8 pt-4">
          <Link href="/" className="hover:text-white transition-colors">
            KRAD GLOBAL
          </Link>
          <span>/</span>
          <Link href="/endeavours" className="hover:text-white transition-colors">
            ENDEAVOURS
          </Link>
          <span>/</span>
          <span className="text-[#c9a86a] font-medium">{endeavour.title}</span>
        </div>

        {/* HERO SECTION */}
        <section className="relative rounded-sm border border-white/10 bg-[#090d16] overflow-hidden p-8 sm:p-12 lg:p-16 mb-16 shadow-[0_20px_50px_rgba(0,0,0,0.7)]">
          {/* Subtle Background Image with Gradient Overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none"
            style={{ backgroundImage: `url('${endeavour.image}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070b14] via-[#070b14]/90 to-transparent pointer-events-none" />
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[radial-gradient(circle,_rgba(201,168,106,0.12)_0%,_transparent_70%)] pointer-events-none blur-3xl" />

          <div className="relative z-10 max-w-4xl">
            {/* Order & Country Badges */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-3.5 py-1.5 rounded-full border border-[#c9a86a]/40 bg-[#c9a86a]/10 text-xs font-mono tracking-widest text-[#f5e0b8] font-bold">
                ENDEAVOUR // ORDER 0{endeavour.order} OF 0{allEndeavours.length}
              </span>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/15 bg-black/40 text-xs text-slate-300 backdrop-blur-md">
                <MapPin className="w-3.5 h-3.5 text-[#00e5ff]" />
                <span className="text-slate-400">Jurisdiction / Country:</span>
                <span className="text-white font-medium">{endeavour.country}</span>
              </div>
            </div>

            {/* Title & Tagline */}
            <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-4">
              {endeavour.title}
            </h1>

            <p className="text-lg sm:text-2xl text-[#c9a86a] font-light tracking-wide mb-6">
              {endeavour.tagline}
            </p>

            <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed max-w-3xl mb-10">
              {endeavour.fullDescription}
            </p>

            {/* Individual Website Link Feature Card */}
            <div className="p-6 rounded-sm border border-[#c9a86a]/40 bg-gradient-to-br from-[#c9a86a]/15 via-white/[0.02] to-transparent backdrop-blur-md max-w-2xl mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-[#c9a86a] font-semibold mb-1">
                    <Globe className="w-3.5 h-3.5 text-[#00e5ff]" />
                    <span>Dedicated Endeavour Website</span>
                  </div>
                  <div className="text-sm font-mono text-slate-200">
                    {endeavour.websiteUrl}
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Official domain and operational platform for this business entity.
                  </p>
                </div>

                <a
                  href={endeavour.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-sm bg-[#c9a86a] hover:bg-[#d8b77a] text-[#05070a] font-bold text-xs uppercase tracking-[0.16em] transition-all shadow-lg hover:shadow-[0_0_20px_rgba(201,168,106,0.4)] whitespace-nowrap"
                >
                  <span>Launch Portal</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Operational Hubs Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs uppercase tracking-[0.2em] text-slate-400 font-light mr-1">
                Active Operational Hubs:
              </span>
              {endeavour.operationalHubs.map((hub) => (
                <span
                  key={hub}
                  className="px-3 py-1 rounded-sm border border-white/10 bg-white/[0.03] text-xs font-medium text-slate-200"
                >
                  {hub}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* METRICS & KEY PILLARS BAR */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {endeavour.metrics.map((m) => (
            <div
              key={m.label}
              className="p-6 rounded-sm border border-white/10 bg-[#070b14] flex flex-col justify-between"
            >
              <span className="text-[11px] uppercase tracking-[0.25em] text-slate-400 font-light mb-2">
                {m.label}
              </span>
              <div className="font-editorial text-2xl sm:text-3xl font-bold text-white gold-gradient-text">
                {m.value}
              </div>
            </div>
          ))}
        </section>

        {/* INTERACTIVE NAVIGATION TABS */}
        <div className="flex border-b border-white/10 mb-12 gap-8">
          <button
            onClick={() => setActiveTab("operations")}
            className={`pb-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] transition-all relative ${
              activeTab === "operations" ? "text-[#c9a86a]" : "text-slate-400 hover:text-white"
            }`}
          >
            <span>01 // Business Operations & Corridors</span>
            {activeTab === "operations" && (
              <motion.div
                layoutId="activeTabUnderline"
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#c9a86a]"
              />
            )}
          </button>

          <button
            onClick={() => setActiveTab("services")}
            className={`pb-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] transition-all relative ${
              activeTab === "services" ? "text-[#c9a86a]" : "text-slate-400 hover:text-white"
            }`}
          >
            <span>02 // Key Services & Solutions</span>
            {activeTab === "services" && (
              <motion.div
                layoutId="activeTabUnderline"
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#c9a86a]"
              />
            )}
          </button>

          <button
            onClick={() => setActiveTab("team")}
            className={`pb-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] transition-all relative ${
              activeTab === "team" ? "text-[#c9a86a]" : "text-slate-400 hover:text-white"
            }`}
          >
            <span>03 // Team & Leadership ({endeavour.teamMembers.length})</span>
            {activeTab === "team" && (
              <motion.div
                layoutId="activeTabUnderline"
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#c9a86a]"
              />
            )}
          </button>
        </div>

        {/* TAB 1: BUSINESS OPERATIONS & SCOPE */}
        {activeTab === "operations" && (
          <motion.section
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-12"
          >
            {/* Overview Summary */}
            <div className="p-8 rounded-sm border border-white/10 bg-[#080c16]">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="w-5 h-5 text-[#c9a86a]" />
                <h2 className="font-editorial text-xl sm:text-2xl font-bold text-white tracking-wide">
                  Operational Mandate
                </h2>
              </div>
              <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
                {endeavour.businessDetails.summary}
              </p>
            </div>

            {/* Scope of Operations Checklist */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-8 rounded-sm border border-white/10 bg-[#070b14]">
                <h3 className="font-editorial text-lg font-bold text-white mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#c9a86a]" />
                  <span>Scope of Business Performed</span>
                </h3>
                <ul className="space-y-4">
                  {endeavour.businessDetails.scopeOfOperations.map((scope, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-300 font-light leading-relaxed">
                      <span className="font-mono text-xs text-[#c9a86a] mt-0.5">0{idx + 1}.</span>
                      <span>{scope}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Trade Corridors & Compliance */}
              <div className="space-y-6">
                <div className="p-8 rounded-sm border border-white/10 bg-[#070b14]">
                  <h3 className="font-editorial text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <Compass className="w-4 h-4 text-[#00e5ff]" />
                    <span>Active Corridors & Markets</span>
                  </h3>
                  <ul className="space-y-3">
                    {endeavour.businessDetails.tradeCorridors.map((corridor, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff]" />
                        <span>{corridor}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-8 rounded-sm border border-white/10 bg-[#070b14]">
                  <h3 className="font-editorial text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#c9a86a]" />
                    <span>Regulatory & Governance Standards</span>
                  </h3>
                  <ul className="space-y-3">
                    {endeavour.businessDetails.compliance.map((comp, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#c9a86a]" />
                        <span>{comp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>
        )}

        {/* TAB 2: KEY SERVICES OFFERED */}
        {activeTab === "services" && (
          <motion.section
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {endeavour.businessDetails.keyServices.map((service, idx) => (
              <div
                key={service.name}
                className="p-8 rounded-sm border border-white/10 bg-[#070b14] hover:border-[#c9a86a]/40 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-[#c9a86a] tracking-widest uppercase">
                    SERVICE 0{idx + 1}
                  </span>
                  <div className="w-7 h-7 rounded-sm bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-400">
                    <Building2 className="w-3.5 h-3.5 text-[#c9a86a]" />
                  </div>
                </div>

                <h3 className="font-editorial text-xl font-bold text-white mb-3">
                  {service.name}
                </h3>

                <p className="text-sm text-slate-300 font-light leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </motion.section>
        )}

        {/* TAB 3: TEAM PERSONS & LEADERSHIP */}
        {activeTab === "team" && (
          <motion.section
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="mb-8">
              <h2 className="font-editorial text-2xl font-bold text-white mb-2">
                Executive Leadership & Operational Team
              </h2>
              <p className="text-sm text-slate-400 font-light max-w-2xl">
                The key personnel, regional directors, and operational leads driving execution in their respective country and order.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {endeavour.teamMembers.map((member, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-sm border border-white/10 bg-[#080c16] hover:border-[#c9a86a]/50 transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Monogram Crest / Avatar */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-sm border border-[#c9a86a]/40 bg-gradient-to-br from-white/[0.08] to-transparent flex items-center justify-center shadow-lg">
                        <span className="font-editorial text-lg font-bold text-[#c9a86a] tracking-wider">
                          {member.avatarInitial || "KG"}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] text-[11px] text-slate-300">
                        <MapPin className="w-3 h-3 text-[#c9a86a]" />
                        <span>{member.country}</span>
                      </div>
                    </div>

                    <h3 className="font-editorial text-xl font-bold text-white mb-1">
                      {member.name}
                    </h3>

                    <p className="text-xs uppercase tracking-[0.16em] text-[#c9a86a] font-medium mb-4">
                      {member.role}
                    </p>

                    <p className="text-xs text-slate-300 font-light leading-relaxed mb-6">
                      {member.bio}
                    </p>
                  </div>

                  {member.email && (
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                      <a
                        href={`mailto:${member.email}`}
                        className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-[#c9a86a] transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>{member.email}</span>
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* PREVIOUS & NEXT ENDEAVOUR NAVIGATION */}
        <section className="mt-20 pt-12 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href={`/endeavours/${prevEndeavour.id}`}
            className="group p-6 rounded-sm border border-white/10 bg-[#070a12] hover:border-[#c9a86a]/40 transition-all flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-sm border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:border-[#c9a86a]">
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-slate-400 font-mono">
                  PREVIOUS // ORDER 0{prevEndeavour.order}
                </span>
                <div className="font-editorial text-lg font-bold text-white group-hover:text-[#c9a86a] transition-colors">
                  {prevEndeavour.title}
                </div>
              </div>
            </div>
            <span className="text-xs text-slate-500 hidden sm:block">{prevEndeavour.country}</span>
          </Link>

          <Link
            href={`/endeavours/${nextEndeavour.id}`}
            className="group p-6 rounded-sm border border-white/10 bg-[#070a12] hover:border-[#c9a86a]/40 transition-all flex items-center justify-between"
          >
            <span className="text-xs text-slate-500 hidden sm:block">{nextEndeavour.country}</span>
            <div className="flex items-center gap-4 text-right">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-slate-400 font-mono">
                  NEXT // ORDER 0{nextEndeavour.order}
                </span>
                <div className="font-editorial text-lg font-bold text-white group-hover:text-[#c9a86a] transition-colors">
                  {nextEndeavour.title}
                </div>
              </div>
              <div className="w-10 h-10 rounded-sm border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:border-[#c9a86a]">
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        </section>

        {/* INITIATE DIALOGUE CTA */}
        <section className="mt-16 p-8 sm:p-12 rounded-sm border border-white/10 bg-gradient-to-br from-[#0a0f1d] via-[#05070a] to-[#0a0f1d] text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#c9a86a]/30 bg-white/[0.02] text-[11px] uppercase tracking-[0.2em] text-[#c9a86a] mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Commercial Inquiries</span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-white mb-4">
            Partner with {endeavour.title}
          </h2>

          <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed max-w-2xl mx-auto mb-8">
            Connect directly with this business vertical&apos;s operational leads in {endeavour.country} to discuss partnerships, vendor onboarding, or commercial contracts.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={endeavour.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-sm bg-[#c9a86a] hover:bg-[#d8b77a] text-[#05070a] font-bold text-xs uppercase tracking-[0.16em] transition-all shadow-lg"
            >
              <span>Visit Official Platform</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-sm border border-white/20 bg-white/[0.04] hover:bg-white/[0.08] text-white font-semibold text-xs uppercase tracking-[0.16em] transition-all"
            >
              <span>Contact Global Desk</span>
              <ArrowUpRight className="w-4 h-4 text-[#c9a86a]" />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
