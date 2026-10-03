"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Mail, MapPin, Phone, Send, MessageSquare } from "lucide-react";
import confetti from "canvas-confetti";
import { COMPANY_DATA } from "@/data/content";

const INTEREST_OPTIONS = [
  "Travel",
  "Import & Export",
  "Trading",
  "Dropshipping",
  "E-commerce",
  "Partnership",
  "Other",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    interest: "Partnership",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Listen to custom event from vertical detail buttons
  useEffect(() => {
    const handleSelectInterest = (e: CustomEvent<string>) => {
      const title = e.detail;
      const matched = INTEREST_OPTIONS.find((opt) =>
        title.toLowerCase().includes(opt.toLowerCase())
      );
      if (matched) {
        setFormData((prev) => ({ ...prev, interest: matched }));
      }
    };

    window.addEventListener(
      "select-business-interest",
      handleSelectInterest as EventListener
    );
    return () =>
      window.removeEventListener(
        "select-business-interest",
        handleSelectInterest as EventListener
      );
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg("Please fill in your name, email, and message.");
      return;
    }

    setIsSubmitting(true);
    setErrorMsg("");

    // Simulate server response
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger celebratory gold & cyan confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#c9a86a", "#00e5ff", "#ffffff", "#dfc085"],
        });
      } catch (err) {
        console.error(err);
      }
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="relative py-28 md:py-36 bg-[#040609] border-t border-white/[0.06] overflow-hidden"
      aria-label="Contact Krad Global"
    >
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[radial-gradient(ellipse_at_center,_rgba(201,168,106,0.06)_0%,_rgba(0,229,255,0.03)_50%,_transparent_75%)] pointer-events-none blur-3xl" />

      <div className="w-full px-6 md:px-12 lg:px-16 xl:px-20 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#c9a86a]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#c9a86a] font-medium">
              Initiate Dialogue
            </span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            LET&apos;S BUILD
            <br />
            <span className="gold-gradient-text">SOMETHING GLOBAL.</span>
          </h2>

          <p className="mt-4 text-slate-300 text-sm sm:text-base font-light leading-relaxed">
            Whether you&apos;re looking to explore a business partnership, source products, enter a new market or work with Krad Global, let&apos;s start a conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-sm border border-white/10 bg-[#080c14]/90 backdrop-blur-xl shadow-2xl">
              {isSubmitted ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 rounded-full border border-[#c9a86a] bg-[#c9a86a]/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-[#c9a86a]" />
                  </div>
                  <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-white mb-2">
                    Inquiry Received
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-white font-medium">{formData.name}</span>. A senior corporate representative from our relevant regional desk will reach out within 24 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        company: "",
                        country: "",
                        interest: "Partnership",
                        message: "",
                      });
                    }}
                    className="mt-8 px-6 py-2.5 rounded-sm border border-white/20 text-xs uppercase tracking-wider text-slate-300 hover:text-white hover:border-[#c9a86a] transition-all"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errorMsg && (
                    <div className="p-3 rounded-sm bg-red-950/40 border border-red-500/30 text-xs text-red-200">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="block text-[11px] uppercase tracking-[0.16em] text-slate-400 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="e.g. Alexander Vance"
                        className="w-full px-4 py-3 rounded-sm bg-white/[0.03] border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-[#c9a86a] transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-[11px] uppercase tracking-[0.16em] text-slate-400 mb-2">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="name@company.com"
                        className="w-full px-4 py-3 rounded-sm bg-white/[0.03] border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-[#c9a86a] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Phone */}
                    <div>
                      <label className="block text-[11px] uppercase tracking-[0.16em] text-slate-400 mb-2">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 rounded-sm bg-white/[0.03] border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-[#c9a86a] transition-colors"
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-[11px] uppercase tracking-[0.16em] text-slate-400 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Enterprise or Entity"
                        className="w-full px-4 py-3 rounded-sm bg-white/[0.03] border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-[#c9a86a] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Country */}
                    <div>
                      <label className="block text-[11px] uppercase tracking-[0.16em] text-slate-400 mb-2">
                        Country of Operation
                      </label>
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        placeholder="e.g. United Arab Emirates"
                        className="w-full px-4 py-3 rounded-sm bg-white/[0.03] border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-[#c9a86a] transition-colors"
                      />
                    </div>

                    {/* Business Interest Dropdown */}
                    <div>
                      <label className="block text-[11px] uppercase tracking-[0.16em] text-slate-400 mb-2">
                        Primary Business Interest *
                      </label>
                      <select
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-sm bg-[#0a0e18] border border-white/10 text-white text-sm focus:outline-none focus:border-[#c9a86a] transition-colors cursor-pointer"
                      >
                        {INTEREST_OPTIONS.map((opt) => (
                          <option key={opt} value={opt} className="bg-[#0a0e18] text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.16em] text-slate-400 mb-2">
                      Brief Message or Requirement Scope *
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Outline your operational, sourcing, trade or corporate objective..."
                      className="w-full px-4 py-3 rounded-sm bg-white/[0.03] border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-[#c9a86a] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button & WhatsApp Quick Link */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-8 py-3.5 rounded-sm bg-gradient-to-r from-[#c9a86a] via-[#dfc085] to-[#c9a86a] text-[#05070a] font-bold text-xs uppercase tracking-[0.2em] transition-all hover:shadow-[0_0_25px_rgba(201,168,106,0.5)] hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <span>Processing...</span>
                      ) : (
                        <>
                          <span>Start a Conversation</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>

                    <a
                      href={COMPANY_DATA.contactInfo.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-sm border border-emerald-500/40 bg-emerald-950/20 hover:bg-emerald-900/40 text-emerald-300 text-xs font-semibold uppercase tracking-[0.16em] transition-all group"
                    >
                      <MessageSquare className="w-4 h-4 text-emerald-400" />
                      <span>WhatsApp Direct</span>
                      <ArrowUpRight className="w-3 h-3 text-emerald-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Global Desks Directory */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="p-8 rounded-sm border border-white/10 bg-[#080c14]/60 backdrop-blur-md">
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#c9a86a] font-medium block mb-2">
                Operational Desks
              </span>
              <h3 className="font-editorial text-2xl font-bold text-white mb-6">
                Regional Hubs
              </h3>

              <div className="space-y-6">
                {COMPANY_DATA.contactInfo.regionalOffices.map((office) => (
                  <div
                    key={office.region}
                    className="p-4 rounded-sm border border-white/5 bg-white/[0.02]"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs uppercase tracking-wider text-white font-semibold">
                        {office.region} Corridor
                      </span>
                      <span className="text-[10px] text-emerald-400 font-mono">
                        Active Hub
                      </span>
                    </div>
                    <p className="text-xs text-[#e5c583] font-medium">{office.city}</p>
                    <p className="text-[11px] text-slate-400 mt-1">{office.focus}</p>
                  </div>
                ))}
              </div>

              {/* Direct Inquiries */}
              <div className="mt-8 pt-6 border-t border-white/10 space-y-3">
                <div className="flex items-center gap-3 text-xs text-slate-300">
                  <Mail className="w-4 h-4 text-[#c9a86a]" />
                  <span>{COMPANY_DATA.contactInfo.email}</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-300">
                  <MapPin className="w-4 h-4 text-[#c9a86a]" />
                  <span>{COMPANY_DATA.contactInfo.headquarters}</span>
                </div>
              </div>
            </div>

            {/* Note on confidentiality */}
            <div className="p-4 rounded-sm border border-white/5 bg-white/[0.01] text-[11px] text-slate-500 leading-relaxed">
              Krad Global executes standard bilateral non-disclosure protocols for institutional sourcing inquiries, commodity trades, and cross-border strategic mandates.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
