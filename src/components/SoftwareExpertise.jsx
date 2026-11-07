import React from "react";
import { Check, Database } from "lucide-react";
import { softwarePlatforms } from "../data/companyData";

export default function SoftwareExpertise() {
  return (
    <section className="py-20 lg:py-24 bg-[#FFFFFF] relative border-b border-[#E3ECF5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DCEEFF] text-[#062B60] text-xs font-bold uppercase tracking-wider mb-4">
            Ecosystem & Tools
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#062B60] tracking-tight font-heading">
            Powered by Leading Accounting Technologies
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5E718D]">
            Expert certified proficiency across global cloud accounting and statutory ERP systems.
          </p>
        </div>

        {/* 4 Software Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {softwarePlatforms.map((software, idx) => (
            <div
              key={idx}
              className="group p-6 rounded-2xl bg-[#FFFFFF] border border-[#E3ECF5] hover:border-[#1464AD] shadow-card-subtle hover-lift hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Platform Badge & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#F0F7FF] group-hover:bg-[#062B60] text-[#1464AD] group-hover:text-white flex items-center justify-center font-bold text-lg transition-colors duration-300">
                    <Database className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#DCEEFF] text-[#062B60]">
                    {software.badge}
                  </span>
                </div>

                {/* Software Name */}
                <h3 className="text-xl font-bold text-[#062B60] group-hover:text-[#1464AD] transition-colors font-heading">
                  {software.name}
                </h3>
                <span className="text-xs font-semibold text-[#1464AD] block mt-0.5 mb-3">
                  {software.type}
                </span>

                {/* Description */}
                <p className="text-xs text-[#5E718D] leading-relaxed">
                  {software.description}
                </p>
              </div>

              {/* Status */}
              <div className="mt-6 pt-4 border-t border-[#E3ECF5]/80 flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Full Implementation & Migration</span>
              </div>
            </div>
          ))}
        </div>

        {/* Tech Integration Note */}
        <div className="mt-12 text-center text-xs text-[#5E718D]">
          <span>Need custom ERP or accounting software migration? We provide seamless data transition, backlog clearance, and charting of accounts.</span>
        </div>

      </div>
    </section>
  );
}

