/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCircle2, ShieldAlert, Loader2 } from "lucide-react";
import { InquiryFormData } from "../types";

export default function InquiryTerminal() {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: "",
    corporateEmail: "",
    integrationIntent: "System Integration Inquiry",
    messagePayload: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.fullName.trim()) {
      setStatus("error");
      setErrorMessage("Please enter your full name.");
      return;
    }
    if (!formData.corporateEmail.trim() || !formData.corporateEmail.includes("@")) {
      setStatus("error");
      setErrorMessage("Please enter a valid corporate email address.");
      return;
    }
    if (!formData.messagePayload.trim()) {
      setStatus("error");
      setErrorMessage("Please describe your project requirements in the message payload.");
      return;
    }

    setStatus("submitting");

    // Simulate enterprise-grade secure transmission
    setTimeout(() => {
      setStatus("success");
      // Optionally store in localStorage
      const history = JSON.parse(localStorage.getItem("oxus_inquiries") || "[]");
      history.push({
        ...formData,
        id: Math.random().toString(36).substr(2, 9),
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem("oxus_inquiries", JSON.stringify(history));
    }, 2000);
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      corporateEmail: "",
      integrationIntent: "System Integration Inquiry",
      messagePayload: "",
    });
    setStatus("idle");
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-brand-navy flex items-center justify-center relative overflow-hidden">
      {/* High-tech matrix background accents */}
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-red opacity-15 blur-3xl rounded-full" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-navy-light opacity-30 blur-3xl rounded-full" />

      <div className="max-w-4xl w-full mx-auto px-6 relative z-10">
        <div className="bg-brand-bg-dark/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl">
          
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success-state"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="text-center py-12 flex flex-col items-center"
              >
                <div className="p-4 bg-[#fdeeee] text-brand-red rounded-full mb-6">
                  <CheckCircle2 size={48} strokeWidth={2} />
                </div>
                <h3 className="font-sans text-3xl font-bold text-white mb-4">
                  Inquiry Transmitted
                </h3>
                <p className="font-sans text-brand-bg/80 text-lg max-w-lg mx-auto mb-8 leading-relaxed">
                  Your secure payload has been synchronized with Oxus Corporate Headquarters. An integration coordinator will review your specifications and contact you shortly.
                </p>
                <button
                  onClick={resetForm}
                  className="px-6 py-3 bg-brand-red hover:bg-brand-red-bright text-white font-sans font-semibold text-sm rounded-brand-md transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
                >
                  Transmit New Inquiry
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="form-state"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Header */}
                <div className="text-center mb-10">
                  <h3 className="font-sans text-3xl sm:text-4xl font-bold text-white mb-3">
                    Get In Touch
                  </h3>
                  <p className="font-sans text-brand-bg/70 text-base">
                    Securely initialize your infrastructure journey with Oxus International.
                  </p>
                </div>

                {/* Error Banner */}
                {status === "error" && (
                  <div className="mb-6 p-4 bg-brand-red/15 border border-brand-red/30 rounded-brand-lg flex items-start gap-3 text-left">
                    <ShieldAlert className="text-brand-red shrink-0 mt-0.5" size={20} />
                    <span className="font-sans text-sm text-red-200 font-medium">
                      {errorMessage}
                    </span>
                  </div>
                )}

                {/* Main Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Two Column Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="flex flex-col items-start text-left">
                      <label htmlFor="fullName" className="font-mono text-xs text-brand-bg/60 font-semibold uppercase tracking-wider mb-2">
                        Full Name
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        disabled={status === "submitting"}
                        placeholder="Johnathan Doe"
                        className="w-full px-4 py-3.5 bg-brand-navy-light/40 border border-white/10 rounded-brand-md font-sans text-white text-base placeholder-white/30 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red/30 transition-all"
                      />
                    </div>

                    {/* Corporate Email */}
                    <div className="flex flex-col items-start text-left">
                      <label htmlFor="corporateEmail" className="font-mono text-xs text-brand-bg/60 font-semibold uppercase tracking-wider mb-2">
                        Corporate Email
                      </label>
                      <input
                        id="corporateEmail"
                        type="email"
                        name="corporateEmail"
                        value={formData.corporateEmail}
                        onChange={handleInputChange}
                        disabled={status === "submitting"}
                        placeholder="j.doe@enterprise.com"
                        className="w-full px-4 py-3.5 bg-brand-navy-light/40 border border-white/10 rounded-brand-md font-sans text-white text-base placeholder-white/30 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red/30 transition-all"
                      />
                    </div>
                  </div>

                  {/* Integration Intent */}
                  <div className="flex flex-col items-start text-left">
                    <label htmlFor="integrationIntent" className="font-mono text-xs text-brand-bg/60 font-semibold uppercase tracking-wider mb-2">
                      Integration Intent
                    </label>
                    <div className="relative w-full">
                      <select
                        id="integrationIntent"
                        name="integrationIntent"
                        value={formData.integrationIntent}
                        onChange={handleInputChange}
                        disabled={status === "submitting"}
                        className="w-full px-4 py-3.5 bg-brand-navy-light/40 border border-white/10 rounded-brand-md font-sans text-white text-base focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red/30 transition-all appearance-none cursor-pointer"
                      >
                        <option value="System Integration Inquiry" className="bg-brand-navy text-white">System Integration Inquiry</option>
                        <option value="Remote Staffing Solutions" className="bg-brand-navy text-white">Remote Staffing Solutions</option>
                        <option value="Infrastructure Consult" className="bg-brand-navy text-white">Infrastructure Consult</option>
                        <option value="General Partnership" className="bg-brand-navy text-white">General Partnership</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-white/50">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Message Payload */}
                  <div className="flex flex-col items-start text-left">
                    <label htmlFor="messagePayload" className="font-mono text-xs text-brand-bg/60 font-semibold uppercase tracking-wider mb-2">
                      Message Payload
                    </label>
                    <textarea
                      id="messagePayload"
                      name="messagePayload"
                      rows={5}
                      value={formData.messagePayload}
                      onChange={handleInputChange}
                      disabled={status === "submitting"}
                      placeholder="Describe your project requirements..."
                      className="w-full px-4 py-3.5 bg-brand-navy-light/40 border border-white/10 rounded-brand-md font-sans text-white text-base placeholder-white/30 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red/30 transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full py-4 bg-brand-red hover:bg-brand-red-bright disabled:bg-brand-red/60 text-white font-sans text-base font-semibold tracking-wide rounded-brand-md transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 disabled:translate-y-0 cursor-pointer flex items-center justify-center gap-2"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="animate-spin" size={20} />
                        Transmitting Secure Payload...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Submit
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
          
        </div>
      </div>
    </section>
  );
}
