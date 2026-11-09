import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import Contact from "../components/Contact";
import { companyInfo } from "../data/companyData";

export default function ContactPage() {
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

