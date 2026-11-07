import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Phone, MessageCircle, ChevronRight } from "lucide-react";
import { navLinks, companyInfo } from "../data/companyData";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      // Toggle compact navbar styling
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // ScrollSpy: identify currently visible section
      const sections = ["hero", "about", "services", "leadership", "global-services", "contact"];
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const navOffset = 76;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E3ECF5]/80 py-2.5 sm:py-3"
          : "bg-white/90 backdrop-blur-sm border-b border-[#E3ECF5]/40 py-3 sm:py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo Lockup */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#1464AD] rounded-lg"
          >
            {/* Geometric Architectural Monogram */}
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#062B60] flex items-center justify-center text-white shadow-sm transition-transform duration-300 group-hover:scale-105 shrink-0">
              <svg
                viewBox="0 0 40 40"
                className="w-5 h-5 sm:w-6 sm:h-6 fill-none"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 28L20 10L28 28" stroke="#FFFFFF" />
                <path d="M15 22H25" stroke="#FFFFFF" />
                <circle cx="20" cy="18" r="2.5" fill="#1464AD" stroke="none" />
              </svg>
            </div>

            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-extrabold tracking-tight text-[#062B60] leading-tight font-heading">
                AUCTUS<span className="text-[#1464AD] ml-1">CORE</span>
              </span>
              <span className="hidden sm:block text-[9px] uppercase tracking-widest text-[#5E718D] font-semibold">
                Financial Advisory & Audit
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links (Clean, Uncluttered, Single-line) */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-2 text-[14px] font-semibold whitespace-nowrap rounded-lg transition-all duration-200 ${
                    isActive
                      ? "text-[#1464AD] bg-[#F0F7FF] font-bold"
                      : "text-[#17253A] hover:text-[#1464AD] hover:bg-[#F7FAFD]"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop Single Premium CTA Button */}
          <div className="hidden lg:flex items-center">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#062B60] hover:bg-[#1464AD] text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-[#1464AD] whitespace-nowrap"
            >
              <span>Get Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile & Tablet Header Controls (< 1024px) */}
          <div className="flex lg:hidden items-center gap-2">
            {/* Quick Call Icon Pill for Mobile */}
            <a
              href={companyInfo.contact.phoneUrl}
              className="w-9 h-9 rounded-lg bg-[#F0F7FF] border border-[#BFE0FC] text-[#062B60] flex items-center justify-center hover:bg-[#DCEEFF] transition-colors"
              aria-label="Call Auctus Core"
            >
              <Phone className="w-4 h-4 text-[#1464AD]" />
            </a>

            {/* Hamburger / Close Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-lg bg-[#F7FAFD] border border-[#E3ECF5] text-[#062B60] flex items-center justify-center hover:bg-[#F0F7FF] focus:outline-none focus:ring-2 focus:ring-[#1464AD] transition-colors"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-[#062B60]" />
              ) : (
                <Menu className="w-5 h-5 text-[#062B60]" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer (Responsive Overlay) */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 top-[60px] sm:top-[68px] z-50 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="bg-white border-b border-[#E3ECF5] shadow-2xl max-h-[calc(100vh-68px)] overflow-y-auto px-6 py-6 animate-in slide-in-from-top-4 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            
            {/* Links List */}
            <div className="space-y-1 pb-6 border-b border-[#E3ECF5]">
              {navLinks.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`flex items-center justify-between px-4 py-3 text-base rounded-xl transition-colors ${
                      isActive
                        ? "bg-[#F0F7FF] text-[#1464AD] font-bold"
                        : "text-[#17253A] font-semibold hover:bg-[#F7FAFD] hover:text-[#1464AD]"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className={`w-4 h-4 ${isActive ? "text-[#1464AD]" : "text-[#5E718D]/40"}`} />
                  </a>
                );
              })}
            </div>

            {/* Direct Quick Actions in Mobile Drawer */}
            <div className="pt-6 space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={companyInfo.contact.phoneUrl}
                  className="flex items-center justify-center gap-2 py-3 px-3 rounded-lg bg-[#F0F7FF] border border-[#BFE0FC] text-[#062B60] text-xs font-bold transition-colors hover:bg-[#DCEEFF]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#1464AD]" />
                  <span>Call Partner</span>
                </a>

                <a
                  href={companyInfo.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold transition-colors hover:bg-emerald-100"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp</span>
                </a>
              </div>

              {/* Mobile Primary CTA */}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-lg bg-[#062B60] hover:bg-[#1464AD] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
              >
                <span>Get Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <p className="text-center text-[11px] text-[#5E718D] pt-2">
                Auctus Core • Chartered Accountants & Advisory
              </p>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}
