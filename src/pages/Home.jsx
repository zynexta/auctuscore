import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Sliders,
  Handshake,
  ArrowUpRight,
  CheckCircle2,
  Award,
  Briefcase,
  Globe2,
  FileCheck2,
  ReceiptText,
  BookOpenCheck,
  Scale,
  LineChart,
} from "lucide-react";
import Hero from "../components/Hero";
import GlobalServices from "../components/GlobalServices";
import WhyChooseUs from "../components/WhyChooseUs";
import Contact from "../components/Contact";
import {
  companyInfo,
  coreServices,
  whyWeArePillars,
  leadershipTeam,
} from "../data/companyData";

const iconMap = {
  ShieldCheck,
  TrendingUp,
  Sliders,
  Handshake,
};

export default function Home() {
  const processSteps = [
    {
      step: "01",
      title: "Diagnostic & Scoping",
      desc: "Comprehensive review of books, tax positions, regulatory standing, and risk exposure.",
    },
    {
      step: "02",
      title: "Strategic Architecture",
      desc: "Tailored tax-efficient structuring, ERP workflow design, and internal controls setup.",
    },
    {
      step: "03",
      title: "Systematic Execution",
      desc: "Precision bookkeeping, statutory filings, ROC documentation, and audit readiness.",
    },
    {
      step: "04",
      title: "CFO-Level Advisory",
      desc: "Continuous cash-flow forecasting, board reporting, and cross-border expansion guidance.",
    },
  ];

  return (
    <div className="w-full">
      {/* 1. Hero Section (Restored Initial Split Hero with Badges & CTAs) */}
      <Hero />

      {/* 2. Executive Metrics Strip (Glued directly below Hero) */}
      <section className="bg-[#062B60] text-white border-y border-white/10 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left pt-3 sm:pt-0">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#539FE0] font-heading">
                15+
              </span>
              <span className="text-xs sm:text-sm font-semibold text-[#DCEEFF] mt-1">
                Years Leadership Pedigree
              </span>
              <span className="text-[11px] text-[#DCEEFF]/70">Big Four Alumni Credentials</span>
            </div>

            <div className="flex flex-col items-center sm:items-start text-center sm:text-left pt-3 sm:pt-0 sm:pl-8">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#539FE0] font-heading">
                9
              </span>
              <span className="text-xs sm:text-sm font-semibold text-[#DCEEFF] mt-1">
                Core Practice Disciplines
              </span>
              <span className="text-[11px] text-[#DCEEFF]/70">Audit, Tax & CFO Advisory</span>
            </div>

            <div className="flex flex-col items-center sm:items-start text-center sm:text-left pt-3 sm:pt-0 sm:pl-8">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#539FE0] font-heading">
                Global
              </span>
              <span className="text-xs sm:text-sm font-semibold text-[#DCEEFF] mt-1">
                India, GCC & USA Reach
              </span>
              <span className="text-[11px] text-[#DCEEFF]/70">Cross-Border Accounting</span>
            </div>

            <div className="flex flex-col items-center sm:items-start text-center sm:text-left pt-3 sm:pt-0 sm:pl-8">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#539FE0] font-heading">
                100%
              </span>
              <span className="text-xs sm:text-sm font-semibold text-[#DCEEFF] mt-1">
                Statutory Adherence
              </span>
              <span className="text-[11px] text-[#DCEEFF]/70">IFRS & GAAP Compliance</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. COMBINED MASTER SECTION: About Auctus Core + Partner Leadership Spotlight */}
      {/* (Two sections joined seamlessly as one unified corporate showcase) */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#F7FAFD] relative border-b border-[#E3ECF5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Part A: Firm Story & 4 Foundation Pillars */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center pb-14 sm:pb-16 border-b border-[#E3ECF5]">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DCEEFF] text-[#062B60] text-xs font-bold uppercase tracking-wider mb-4">
                About Auctus Core
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#062B60] tracking-tight font-heading leading-tight mb-4">
                Your Trusted Partner in Financial Excellence.
              </h2>
              <p className="text-sm sm:text-base text-[#5E718D] leading-relaxed mb-6 font-normal">
                Built upon decades of collective experience in Big Four and top-tier global accounting firms, Auctus Core partners with enterprises across India, the GCC, and international markets to secure long-term financial health and statutory compliance.
              </p>

              <div className="p-4 rounded-xl bg-white border border-[#E3ECF5] shadow-xs mb-8 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#1464AD] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-[#062B60] font-semibold leading-relaxed">
                  Direct engagement model: All client matters are overseen by certified Chartered Accountants and qualified financial advisors.
                </p>
              </div>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#062B60] hover:bg-[#1464AD] text-white text-xs sm:text-sm font-bold tracking-wide transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Read Full Profile & Firm Governance</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right Column: 4 Foundation Pillars */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyWeArePillars.map((pillar, idx) => {
                const IconComponent = iconMap[pillar.icon] || ShieldCheck;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white border border-[#E3ECF5] shadow-card-subtle hover-lift hover:border-[#1464AD]/40 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#F0F7FF] border border-[#BFE0FC] text-[#1464AD] flex items-center justify-center mb-3">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-[#062B60] mb-1.5 font-heading">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-[#5E718D] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Part B: Attached Partner Leadership Spotlight (Featuring Ummer Sadique B&W Portrait & CA Shahid Ali) */}
          <div className="pt-12 sm:pt-16">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#1464AD] block mb-1">
                  Partner Leadership
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#062B60] font-heading tracking-tight">
                  Led by Proven Financial Authorities
                </h3>
              </div>

              <Link
                to="/about"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#1464AD] hover:text-[#062B60] transition-colors group"
              >
                <span>Meet Both Partners on About Page</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {leadershipTeam.map((leader, index) => {
                const initials = leader.name
                  .replace("CA ", "")
                  .split(" ")
                  .map((n) => n[0])
                  .join("");

                return (
                  <div
                    key={index}
                    className="p-5 sm:p-7 rounded-2xl bg-white border border-[#E3ECF5] shadow-card-subtle hover:border-[#1464AD] hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 pb-5 border-b border-[#E3ECF5]">
                        {leader.image ? (
                          <div className="w-24 h-32 sm:w-28 sm:h-36 rounded-2xl overflow-hidden border-2 border-[#DCEEFF] shadow-md shrink-0 bg-slate-100 group-hover:border-[#1464AD] transition-colors">
                            <img
                              src={leader.image}
                              alt={leader.name}
                              className="w-full h-full object-cover object-center filter grayscale contrast-105"
                              loading="lazy"
                              width="240"
                              height="300"
                            />
                          </div>
                        ) : (
                          <div className="w-24 h-32 sm:w-28 sm:h-36 rounded-2xl bg-gradient-to-br from-[#062B60] to-[#0D3B7C] text-white flex flex-col items-center justify-center p-3 text-center shadow-md shrink-0 border-2 border-[#DCEEFF]">
                            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white font-extrabold text-xl tracking-wider mb-1.5 border border-white/20">
                              {initials}
                            </div>
                            <span className="text-[9px] font-bold uppercase tracking-wider text-[#539FE0]">
                              Partner
                            </span>
                          </div>
                        )}

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h4 className="text-lg sm:text-xl font-extrabold text-[#062B60] font-heading tracking-tight">
                              {leader.name}
                            </h4>
                            <span className="px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-bold bg-[#DCEEFF] text-[#062B60] uppercase tracking-wider shrink-0">
                              {leader.designation}
                            </span>
                          </div>

                          <p className="text-xs sm:text-sm font-semibold text-[#1464AD] mt-0.5">
                            {leader.role}
                          </p>

                          <div className="inline-flex items-center gap-1.5 mt-2 px-2.5 py-0.5 rounded-full bg-[#F0F7FF] border border-[#BFE0FC] text-[#062B60] text-[11px] font-semibold">
                            <Award className="w-3.5 h-3.5 text-[#1464AD] shrink-0" />
                            <span>{leader.experienceYears}</span>
                          </div>
                        </div>
                      </div>

                      <div className="pt-4">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#062B60] mb-1">
                          <Briefcase className="w-3.5 h-3.5 text-[#1464AD] shrink-0" />
                          <span>Credentials & Pedigree</span>
                        </div>
                        <p className="text-xs text-[#5E718D] leading-relaxed">
                          {leader.pastExperience}
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 pt-4 border-t border-[#E3ECF5]/80 flex flex-wrap gap-1.5">
                      {leader.specialisations.slice(0, 3).map((spec, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1 rounded-md bg-[#F0F7FF] text-[#062B60] text-[11px] font-semibold border border-[#DCEEFF]"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* 4. COMBINED MASTER SECTION: Featured Practice Areas + 4-Step Strategic Advisory Process */}
      {/* (Glued together seamlessly) */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Part A: Featured Practice Areas */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DCEEFF] text-[#062B60] text-xs font-bold uppercase tracking-wider mb-3">
                Practice Areas
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#062B60] tracking-tight font-heading">
                Comprehensive Financial Solutions
              </h2>
            </div>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#1464AD] hover:text-[#062B60] transition-colors group"
            >
              <span>Explore All 9 Practice Disciplines</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-16 sm:mb-20">
            {coreServices.slice(0, 4).map((service) => (
              <div
                key={service.id}
                className="p-6 rounded-2xl bg-white border border-[#E3ECF5] shadow-card-subtle hover-lift hover:border-[#1464AD] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-bold text-[#1464AD] bg-[#F0F7FF] px-2.5 py-1 rounded-md w-fit mb-4 border border-[#DCEEFF]">
                    0{service.id}
                  </div>
                  <h3 className="text-lg font-bold text-[#062B60] mb-2 font-heading">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#5E718D] leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E3ECF5]">
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#062B60] hover:text-[#1464AD] transition-colors"
                  >
                    <span>Read Advisory Scope</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Part B: Attached 4-Step Strategic Advisory Process (New Rich Content) */}
          <div className="p-6 sm:p-10 lg:p-12 rounded-3xl bg-[#F7FAFD] border border-[#E3ECF5]">
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1464AD] block mb-2">
                Our Advisory Process
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#062B60] font-heading">
                How We Deliver Financial Clarity & Governance
              </h3>
              <p className="text-xs sm:text-sm text-[#5E718D] mt-2">
                A disciplined four-phase methodology ensuring institutional-grade accuracy and continuous commercial value.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, sIdx) => (
                <div
                  key={sIdx}
                  className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E3ECF5] shadow-xs relative flex flex-col justify-between"
                >
                  <div>
                    <span className="text-2xl font-black text-[#1464AD]/25 font-heading block mb-2">
                      {step.step}
                    </span>
                    <h4 className="text-base font-bold text-[#062B60] mb-2 font-heading">
                      {step.title}
                    </h4>
                    <p className="text-xs text-[#5E718D] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#062B60] hover:bg-[#1464AD] text-white text-xs sm:text-sm font-bold tracking-wide transition-all shadow-sm"
              >
                <span>View Full Services & International Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Global Cross-Border Services */}
      <GlobalServices />

      {/* 6. Why Choose Auctus Core */}
      <WhyChooseUs />

      {/* 7. Contact Section */}
      <Contact />
    </div>
  );
}
