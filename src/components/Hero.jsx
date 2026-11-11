import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const metrics = [
    {
      value: "15+",
      title: "Years Leadership Pedigree",
      subtitle: "Big Four Alumni Credentials",
    },
    {
      value: "4",
      title: "Core Practice Categories",
      subtitle: "20 Specialized Disciplines",
    },
    {
      value: "Global",
      title: "India, GCC & USA Reach",
      subtitle: "Cross-Border Accounting",
    },
    {
      value: "100%",
      title: "Statutory Adherence",
      subtitle: "IFRS & GAAP Compliance",
    },
  ];

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen min-h-[100svh] lg:min-h-screen flex flex-col justify-between bg-[#03142C] overflow-hidden"
    >
      {/* 1. Ultra-High Resolution (2K QHD) Corporate Boardroom Background Image */}
      <picture className="absolute inset-0 w-full h-full pointer-events-none -z-0">
        <source
          srcSet="/images/hero-boardroom-2k.webp?v=2"
          type="image/webp"
        />
        <img
          src="/images/hero-boardroom-2k.jpg?v=2"
          alt="Auctus Corporate Boardroom Advisory"
          className="w-full h-full object-cover object-center lg:object-[68%_center] select-none contrast-[1.05] brightness-[1.01]"
          loading="eager"
          fetchpriority="high"
          decoding="async"
        />
      </picture>

      {/* 2. Razor-Clean Dark Gradient Overlay — Pure Text Legibility on Left, Crystal Clear Office on Right */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#03142C]/95 from-25% via-[#03142C]/80 via-48% to-transparent pointer-events-none z-[1]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#03142C]/40 via-transparent via-20% to-[#03142C]/40 pointer-events-none z-[1]"
        aria-hidden="true"
      />

      {/* 3. Hero Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 flex-grow flex items-center">
        <div className="max-w-3xl flex flex-col items-start text-left">
          {/* Main Heading */}
          <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-[64px] xl:text-[70px] font-extrabold font-heading text-white leading-[1.1] sm:leading-[1.12] tracking-[-0.035em] mb-6">
            Assurance{" "}
            <span className="text-[#38BDF8] drop-shadow-[0_2px_20px_rgba(56,189,248,0.35)]">
              Beyond Compliance
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg lg:text-[19px] text-[#DCEEFF]/90 leading-relaxed font-normal max-w-2xl mb-8 sm:mb-10">
            From company registration and GST filing to tax compliance and business advisory, we simplify every step of your business journey.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-white hover:bg-[#F0F7FF] text-[#062B60] text-sm sm:text-base font-bold tracking-wide transition-all duration-200 shadow-lg hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0 min-h-[50px] group"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-4 h-4 text-[#1464AD] group-hover:translate-x-0.5 transition-transform duration-200" />
            </Link>

            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 hover:border-white/50 text-white text-sm sm:text-base font-semibold tracking-wide transition-all duration-200 shadow-sm hover:-translate-y-0.5 active:translate-y-0 min-h-[50px]"
            >
              <span>Explore Our Services</span>
            </Link>
          </div>
        </div>
      </div>

      {/* 4. Docked Executive Metrics Strip (Flawless Responsive Grid Alignment) */}
      <div className="relative z-20 w-full bg-[#03142C]/85 backdrop-blur-md border-t border-white/10 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 lg:gap-0">
            {metrics.map((item, idx) => (
              <div
                key={idx}
                className="p-3 sm:p-3.5 lg:py-0 lg:px-6 rounded-xl bg-white/[0.04] lg:bg-transparent border border-white/10 lg:border-0 lg:border-l lg:border-white/15 lg:first:border-l-0 flex flex-col items-center sm:items-start text-center sm:text-left justify-center"
              >
                <span className="text-xl sm:text-2xl lg:text-[28px] font-extrabold text-[#38BDF8] font-heading leading-none">
                  {item.value}
                </span>
                <span className="text-xs sm:text-[13px] font-bold text-white mt-1.5 leading-tight">
                  {item.title}
                </span>
                <span className="text-[10px] sm:text-[11px] text-[#DCEEFF]/70 mt-1 leading-tight">
                  {item.subtitle}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
