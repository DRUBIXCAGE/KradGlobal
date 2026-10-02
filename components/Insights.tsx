"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight, Calendar, Clock, X, BookOpen } from "lucide-react";
import { INSIGHTS_ARTICLES, InsightArticle } from "@/data/content";

export default function Insights() {
  const [selectedArticle, setSelectedArticle] = useState<InsightArticle | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories = ["All", "International Trade", "E-Commerce", "Global Travel Trends", "Emerging Markets", "Business Opportunities"];

  const filteredArticles =
    activeFilter === "All"
      ? INSIGHTS_ARTICLES
      : INSIGHTS_ARTICLES.filter((a) => a.category === activeFilter);

  return (
    <section
      id="insights"
      className="relative py-28 md:py-36 bg-[#06080e] border-t border-white/[0.06] overflow-hidden"
      aria-label="Krad Global Strategic Insights and Intelligence"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-[#c9a86a]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[#c9a86a] font-medium">
                Executive Intelligence
              </span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
              MARKET INSIGHTS &
              <br />
              <span className="gold-gradient-text">PERSPECTIVES.</span>
            </h2>
          </div>

          <p className="text-slate-400 text-sm max-w-md font-light leading-relaxed">
            Macro-economic commentary, supply chain analyses, and cross-border commercial strategy from our international operational desks.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-6 border-b border-white/10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-3.5 py-1.5 rounded-sm text-xs font-medium uppercase tracking-[0.16em] transition-all duration-300 ${
                activeFilter === cat
                  ? "bg-[#c9a86a] text-[#05070a] shadow-[0_0_12px_rgba(201,168,106,0.3)]"
                  : "bg-white/[0.03] text-slate-400 hover:text-white border border-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, idx) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => setSelectedArticle(article)}
              className="group cursor-pointer rounded-sm border border-white/10 bg-[#090d16] overflow-hidden flex flex-col justify-between hover:border-[#c9a86a]/50 transition-all duration-400 hover:shadow-[0_20px_40px_rgba(0,0,0,0.7)]"
            >
              <div>
                {/* Article Cover Image */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    style={{ backgroundImage: `url('${article.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 px-2.5 py-1 rounded-sm bg-black/70 backdrop-blur-md border border-white/10 text-[10px] uppercase tracking-wider text-[#c9a86a] font-medium">
                    {article.category}
                  </span>
                </div>

                {/* Article Info */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-[11px] text-slate-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      {article.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-500" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="font-editorial text-xl font-bold text-white group-hover:text-[#e5c583] transition-colors leading-snug line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-slate-400 font-light leading-relaxed line-clamp-3">
                    {article.summary}
                  </p>
                </div>
              </div>

              {/* Read Action Footer */}
              <div className="px-6 pb-6 pt-2 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.16em] text-[#c9a86a]">
                <span>Read Analysis</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Insights Footer CTA */}
        <div className="mt-16 text-center">
          <button
            onClick={() => setActiveFilter("All")}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-sm border border-white/15 bg-white/[0.03] hover:border-[#c9a86a] hover:bg-[#c9a86a]/10 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-all group"
          >
            <span>View All Insights</span>
            <ArrowRight className="w-4 h-4 text-[#c9a86a] transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* Reader Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArticle(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.35 }}
              className="relative z-10 w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-[#0a0e18] border border-[#c9a86a]/40 rounded-sm p-6 sm:p-10 text-white shadow-2xl"
            >
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-6 right-6 p-2 rounded-full border border-white/15 bg-white/[0.05] text-slate-300 hover:text-white"
                aria-label="Close insight reader"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 text-xs text-[#c9a86a] uppercase tracking-wider mb-2">
                <span>{selectedArticle.category}</span>
                <span>•</span>
                <span>{selectedArticle.readTime}</span>
              </div>

              <h3 className="font-editorial text-2xl sm:text-3xl font-bold leading-snug">
                {selectedArticle.title}
              </h3>

              <div className="flex items-center gap-3 text-xs text-slate-400 mt-3 pb-6 border-b border-white/10">
                <span>Published by: {selectedArticle.author}</span>
                <span>•</span>
                <span>{selectedArticle.date}</span>
              </div>

              <div className="mt-6 space-y-4 text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                <p className="text-white font-medium text-base">
                  {selectedArticle.summary}
                </p>
                <p>
                  As global macroeconomic corridors realign in 2026, international enterprises face both unprecedented complexities and historic opportunities. Between the expanding manufacturing hubs of India, the multimodal re-export gateways of the UAE, and the vast consumer liquidity of North America, successful bilateral commercial execution demands unified agility.
                </p>
                <p>
                  At Krad Global, our multi-vertical methodology bridges physical goods logistics, corporate delegation mobility, algorithmic digital commerce, and jurisdictional structuring into a single coordinated flow.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-slate-400">
                  Need strategic advisory in this domain?
                </span>
                <a
                  href="#contact"
                  onClick={() => setSelectedArticle(null)}
                  className="px-5 py-2 rounded-sm bg-[#c9a86a] text-[#05070a] font-bold text-xs uppercase tracking-wider"
                >
                  Contact Desk
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
