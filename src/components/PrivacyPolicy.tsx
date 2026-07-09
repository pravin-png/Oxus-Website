/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react";
import { motion } from "motion/react";
import { ArrowLeft, Shield, Lock, Eye, CheckCircle2 } from "lucide-react";

interface PrivacyPolicyProps {
  onBackToHome: () => void;
}

export default function PrivacyPolicy({ onBackToHome }: PrivacyPolicyProps) {
  // Ensure we scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      id: "introduction",
      title: "1. Introduction & Global Scope",
      icon: Shield,
      content: "OXUS International (\"we\", \"us\", or \"our\"), operating as a premier global systems integration, enterprise consulting, and offshore technical staffing provider, respects your privacy and is committed to protecting your personal data. This Privacy Policy describes how we collect, process, share, and safeguard your personal information when you visit our website, interact with our inquiry terminal, or engage our solutions, in compliance with global standards including the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA)."
    },
    {
      id: "information-collection",
      title: "2. Information We Collect",
      icon: Eye,
      content: "We collect information that identifies or relates to you to provide highly tailored enterprise solutions. This includes:\n\n• Contact and Identity Information: Your name, corporate title, company name, business email address, phone number, and any details you provide when using our contact forms or inquiry terminal.\n• Professional Qualifications and Staffing Data: Resumes, CVs, educational history, employment credentials, and skill matrices submitted when applying for remote technical staffing pipelines.\n• Device and Network Analytics: IP addresses, geographic location (country-level), browser types, cookie identifiers, operating system data, and interaction parameters during your navigation on our site."
    },
    {
      id: "information-usage",
      title: "3. How We Use Your Information",
      icon: CheckCircle2,
      content: "We process your information under lawful bases for the following business and operational objectives:\n\n• Delivery of Solutions: To design, deploy, and support customized systems integrations and offshore software engineering teams.\n• Business Relations: To respond to inquiry submissions, validate project specifications, provide price quotes, and manage ongoing client accounts.\n• Candidate Sourcing: To evaluate remote engineering and staff capabilities, verify professional histories, and coordinate placement pipelines with our corporate partners.\n• Infrastructure Security: To monitor and defend our network, prevent unauthorized activity, and verify the integrity of our services."
    },
    {
      id: "data-protection",
      title: "4. Data Security and Custody",
      icon: Lock,
      content: "OXUS International implements comprehensive, enterprise-grade technical and organizational safeguards to ensure a level of security appropriate to the risks of processing. These measures include TLS encryption for all data in transit, firewalls, role-based access restrictions, and secure database hosting. We limit access to your personal data strictly to authorized personnel, contractors, and partners who require knowledge of that information to fulfill their contractual duties."
    },
    {
      id: "data-sharing",
      title: "5. Information Sharing and Disclosures",
      icon: Shield,
      content: "We do not sell, rent, or lease your personal information to third parties. We may disclose your information to:\n\n• Contractual Service Providers: Trusted cloud hosting, email delivery, and CRM platform providers operating under strict data processing agreements.\n• Client Partners: For offshore staffing candidates, your professional profiles and skills are shared with prospective enterprise clients during active evaluation loops.\n• Legal Obligations: Regulatory authorities, law enforcement, or courts when we believe in good faith that disclosure is necessary under applicable laws, subpoenas, or to protect the safety and rights of OXUS."
    }
  ];

  return (
    <div className="min-h-screen bg-brand-bg pt-12 pb-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Back navigation line */}
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-sm font-mono font-bold text-brand-navy hover:text-brand-red transition-colors group cursor-pointer"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            RETURN TO ENTERPRISE HOME
          </button>
        </motion.div>

        {/* Header Block */}
        <div className="border-b border-brand-border pb-10 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <span className="font-mono text-xxs font-bold text-brand-red uppercase tracking-widest bg-brand-red/5 px-2.5 py-1 rounded-brand-sm">
              LEGAL COMPLIANCE
            </span>
            <h1 className="font-sans text-4xl md:text-5xl font-medium tracking-tight text-brand-navy mt-4 mb-6">
              Privacy Policy
            </h1>
            <p className="font-sans text-brand-text-muted text-base leading-relaxed max-w-2xl">
              OXUS International is committed to handling your corporate, candidate, and analytical data with the highest level of structural security and confidentiality. Read below to understand our global guidelines.
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-6 font-mono text-xxs text-brand-text-muted/75">
              <span>EFFECTIVE DATE: JULY 8, 2026</span>
              <span className="hidden sm:inline">•</span>
              <span>VERSION: 2.1.0</span>
              <span className="hidden sm:inline">•</span>
              <span>GLOBAL HEADQUARTERS: SINGAPORE</span>
            </div>
          </motion.div>
        </div>

        {/* Policy Contents Grid */}
        <div className="space-y-12 text-left">
          {sections.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <motion.section
                key={section.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                className="bg-white p-8 rounded-brand-lg border border-brand-border/40 shadow-sm hover:shadow-md transition-all duration-300 relative group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-navy/5 text-brand-navy rounded-brand-md group-hover:bg-brand-red/5 group-hover:text-brand-red transition-colors duration-300">
                    <IconComponent size={20} />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-sans text-xl font-semibold text-brand-navy mb-4">
                      {section.title}
                    </h2>
                    <div className="font-sans text-brand-text-muted text-sm leading-relaxed whitespace-pre-line">
                      {section.content}
                    </div>
                  </div>
                </div>
              </motion.section>
            );
          })}

          {/* Section 6: User Rights & contact details */}
          <motion.section
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-brand-navy text-white p-8 rounded-brand-lg relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
            <h2 className="font-sans text-xl font-semibold mb-4 relative z-10">
              6. Your Rights & Global Contact Info
            </h2>
            <p className="font-sans text-white/80 text-sm leading-relaxed mb-6 relative z-10">
              Depending on your location, you possess distinct legal rights regarding your personal information, including the right to request access, correction, erasure, or restricted processing. To exercise these privileges, or for inquiries regarding our data handling procedures, reach out directly to our dedicated legal desk:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10 font-mono text-xs text-white/90">
              <div className="p-4 bg-white/5 rounded border border-white/10">
                <span className="text-brand-red-bright font-bold block mb-1">EMAIL ENQUIRIES</span>
                <a href="mailto:enquiry@oxusint.com" className="hover:underline text-white font-sans text-sm">
                  enquiry@oxusint.com
                </a>
              </div>
              <div className="p-4 bg-white/5 rounded border border-white/10">
                <span className="text-brand-red-bright font-bold block mb-1">GLOBAL HEADQUARTERS</span>
                <p className="font-sans text-sm">
                  Oxus International Legal Team<br />
                  60 Paya Lebar Road,<br />
                  #06-28 Paya Lebar Square,<br />
                  Singapore 409051
                </p>
              </div>
            </div>
          </motion.section>

        </div>

      </div>
    </div>
  );
}
