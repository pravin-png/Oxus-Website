/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Share2, Globe, Check, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import oxusLogo from "../assets/images/oxus_logo.jpg";

interface FooterProps {
  onPrivacyClick: () => void;
}

export default function Footer({ onPrivacyClick }: FooterProps) {
  const [copied, setCopied] = useState(false);
  const [showRegions, setShowRegions] = useState(false);

  const handleShare = async () => {
    const shareUrl = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Oxus International",
          text: "Enterprise System Integration and Staffing Solutions",
          url: shareUrl,
        });
      } catch (err) {
        // Fallback to clipboard
        copyToClipboard(shareUrl);
      }
    } else {
      copyToClipboard(shareUrl);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const regions = ["Singapore (HQ)", "United States", "United Kingdom", "Australia"];

  return (
    <footer className="bg-brand-bg py-16 border-t border-brand-border/10 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top bar with Logo & Quick Utility Buttons */}
        <div className="flex flex-col sm:flex-row justify-between items-center pb-12 border-b border-brand-border/10 mb-12 gap-6">
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="group hover:opacity-90 transition-opacity duration-300 py-1">
            <img
              src={oxusLogo}
              alt="OXUS Logo"
              className="h-12 md:h-14 w-auto mix-blend-multiply"
              referrerPolicy="no-referrer"
            />
          </button>

          <div className="flex items-center gap-3 relative">
            {/* Share Trigger */}
            <button
              onClick={handleShare}
              className="p-3 bg-white hover:bg-brand-border-muted text-brand-navy border border-brand-border/10 rounded-full transition-colors relative cursor-pointer group"
              aria-label="Share Site"
            >
              {copied ? <Check size={18} className="text-emerald-600" /> : <Share2 size={18} />}
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-brand-navy text-white text-xs font-sans py-1 px-2.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none shadow">
                {copied ? "Copied Link!" : "Share Link"}
              </span>
            </button>

            {/* Region Selector */}
            <div className="relative">
              <button
                onClick={() => setShowRegions(!showRegions)}
                className="p-3 bg-white hover:bg-brand-border-muted text-brand-navy border border-brand-border/10 rounded-full transition-colors cursor-pointer group"
                aria-label="Select Region"
              >
                <Globe size={18} />
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-brand-navy text-white text-xs font-sans py-1 px-2.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none shadow">
                  Regions
                </span>
              </button>

              <AnimatePresence>
                {showRegions && (
                  <>
                    {/* Overlay click catcher */}
                    <div className="fixed inset-0 z-10" onClick={() => setShowRegions(false)} />
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 bottom-14 bg-white border border-brand-border/10 rounded-lg py-2 w-44 shadow-xl z-20"
                    >
                      {regions.map((region) => (
                        <button
                          key={region}
                          onClick={() => setShowRegions(false)}
                          className={`w-full text-left font-sans text-xs px-4 py-2 hover:bg-brand-border-muted transition-colors text-brand-navy ${
                            region.includes("HQ") ? "font-bold border-b border-brand-border/5" : ""
                          }`}
                        >
                          {region}
                        </button>
                      ))}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Main Footer Links & Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 text-left">
          
          {/* Corporate HQ Column */}
          <div className="md:col-span-5 flex flex-col items-start">
            <h5 className="font-mono text-xxs font-bold text-brand-red uppercase tracking-widest mb-6">
              Corporate HQ
            </h5>
            <p className="font-sans text-brand-text-muted text-sm leading-relaxed mb-4 max-w-sm">
              60 Paya Lebar Road,<br />
              #06-28 Paya Lebar Square,<br />
              Singapore 409051
            </p>
            <div className="font-sans text-xs text-brand-text-muted space-y-2 mt-2">
              <p>
                <strong className="text-brand-navy">Phone:</strong> (+65) 6589 8667
              </p>
              <p>
                <strong className="text-brand-navy">Email:</strong>{" "}
                <a href="mailto:enquiry@oxusint.com" className="hover:text-brand-red transition-colors">
                  enquiry@oxusint.com
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 flex flex-col items-start">
            <h5 className="font-mono text-xxs font-bold text-brand-red uppercase tracking-widest mb-6">
              Quick Links
            </h5>
            <div className="flex flex-col gap-3 font-sans text-sm text-brand-text-muted">
              <button onClick={() => scrollToSection("#about")} className="text-left hover:text-brand-navy transition-colors cursor-pointer">
                About Oxus
              </button>
              <button onClick={() => scrollToSection("#integration")} className="text-left hover:text-brand-navy transition-colors cursor-pointer">
                Solutions
              </button>
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  onPrivacyClick();
                }} 
                className="text-left hover:text-brand-navy transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
            </div>
          </div>

          {/* Right Column - Brand Statement & Copyright */}
          <div className="md:col-span-4 flex flex-col md:items-end md:text-right justify-between gap-6">
            <p className="font-sans text-sm text-brand-text-muted leading-relaxed max-w-sm">
              Oxus bridges the gap between global enterprise standards and world-class technical talent.
            </p>
            <div className="font-sans text-xs text-brand-text-muted/65 leading-relaxed">
              <p>© 2026 Oxus International Pte. Ltd. All rights reserved.</p>
              
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}
