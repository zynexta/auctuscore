import React from "react";
import {
  Globe2,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { globalCoverage } from "../data/companyData";

export default function GlobalServices() {
  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="global-services" className="py-20 lg:py-28 bg-[#F7FAFD] relative overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#062B60]/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-18">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DCEEFF] text-[#062B60] text-xs font-bold uppercase tracking-wider mb-4">
            Cross-Border Practice
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#062B60] tracking-tight font-heading">
            {globalCoverage.heading}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5E718D]">
            {globalCoverage.subheading}
          </p>
        </div>

        {/* Global Markets Infinite Auto-Scroll Ticker */}
        <div className="mb-14">
          <div className="text-center mb-5">
            <span className="text-xs font-bold uppercase tracking-widest text-[#5E718D]">
              Geographic Service Reach & Presence
            </span>
          </div>

          {/* Marquee Wrapper with Smooth Left & Right Gradient Fade Masks */}
          <div className="relative w-full overflow-hidden py-3 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <div className="animate-marquee flex items-center gap-4">
              {[
                ...globalCoverage.markets,
                ...globalCoverage.markets,
                ...globalCoverage.markets,
              ].map((market, mIdx) => (
                <div
                  key={mIdx}
                  className="flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-white border border-[#E3ECF5] shadow-xs hover:border-[#1464AD] hover:shadow-card-subtle transition-all duration-200 shrink-0 cursor-pointer group"
                >
                  <span
                    className="text-xl shrink-0 transition-transform duration-200 group-hover:scale-110"
                    role="img"
                    aria-label={market.name}
                  >
                    {market.flag}
                  </span>
                  <span className="text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-[#F0F7FF] text-[#1464AD] border border-[#DCEEFF] shrink-0">
                    {market.code}
                  </span>
                  <span className="text-sm font-bold text-[#062B60] whitespace-nowrap">
                    {market.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hero Architectural Card for Global Services */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden mb-12 sm:mb-14 shadow-2xl border border-[#062B60]/10 bg-[#062B60]">
          <div className="absolute inset-0">
            <img
              src="/images/global.webp"
              alt="International Financial District Skyline"
              className="w-full h-full object-cover opacity-35"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#062B60] via-[#062B60]/85 to-transparent"></div>
          </div>

          <div className="relative z-10 p-5 sm:p-10 lg:p-16 max-w-2xl text-white">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[#DCEEFF] text-xs font-bold uppercase tracking-wider mb-4 border border-white/20">
              <Globe2 className="w-3.5 h-3.5" />
              Cross-Border Accounting Specialists
            </div>
            <h3 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-white font-heading leading-tight mb-4">
              Turnkey International Financial Department for Growing Enterprises
            </h3>
            <p className="text-[#DCEEFF] text-xs sm:text-base leading-relaxed mb-6">
              Partner directly with senior Indian and GCC chartered accountants and financial consultants with Big Four background. We manage your overseas bookkeeping, monthly MIS, VAT compliance, and financial reporting with meticulous precision.
            </p>

            <button
              type="button"
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-white hover:bg-[#DCEEFF] text-[#062B60] text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <span>Request Global Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 12 Complete Overseas Accounting Services Grid */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-12 border border-[#E3ECF5] shadow-card-subtle">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 mb-8 border-b border-[#E3ECF5] gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#1464AD]">
                Complete Scope
              </span>
              <h3 className="text-2xl font-bold text-[#062B60] mt-1 font-heading">
                Comprehensive Overseas Accounting Portfolio
              </h3>
            </div>
            <div className="text-xs font-semibold text-[#5E718D] bg-[#F7FAFD] px-3.5 py-1.5 rounded-lg border border-[#E3ECF5]">
              Comprehensive Scope
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {globalCoverage.services.map((service) => (
              <div
                key={service.id}
                className="p-4 sm:p-5 rounded-xl bg-[#F7FAFD] hover:bg-white border border-[#E3ECF5] hover:border-[#1464AD] hover:shadow-card-subtle transition-all duration-200 flex items-start gap-3.5 group"
              >
                <div className="w-7 h-7 rounded-lg bg-[#DCEEFF] group-hover:bg-[#062B60] text-[#1464AD] group-hover:text-white flex items-center justify-center shrink-0 transition-colors duration-200 mt-0.5">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#062B60] group-hover:text-[#1464AD] transition-colors leading-snug">
                    {service.title}
                  </h4>
                  <span className="text-[11px] text-[#5E718D] block mt-1">
                    Standardized to IFRS / US GAAP / Local Tax
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

