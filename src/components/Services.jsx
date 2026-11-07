import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { coreServices } from "../data/companyData";

// Categorization for clean filtering
const categories = [
  { id: "all", label: "All Services" },
  { id: "audit-tax", label: "Audit & Tax", ids: [1, 2, 3] },
  { id: "advisory", label: "Advisory & CFO", ids: [4, 5, 6] },
  { id: "corporate", label: "Corporate & Legal", ids: [7, 8, 9] },
];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredServices = coreServices.filter((service) => {
    if (activeCategory === "all") return true;
    const cat = categories.find((c) => c.id === activeCategory);
    return cat ? cat.ids.includes(service.id) : true;
  });

  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) {
      const navOffset = 76;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-28 bg-[#FFFFFF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DCEEFF] text-[#062B60] text-xs font-bold uppercase tracking-wider mb-4">
            Practice Areas
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#062B60] tracking-tight font-heading">
            Comprehensive Financial Solutions
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-[#5E718D]">
            Professional financial and business services tailored to your needs.
          </p>
        </div>

        {/* Category Filter Pills & Counter */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 mb-8 sm:mb-12">
          
          {/* Category Filter Pills (Strict Symmetrical 2x2 Grid on Mobile, Sleek Horizontal Bar on Desktop) */}
          <div className="grid grid-cols-2 sm:flex sm:items-center gap-1.5 sm:gap-2 p-1.5 rounded-xl bg-[#F7FAFD] border border-[#E3ECF5] w-full sm:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`w-full sm:w-auto px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all duration-200 text-center flex items-center justify-center whitespace-nowrap ${
                  activeCategory === cat.id
                    ? "bg-[#062B60] text-white shadow-sm"
                    : "text-[#5E718D] hover:text-[#062B60] hover:bg-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Practice Disciplines Counter */}
          <div className="text-xs font-semibold text-[#5E718D] bg-[#F7FAFD] px-3.5 py-2 rounded-lg border border-[#E3ECF5] hidden sm:block">
            Showing {filteredServices.length} Practice Disciplines
          </div>
        </div>

        {/* Clean Responsive Practice Area Cards Grid (1 col on mobile, 2 col on tablet, 3 col on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              style={{ animationDelay: `${index * 50}ms` }}
              className="animate-card-reveal group relative p-5 sm:p-7 lg:p-8 rounded-2xl bg-[#FFFFFF] border border-[#E3ECF5] shadow-card-subtle hover-lift hover:border-[#1464AD] hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Service Title (Clean, Executive Typography Without Cluttering Top Icons) */}
                <h3 className="text-lg sm:text-xl font-bold text-[#062B60] group-hover:text-[#1464AD] transition-colors mb-2.5 font-heading">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#5E718D] leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Subtle Interactive Footer */}
              <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-[#E3ECF5]/80 flex items-center justify-between">
                <span className="text-xs font-semibold text-[#062B60] group-hover:text-[#1464AD] transition-colors">
                  Inquire for Advisory
                </span>
                <button
                  type="button"
                  onClick={scrollToContact}
                  className="w-8 h-8 rounded-lg bg-[#F0F7FF] group-hover:bg-[#1464AD] text-[#062B60] group-hover:text-white flex items-center justify-center transition-all duration-200 group-hover:translate-x-1 focus:outline-none"
                  aria-label={`Inquire about ${service.title}`}
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Consultation Banner */}
        <div className="mt-12 sm:mt-16 p-5 sm:p-8 rounded-2xl bg-[#F7FAFD] border border-[#BFE0FC] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold text-[#062B60] font-heading">
              Need a bespoke financial, tax, or corporate advisory package?
            </h4>
            <p className="text-xs sm:text-sm text-[#5E718D] mt-1">
              Our partners will assess your business model and design an optimal compliance roadmap.
            </p>
          </div>
          <button
            type="button"
            onClick={scrollToContact}
            className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-[#062B60] hover:bg-[#1464AD] text-white text-xs font-bold uppercase tracking-wider transition-colors shrink-0 shadow-sm hover:shadow-md"
          >
            Consult With Our Partners
          </button>
        </div>

      </div>
    </section>
  );
}
