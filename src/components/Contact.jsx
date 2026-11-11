import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ArrowRight,
  CheckCircle,
  Clock,
  ShieldCheck,
} from "lucide-react";
import { companyInfo, coreServices } from "../data/companyData";

export default function Contact() {
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get("service");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: preselectedService || "Accounting & Bookkeeping",
    message: "",
  });

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const text = `*New Consultation Inquiry - Auctus Core*%0A%0A*Name:* ${encodeURIComponent(
      formData.name || "Client"
    )}%0A*Email:* ${encodeURIComponent(
      formData.email || "N/A"
    )}%0A*Phone:* ${encodeURIComponent(
      formData.phone || "N/A"
    )}%0A*Service:* ${encodeURIComponent(
      formData.service
    )}%0A*Message:* ${encodeURIComponent(formData.message || "I would like to consult with Auctus Core.")}`;

    window.open(`https://wa.me/919037010874?text=${text}`, "_blank", "noopener,noreferrer");
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Consultation Request: ${formData.service} - ${formData.name || "Client"}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService Interested In: ${formData.service}\n\nProject / Inquiry Details:\n${formData.message}`
    );
    window.location.href = `mailto:auctuscore@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-12 sm:py-14 lg:py-16 bg-[#F7FAFD] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DCEEFF] text-[#062B60] text-[11px] font-bold uppercase tracking-wider mb-2.5 border border-[#BFE0FC]">
            Direct Communication
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#062B60] tracking-tight font-heading">
            Get in Touch with Our Advisory Team
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-[#5E718D]">
            Reach out directly to discuss your accounting, taxation, statutory compliance, or business advisory needs.
          </p>
        </div>

        {/* Unified 2-Column Compact Executive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: Direct Partner Access & Office Info */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#062B60] text-white shadow-xl relative overflow-hidden">
            {/* Subtle architectural background texture */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-luminosity pointer-events-none"
              style={{ backgroundImage: "url('/images/home-section-bg.webp')" }}
            />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 text-[#DCEEFF] text-[10px] font-bold uppercase tracking-wider mb-3 border border-white/15">
                <ShieldCheck className="w-3 h-3 text-[#539FE0]" />
                Direct Senior Partner Access
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-heading mb-1.5 text-white">
                Connect Directly
              </h3>
              <p className="text-xs text-[#DCEEFF]/80 leading-relaxed mb-5">
                Consult directly with certified chartered accountants and senior advisors with Big Four pedigree.
              </p>

              {/* Direct Quick Action Channels */}
              <div className="space-y-2.5">
                {/* Phone */}
                <a
                  href={companyInfo.contact.phoneUrl}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.07] hover:bg-white/[0.14] border border-white/10 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#1464AD] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] uppercase font-bold text-[#539FE0] block">Phone Consultation</span>
                    <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-[#DCEEFF] truncate block">
                      {companyInfo.contact.phoneDisplay}
                    </span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-[#539FE0] opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all shrink-0" />
                </a>

                {/* WhatsApp */}
                <a
                  href={companyInfo.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.07] hover:bg-emerald-600/30 border border-white/10 hover:border-emerald-500/40 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] uppercase font-bold text-emerald-400 block">Instant WhatsApp</span>
                    <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-emerald-200 truncate block">
                      Chat with Senior Advisory Desk
                    </span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-400 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all shrink-0" />
                </a>

                {/* Email */}
                <a
                  href={companyInfo.contact.emailUrl}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.07] hover:bg-white/[0.14] border border-white/10 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#1464AD] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] uppercase font-bold text-[#539FE0] block">Official Email</span>
                    <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-[#DCEEFF] truncate block">
                      {companyInfo.contact.email}
                    </span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-[#539FE0] opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all shrink-0" />
                </a>
              </div>
            </div>

            {/* Bottom Location & Hours Meta */}
            <div className="relative z-10 pt-4 mt-5 border-t border-white/10 space-y-1.5 text-[11px] text-[#DCEEFF]/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#539FE0] shrink-0 mt-0.5" />
                <span>{companyInfo.contact.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#539FE0] shrink-0" />
                <span>Mon – Sat, 9:00 AM – 6:00 PM IST</span>
              </div>
            </div>
          </div>

          {/* Right Column: Compact Consultation Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-5 sm:p-7 border border-[#E3ECF5] shadow-card-subtle flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#E3ECF5]">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#062B60] font-heading">
                    Send Us an Inquiry
                  </h3>
                  <p className="text-xs text-[#5E718D] mt-0.5">
                    Select requirements for instant WhatsApp or Email dispatch.
                  </p>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                  <CheckCircle className="w-3 h-3 text-emerald-600" />
                  Fast Turnaround
                </span>
              </div>

              <form className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#062B60] mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      maxLength={100}
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#F7FAFD] border border-[#E3ECF5] focus:outline-none focus:border-[#1464AD] text-xs text-[#17253A]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#062B60] mb-1">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      maxLength={25}
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 / +971 ..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#F7FAFD] border border-[#E3ECF5] focus:outline-none focus:border-[#1464AD] text-xs text-[#17253A]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#062B60] mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      maxLength={100}
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="corporate@domain.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#F7FAFD] border border-[#E3ECF5] focus:outline-none focus:border-[#1464AD] text-xs text-[#17253A]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#062B60] mb-1">
                      Service Required
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#F7FAFD] border border-[#E3ECF5] focus:outline-none focus:border-[#1464AD] text-xs text-[#17253A]"
                    >
                      {coreServices.map((srv) => (
                        <option key={srv.id} value={srv.title}>
                          {srv.title}
                        </option>
                      ))}
                      <option value="Overseas Accounting Services">
                        Overseas Accounting Services (GCC / Global)
                      </option>
                      <option value="General Financial Advisory">
                        General Financial Advisory
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#062B60] mb-1">
                    Requirement Notes
                  </label>
                  <textarea
                    name="message"
                    rows="2"
                    maxLength={1000}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Briefly describe your business entity or specific audit & tax requirement..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#F7FAFD] border border-[#E3ECF5] focus:outline-none focus:border-[#1464AD] text-xs text-[#17253A] resize-none"
                  ></textarea>
                </div>

                {/* Action Buttons */}
                <div className="pt-1.5 flex flex-col sm:flex-row gap-2.5">
                  <button
                    type="button"
                    onClick={handleWhatsAppSubmit}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send via WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleEmailSubmit}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#062B60] hover:bg-[#1464AD] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send via Email</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

