import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Globe2, Building2 } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[100svh] bg-cover bg-[position:right_center] lg:bg-[position:center_right] flex items-center overflow-hidden"
      style={{ backgroundImage: "url('/images/hero-bg.webp')" }}
    >
      {/* Soft Luminous Gradient Overlay for Optimal Text Readability & Edge Blend */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-white via-white/95 sm:via-white/85 md:via-white/75 lg:via-white/60 to-transparent pointer-events-none" 
        aria-hidden="true"
      />

      {/* Subtle Top & Bottom Ambient Wave Highlights */}
      <div 
        className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/40 to-transparent pointer-events-none"
        aria-hidden="true"
      />
      <div 
        className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/50 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* Main Full-Height Content Container (Edge-to-edge section with 5-7% horizontal padding) */}
      <div className="relative z-10 w-full min-h-[100svh] flex items-center px-5 sm:px-8 lg:px-[6%] xl:px-[7%] pt-24 sm:pt-28 lg:pt-24 pb-12 sm:pb-16 lg:pb-14">
        
        {/* Left Column: Left-Aligned Content Architecture */}
        <div className="max-w-2xl lg:max-w-2xl xl:max-w-3xl flex flex-col items-start text-left">
          
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-[#EBF4FE] border border-[#BFE0FC] mb-4 sm:mb-6 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#1464AD] animate-pulse shrink-0" />
            <span className="text-[10px] xs:text-[11px] sm:text-xs font-bold tracking-wider text-[#062B60] uppercase">
              Chartered Accountants & Financial Advisors
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[62px] font-extrabold font-heading leading-[1.12] tracking-tight mb-4 sm:mb-6">
            <span className="text-[#062B60] block">
              Clarity in Finance.
            </span>
            <span className="text-[#1464AD] block mt-1 sm:mt-1.5">
              Confidence in Growth.
            </span>
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base lg:text-lg text-[#5E718D] leading-relaxed max-w-xl lg:max-w-2xl mb-7 sm:mb-10 font-normal">
            Empowering businesses with reliable accounting, auditing, taxation, compliance, and strategic financial advisory solutions.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-12 w-full sm:w-auto">
            <Link
              to="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg bg-[#062B60] hover:bg-[#1464AD] text-white text-xs sm:text-sm font-bold tracking-wide transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-[#1464AD]"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg bg-white/95 backdrop-blur-xs border border-[#062B60]/30 hover:border-[#1464AD] text-[#062B60] hover:text-[#1464AD] hover:bg-[#F0F7FF] text-xs sm:text-sm font-bold tracking-wide transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-[#1464AD]"
            >
              <span>Contact Our Experts</span>
            </Link>
          </div>

          {/* Feature Highlights (Clean horizontal row with dividers on desktop) */}
          <div className="pt-6 sm:pt-8 border-t border-[#E3ECF5]/90 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 lg:gap-8 w-full">
            
            {/* Feature 1 */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#EBF4FE] text-[#1464AD] border border-[#DCEEFF] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs sm:text-sm font-bold text-[#062B60] whitespace-nowrap">
                  Big 4 Pedigree
                </div>
                <div className="text-[11px] sm:text-xs text-[#5E718D] whitespace-nowrap">
                  EY, Deloitte & GT alumni
                </div>
              </div>
            </div>

            {/* Subtle Divider */}
            <div className="hidden sm:block w-px h-8 bg-[#E3ECF5]" aria-hidden="true" />

            {/* Feature 2 */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#EBF4FE] text-[#1464AD] border border-[#DCEEFF] flex items-center justify-center shrink-0">
                <Globe2 className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs sm:text-sm font-bold text-[#062B60] whitespace-nowrap">
                  Global Reach
                </div>
                <div className="text-[11px] sm:text-xs text-[#5E718D] whitespace-nowrap">
                  India, GCC & USA markets
                </div>
              </div>
            </div>

            {/* Subtle Divider */}
            <div className="hidden sm:block w-px h-8 bg-[#E3ECF5]" aria-hidden="true" />

            {/* Feature 3 */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#EBF4FE] text-[#1464AD] border border-[#DCEEFF] flex items-center justify-center shrink-0">
                <Building2 className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs sm:text-sm font-bold text-[#062B60] whitespace-nowrap">
                  Corporate Advisory
                </div>
                <div className="text-[11px] sm:text-xs text-[#5E718D] whitespace-nowrap">
                  Audit, Tax & Compliance
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
