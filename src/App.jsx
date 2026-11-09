import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import { MessageCircle, Phone, ArrowUpRight } from "lucide-react";
import { companyInfo } from "./data/companyData";

export default function App() {
  const [showFloatingActions, setShowFloatingActions] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setShowFloatingActions(true);
      } else {
        setShowFloatingActions(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#17253A] flex flex-col selection:bg-[#DCEEFF] selection:text-[#062B60] w-full overflow-x-clip">
      {/* Route change scroll reset */}
      <ScrollToTop />

      {/* Sticky Header Navbar */}
      <Navbar />

      {/* Dynamic Multi-Page Router View */}
      <main className="flex-grow pb-16 md:pb-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* MOBILE CONTROLLER BAR (Docked Bottom Action Dock - for Mobile screens < 768px) */}
      <nav
        aria-label="Mobile quick actions"
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-[#E3ECF5] shadow-[0_-4px_16px_rgba(6,43,96,0.08)] px-4 py-2.5 flex items-center justify-between gap-2.5"
      >
        {/* Call Action */}
        <a
          href={companyInfo.contact.phoneUrl}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg bg-[#F0F7FF] border border-[#BFE0FC] text-[#062B60] text-xs font-bold active:bg-[#DCEEFF] transition-colors"
          aria-label="Direct Phone Call"
        >
          <Phone className="w-3.5 h-3.5 text-[#1464AD]" />
          <span>Call Partner</span>
        </a>

        {/* WhatsApp Action */}
        <a
          href={companyInfo.contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold active:bg-emerald-100 transition-colors"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
          <span>WhatsApp</span>
        </a>

        {/* Consultation Action */}
        <Link
          to="/contact"
          className="flex-1 flex items-center justify-center gap-1 py-2.5 px-2 rounded-lg bg-[#062B60] text-white text-xs font-bold uppercase tracking-wider active:bg-[#1464AD] transition-colors shadow-sm"
          aria-label="Book Consultation"
        >
          <span>Consult</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </nav>

      {/* DESKTOP FLOATING ACTION BUTTONS (For Tablet/Desktop screens >= 768px when scrolled) */}
      {showFloatingActions && (
        <aside
          aria-label="Quick contact shortcuts"
          className="hidden md:flex fixed bottom-6 right-6 z-40 flex-col gap-2.5 transition-all duration-300"
        >
          {/* Quick WhatsApp */}
          <a
            href={companyInfo.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="w-12 h-12 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg flex items-center justify-center transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            title="Chat with Auctus Core on WhatsApp"
          >
            <MessageCircle className="w-6 h-6" />
          </a>

          {/* Quick Phone */}
          <a
            href={companyInfo.contact.phoneUrl}
            aria-label="Call Auctus Core"
            className="w-12 h-12 rounded-xl bg-[#062B60] hover:bg-[#1464AD] text-white shadow-lg flex items-center justify-center transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#1464AD]"
            title="Call Auctus Core"
          >
            <Phone className="w-5 h-5" />
          </a>
        </aside>
      )}
    </div>
  );
}
