import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import Contact from "../components/Contact";
import { companyInfo } from "../data/companyData";

export default function ContactPage() {
  return (
    <div className="w-full">
      {/* Dedicated Page Header Banner with 2K Executive Consultation Suite Background */}
      <section className="pt-28 pb-14 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20 bg-[#03142C] text-white relative overflow-hidden">
        {/* 2K Background Image */}
        <picture className="absolute inset-0 w-full h-full pointer-events-none -z-0">
          <source srcSet="/images/page-hero-contact.webp" type="image/webp" />
          <img
            src="/images/page-hero-contact.webp"
            alt="Auctus Executive Consultation Suite"
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
            <span className="text-white">Contact Us</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[#DCEEFF] text-xs font-bold uppercase tracking-wider mb-4 border border-white/20">
              <Phone className="w-3.5 h-3.5 text-[#539FE0]" />
              Direct Partner Access
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading leading-tight mb-4 sm:mb-5">
              Let’s Build Your Financial Future Together.
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-[#DCEEFF]/90 leading-relaxed font-normal mb-8">
              Connect directly with our partners at Auctus Core for audit, taxation, cross-border accounting, and corporate advisory solutions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-white/15 text-xs sm:text-sm text-[#DCEEFF]">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#539FE0] shrink-0" />
                <span className="truncate">{companyInfo.contact.location}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#539FE0] shrink-0" />
                <span>{companyInfo.contact.phoneDisplay}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#539FE0] shrink-0" />
                <span className="truncate">{companyInfo.contact.email}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Direct Communication & Interactive Consultation Form */}
      <Contact />
    </div>
  );
}

