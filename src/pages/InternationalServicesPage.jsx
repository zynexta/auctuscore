import React from "react";
import { Link } from "react-router-dom";
import {
  Globe2,
  CheckCircle,
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  Award,
  Phone,
  MessageCircle,
  BookOpen,
  BarChart3,
  ArrowLeftRight,
  CreditCard,
  Users,
  Receipt,
  FileSpreadsheet,
  TrendingUp,
  Laptop,
  RotateCcw,
  Crown,
  Briefcase,
  Lock,
  Sparkles,
  Building2,
  Layers,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { globalCoverage, companyInfo } from "../data/companyData";

const iconMap = {
  BookOpen,
  BarChart3,
  ArrowLeftRight,
  CreditCard,
  Users,
  Receipt,
  FileSpreadsheet,
  TrendingUp,
  Laptop,
  RotateCcw,
  Crown,
  Briefcase,
};

const internationalServiceImageMap = {
  1: "/images/service-1-accounting.webp", // Accounting & Bookkeeping
  2: "/images/service-2-reporting.webp", // Financial Reporting
  3: "/images/service-4-receivable.webp", // AP & AR Management
  4: "/images/card-global-skyline.webp", // Bank & Credit Card Reconciliation
  5: "/images/service-3-payroll.webp", // Payroll Processing Support
  6: "/images/service-8-gst-vat.webp", // VAT / GST Compliance
  7: "/images/card-international.webp", // Financial Statements Preparation
  8: "/images/card-fintech.webp", // Management Reporting & MIS
  9: "/images/card-startup.webp", // Accounting Software Setup
  10: "/images/card-boardroom.webp", // Backlog Clearance
  11: "/images/service-6-virtual-cfo.webp", // Virtual CFO Support
  12: "/images/card-corporate-tower.webp", // Business Advisory & Financial Analysis
};

export default function InternationalServicesPage() {
  const deliveryPillars = [
    {
      icon: ShieldCheck,
      title: "Big Four Leadership Oversight",
      description:
        "Every offshore engagement is supervised by qualified Chartered Accountants with verified Deloitte, EY, and Grant Thornton management pedigree.",
    },
    {
      icon: Clock,
      title: "Aligned Timezone Support",
      description:
        "Our cross-border pods operate with overlapping business hours for India, UAE (GST), Saudi Arabia (AST), Qatar, and European/US market coordination.",
    },
    {
      icon: Lock,
      title: "Bank-Grade Confidentiality",
      description:
        "Strict Non-Disclosure Agreements (NDAs), encrypted cloud document vaults, multi-factor authentication, and SOC-compliant accounting workflows.",
    },
    {
      icon: Sparkles,
      title: "Up to 60% Operational Savings",
      description:
        "Access tier-one financial talent and comprehensive back-office operations at a fraction of the cost of maintaining an in-house accounting department in the GCC, UK, or USA.",
    },
  ];

  const onboardingSteps = [
    {
      step: "01",
      title: "Scoping & Systems Audit",
      desc: "Detailed review of existing ledgers, chart of accounts, statutory obligations, and multi-currency reporting requirements.",
    },
    {
      step: "02",
      title: "Platform Setup & Migration",
      desc: "Turnkey configuration on QuickBooks, Xero, Zoho Books, or NetSuite with automated bank and gateway feeds.",
    },
    {
      step: "03",
      title: "Daily Ledger Execution",
      desc: "Systematic posting of AP/AR, bank and credit card reconciliations, and payroll processing by dedicated specialists.",
    },
    {
      step: "04",
      title: "Monthly MIS & Tax Filings",
      desc: "Rigorous month-end closing, executive reporting packs, and on-time statutory VAT/GST return submissions.",
    },
    {
      step: "05",
      title: "Partner Strategic Review",
      desc: "Continuous executive reviews with partners for cash flow planning, risk controls, and cross-border expansion guidance.",
    },
  ];

  return (
    <div className="w-full">
      {/* 1. Dedicated Page Header Banner with 2K Global Financial Background */}
      <section className="pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 bg-[#03142C] text-white relative overflow-hidden">
        {/* 2K Background Image */}
        <picture className="absolute inset-0 w-full h-full pointer-events-none -z-0">
          <source srcSet="/images/page-hero-international.webp" type="image/webp" />
          <img
            src="/images/page-hero-international.webp"
            alt="Auctus International Services Cross-Border Operations"
            className="w-full h-full object-cover object-center lg:object-[68%_center] select-none contrast-[1.05] brightness-[0.98]"
            loading="eager"
            fetchpriority="high"
          />
        </picture>

        {/* Multi-Stop Dark Gradient Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#03142C]/95 from-20% via-[#062B60]/85 via-48% to-[#03142C]/30 md:to-transparent pointer-events-none z-[1]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#03142C]/50 via-transparent to-[#03142C]/80 pointer-events-none z-[1]"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs font-semibold text-[#BFE0FC] mb-4 sm:mb-6" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            <span className="text-white">International Services</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-heading leading-tight mb-5">
              Our International Services
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-[#DCEEFF]/90 leading-relaxed font-normal mb-8">
              Turnkey offshore financial operations, multi-currency bookkeeping, statutory VAT compliance, and Virtual CFO leadership designed for growing enterprises across India, the GCC, USA, UK, and global jurisdictions.
            </p>

            {/* Quick Strategic Highlights */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm font-semibold text-[#DCEEFF] mb-8">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Big 4 Partner Supervision</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#539FE0]"></span>
                <span>IFRS & US GAAP Standardized</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                <span>UAE / GCC / Global Tax Ready</span>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white hover:bg-[#DCEEFF] text-[#062B60] text-xs sm:text-sm font-bold tracking-wide transition-all shadow-md hover:shadow-lg active:scale-98"
              >
                <span>Schedule Global Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="#services-grid"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 border border-white/25 text-white text-xs sm:text-sm font-bold tracking-wide transition-all active:scale-98"
              >
                <span>Explore 12 Practice Disciplines</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Global Markets Coverage Ticker */}
      <section className="bg-white py-6 border-b border-[#E3ECF5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#062B60]">
              Active Cross-Border Jurisdictions & Standards:
            </span>
            <span className="text-xs text-[#5E718D] font-medium">
              Standardized to IFRS • US GAAP • FTA (UAE) • ZATCA (KSA) • GST (India)
            </span>
          </div>

          <div className="relative w-full overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
            <div className="animate-marquee flex items-center gap-3.5">
              {[
                ...globalCoverage.markets,
                ...globalCoverage.markets,
                ...globalCoverage.markets,
              ].map((market, mIdx) => (
                <div
                  key={mIdx}
                  className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-[#F7FAFD] border border-[#E3ECF5] shadow-2xs hover:border-[#1464AD] hover:bg-white transition-all shrink-0 group"
                >
                  <div className="w-7 h-5 rounded overflow-hidden shrink-0 shadow-2xs border border-[#DCEEFF] group-hover:scale-105 transition-transform bg-slate-50 flex items-center justify-center">
                    {market.flagUrl ? (
                      <img
                        src={market.flagUrl}
                        alt={`${market.name} Flag`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        width="28"
                        height="20"
                      />
                    ) : (
                      <span className="text-base">{market.flag}</span>
                    )}
                  </div>
                  <span className="text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-white text-[#1464AD] border border-[#DCEEFF] shrink-0">
                    {market.code}
                  </span>
                  <span className="text-xs font-bold text-[#062B60] whitespace-nowrap">
                    {market.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2.5 Key International Delivery Notes Cards: GCC Time Schedule & Dedicated Employees */}
      <section className="py-10 sm:py-14 bg-white border-b border-[#E3ECF5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1464AD] block mb-1.5">
              Strategic Operating Commitments
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#062B60] font-heading">
              Built for Seamless GCC &amp; Global Coordination
            </h2>
            <p className="text-xs sm:text-sm text-[#5E718D] mt-1.5">
              Two core delivery standards ensuring zero timezone delays and undivided professional focus on your books.
            </p>
          </div>

          <div className="relative space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
            
            {/* Note Card 1: GCC Based Time Schedule (Sticky Stacking Card on Mobile) */}
            <div className="sticky top-24 sm:top-28 z-10 md:static md:z-auto p-5 sm:p-7 rounded-2xl bg-white border border-[#BFE0FC] shadow-[0_8px_30px_rgba(6,43,96,0.10)] hover:shadow-md hover:border-[#1464AD] transition-all duration-300 relative group overflow-hidden">
              <div className="absolute top-0 left-0 h-1.5 w-full bg-[#1464AD]" />
              
              <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-4 border border-[#E3ECF5] bg-slate-100">
                <img
                  src="/images/card-gcc-schedule.webp"
                  alt="GCC-Based Time Schedule"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#062B60]/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
                <span className="absolute top-2.5 left-2.5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#062B60]/85 backdrop-blur-xs text-white text-[10.5px] font-bold uppercase tracking-wider border border-white/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Timezone Synchronized
                </span>
                <div className="absolute top-2.5 right-2.5 w-8 h-8 rounded-lg bg-white/90 backdrop-blur-xs text-[#062B60] flex items-center justify-center border border-white/40 shadow-xs">
                  <Clock className="w-4 h-4 text-[#1464AD]" />
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-[#062B60] font-heading mb-2">
                GCC-Based Time Schedule
              </h3>

              <p className="text-xs sm:text-sm text-[#5E718D] leading-relaxed mb-5">
                Our cross-border finance teams operate strictly aligned with GCC business hours (UAE, Saudi Arabia, Qatar, Bahrain, Kuwait &amp; Oman). We match your work week—whether Sunday-to-Thursday or Monday-to-Friday—ensuring real-time collaboration, zero lag in approvals, and instant responsiveness.
              </p>

              <div className="space-y-2 pt-4 border-t border-[#DCEEFF] text-xs font-semibold text-[#062B60]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1464AD] shrink-0" />
                  <span>Direct alignment with UAE (GST) &amp; Saudi Arabia (AST) working hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1464AD] shrink-0" />
                  <span>Sunday–Thursday or Monday–Friday working schedule flexibility</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1464AD] shrink-0" />
                  <span>Immediate query resolution via Teams, Slack, Email &amp; WhatsApp</span>
                </div>
              </div>
            </div>

            {/* Note Card 2: Dedicated Employees (Stacks on Top of Card 1 as You Scroll on Mobile) */}
            <div className="sticky top-32 sm:top-36 z-20 md:static md:z-auto p-5 sm:p-7 rounded-2xl bg-white border border-[#BFE0FC] shadow-[0_16px_40px_rgba(6,43,96,0.16)] hover:shadow-md hover:border-[#1464AD] transition-all duration-300 relative group overflow-hidden">
              <div className="absolute top-0 left-0 h-1.5 w-full bg-[#1464AD]" />
              
              <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-4 border border-[#E3ECF5] bg-slate-100">
                <img
                  src="/images/card-dedicated-employees.webp"
                  alt="Dedicated Employees"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#062B60]/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
                <span className="absolute top-2.5 left-2.5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#062B60]/85 backdrop-blur-xs text-white text-[10.5px] font-bold uppercase tracking-wider border border-white/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1464AD]" />
                  Exclusive Resource Model
                </span>
                <div className="absolute top-2.5 right-2.5 w-8 h-8 rounded-lg bg-white/90 backdrop-blur-xs text-[#062B60] flex items-center justify-center border border-white/40 shadow-xs">
                  <Users className="w-4 h-4 text-[#1464AD]" />
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-[#062B60] font-heading mb-2">
                Dedicated Employees
              </h3>

              <p className="text-xs sm:text-sm text-[#5E718D] leading-relaxed mb-5">
                We assign qualified, dedicated accounting and finance professionals exclusively to your enterprise. Acting as a seamless offshore extension of your internal finance department, your dedicated resource handles daily ledgers, AP/AR, bank feeds, and reporting under Big Four partner oversight.
              </p>

              <div className="space-y-2 pt-4 border-t border-[#DCEEFF] text-xs font-semibold text-[#062B60]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1464AD] shrink-0" />
                  <span>100% dedicated accountant assigned exclusively to your business</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1464AD] shrink-0" />
                  <span>Seamless daily ledger maintenance, bank reconciliation &amp; AP/AR</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1464AD] shrink-0" />
                  <span>Continuous oversight and quality checks by senior Chartered Accountants</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. The 12 Complete International Services Portfolio Grid */}
      <section id="services-grid" className="py-16 sm:py-20 lg:py-24 bg-[#F7FAFD] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DCEEFF] text-[#062B60] text-xs font-bold uppercase tracking-wider mb-3">
              Full Spectrum Portfolio
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#062B60] font-heading tracking-tight">
              12 Comprehensive International Financial Services
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-[#5E718D]">
              Engineered for foreign subsidiaries, cross-border holding companies, e-commerce brands, and global trading enterprises requiring institutional-grade accuracy.
            </p>
          </div>

          {/* 12 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
            {globalCoverage.services.map((service, index) => {
              const IconComponent = iconMap[service.icon] || CheckCircle;
              const formattedNumber = String(index + 1).padStart(2, "0");

              return (
                <div
                  key={service.id}
                  className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E3ECF5] shadow-card-subtle hover:border-[#1464AD] hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group overflow-hidden"
                >
                  <div>
                    {/* Aspect Ratio Image Header */}
                    <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-4 border border-[#E3ECF5] bg-slate-100">
                      <img
                        src={internationalServiceImageMap[service.id] || "/images/card-international.webp"}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#062B60]/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
                      <span className="absolute top-2.5 right-2.5 text-xs font-extrabold text-white bg-[#062B60]/85 backdrop-blur-xs px-2.5 py-1 rounded-md border border-white/20 font-mono shadow-xs">
                        #{formattedNumber}
                      </span>
                      <div className="absolute top-2.5 left-2.5 w-8 h-8 rounded-lg bg-white/90 backdrop-blur-xs text-[#062B60] flex items-center justify-center border border-white/40 shadow-xs">
                        <IconComponent className="w-4 h-4 text-[#1464AD]" />
                      </div>
                    </div>

                    {/* Service Title */}
                    <h3 className="text-base sm:text-lg font-bold text-[#062B60] group-hover:text-[#1464AD] transition-colors font-heading leading-snug mb-1.5">
                      {service.title}
                    </h3>

                    {/* Tagline */}
                    <p className="text-xs font-semibold text-[#1464AD] mb-2.5">
                      {service.tagline}
                    </p>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#5E718D] leading-relaxed mb-4">
                      {service.description}
                    </p>
                  </div>

                  <div>
                    {/* Key Deliverables Pills */}
                    <div className="pt-4 border-t border-[#E3ECF5]/80 mb-4">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#062B60] block mb-2">
                        Core Deliverables:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {service.keyDeliverables?.map((item, dIdx) => (
                          <span
                            key={dIdx}
                            className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-md bg-[#F0F7FF] text-[#062B60] border border-[#DCEEFF]"
                          >
                            <CheckCircle2 className="w-3 h-3 text-[#1464AD]" />
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Standards Footer */}
                    <div className="flex items-center justify-between pt-3 border-t border-[#E3ECF5]/60 text-[11px]">
                      <span className="text-[#5E718D] font-medium">Standard:</span>
                      <span className="font-semibold text-[#062B60] bg-[#F7FAFD] px-2 py-0.5 rounded border border-[#E3ECF5]">
                        {service.standards}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. Why Choose Auctus Core for International Operations (Delivery Pillars) */}
      <section className="py-16 sm:py-20 bg-white border-t border-[#E3ECF5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DCEEFF] text-[#062B60] text-xs font-bold uppercase tracking-wider mb-3">
              Delivery Standards
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#062B60] font-heading tracking-tight">
              Why Global Businesses Choose Auctus Core
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#5E718D]">
              We operate as a seamless extension of your company, delivering institutional-grade accuracy with direct partner accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliveryPillars.map((pillar, pIdx) => {
              const PillarIcon = pillar.icon;
              return (
                <div
                  key={pIdx}
                  className="p-6 rounded-2xl bg-[#F7FAFD] border border-[#E3ECF5] hover:border-[#1464AD] hover:bg-white transition-all shadow-xs group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#062B60] text-white flex items-center justify-center shrink-0 mb-4 group-hover:scale-105 transition-transform">
                    <PillarIcon className="w-5 h-5 text-[#539FE0]" />
                  </div>
                  <h3 className="text-base font-bold text-[#062B60] mb-2 font-heading">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5E718D] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. 5-Step Cross-Border Onboarding Workflow */}
      <section className="py-16 sm:py-20 bg-[#F7FAFD] border-t border-[#E3ECF5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1464AD] block mb-2">
              Implementation Roadmap
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#062B60] font-heading tracking-tight">
              How We Onboard & Manage Your International Books
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#5E718D]">
              A disciplined, risk-mitigated transition process that delivers continuity from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-6">
            {onboardingSteps.map((item, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E3ECF5] shadow-xs relative flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-[#062B60] text-[#539FE0] font-mono font-extrabold text-sm flex items-center justify-center mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-sm font-bold text-[#062B60] mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#5E718D] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Bottom Consultation Callout */}
      <section className="py-14 sm:py-16 bg-[#FFFFFF] border-t border-[#E3ECF5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-10 lg:p-12 rounded-3xl bg-gradient-to-br from-[#062B60] to-[#0D3B7C] text-white flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 shadow-xl">
            <div className="max-w-2xl text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-[#539FE0] block mb-2">
                Turnkey Cross-Border Finance Team
              </span>
              <h3 className="text-xl sm:text-3xl font-extrabold text-white font-heading">
                Ready to Streamline Your International Accounting?
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#DCEEFF]/85 leading-relaxed">
                Connect directly with our senior partners for a confidential scoping consultation tailored to your cross-border business.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white hover:bg-[#DCEEFF] text-[#062B60] text-xs font-bold uppercase tracking-wider transition-all shadow-md active:scale-98"
              >
                <span>Request International Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={companyInfo.contact.phoneUrl}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold uppercase tracking-wider transition-all active:scale-98"
              >
                <Phone className="w-4 h-4" />
                <span>Direct Call</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

