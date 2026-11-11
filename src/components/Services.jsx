import React, { useState, useMemo, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import {
  ArrowRight,
  Search,
  BookOpenCheck,
  BarChart3,
  Users,
  ArrowLeftRight,
  LineChart,
  TrendingUp,
  ReceiptText,
  Receipt,
  Scale,
  ShieldCheck,
  Rocket,
  Building2,
  BadgeCheck,
  FileSpreadsheet,
  Globe2,
  CreditCard,
  Activity,
  Laptop,
  RotateCcw,
  ShieldAlert,
  CheckCircle2,
  Sparkles,
  Layers,
  ArrowUpRight,
  Clock,
} from "lucide-react";
import {
  serviceCategories,
  allCategorizedServices,
  companyInfo,
} from "../data/companyData";

const iconMap = {
  BookOpenCheck,
  BarChart3,
  Users,
  ArrowLeftRight,
  LineChart,
  TrendingUp,
  ReceiptText,
  Receipt,
  Scale,
  ShieldCheck,
  Rocket,
  Building2,
  BadgeCheck,
  FileSpreadsheet,
  Globe2,
  CreditCard,
  Activity,
  Laptop,
  RotateCcw,
  ShieldAlert,
};

const serviceImageMap = {
  "accounting-finance": "/images/card-accounting.webp",
  "taxation-compliance": "/images/card-taxation.webp",
  "business-registration": "/images/card-registration.webp",
  international: "/images/card-international.webp",
};

const serviceSpecificImageMap = {
  1: "/images/service-1-accounting.webp", // Accounting & Bookkeeping
  2: "/images/service-2-reporting.webp", // Financial Reporting
  3: "/images/service-3-payroll.webp", // Payroll Processing Support
  4: "/images/service-4-receivable.webp", // Bank & Cash Management / AP & AR
  5: "/images/service-5-advisory.webp", // Virtual CFO Leadership
  6: "/images/service-6-virtual-cfo.webp", // Financial Modelling & Forecasting
  7: "/images/service-7-direct-tax.webp", // Direct & Corporate Income Tax
  8: "/images/service-8-gst-vat.webp", // GST & Regional VAT Compliance
  9: "/images/card-accounting.webp", // Statutory Audit & Assurance
  10: "/images/card-boardroom.webp", // ROC & Secretarial Filings
  11: "/images/card-startup.webp", // Startup India & MSME Registration
  12: "/images/card-registration.webp", // Pvt Ltd & LLP Incorporation
  13: "/images/card-desk.webp", // Trademark & IP Protection
  14: "/images/card-corporate-tower.webp", // Bankable Project Reports (DPR)
  15: "/images/card-international.webp", // US GAAP & IFRS Accounting
  16: "/images/card-global-skyline.webp", // Multi-Currency Bank Reconciliations
  17: "/images/card-gcc-schedule.webp", // UAE Corporate Tax & FTA VAT
  18: "/images/card-fintech.webp", // Management Reporting & MIS
  19: "/images/card-dedicated-employees.webp", // Offshore Dedicated Resource
  20: "/images/card-cfo.webp", // Global Transaction Advisory
};

export default function Services() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get("cat") || "all";
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");

  // Sync category state with URL if changed externally
  useEffect(() => {
    const cat = searchParams.get("cat");
    if (cat && ["accounting-finance", "taxation-compliance", "business-registration", "international", "all"].includes(cat)) {
      setActiveCategory(cat);
    }
  }, [searchParams]);

  const handleCategorySelect = (categoryId) => {
    setActiveCategory(categoryId);
    if (categoryId === "all") {
      searchParams.delete("cat");
      setSearchParams(searchParams, { replace: true });
    } else {
      setSearchParams({ cat: categoryId }, { replace: true });
    }
  };

  const filteredServices = useMemo(() => {
    return allCategorizedServices.filter((service) => {
      const matchesCategory =
        activeCategory === "all" || service.categoryId === activeCategory;
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !q ||
        service.title.toLowerCase().includes(q) ||
        service.description.toLowerCase().includes(q) ||
        service.categoryName.toLowerCase().includes(q) ||
        (service.deliverables &&
          service.deliverables.some((d) => d.toLowerCase().includes(q)));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section
      id="services"
      className="py-14 sm:py-20 lg:py-24 bg-[#FFFFFF] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF4FE] text-[#062B60] text-xs font-bold uppercase tracking-wider mb-3.5 border border-[#BFE0FC]">
            <Layers className="w-3.5 h-3.5 text-[#1464AD]" />
            Complete Practice Architecture
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-[44px] font-extrabold text-[#062B60] tracking-tight font-heading leading-tight">
            Comprehensive Financial Solutions
          </h2>
          <p className="mt-3 text-sm sm:text-base lg:text-lg text-[#5E718D] leading-relaxed">
            Organized across 4 core practice categories to provide immediate clarity, institutional compliance, and strategic business growth.
          </p>
        </div>

        {/* Interactive Controls: Search Bar + Category Pills */}
        <div className="mb-10 space-y-4">
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-[#5E718D] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search services (e.g. Tax, CFO, Payroll, Audit, Trademark)..."
              className="w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-xl bg-[#F7FAFD] border border-[#E3ECF5] text-xs sm:text-sm text-[#062B60] placeholder-[#5E718D]/70 focus:outline-none focus:ring-2 focus:ring-[#1464AD] focus:bg-white transition-all shadow-2xs"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#5E718D] hover:text-[#062B60] font-bold"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Pills (Responsive scroll on mobile, flex bar on tablet/desktop) */}
          <div className="flex items-center justify-start sm:justify-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            <button
              type="button"
              onClick={() => handleCategorySelect("all")}
              className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 border shrink-0 ${
                activeCategory === "all"
                  ? "bg-[#062B60] text-white border-[#062B60] shadow-sm"
                  : "bg-[#F7FAFD] text-[#5E718D] border-[#E3ECF5] hover:text-[#062B60] hover:bg-white"
              }`}
            >
              All Services ({allCategorizedServices.length})
            </button>

            {serviceCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleCategorySelect(cat.id)}
                className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 border shrink-0 ${
                  activeCategory === cat.id
                    ? "bg-[#062B60] text-white border-[#062B60] shadow-sm"
                    : "bg-[#F7FAFD] text-[#5E718D] border-[#E3ECF5] hover:text-[#062B60] hover:bg-white"
                }`}
              >
                {cat.shortName} ({cat.count})
              </button>
            ))}
          </div>

          {/* Result Count Status */}
          <div className="text-center text-xs font-semibold text-[#5E718D]">
            Showing <span className="text-[#062B60] font-bold">{filteredServices.length}</span> practice disciplines
            {activeCategory !== "all" && (
              <span> in <span className="text-[#1464AD] font-bold">{serviceCategories.find(c => c.id === activeCategory)?.name}</span></span>
            )}
          </div>
        </div>

        {/* Services Cards Grid (1 col mobile, 2 col tablet, 3 col desktop) */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
            {filteredServices.map((service) => {
              const IconComponent = iconMap[service.icon] || ShieldCheck;
              const serviceImg = serviceSpecificImageMap[service.id] || serviceImageMap[service.categoryId] || "/images/card-accounting.webp";
              return (
                <div
                  key={service.id}
                  className="group relative p-4 sm:p-5 rounded-2xl bg-white border border-[#E3ECF5] shadow-card-subtle hover-lift hover:border-[#1464AD] hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  <div>
                    {/* Aspect Ratio Image Header */}
                    <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-3.5 border border-[#E3ECF5]/80 bg-slate-100">
                      <img
                        src={serviceImg}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#062B60]/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
                      <span className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md bg-[#062B60]/85 backdrop-blur-xs text-white text-[10px] font-bold border border-white/20 uppercase tracking-wider">
                        {service.categoryName.replace(" Services", "")}
                      </span>
                      <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-lg bg-white/90 backdrop-blur-xs text-[#062B60] flex items-center justify-center border border-white/40 shadow-xs">
                        <IconComponent className="w-3.5 h-3.5 text-[#1464AD]" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-bold text-[#062B60] group-hover:text-[#1464AD] transition-colors mb-1.5 font-heading">
                      {service.title}
                    </h3>

                    {/* Tagline */}
                    {service.tagline && (
                      <p className="text-[11px] sm:text-xs font-semibold text-[#1464AD] mb-2.5">
                        {service.tagline}
                      </p>
                    )}

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#5E718D] leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Deliverables Badges */}
                    {service.deliverables && (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {service.deliverables.slice(0, 3).map((item, dIdx) => (
                          <span
                            key={dIdx}
                            className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-medium text-[#17253A] bg-[#F7FAFD] px-2 py-0.5 rounded border border-[#E3ECF5]"
                          >
                            <span className="w-1 h-1 rounded-full bg-[#1464AD]" />
                            {item}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Card Footer: Standards & Direct Inquire Action */}
                  <div className="pt-3.5 border-t border-[#E3ECF5]/80 flex items-center justify-between gap-2">
                    <span className="text-[10px] sm:text-[11px] font-medium text-[#5E718D] truncate max-w-[60%]">
                      {service.standards}
                    </span>

                    <Link
                      to={`/contact?service=${encodeURIComponent(service.title)}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#062B60] group-hover:text-[#1464AD] transition-colors shrink-0"
                    >
                      <span>Inquire</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16 bg-[#F7FAFD] rounded-2xl border border-[#E3ECF5]">
            <p className="text-sm text-[#5E718D] font-medium">
              No services found matching "{searchQuery}".
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("all");
              }}
              className="mt-3 px-4 py-2 rounded-lg bg-[#062B60] text-white text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Strategic International Callout & Key Operating Cards */}
        <div className="mt-12 sm:mt-16 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            
            {/* Card 1: GCC-Based Time Schedule */}
            <div className="group p-5 sm:p-6 rounded-2xl bg-white border border-[#BFE0FC] shadow-2xs hover:border-[#1464AD] hover:shadow-sm transition-all duration-200 flex flex-col justify-between overflow-hidden">
              <div>
                <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-4 border border-[#E3ECF5] bg-slate-100">
                  <img
                    src="/images/card-gcc-schedule.webp"
                    alt="GCC-Based Time Schedule"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#062B60]/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
                  <span className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md bg-[#062B60]/85 backdrop-blur-xs text-white text-[10px] font-bold border border-white/20 uppercase tracking-wider">
                    Timezone Synchronized
                  </span>
                  <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-lg bg-white/90 backdrop-blur-xs text-[#062B60] flex items-center justify-center border border-white/40 shadow-xs">
                    <Clock className="w-3.5 h-3.5 text-[#1464AD]" />
                  </div>
                </div>

                <h4 className="text-base sm:text-lg font-bold text-[#062B60] font-heading mb-2">
                  GCC-Based Time Schedule
                </h4>
                <p className="text-xs sm:text-sm text-[#5E718D] leading-relaxed mb-4">
                  Operating strictly aligned with UAE, Saudi Arabia, Qatar, and Gulf region business hours (Sunday to Thursday or Monday to Friday) for real-time collaboration with zero timezone delays.
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-[#062B60] pt-2.5 border-t border-[#E3ECF5]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1464AD] shrink-0" />
                <span>GST &amp; AST Working Hours Aligned</span>
              </div>
            </div>

            {/* Card 2: Dedicated Employees */}
            <div className="group p-5 sm:p-6 rounded-2xl bg-white border border-[#BFE0FC] shadow-2xs hover:border-[#1464AD] hover:shadow-sm transition-all duration-200 flex flex-col justify-between overflow-hidden">
              <div>
                <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-4 border border-[#E3ECF5] bg-slate-100">
                  <img
                    src="/images/card-dedicated-employees.webp"
                    alt="Dedicated Employees"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#062B60]/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
                  <span className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md bg-[#062B60]/85 backdrop-blur-xs text-white text-[10px] font-bold border border-white/20 uppercase tracking-wider">
                    Exclusive Resource Allocation
                  </span>
                  <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-lg bg-white/90 backdrop-blur-xs text-[#062B60] flex items-center justify-center border border-white/40 shadow-xs">
                    <Users className="w-3.5 h-3.5 text-[#1464AD]" />
                  </div>
                </div>

                <h4 className="text-base sm:text-lg font-bold text-[#062B60] font-heading mb-2">
                  Dedicated Employees
                </h4>
                <p className="text-xs sm:text-sm text-[#5E718D] leading-relaxed mb-4">
                  Qualified and vetted accounting professionals assigned exclusively to your enterprise, functioning as a seamless offshore extension of your internal finance department with partner oversight.
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-[#062B60] pt-2.5 border-t border-[#E3ECF5]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1464AD] shrink-0" />
                <span>100% Dedicated to Your Business</span>
              </div>
            </div>

          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#062B60] to-[#0D3B7C] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="flex items-start sm:items-center gap-4 text-center md:text-left">
              <div className="w-12 h-12 rounded-xl bg-white/10 text-[#539FE0] flex items-center justify-center shrink-0 border border-white/20 hidden sm:flex">
                <Globe2 className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#539FE0] block">
                  Cross-Border Accounting &amp; Compliance
                </span>
                <h3 className="text-lg sm:text-2xl font-bold font-heading text-white mt-0.5">
                  Operating in UAE, Saudi Arabia, GCC, UK, or USA?
                </h3>
                <p className="text-xs sm:text-sm text-[#DCEEFF]/85 mt-1">
                  Explore our dedicated international practice hub with multi-currency ledgers, FTA VAT, ZATCA e-invoicing, and Big 4 oversight.
                </p>
              </div>
            </div>

            <Link
              to="/international-services"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white hover:bg-[#DCEEFF] text-[#062B60] text-xs sm:text-sm font-bold tracking-wide transition-all shadow-md shrink-0 w-full md:w-auto"
            >
              <span>Our International Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
