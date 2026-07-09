/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import heroServerImage from "../assets/images/hero_server_room_1783563909406.jpg";

interface HeroProps {
  onExploreClick: () => void;
}

export default function Hero({ onExploreClick }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-12 pb-24 md:py-32 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left column - Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          {/* Badge */}
          <div className="mb-6 px-4 py-1.5 bg-[#fdeeee] text-brand-red text-xs font-semibold font-sans tracking-widest uppercase rounded-brand-sm inline-block">
            Enterprise Infrastructure
          </div>

          {/* Main Title */}
          <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl font-bold text-brand-navy tracking-tight leading-tight mb-8">
            Enterprise System <br />
            <span className="italic font-normal text-brand-red-bright relative inline-block">
              Integration
            </span>{" "}
            Solutions
          </h1>

          {/* Body Copy */}
          <p className="font-sans text-lg sm:text-xl text-brand-text-muted leading-relaxed mb-10 max-w-2xl">
            Oxus International bridges the gap between global enterprise standards and world-class technical talent. 
            We engineer resilient infrastructure ecosystems that empower your business to scale without borders.
          </p>

          {/* CTA Button */}
          <button
            onClick={onExploreClick}
            className="px-8 py-4 bg-brand-navy hover:bg-brand-navy-light text-white font-sans text-base font-semibold tracking-wide rounded-brand-md transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:scale-98 cursor-pointer"
          >
            Explore Our Solutions
          </button>
        </motion.div>

        {/* Right column - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-md lg:max-w-none rounded-2xl overflow-hidden shadow-2xl border border-brand-border/20 group">
            <div className="absolute inset-0 bg-brand-navy/10 group-hover:bg-brand-navy/0 transition-colors duration-500 z-10" />
            <img
              src={heroServerImage}
              alt="Futuristic server room with illuminated data flow"
              className="w-full h-[500px] lg:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
