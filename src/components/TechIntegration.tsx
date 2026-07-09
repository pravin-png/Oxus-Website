/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Network, Cpu, ShieldCheck, Radio, Check, ArrowRight } from "lucide-react";
import networkingImage from "../assets/images/networking_switch_1783563945494.jpg";
import computeImage from "../assets/images/compute_server_unit_1783563963320.jpg";
import commsImage from "../assets/images/unified_communications_1783563979467.jpg";

interface TechIntegrationProps {
  onLearnMoreClick: () => void;
}

export default function TechIntegration({ onLearnMoreClick }: TechIntegrationProps) {
  const networkingFeatures = [
    "Enterprise Switching & Routing",
    "Network Security & Firewalls",
    "Wireless & SD-WAN Deployment",
  ];

  return (
    <section id="integration" className="py-24 md:py-32 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold text-brand-navy tracking-tight mb-4">
            Foundational Technology Integration
          </h2>
          <p className="font-sans text-lg text-brand-text-muted leading-relaxed">
            Engineering the backbone of modern enterprise operations with precision and stability.
          </p>
        </div>

        {/* First Row - Tall Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Networking Infrastructure Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl border border-brand-border/15 overflow-hidden flex flex-col justify-between group hover:shadow-xl transition-all duration-300 h-full"
          >
            <div className="p-8 pb-4 flex flex-col items-start">
              {/* Icon */}
              <div className="p-3 bg-[#fdeeee] text-brand-red rounded-lg mb-6">
                <Network size={28} strokeWidth={2} />
              </div>
              {/* Title */}
              <h3 className="font-sans text-2xl font-bold text-brand-navy mb-4">
                Networking Infrastructure
              </h3>
              {/* Description */}
              <p className="font-sans text-brand-text-muted text-base leading-relaxed mb-6">
                Global connectivity solutions featuring SD-WAN, high-availability clusters, and secure perimeter defense architecture.
              </p>
            </div>

            {/* Checklist & Image Panel combined */}
            <div className="relative mt-auto pt-6 flex flex-col sm:flex-row items-stretch border-t border-brand-border/5">
              {/* Left checklist */}
              <div className="p-8 pt-2 sm:w-1/2 flex flex-col justify-center gap-3">
                {networkingFeatures.map((feat) => (
                  <div key={feat} className="flex items-start gap-3">
                    <span className="p-1 bg-[#fdeeee] text-brand-red rounded-full mt-0.5 shrink-0">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <span className="font-sans text-sm font-semibold text-brand-navy">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>

              {/* Right image */}
              <div className="sm:w-1/2 min-h-[200px] relative overflow-hidden group-hover:scale-102 transition-transform duration-500">
                <div className="absolute inset-0 bg-brand-navy/5 z-10" />
                <img
                  src={networkingImage}
                  alt="Sleek fiber optic switches with organized cables"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </motion.div>

          {/* Compute & Storage Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-xl border border-brand-border/15 overflow-hidden flex flex-col justify-between group hover:shadow-xl transition-all duration-300 h-full"
          >
            <div className="p-8 flex flex-col items-start">
              {/* Icon */}
              <div className="p-3 bg-brand-border-muted text-brand-navy rounded-lg mb-6">
                <Cpu size={28} strokeWidth={2} />
              </div>
              {/* Category */}
              <p className="font-sans text-xs text-brand-text-muted font-semibold uppercase tracking-wider mb-1">
                Compute & Storage
              </p>
              {/* Title & Description */}
              <h3 className="font-sans text-2xl font-bold text-brand-navy mb-4">
                Virtualization & Storage Ecosystems
              </h3>
              <p className="font-sans text-brand-text-muted text-base leading-relaxed mb-6">
                High-performance server virtualization and hyper-converged storage solutions designed for mission-critical enterprise workloads.
              </p>
            </div>

            {/* Centered Rackmount Server Image */}
            <div className="px-8 pb-8 pt-2 flex justify-center bg-brand-bg-dark/5">
              <img
                src={computeImage}
                alt="Rackmount server chassis"
                className="w-full max-w-sm object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>

        {/* Second Row - Horizontal Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Card 3: Authorized Ecosystems (Navy Banner) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-brand-navy-light text-white p-8 rounded-xl flex flex-col justify-between relative overflow-hidden group hover:shadow-xl transition-shadow duration-300"
          >
            {/* Subtle background lines for premium touch */}
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:16px_16px]" />

            <div className="relative z-10 flex flex-col items-start">
              {/* Icon */}
              <div className="p-3 bg-white/10 text-white rounded-lg mb-6">
                <ShieldCheck size={28} strokeWidth={2} />
              </div>
              {/* Title */}
              <h4 className="font-sans text-xl font-bold mb-3 tracking-wide text-white">
                Authorized Ecosystems
              </h4>
              {/* Description */}
              <p className="font-sans text-white/85 text-sm leading-relaxed">
                Official partnerships with Cisco, HPE, Dell, and Snom to ensure vendor-aligned deployment standards and enterprise durability.
              </p>
            </div>
          </motion.div>

          {/* Card 4: Unified Communications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 bg-white rounded-xl border border-brand-border/15 overflow-hidden flex flex-col md:flex-row items-stretch group hover:shadow-xl transition-all duration-300"
          >
            {/* Left/Upper text content */}
            <div className="p-8 flex-1 flex flex-col justify-between items-start">
              <div className="flex flex-col items-start">
                {/* Icon */}
                <div className="p-3 bg-[#fdeeee] text-brand-red rounded-lg mb-6">
                  <Radio size={28} strokeWidth={2} />
                </div>
                {/* Title */}
                <h4 className="font-sans text-xl font-bold text-brand-navy mb-3">
                  Unified Communications
                </h4>
                {/* Description */}
                <p className="font-sans text-brand-text-muted text-sm leading-relaxed mb-6">
                  Integrating telephony, video, and messaging into a seamless, unified collaborative framework.
                </p>
              </div>

              {/* Action Link */}
              <button
                onClick={onLearnMoreClick}
                className="inline-flex items-center gap-2 font-sans text-sm font-bold text-brand-red hover:text-brand-red-bright transition-colors group/link cursor-pointer"
              >
                Learn More
                <ArrowRight size={16} className="transition-transform duration-300 group-hover/link:translate-x-1" />
              </button>
            </div>

            {/* Right/Lower Image */}
            <div className="md:w-2/5 min-h-[200px] relative overflow-hidden">
              <div className="absolute inset-0 bg-brand-navy/5 z-10" />
              <img
                src={commsImage}
                alt="VoIP Desk phone and video set"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
