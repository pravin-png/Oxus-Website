/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Menu, X, Globe, Share2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import oxusLogo from "../assets/images/oxus_logo.jpg";

interface HeaderProps {
  onContactClick: () => void;
  currentView: "main" | "privacy";
  onViewChange: (view: "main" | "privacy") => void;
}

export default function Header({ onContactClick, currentView, onViewChange }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "System Integration", href: "#integration" },
    { label: "Remote Staffing", href: "#staffing" },
    { label: "Oxus Advantage", href: "#advantage" },
  ];

  const handleScroll = (href: string) => {
    setIsOpen(false);
    if (currentView === "privacy") {
      onViewChange("main");
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <header id="header" className="sticky top-0 z-50 bg-brand-bg border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => {
            onViewChange("main");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2 group py-1 cursor-pointer"
        >
          <img
            src={oxusLogo}
            alt="OXUS Logo"
            className="w-[174px] h-[65px] hover:opacity-90 transition-opacity duration-300 mix-blend-multiply"
            referrerPolicy="no-referrer"
          />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleScroll(item.href)}
              className="font-sans text-sm font-medium text-brand-text-muted hover:text-brand-navy transition-colors cursor-pointer relative py-2 group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-navy transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </nav>

        {/* Contact Us Button */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onContactClick}
            className="px-5 py-2.5 bg-brand-red hover:bg-brand-red-bright text-white text-sm font-semibold font-sans tracking-wide rounded-brand-md transition-all duration-300 hover:shadow-lg active:scale-98 cursor-pointer"
          >
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-brand-navy hover:text-brand-red transition-colors cursor-pointer"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-brand-border bg-brand-bg overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleScroll(item.href)}
                  className="text-left font-sans text-base font-medium text-brand-text-muted hover:text-brand-navy transition-colors py-2 block w-full"
                >
                  {item.label}
                </button>
              ))}
              <hr className="border-brand-border-muted my-2" />
              <button
                onClick={() => {
                  setIsOpen(false);
                  onContactClick();
                }}
                className="w-full py-3 bg-brand-red hover:bg-brand-red-bright text-white text-center text-sm font-semibold font-sans tracking-wide rounded-brand-md transition-colors"
              >
                Contact Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
