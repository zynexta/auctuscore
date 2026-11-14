import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ArrowUpRight,
  Phone,
  MessageCircle,
  ChevronRight,
  ChevronDown,
  BookOpenCheck,
  ReceiptText,
  Building2,
  Globe2,
} from "lucide-react";
import { navLinks, companyInfo, serviceCategories } from "../data/companyData";

const categoryIconMap = {
  "accounting-finance": BookOpenCheck,
  "taxation-compliance": ReceiptText,
  "business-registration": Building2,
  international: Globe2,
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
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

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  // Handle outside clicks for desktop dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
          <Link
            to="/"
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus:ring-2 focus:ring-[#1464AD] rounded-lg"
          >
            {/* Official Auctus Core Emblem */}
            <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105">
              <img
                src="/images/logo.webp"
                alt="Auctus Core Emblem"
                className="w-full h-full object-contain filter drop-shadow-xs"
                width="40"
                height="40"
              />
            </div>

            <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#062B60] leading-none font-heading">
              AUCTUS
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;

              // Services with Accessible Mega Dropdown Menu
              if (link.name === "Services") {
                return (
                  <div
                    key={link.name}
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <div className="flex items-center">
                      <Link
                        to={link.path}
                        className={`px-3 py-2 text-[14px] font-semibold rounded-l-lg transition-all duration-200 flex items-center gap-1.5 ${
                          isActive
                            ? "text-[#1464AD] bg-[#F0F7FF] font-bold"
                            : "text-[#17253A] hover:text-[#1464AD] hover:bg-[#F7FAFD]"
                        }`}
                      >
                        <span>{link.name}</span>
                      </Link>
                      <button
                        type="button"
                        onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                        aria-expanded={servicesDropdownOpen}
                        aria-haspopup="true"
                        aria-label="Toggle Services Menu"
                        className={`p-2 rounded-r-lg transition-colors ${
                          isActive
                            ? "text-[#1464AD] bg-[#F0F7FF]"
                            : "text-[#5E718D] hover:text-[#1464AD] hover:bg-[#F7FAFD]"
                        }`}
                      >
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            servicesDropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>

                    {/* Accessible Desktop Dropdown Panel */}
                    {servicesDropdownOpen && (
                      <div
                        role="menu"
                        className="absolute left-0 mt-1 w-80 rounded-2xl bg-white border border-[#E3ECF5] shadow-xl p-3 animate-in fade-in slide-in-from-top-2 duration-150 z-50"
                      >
                        <div className="px-3 py-2 border-b border-[#E3ECF5] mb-2 flex items-center justify-between">
                          <span className="text-xs font-bold uppercase tracking-wider text-[#062B60]">
                            Practice Categories
                          </span>
                          <Link
                            to="/services"
                            className="text-[11px] font-bold text-[#1464AD] hover:underline"
                            onClick={() => setServicesDropdownOpen(false)}
                          >
                            All Services →
                          </Link>
                        </div>

                        <div className="space-y-1">
                          {serviceCategories.map((cat) => {
                            const IconComponent = categoryIconMap[cat.id] || BookOpenCheck;
                            const targetPath =
                              cat.id === "international"
                                ? "/international-services"
                                : `/services?cat=${cat.id}`;
                            return (
                              <Link
                                key={cat.id}
                                to={targetPath}
                                role="menuitem"
                                onClick={() => setServicesDropdownOpen(false)}
                                className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#F0F7FF] group transition-colors"
                              >
                                <div className="w-8 h-8 rounded-lg bg-[#EBF4FE] text-[#1464AD] group-hover:bg-[#1464AD] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                                  <IconComponent className="w-4 h-4" />
                                </div>
                                <div className="min-w-0">
                                  <div className="text-xs font-bold text-[#062B60] group-hover:text-[#1464AD] transition-colors truncate">
                                    {cat.name}
                                  </div>
                                  <div className="text-[10px] text-[#5E718D] truncate">
                                    {cat.count} Disciplines
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3.5 py-2 text-[14px] font-semibold whitespace-nowrap rounded-lg transition-all duration-200 ${
                    isActive
                      ? "text-[#1464AD] bg-[#F0F7FF] font-bold"
                      : "text-[#17253A] hover:text-[#1464AD] hover:bg-[#F7FAFD]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Single Premium CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#062B60] hover:bg-[#1464AD] text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-[#1464AD] whitespace-nowrap"
            >
              <span>Get Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile & Tablet Header Controls (< 1024px) */}
          <div className="flex lg:hidden items-center gap-2">
            {/* Quick Call Icon Pill for Mobile */}
            <a
              href={companyInfo.contact.phoneUrl}
              className="w-10 h-10 rounded-lg bg-[#F0F7FF] border border-[#BFE0FC] text-[#062B60] flex items-center justify-center hover:bg-[#DCEEFF] transition-colors"
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
            className="bg-white border-b border-[#E3ECF5] shadow-2xl max-h-[calc(100vh-68px)] overflow-y-auto px-5 py-6 animate-in slide-in-from-top-4 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            
            {/* Links List */}
            <div className="space-y-1 pb-6 border-b border-[#E3ECF5]">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;

                if (link.name === "Services") {
                  return (
                    <div key={link.name} className="space-y-1">
                      <div className="flex items-center justify-between">
                        <Link
                          to={link.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`flex-1 flex items-center justify-between px-4 py-3.5 text-base rounded-l-xl transition-colors min-h-[44px] ${
                            isActive
                              ? "bg-[#F0F7FF] text-[#1464AD] font-bold"
                              : "text-[#17253A] font-semibold hover:bg-[#F7FAFD] hover:text-[#1464AD]"
                          }`}
                        >
                          <span>{link.name}</span>
                        </Link>
                        <button
                          type="button"
                          onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                          aria-label="Toggle Services submenu"
                          className="px-4 py-3.5 text-[#5E718D] hover:text-[#1464AD] bg-[#F7FAFD] rounded-r-xl border-l border-[#E3ECF5] min-h-[44px]"
                        >
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${
                              mobileServicesOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      </div>

                      {/* Expandable Mobile Subcategories */}
                      {mobileServicesOpen && (
                        <div className="pl-4 pr-1 py-2 space-y-1 bg-[#F7FAFD] rounded-xl border border-[#E3ECF5]">
                          {serviceCategories.map((cat) => {
                            const targetPath =
                              cat.id === "international"
                                ? "/international-services"
                                : `/services?cat=${cat.id}`;
                            return (
                              <Link
                                key={cat.id}
                                to={targetPath}
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-center justify-between py-2.5 px-3 text-xs font-bold text-[#062B60] hover:text-[#1464AD] rounded-lg min-h-[40px]"
                              >
                                <span>{cat.name}</span>
                                <ChevronRight className="w-3.5 h-3.5 opacity-50" />
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3.5 text-base rounded-xl transition-colors min-h-[44px] ${
                      isActive
                        ? "bg-[#F0F7FF] text-[#1464AD] font-bold"
                        : "text-[#17253A] font-semibold hover:bg-[#F7FAFD] hover:text-[#1464AD]"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className={`w-4 h-4 ${isActive ? "text-[#1464AD]" : "text-[#5E718D]/40"}`} />
                  </Link>
                );
              })}
            </div>

            {/* Direct Quick Actions in Mobile Drawer */}
            <div className="pt-6 space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={companyInfo.contact.phoneUrl}
                  className="flex items-center justify-center gap-2 py-3 px-3 rounded-lg bg-[#F0F7FF] border border-[#BFE0FC] text-[#062B60] text-xs font-bold transition-colors hover:bg-[#DCEEFF] min-h-[44px]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#1464AD]" />
                  <span>Call Partner</span>
                </a>

                <a
                  href={companyInfo.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold transition-colors hover:bg-emerald-100 min-h-[44px]"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp</span>
                </a>
              </div>

              {/* Mobile Primary CTA */}
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-lg bg-[#062B60] hover:bg-[#1464AD] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-md min-h-[44px]"
              >
                <span>Get Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

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
