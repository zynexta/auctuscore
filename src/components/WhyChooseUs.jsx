import React from "react";
import { Globe, CheckCircle2, Coins, ArrowUpRight } from "lucide-react";
import { whyPartnerPillars } from "../data/companyData";

const pillarIcons = {
  Globe,
  CheckCircle2,
  Coins,
};

export default function WhyChooseUs() {
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
    <section className="py-12 sm:py-14 lg:py-16 bg-[#062B60] text-white relative overflow-hidden">
      {/* Background Architectural Graphic Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-luminosity pointer-events-none"
        style={{ backgroundImage: "url('/images/home-section-bg.webp')" }}
      />
      {/* Background Architectural Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#1464AD]/25 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#041C3E] rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#DCEEFF] text-[11px] font-bold uppercase tracking-wider mb-2.5 border border-white/20">
            Core Strengths
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-heading">
            Why Partner with Auctus Core?
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#DCEEFF]/90">
            Combining Big Four audit standards with dedicated, partner-led financial consulting.
          </p>
        </div>

        {/* 3 Pillars Grid (Interactive Sticky Stacking Cards on Mobile Scroll) */}
        <div className="relative space-y-4 md:space-y-0 md:grid md:grid-cols-3 md:gap-5 lg:gap-6">
          {whyPartnerPillars.map((pillar, idx) => {
            const Icon = pillarIcons[pillar.icon] || Globe;
            return (
              <div
                key={idx}
                style={{
                  top: `calc(5rem + ${idx * 1.25}rem)`,
                  zIndex: 10 + idx,
                }}
                className="sticky md:static md:z-auto p-5 sm:p-6 rounded-2xl bg-[#083675]/95 border border-white/20 hover:border-[#539FE0] backdrop-blur-md transition-all duration-300 flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/10 group-hover:bg-[#1464AD] text-[#DCEEFF] group-hover:text-white flex items-center justify-center transition-colors duration-300 mb-3.5 border border-white/10 shadow-xs">
                    <Icon className="w-5 h-5" />
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#539FE0] block mb-1.5">
                    {pillar.highlight}
                  </span>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 font-heading">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-[#DCEEFF]/85 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-white/10 flex items-center justify-between text-[11px] font-semibold text-[#BFE0FC]">
                  <span>Tier-1 Execution</span>
                  <div className="w-2 h-2 rounded-full bg-[#539FE0]"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-8 sm:mt-10 p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-[#0E4E9E] to-[#1464AD] border border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 shadow-xl">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white font-heading text-center sm:text-left">
              Ready to elevate your financial precision and reporting?
            </h3>
            <p className="text-xs text-[#DCEEFF] mt-0.5 text-center sm:text-left">
              Speak directly with our senior partners for a confidential, no-obligation assessment.
            </p>
          </div>

          <button
            type="button"
            onClick={scrollToContact}
            className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg bg-white hover:bg-[#DCEEFF] text-[#062B60] text-xs font-bold uppercase tracking-wider transition-all duration-200 shrink-0 shadow-md hover:shadow-lg"
          >
            <span>Request An Assessment</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}

