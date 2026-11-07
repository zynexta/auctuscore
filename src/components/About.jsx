import React from "react";
import { ShieldCheck, TrendingUp, Sliders, Handshake, CheckCircle2 } from "lucide-react";
import { companyInfo, whyWeArePillars } from "../data/companyData";

const iconMap = {
  ShieldCheck: ShieldCheck,
  TrendingUp: TrendingUp,
  Sliders: Sliders,
  Handshake: Handshake,
};

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-28 bg-[#F7FAFD] relative">
      {/* Background Accent Lines */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#062B60]/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DCEEFF] text-[#062B60] text-xs font-bold uppercase tracking-wider mb-4">
            About Auctus Core
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#062B60] tracking-tight font-heading">
            {companyInfo.aboutHeading}
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#5E718D] leading-relaxed">
            {companyInfo.aboutIntro}
          </p>
        </div>

        {/* Grid: Image on Left / Pillars on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: Commercial Boardroom / Office Photograph */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-[#E3ECF5] shadow-xl group">
              <img
                src="/images/about.webp"
                alt="Auctus Core Financial Boardroom & Advisory Environment"
                className="w-full h-[280px] sm:h-[380px] lg:h-[480px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
                width="700"
                height="900"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#062B60]/70 via-transparent to-transparent opacity-50"></div>

              {/* Floating Philosophy Card */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 sm:p-5 rounded-xl bg-white/95 backdrop-blur-md border border-white/80 shadow-md">
                <div className="flex items-center gap-2 text-xs font-bold text-[#062B60] uppercase tracking-wider mb-1">
                  <CheckCircle2 className="w-4 h-4 text-[#1464AD]" />
                  Professional Governance
                </div>
                <p className="text-xs text-[#17253A] font-medium leading-relaxed">
                  "Delivering precision audit, strategic taxation, and compliance solutions to foster sustainable commercial growth."
                </p>
              </div>
            </div>

            {/* Subtle decorative border backplate (hidden on mobile to prevent overflow) */}
            <div className="hidden sm:block absolute -bottom-4 -right-4 w-48 h-48 bg-[#DCEEFF] rounded-2xl -z-10 opacity-70"></div>
          </div>

          {/* Right Column: 4 Why We Are Pillars */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1464AD]">
                Why We Are
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#062B60] mt-1 font-heading">
                Foundations of Our Client Relationships
              </h3>
            </div>

            {/* 4 Why We Are Pillars: Sticky Stacking Cards on Mobile Scroll, 2x2 Grid on Desktop */}
            <div className="flex flex-col gap-5 sm:gap-5 sm:grid sm:grid-cols-2 relative pb-20 sm:pb-0">
              {whyWeArePillars.map((pillar, idx) => {
                const IconComponent = iconMap[pillar.icon] || ShieldCheck;
                return (
                  <div
                    key={idx}
                    style={{
                      top: `calc(76px + ${idx * 20}px)`,
                      zIndex: idx + 10,
                    }}
                    className="sticky sm:static p-5 sm:p-6 rounded-2xl bg-white border border-[#E3ECF5] shadow-[0_10px_30px_rgba(6,43,96,0.10)] sm:shadow-card-subtle hover-lift hover:border-[#1464AD]/40 hover:shadow-card-hover transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-3.5 sm:mb-4">
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-[#F0F7FF] border border-[#BFE0FC] text-[#062B60] flex items-center justify-center transition-colors group-hover:bg-[#062B60] group-hover:text-white">
                        <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-[#1464AD]" />
                      </div>
                      <span className="sm:hidden text-[11px] font-bold text-[#1464AD] bg-[#F0F7FF] px-2.5 py-0.5 rounded-full border border-[#DCEEFF]">
                        0{idx + 1}
                      </span>
                    </div>

                    <h4 className="text-base sm:text-lg font-bold text-[#062B60] mb-2 font-heading">
                      {pillar.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-[#5E718D] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Quick highlight bar */}
            <div className="mt-8 p-4 rounded-xl bg-[#DCEEFF]/40 border border-[#BFE0FC] flex items-center gap-4">
              <div className="w-2.5 h-2.5 rounded-full bg-[#1464AD] shrink-0"></div>
              <p className="text-xs font-semibold text-[#062B60] leading-normal">
                Serving corporate entities, fast-growing startups, and cross-border enterprises with precision accounting and regulatory compliance.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

