import React, { useState } from "react";
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Audit & Assurance",
    message: "",
  });

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
    <section id="contact" className="py-20 lg:py-28 bg-[#F7FAFD] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DCEEFF] text-[#062B60] text-xs font-bold uppercase tracking-wider mb-4">
            Direct Communication
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#062B60] tracking-tight font-heading">
            Let’s Build Your Financial Future Together.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5E718D]">
            Connect with Auctus Core and discover how our professional financial solutions can support your business.
          </p>
        </div>

        {/* 3 Main Direct One-Click Communication Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          
          {/* Direct Phone Call Card */}
          <a
            href={companyInfo.contact.phoneUrl}
            className="group p-5 sm:p-8 rounded-2xl bg-white border border-[#E3ECF5] hover:border-[#1464AD] shadow-card-subtle hover-lift hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#F0F7FF] group-hover:bg-[#062B60] text-[#1464AD] group-hover:text-white flex items-center justify-center transition-colors duration-300 mb-6 shadow-sm">
                <Phone className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#1464AD] block mb-1">
                Direct Telephone
              </span>
              <h3 className="text-xl font-bold text-[#062B60] group-hover:text-[#1464AD] transition-colors mb-2 font-heading">
                {companyInfo.contact.phoneDisplay}
              </h3>
              <p className="text-xs text-[#5E718D] leading-relaxed">
                Connect directly with our partners for urgent audit, tax, or business queries.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E3ECF5] flex items-center justify-between text-xs font-bold text-[#062B60] group-hover:text-[#1464AD]">
              <span>Call Auctus Core Now</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </a>

          {/* Direct Email Card */}
          <a
            href={companyInfo.contact.emailUrl}
            className="group p-5 sm:p-8 rounded-2xl bg-white border border-[#E3ECF5] hover:border-[#1464AD] shadow-card-subtle hover-lift hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#F0F7FF] group-hover:bg-[#062B60] text-[#1464AD] group-hover:text-white flex items-center justify-center transition-colors duration-300 mb-6 shadow-sm">
                <Mail className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#1464AD] block mb-1">
                Email Correspondence
              </span>
              <h3 className="text-xl font-bold text-[#062B60] group-hover:text-[#1464AD] transition-colors mb-2 font-heading break-all">
                {companyInfo.contact.email}
              </h3>
              <p className="text-xs text-[#5E718D] leading-relaxed">
                Send RFP documents, project proposals, or detailed inquiries for swift partner response.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E3ECF5] flex items-center justify-between text-xs font-bold text-[#062B60] group-hover:text-[#1464AD]">
              <span>Send Email Now</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </a>

          {/* Direct WhatsApp Card */}
          <a
            href={companyInfo.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-5 sm:p-8 rounded-2xl bg-white border border-[#E3ECF5] hover:border-emerald-600 shadow-card-subtle hover-lift hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 group-hover:bg-emerald-600 text-emerald-600 group-hover:text-white flex items-center justify-center transition-colors duration-300 mb-6 shadow-sm">
                <MessageCircle className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 block mb-1">
                Instant WhatsApp
              </span>
              <h3 className="text-xl font-bold text-[#062B60] group-hover:text-emerald-700 transition-colors mb-2 font-heading">
                Chat on WhatsApp
              </h3>
              <p className="text-xs text-[#5E718D] leading-relaxed">
                Quick consultation scheduling and responsive communication with our advisory desk.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E3ECF5] flex items-center justify-between text-xs font-bold text-emerald-700">
              <span>Start WhatsApp Chat</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </a>

        </div>

        {/* Form and Office Location Split Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Interactive Consultation Builder (Client-side directly into WhatsApp/Email) */}
          <div className="lg:col-span-7 bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 border border-[#E3ECF5] shadow-card-subtle">
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1464AD]">
                Schedule an Advisory Session
              </span>
              <h3 className="text-2xl font-bold text-[#062B60] mt-1 font-heading">
                Send Us an Inquiry
              </h3>
              <p className="text-xs text-[#5E718D] mt-1">
                Select your service requirements and launch an instant WhatsApp or email draft.
              </p>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#062B60] mb-1.5">
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
                    className="w-full px-4 py-3 rounded-xl bg-[#F7FAFD] border border-[#E3ECF5] focus:outline-none focus:border-[#1464AD] text-sm text-[#17253A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#062B60] mb-1.5">
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
                    className="w-full px-4 py-3 rounded-xl bg-[#F7FAFD] border border-[#E3ECF5] focus:outline-none focus:border-[#1464AD] text-sm text-[#17253A]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#062B60] mb-1.5">
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
                    className="w-full px-4 py-3 rounded-xl bg-[#F7FAFD] border border-[#E3ECF5] focus:outline-none focus:border-[#1464AD] text-sm text-[#17253A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#062B60] mb-1.5">
                    Service Required
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#F7FAFD] border border-[#E3ECF5] focus:outline-none focus:border-[#1464AD] text-sm text-[#17253A]"
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
                <label className="block text-xs font-bold uppercase tracking-wider text-[#062B60] mb-1.5">
                  Brief Project / Requirement Notes
                </label>
                <textarea
                  name="message"
                  rows="3"
                  maxLength={1000}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your business entity, current accounting software, or specific audit & tax deadlines..."
                  className="w-full px-4 py-3 rounded-xl bg-[#F7FAFD] border border-[#E3ECF5] focus:outline-none focus:border-[#1464AD] text-sm text-[#17253A] resize-none"
                ></textarea>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={handleWhatsAppSubmit}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={handleEmailSubmit}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#062B60] hover:bg-[#1464AD] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send via Email</span>
                </button>
              </div>
            </form>
          </div>

          {/* Location & Practice Details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Location Card */}
            <div className="p-8 rounded-3xl bg-white border border-[#E3ECF5] shadow-card-subtle">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#062B60] text-white flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-[#DCEEFF]" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1464AD]">
                    Head Office Location
                  </span>
                  <h4 className="text-xl font-bold text-[#062B60] font-heading">
                    {companyInfo.contact.location}
                  </h4>
                </div>
              </div>

              <div className="space-y-3 text-sm text-[#5E718D] border-t border-[#E3ECF5] pt-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#1464AD]" />
                  <span>Working Hours: Mon – Sat, 9:00 AM – 6:00 PM IST</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#1464AD]" />
                  <span>Strict Client Data Non-Disclosure Protocols</span>
                </div>
              </div>
            </div>

            {/* Quick Assurance Box */}
            <div className="p-8 rounded-3xl bg-[#062B60] text-white shadow-xl">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#539FE0] mb-2">
                <CheckCircle className="w-4 h-4" />
                Prompt Turnaround
              </div>
              <h4 className="text-lg font-bold font-heading mb-2">
                Direct Senior Partner Access
              </h4>
              <p className="text-xs text-[#DCEEFF] leading-relaxed">
                At Auctus Core, client engagements are led directly by certified chartered accountants and senior consultants with Big Four credentials, guaranteeing immediate clarity and technical excellence.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

