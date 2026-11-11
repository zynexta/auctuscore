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
  ReceiptText,
  BookOpenCheck,
  Building2,
  LineChart,
  Layers,
  ChevronRight,
} from "lucide-react";
import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import Contact from "../components/Contact";
import {
  companyInfo,
  serviceCategories,
  whyWeArePillars,
} from "../data/companyData";

const categoryIconMap = {
  "accounting-finance": BookOpenCheck,
  "taxation-compliance": ReceiptText,
  "business-registration": Building2,
  international: Globe2,
};

const categoryImageMap = {
  "accounting-finance": "/images/card-accounting.webp",
  "taxation-compliance": "/images/card-taxation.webp",
  "business-registration": "/images/card-registration.webp",
  international: "/images/card-international.webp",
};

const categoryBulletMap = {
  "accounting-finance": [
    "Accounting & Bookkeeping",
    "Monthly & Annual Financial Reporting",
    "Payroll Processing Support",
    "Virtual CFO Leadership",
  ],
  "taxation-compliance": [
    "Direct & Corporate Income Tax",
    "GST & Regional VAT Compliance",
    "Statutory Audit & Assurance",
    "ROC & Secretarial Filings",
  ],
  "business-registration": [
    "Startup India & MSME Registration",
    "Pvt Ltd & LLP Incorporation",
    "Trademark & IP Protection",
    "Bankable Project Reports (DPR)",
  ],
  international: [
    "US GAAP & IFRS Accounting",
    "Multi-Currency Bank Reconciliations",
    "UAE Corporate Tax & FTA VAT",
    "Management Reporting & MIS",
  ],
};

const processSteps = [
  {
    step: "01",
    title: "Diagnostic & Scoping",
    desc: "Comprehensive review of books, tax positions, regulatory standing, and business risk exposure.",
  },
  {
    step: "02",
    title: "Strategic Architecture",
    desc: "Tailored tax-efficient structuring, cloud accounting workflows, and robust internal controls.",
  },
  {
    step: "03",
    title: "Systematic Execution",
    desc: "Precision bookkeeping, statutory filings, ROC documentation, and audit-ready schedules.",
  },
  {
    step: "04",
    title: "CFO-Level Advisory",
    desc: "Continuous cash-flow forecasting, executive board reporting, and cross-border expansion guidance.",
  },
];

export default function Home() {
  return (
    <div className="w-full">
      {/* 1. Full-Bleed Executive Hero Section with Docked Metrics */}
      <Hero />

      {/* 2. Executive Firm Overview & Strategic Value Pillars */}
      <section className="py-14 sm:py-20 lg:py-24 bg-[#F7FAFD] relative border-b border-[#E3ECF5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Narrative Column */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DCEEFF] text-[#062B60] text-xs font-bold uppercase tracking-wider mb-4 border border-[#BFE0FC]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#1464AD]" />
                Firm Credentials & Pedigree
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#062B60] tracking-tight font-heading leading-tight mb-4">
                Your Trusted Partner in Financial Excellence.
              </h2>
              <p className="text-sm sm:text-base text-[#5E718D] leading-relaxed mb-6 font-normal">
                Built upon decades of collective experience in Big Four (EY, Deloitte) and premier international accounting firms, Auctus Core partners with enterprises across India, the GCC, and global markets to secure rigorous statutory compliance, transparent governance, and sustainable commercial growth.
              </p>

              <div className="space-y-3 mb-8">
                <div className="p-3.5 rounded-xl bg-white border border-[#E3ECF5] shadow-xs flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1464AD] shrink-0" />
                  <span className="text-xs sm:text-sm text-[#062B60] font-semibold">
                    Direct partner oversight by certified Chartered Accountants (FCA) on every engagement.
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-[#E3ECF5] shadow-xs flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1464AD] shrink-0" />
                  <span className="text-xs sm:text-sm text-[#062B60] font-semibold">
                    Cross-border capabilities spanning India, UAE, Saudi Arabia, Qatar, Bahrain, Oman, UK & USA.
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#062B60] hover:bg-[#1464AD] text-white text-xs sm:text-sm font-bold tracking-wide transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Meet Our Partners & Read Full Profile</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white border border-[#CBD5E1] hover:border-[#1464AD] text-[#062B60] hover:text-[#1464AD] text-xs sm:text-sm font-bold tracking-wide transition-all shadow-xs"
                >
                  <span>Explore Practice Areas</span>
                </Link>
              </div>
            </div>

            {/* Right Pillars Grid */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyWeArePillars.map((pillar, idx) => {
                const iconMap = {
                  ShieldCheck,
                  TrendingUp,
                  Sliders,
                  Handshake,
                };
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
        </div>
      </section>

      {/* 4. Core Practice Categories Showcase (Making all services instantly discoverable) */}
      <section className="py-14 sm:py-20 lg:py-24 bg-[#F8FAFC] relative overflow-hidden">
        {/* Subtle Architectural Background Image with Gradient Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-20"
          style={{ backgroundImage: "url('/images/home-section-bg.webp')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-[#F8FAFC]/80 to-white/95 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF4FE] text-[#062B60] text-xs font-bold uppercase tracking-wider mb-3 border border-[#BFE0FC]">
                <Layers className="w-3.5 h-3.5 text-[#1464AD]" />
                Service Categories
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#062B60] tracking-tight font-heading">
                Four Pillars of Financial Advisory
              </h2>
              <p className="text-xs sm:text-sm text-[#5E718D] mt-1 max-w-xl">
                Browse our comprehensive corporate services structured across four specialized practice disciplines.
              </p>
            </div>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#1464AD] hover:text-[#062B60] transition-colors group shrink-0"
            >
              <span>Explore All 20 Practice Disciplines</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* 4-Category Cards Grid (Interactive Sticky Stacking Cards on Mobile Scroll) */}
          <div className="relative space-y-5 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 mb-14">
            {serviceCategories.map((cat, idx) => {
              const IconComponent = categoryIconMap[cat.id] || Layers;
              const bullets = categoryBulletMap[cat.id] || [];
              const cardImg = categoryImageMap[cat.id];
              return (
                <div
                  key={cat.id}
                  style={{
                    top: `calc(5rem + ${idx * 1.25}rem)`,
                    zIndex: 10 + idx,
                  }}
                  className="sticky md:static md:z-auto p-5 sm:p-5 lg:p-6 rounded-2xl bg-white/95 backdrop-blur-xs border border-[#E3ECF5] hover:border-[#1464AD] shadow-[0_10px_30px_rgba(6,43,96,0.10)] md:shadow-card-subtle hover-lift hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group overflow-hidden"
                >
                  <div>
                    {/* Aspect-Ratio Card Header Image */}
                    {cardImg && (
                      <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-4 border border-[#E3ECF5]/80 bg-slate-100">
                        <img
                          src={cardImg}
                          alt={cat.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#062B60]/60 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity" />
                        <span className="absolute top-2.5 right-2.5 text-[10px] font-bold text-white bg-[#062B60]/85 backdrop-blur-xs px-2.5 py-1 rounded-md border border-white/20 shadow-xs">
                          {cat.count} Disciplines
                        </span>
                      </div>
                    )}

                    {/* Category Title & Icon */}
                    <div className="flex items-center gap-2.5 mb-2.5">
                      <div className="w-8 h-8 rounded-lg bg-[#EBF4FE] group-hover:bg-[#062B60] text-[#1464AD] group-hover:text-white flex items-center justify-center transition-colors duration-200 border border-[#DCEEFF] shrink-0">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-[#062B60] group-hover:text-[#1464AD] transition-colors font-heading leading-snug">
                        {cat.name}
                      </h3>
                    </div>

                    {/* Category Tagline */}
                    <p className="text-xs text-[#5E718D] leading-relaxed mb-4">
                      {cat.tagline}
                    </p>

                    {/* Bullet List of Services in this Category */}
                    <ul className="space-y-2 mb-6 pt-3 border-t border-[#E3ECF5]">
                      {bullets.map((b, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2 text-xs text-[#17253A] font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#1464AD] shrink-0 mt-0.5" />
                          <span className="leading-snug">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Deep Jump Link to Services Filter */}
                  <Link
                    to={cat.id === "international" ? "/international-services" : `/services?cat=${cat.id}`}
                    className="inline-flex items-center justify-between w-full pt-3.5 border-t border-[#E3ECF5] text-xs font-bold text-[#062B60] group-hover:text-[#1464AD] transition-colors"
                  >
                    <span>View {cat.shortName}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>

          {/* 4-Step Strategic Advisory Process (Interactive Sticky Stacking Cards on Mobile Scroll) */}
          <div className="p-6 sm:p-10 lg:p-12 rounded-3xl bg-[#F7FAFD] border border-[#E3ECF5]">
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1464AD] block mb-2">
                Our Advisory Process
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#062B60] font-heading">
                How We Deliver Financial Clarity & Governance
              </h3>
              <p className="text-xs sm:text-sm text-[#5E718D] mt-2">
                A disciplined four-phase methodology ensuring institutional-grade accuracy, strict statutory compliance, and continuous commercial value.
              </p>
            </div>

            <div className="relative space-y-4 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6">
              {processSteps.map((step, sIdx) => (
                <div
                  key={sIdx}
                  style={{
                    top: `calc(5.25rem + ${sIdx * 1.25}rem)`,
                    zIndex: 10 + sIdx,
                  }}
                  className="sticky md:static md:z-auto p-5 sm:p-6 rounded-2xl bg-white border border-[#E3ECF5] shadow-[0_10px_30px_rgba(6,43,96,0.08)] md:shadow-xs relative flex flex-col justify-between"
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
                <span>View Complete Services Directory</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Institutional Advantages: Why Partner With Auctus Core */}
      <WhyChooseUs />

      {/* 6. Contact & Direct Consultation Booking */}
      <Contact />
    </div>
  );
}
