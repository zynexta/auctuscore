import React from "react";
import {
  Factory,
  Truck,
  GraduationCap,
  HeartPulse,
  Laptop,
  Globe2,
} from "lucide-react";
import { industries } from "../data/companyData";

const industryIcons = {
  Factory,
  Truck,
  GraduationCap,
  HeartPulse,
  Laptop,
  Globe2,
};

export default function Industries() {
  return (
    <section id="industries" className="py-20 lg:py-28 bg-[#FFFFFF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DCEEFF] text-[#062B60] text-xs font-bold uppercase tracking-wider mb-4">
            Sector Coverage
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#062B60] tracking-tight font-heading">
            Expertise Across Industries
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5E718D]">
            Domain-specific financial insight tailored to unique regulatory, cost, and operational requirements.
          </p>
        </div>

        {/* 6 Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {industries.map((ind, idx) => {
            const Icon = industryIcons[ind.icon] || Factory;
            return (
              <div
                key={idx}
                className="group p-5 sm:p-8 rounded-2xl bg-white border border-[#E3ECF5] shadow-card-subtle hover-lift hover:border-[#1464AD] hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-xl bg-[#F0F7FF] group-hover:bg-[#062B60] text-[#1464AD] group-hover:text-white flex items-center justify-center transition-colors duration-300 shadow-sm mb-6">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-bold text-[#062B60] group-hover:text-[#1464AD] transition-colors mb-3 font-heading">
                    {ind.title}
                  </h3>

                  <p className="text-sm text-[#5E718D] leading-relaxed">
                    {ind.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E3ECF5]/60 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1464AD]"></div>
                  <span className="text-xs font-semibold text-[#062B60]">
                    Dedicated Practice Group
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

