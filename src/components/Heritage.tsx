/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import heritageImage from "../assets/images/heritage_server_view_1783563930207.jpg";

export default function Heritage() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#f5f3f2] border-y border-brand-border/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left Column - Copy */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          {/* Badge */}
          <div className="mb-6 px-4 py-1.5 bg-brand-border-muted text-brand-navy text-xs font-semibold font-sans tracking-widest uppercase rounded-brand-sm inline-block border border-brand-border/10">
            Our Heritage
          </div>

          {/* Heading */}
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold text-brand-navy tracking-tight leading-tight mb-8">
            Bridging the Gap Between Global Standards and Local Excellence
          </h2>

          {/* Body Narrative */}
          <div className="font-sans text-base sm:text-lg text-brand-text-muted space-y-6 mb-10 leading-relaxed">
            <p>
              Headquartered in the heart of Singapore, Oxus was founded on the principle that
              enterprise-grade infrastructure should be accessible, resilient, and human-centric. We serve as the
              critical link between sophisticated global technology standards and the specialized technical talent
              required to execute them.
            </p>
            <p>
              Our mission is to empower organizations to scale without borders by engineering ecosystems that are not
              just functional, but foundational to their long-term success. With a focus on governance, compliance,
              and precision, we bring Singapore's world-class professional accountability to every project we undertake.
            </p>
          </div>

          {/* Stats / HQ Info Block */}
          <div className="grid grid-cols-2 gap-8 border-t border-brand-border/20 pt-8 w-full max-w-md">
            <div>
              <p className="font-mono text-xs text-brand-red uppercase tracking-widest mb-1">HQ</p>
              <p className="font-sans text-xl font-bold text-brand-navy tracking-tight">SINGAPORE</p>
            </div>
            <div>
              <p className="font-mono text-xs text-brand-red uppercase tracking-widest mb-1">Global</p>
              <p className="font-sans text-xl font-bold text-brand-navy tracking-tight">STANDARDS</p>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-md lg:max-w-none rounded-2xl overflow-hidden shadow-xl border border-brand-border/10 group">
            <div className="absolute inset-0 bg-brand-navy/5 group-hover:bg-brand-navy/0 transition-colors duration-500 z-10" />
            <img
              src={heritageImage}
              alt="Symmetric modern data center corridor"
              className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
