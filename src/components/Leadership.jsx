import React from "react";
import { Award, Briefcase, Globe, ShieldCheck } from "lucide-react";
import { leadershipTeam } from "../data/companyData";

export default function Leadership() {
  return (
    <section id="leadership" className="py-16 sm:py-20 lg:py-28 bg-[#F7FAFD] relative overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#062B60]/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DCEEFF] text-[#062B60] text-xs font-bold uppercase tracking-wider mb-3">
            Partners & Leadership
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#062B60] tracking-tight font-heading">
            Leadership Built on Experience & Expertise
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-[#5E718D]">
            Qualified Chartered Accountants and senior consultants with verified Big Four and international firm credentials.
          </p>
        </div>

        {/* Leadership Profile Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {leadershipTeam.map((leader, index) => {
            const initials = leader.name
              .replace("CA ", "")
              .split(" ")
              .map((n) => n[0])
              .join("");

            return (
              <div
                key={index}
                className="p-6 sm:p-8 lg:p-9 rounded-2xl bg-white border border-[#E3ECF5] shadow-card-subtle hover:border-[#1464AD] hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Executive Header Lockup: Prominent Large Portrait + Information */}
                  <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5 sm:gap-6 pb-6 border-b border-[#E3ECF5]">
                    {/* Large Executive Portrait Photo (Black & White) or Monogram */}
                    {leader.image ? (
                      <div className="w-32 h-40 sm:w-36 sm:h-44 lg:w-40 lg:h-48 rounded-2xl overflow-hidden border-2 border-[#DCEEFF] shadow-md shrink-0 bg-slate-100 group-hover:border-[#1464AD] transition-colors">
                        <img
                          src={leader.image}
                          alt={leader.name}
                          className="w-full h-full object-cover object-center filter grayscale contrast-105"
                          loading="lazy"
                          width="320"
                          height="400"
                        />
                      </div>
                    ) : (
                      <div className="w-32 h-40 sm:w-36 sm:h-44 lg:w-40 lg:h-48 rounded-2xl bg-gradient-to-br from-[#062B60] to-[#0D3B7C] text-white flex flex-col items-center justify-center p-4 text-center shadow-md shrink-0 border-2 border-[#DCEEFF]">
                        <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center text-white font-extrabold text-2xl tracking-wider mb-2 border border-white/20">
                          {initials}
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#539FE0]">
                          Partner
                        </span>
                      </div>
                    )}

                    {/* Information Column */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-center sm:justify-start gap-2 flex-wrap mb-1">
                        <h3 className="text-xl sm:text-2xl font-extrabold text-[#062B60] font-heading tracking-tight">
                          {leader.name}
                        </h3>
                        <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-[#DCEEFF] text-[#062B60] uppercase tracking-wider shrink-0">
                          {leader.designation}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm font-semibold text-[#1464AD]">
                        {leader.role}
                      </p>

                      <div className="inline-flex items-center gap-1.5 mt-2.5 px-3 py-1 rounded-full bg-[#F0F7FF] border border-[#BFE0FC] text-[#062B60] text-xs font-semibold">
                        <Award className="w-3.5 h-3.5 text-[#1464AD] shrink-0" />
                        <span>{leader.experienceYears}</span>
                      </div>
                    </div>
                  </div>

                  {/* Career Alumni & Pedigree Callout */}
                  <div className="py-5 sm:py-6 space-y-3 sm:space-y-4">
                    <div className="p-3.5 sm:p-4 rounded-xl bg-[#F7FAFD] border-l-4 border-[#1464AD]">
                      <div className="flex items-center gap-2 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#062B60] mb-1">
                        <Briefcase className="w-3.5 h-3.5 text-[#1464AD] shrink-0" />
                        Global Firm Pedigree
                      </div>
                      <p className="text-xs sm:text-sm font-semibold text-[#17253A] leading-snug">
                        {leader.pastExperience}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-[#5E718D] leading-relaxed">
                      {leader.experienceDetail}
                    </p>
                  </div>

                  {/* Specialisations Tags */}
                  <div className="pt-1">
                    <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#062B60] mb-2.5 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#1464AD] shrink-0" />
                      Core Specialisations
                    </span>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {leader.specialisations.map((spec, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-[#F0F7FF] text-[#062B60] text-[11px] sm:text-xs font-semibold border border-[#DCEEFF]"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Verification Footer */}
                <div className="pt-5 sm:pt-6 mt-5 sm:mt-6 border-t border-[#E3ECF5] flex items-center justify-between text-[11px] sm:text-xs text-[#5E718D]">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Globe className="w-3.5 h-3.5 text-[#1464AD] shrink-0" />
                    International Standards
                  </span>
                  <span className="font-semibold text-[#062B60]">
                    {leader.highlight}
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
