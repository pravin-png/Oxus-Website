/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

export default function RemoteStaffing() {
  return (
    <section id="staffing" className="py-24 md:py-32 bg-[#f5f3f2] border-y border-brand-border/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column - Copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-8 text-left"
        >
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold text-brand-navy tracking-tight mb-6">
            Integrated Remote Staffing
          </h2>
          <div className="space-y-4 max-w-3xl">
            <p className="font-sans text-lg text-brand-text-muted leading-relaxed font-semibold text-brand-navy">
              We recruit and build experienced, high-performing professional teams to achieve one goal. Yours!
            </p>
            <p className="font-sans text-base text-brand-text-muted leading-relaxed">
              In a nutshell, Oxus provides highly qualified, offshore professionals for IT, back-office operations, and customer services to augment and complete the essential functions of your business. All at only a fraction of local manpower costs.
            </p>
          </div>
        </motion.div>

        {/* Right Column - Stats Block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="lg:col-span-4 grid grid-cols-2 gap-8 border-l border-brand-border/20 pl-8 lg:h-28 items-center"
        >
          {/* Stat 1 */}
          <div className="flex flex-col items-start border-r border-brand-border/10 pr-4">
            <span className="font-sans text-4xl sm:text-5xl font-extrabold text-brand-red tracking-tight leading-none mb-2">
              98%
            </span>
            <span className="font-mono text-xxs sm:text-xs text-brand-navy font-bold tracking-widest uppercase">
              Retention
            </span>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-start pl-4">
            <span className="font-sans text-4xl sm:text-5xl font-extrabold text-brand-red tracking-tight leading-none mb-2">
              75%
            </span>
            <span className="font-mono text-xxs sm:text-xs text-brand-navy font-bold tracking-widest uppercase">
              Efficiency
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
