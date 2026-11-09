import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight, ShieldCheck, Award, Globe2, Phone } from "lucide-react";
import About from "../components/About";
import VisionMission from "../components/VisionMission";
import Leadership from "../components/Leadership";
import { companyInfo } from "../data/companyData";

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Dedicated Page Header Banner */}
      <section className="pt-28 pb-14 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20 bg-[#062B60] text-white relative overflow-hidden">
        {/* Subtle background grid */}
        <div className="absolute inset-0 bg-grid-subtle pointer-events-none opacity-20"></div>
        <div className="absolute -top-24 right-10 w-96 h-96 bg-[#1464AD]/30 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs font-semibold text-[#BFE0FC] mb-4 sm:mb-6" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            <span className="text-white">About Us</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[#DCEEFF] text-xs font-bold uppercase tracking-wider mb-4 border border-white/20">
              <ShieldCheck className="w-3.5 h-3.5 text-[#539FE0]" />
              Firm Overview & Pedigree
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading leading-tight mb-4 sm:mb-5">
              Architectural Governance. Proven Corporate Pedigree.
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-[#DCEEFF]/90 leading-relaxed font-normal mb-8">
              Decades of Big Four and international firm credentials delivering rigorous accounting, auditing, taxation, and strategic financial advisory solutions for growing enterprises.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm font-semibold text-[#DCEEFF]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Big 4 Alumni Leadership</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#539FE0]"></span>
                <span>India & GCC Markets</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                <span>100% Statutory Compliance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main About Firm Story & Why We Are Pillars */}
      <About />

      {/* Vision & Mission */}
      <VisionMission />

      {/* Leadership & Partners */}
      <Leadership />

      {/* Bottom Consultation Callout */}
      <section className="py-14 sm:py-16 bg-[#FFFFFF] border-t border-[#E3ECF5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-10 lg:p-12 rounded-3xl bg-gradient-to-br from-[#062B60] to-[#0D3B7C] text-white flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 shadow-xl">
            <div className="max-w-2xl text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-[#539FE0] block mb-2">
                Direct Partner Access
              </span>
              <h3 className="text-xl sm:text-3xl font-extrabold text-white font-heading">
                Ready to Experience Financial Clarity & Growth?
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#DCEEFF]/85 leading-relaxed">
                Connect with our certified Chartered Accountants for dedicated audit, taxation, and advisory consultations.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white text-[#062B60] hover:bg-[#DCEEFF] text-xs sm:text-sm font-bold tracking-wide transition-all shadow-md"
              >
                <span>Schedule Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={companyInfo.contact.phoneUrl}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 border border-white/30 text-white text-xs sm:text-sm font-bold tracking-wide transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call Partners</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

