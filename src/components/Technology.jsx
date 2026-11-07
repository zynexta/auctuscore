import React from "react";
import {
  FileSpreadsheet,
  Activity,
  Cpu,
  ShieldAlert,
  BarChart3,
  Layers,
  Check,
} from "lucide-react";
import { technologyFeatures } from "../data/companyData";

const techIcons = {
  FileSpreadsheet,
  Activity,
  Cpu,
  ShieldAlert,
  BarChart3,
};

export default function Technology() {
  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DCEEFF] text-[#062B60] text-xs font-bold uppercase tracking-wider mb-4">
            Systems & Infrastructure
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#062B60] tracking-tight font-heading">
            Technology-Driven Financial Excellence
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5E718D]">
            Integrating secure cloud accounting platforms, automated reconciliation workflows, and robust statutory reporting systems.
          </p>
        </div>

        {/* Split Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: 5 Tech Pillars */}
          <div className="lg:col-span-7 space-y-4">
            {technologyFeatures.map((feature, idx) => {
              const Icon = techIcons[feature.icon] || Layers;
              return (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl bg-[#FFFFFF] border border-[#E3ECF5] hover:border-[#1464AD] hover:shadow-card-subtle transition-all duration-300 flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#F0F7FF] group-hover:bg-[#062B60] text-[#1464AD] group-hover:text-white flex items-center justify-center shrink-0 transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[#062B60] group-hover:text-[#1464AD] transition-colors font-heading">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-[#5E718D] mt-1 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: High-Tech FinTech Photograph + Integration Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#E3ECF5] shadow-2xl group">
              <img
                src="/images/technology.webp"
                alt="Auctus Core Technology & Analytics Infrastructure"
                className="w-full h-[300px] sm:h-[420px] lg:h-[520px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
                width="700"
                height="900"
              />
              
              {/* Overlay with subtle blue tint */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#062B60] via-[#062B60]/30 to-transparent opacity-80"></div>

              {/* Inset Content Box */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 sm:p-6 rounded-xl bg-white/95 backdrop-blur-md border border-white/80 shadow-lg">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1464AD] mb-2">
                  <Cpu className="w-4 h-4 text-[#1464AD]" />
                  Verified Accounting Systems
                </div>
                <h4 className="text-base font-bold text-[#062B60] font-heading">
                  Automated Bank & Ledger Feeds
                </h4>
                <p className="text-xs text-[#5E718D] mt-1 leading-relaxed">
                  Certified setup and day-to-day administration across Zoho Books, Tally Prime, Xero, and QuickBooks Online.
                </p>

                <div className="mt-4 pt-4 border-t border-[#E3ECF5] grid grid-cols-2 gap-2 text-[11px] font-semibold text-[#062B60]">
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    Verified Transaction Trails
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    Statutory Compliant Formats
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
