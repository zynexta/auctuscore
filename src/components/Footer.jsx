import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowUp, ArrowUpRight } from "lucide-react";
import { companyInfo, navLinks, coreServices } from "../data/companyData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#062B60] text-white pt-12 sm:pt-16 pb-20 md:pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Layout: On Mobile each part is wrapped in an elegant structured box / card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8 pb-10 sm:pb-12 border-b border-white/10">
          
          {/* Box 1: Brand & Tagline Box */}
          <div className="lg:col-span-4 p-5 sm:p-6 rounded-2xl bg-white/[0.04] md:bg-transparent border border-white/10 md:border-transparent space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-white p-1.5 flex items-center justify-center shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-105">
                <img
                  src="/images/logo.png"
                  alt="Auctus Core Emblem"
                  className="w-full h-full object-contain"
                  width="40"
                  height="40"
                />
              </div>
              <span className="text-2xl font-extrabold tracking-tight text-white font-heading">
                AUCTUS<span className="text-[#539FE0] ml-1">CORE</span>
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-[#DCEEFF]/85 leading-relaxed">
              Empowering businesses with reliable accounting, auditing, taxation, compliance, and strategic financial advisory solutions across India, the GCC, and global markets.
            </p>
          </div>

          {/* Box 2: Quick Links Navigation Box */}
          <div className="lg:col-span-2 p-5 sm:p-6 rounded-2xl bg-white/[0.04] md:bg-transparent border border-white/10 md:border-transparent space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#539FE0] pb-1 border-b border-white/10 md:border-none">
              Navigation
            </h4>
            <ul className="grid grid-cols-2 md:grid-cols-1 gap-2 text-xs sm:text-sm text-[#DCEEFF]">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="hover:text-white transition-colors block py-0.5 truncate"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Box 3: Key Practice Areas Box */}
          <div className="lg:col-span-3 p-5 sm:p-6 rounded-2xl bg-white/[0.04] md:bg-transparent border border-white/10 md:border-transparent space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#539FE0] pb-1 border-b border-white/10 md:border-none">
              Key Practice Areas
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#DCEEFF]">
              {coreServices.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link
                    to="/services"
                    className="hover:text-white transition-colors block py-0.5 truncate"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/international-services"
                  className="text-[#539FE0] hover:text-white font-bold transition-colors py-0.5 truncate flex items-center gap-1"
                >
                  <span>Our International Services</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Box 4: Contact & WhatsApp Advisory Box */}
          <div className="lg:col-span-3 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] md:bg-transparent border border-white/15 md:border-transparent space-y-3 shadow-sm">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#539FE0] pb-1 border-b border-white/10 md:border-none">
              Get in Touch
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-[#DCEEFF]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#539FE0] shrink-0 mt-0.5" />
                <span>{companyInfo.contact.location}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#539FE0] shrink-0" />
                <a
                  href={companyInfo.contact.phoneUrl}
                  className="hover:text-white transition-colors"
                >
                  {companyInfo.contact.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#539FE0] shrink-0" />
                <a
                  href={companyInfo.contact.emailUrl}
                  className="hover:text-white transition-colors truncate"
                >
                  {companyInfo.contact.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={companyInfo.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors shadow-sm"
              >
                <span>WhatsApp Advisory Desk</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top (Structured Box on mobile) */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] sm:text-xs text-[#DCEEFF]/70 gap-4 p-4 sm:p-0 rounded-2xl bg-white/[0.03] sm:bg-transparent border border-white/10 sm:border-none text-center sm:text-left">
          <p>© {currentYear} Auctus Core. All rights reserved.</p>

          <div className="flex items-center justify-center gap-4 sm:gap-6 flex-wrap">
            <span>Accounting • Auditing • Taxation • Virtual CFO</span>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center justify-center"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
