import React from "react";
import { ArrowRight, ShieldCheck, Globe2, Building2 } from "lucide-react";

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) {
      const navOffset = 76;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-24 pb-14 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20 lg:pt-36 lg:pb-24 bg-white overflow-hidden"
    >
      {/* Subtle background architectural grid accent */}
      <div className="absolute inset-0 bg-grid-subtle pointer-events-none opacity-50"></div>

      {/* Decorative gradient blur in background */}
      <div className="absolute top-10 right-1/4 w-80 h-80 sm:w-96 sm:h-96 bg-[#DCEEFF]/50 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 sm:w-72 sm:h-72 bg-[#F0F7FF] rounded-full blur-2xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left max-w-xl lg:max-w-none">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-[#F0F7FF] border border-[#BFE0FC] max-w-full w-fit mb-4 sm:mb-6 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#1464AD] animate-pulse shrink-0"></span>
              <span className="text-[10px] xs:text-[11px] sm:text-xs font-bold tracking-wide text-[#062B60] uppercase truncate">
                Chartered Accountants & Financial Advisors
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-extrabold text-[#062B60] leading-[1.14] tracking-tight mb-4 sm:mb-6 font-heading">
              Clarity in Finance.{" "}
              <span className="text-[#1464AD] block sm:inline">
                Confidence in Growth.
              </span>
            </h1>

            {/* Supporting Content */}
            <p className="text-sm sm:text-base lg:text-lg text-[#5E718D] leading-relaxed max-w-2xl mb-6 sm:mb-8 font-normal">
              Empowering businesses with reliable accounting, auditing, taxation,
              compliance, and strategic financial advisory solutions.
            </p>

            {/* Action Buttons (Matched width on mobile, sleek inline on desktop) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-7 sm:mb-10 max-w-sm sm:max-w-none">
              <button
                type="button"
                onClick={() => scrollTo("#services")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:py-3 rounded-lg bg-[#062B60] hover:bg-[#1464AD] text-white text-xs sm:text-sm font-bold tracking-wide transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-[#1464AD]"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => scrollTo("#contact")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:py-3 rounded-lg bg-white border border-[#062B60]/30 hover:border-[#1464AD] text-[#062B60] hover:text-[#1464AD] hover:bg-[#F0F7FF] text-xs sm:text-sm font-bold tracking-wide transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-[#1464AD]"
              >
                <span>Contact Our Experts</span>
              </button>
            </div>

            {/* Key Trust Signals (Sleek cards on mobile, 3-column inline on desktop) */}
            <div className="pt-6 sm:pt-8 border-t border-[#E3ECF5] grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-6">
              <div className="flex items-center gap-3 p-2.5 sm:p-0 rounded-xl bg-[#F7FAFD] sm:bg-transparent border border-[#E3ECF5]/80 sm:border-0">
                <div className="w-10 h-10 rounded-lg bg-[#DCEEFF] text-[#062B60] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-[#1464AD]" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs sm:text-sm font-bold text-[#062B60] truncate">Big 4 Pedigree</div>
                  <div className="text-[11px] sm:text-xs text-[#5E718D] truncate">EY, Deloitte & GT alumni</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-2.5 sm:p-0 rounded-xl bg-[#F7FAFD] sm:bg-transparent border border-[#E3ECF5]/80 sm:border-0">
                <div className="w-10 h-10 rounded-lg bg-[#DCEEFF] text-[#062B60] flex items-center justify-center shrink-0">
                  <Globe2 className="w-5 h-5 text-[#1464AD]" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs sm:text-sm font-bold text-[#062B60] truncate">Global Reach</div>
                  <div className="text-[11px] sm:text-xs text-[#5E718D] truncate">India, GCC & USA markets</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-2.5 sm:p-0 rounded-xl bg-[#F7FAFD] sm:bg-transparent border border-[#E3ECF5]/80 sm:border-0">
                <div className="w-10 h-10 rounded-lg bg-[#DCEEFF] text-[#062B60] flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5 text-[#1464AD]" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs sm:text-sm font-bold text-[#062B60] truncate">Corporate Advisory</div>
                  <div className="text-[11px] sm:text-xs text-[#5E718D] truncate">Audit, Tax & Compliance</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Architectural Photography & Badges */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative frame */}
              <div className="absolute -inset-2.5 rounded-2xl bg-gradient-to-tr from-[#1464AD]/20 via-[#DCEEFF]/40 to-transparent blur-md -z-10"></div>

              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden border border-[#E3ECF5] shadow-2xl bg-slate-900 group">
                <img
                  src="/images/hero.webp"
                  alt="Auctus Core Corporate Headquarters - Modern Architecture"
                  className="w-full h-[320px] sm:h-[420px] lg:h-[500px] object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="eager"
                  fetchpriority="high"
                />

                {/* Subtle blue gradient overlay to blend into theme */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#062B60]/80 via-transparent to-transparent opacity-60 pointer-events-none"></div>

                {/* Floating Bottom Badge */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-3 sm:p-4 rounded-xl bg-white/95 backdrop-blur-md border border-white/60 shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#062B60] text-white flex items-center justify-center font-bold text-xs sm:text-sm shrink-0">
                      AC
                    </div>
                    <div>
                      <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#062B60]">
                        Auctus Core
                      </h4>
                      <p className="text-[10px] sm:text-xs text-[#5E718D] line-clamp-1">
                        Financial Precision & Advisory Excellence
                      </p>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="inline-block px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-semibold bg-[#DCEEFF] text-[#062B60]">
                      Active Advisory
                    </span>
                  </div>
                </div>

                {/* Top Corner Floating Pill */}
                <div className="absolute top-4 right-4 sm:top-5 sm:right-5 px-3 py-1.5 rounded-full bg-[#062B60]/90 backdrop-blur-md text-white border border-white/20 text-[11px] sm:text-xs font-semibold flex items-center gap-2 shadow-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  International Standards
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
