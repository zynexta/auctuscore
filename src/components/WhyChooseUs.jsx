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
    <section className="py-20 lg:py-28 bg-[#062B60] text-white relative overflow-hidden">
      {/* Background Architectural Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1464AD]/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#041C3E] rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#DCEEFF] text-xs font-bold uppercase tracking-wider mb-4 border border-white/20">
            Core Strengths
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading">
            Why Partner with Auctus Core?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#DCEEFF]/90">
            Combining Big Four audit standards with dedicated, partner-led financial consulting.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whyPartnerPillars.map((pillar, idx) => {
            const Icon = pillarIcons[pillar.icon] || Globe;
            return (
              <div
                key={idx}
                className="relative p-6 sm:p-8 lg:p-9 rounded-2xl bg-[#083675]/60 hover:bg-[#083675]/90 border border-white/15 hover:border-[#539FE0] backdrop-blur-sm transition-all duration-300 flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="w-14 h-14 rounded-xl bg-white/10 group-hover:bg-[#1464AD] text-[#DCEEFF] group-hover:text-white flex items-center justify-center transition-colors duration-300 mb-6 border border-white/10 shadow-sm">
                    <Icon className="w-7 h-7" />
                  </div>

                  <span className="text-xs font-bold uppercase tracking-wider text-[#539FE0] block mb-2">
                    {pillar.highlight}
                  </span>

                  <h3 className="text-2xl font-bold text-white mb-4 font-heading">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-[#DCEEFF]/80 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-[#BFE0FC]">
                  <span>Tier-1 Execution</span>
                  <div className="w-2 h-2 rounded-full bg-[#539FE0]"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-14 p-5 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0E4E9E] to-[#1464AD] border border-white/20 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <h3 className="text-xl font-bold text-white font-heading text-center sm:text-left">
              Ready to elevate your financial precision and reporting?
            </h3>
            <p className="text-sm text-[#DCEEFF] mt-1 text-center sm:text-left">
              Speak directly with our senior partners for a confidential, no-obligation assessment.
            </p>
          </div>

          <button
            type="button"
            onClick={scrollToContact}
            className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-white hover:bg-[#DCEEFF] text-[#062B60] text-xs font-bold uppercase tracking-wider transition-all duration-200 shrink-0 shadow-md hover:shadow-lg"
          >
            <span>Request An Assessment</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}

