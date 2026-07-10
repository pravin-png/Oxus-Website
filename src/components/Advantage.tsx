/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowLeftRight, Building2, ShieldCheck } from "lucide-react";

export default function Advantage() {
  const cards = [
    {
      icon: <ArrowLeftRight size={32} className="text-brand-navy" />,
      title: "End-to-End Synergy",
      description: "We manage the intersection of hardware, software, and human capital, ensuring your infrastructure works in perfect harmony.",
    },
    {
      icon: <Building2 size={32} className="text-brand-navy" />,
      title: "Singapore-Backed",
      description: "Based in Singapore, we operate under strict global standards of compliance, governance, and professional accountability.",
    },
    {
      icon: <ShieldCheck size={32} className="text-brand-navy" />,
      title: "Enterprise-Grade",
      description: "Tier-1 hardware partnerships and rigorously vetted talent pipelines ensure every solution is mission-critical ready.",
    },
  ];

  return (
    <section id="advantage" className="py-24 md:py-32 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold text-brand-navy tracking-tight mb-20">
          The Oxus Advantage
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white rounded-lg border border-brand-border/10 p-10 flex flex-col items-center text-center group hover:shadow-xl hover:border-brand-border/20 transition-all duration-300"
            >
              {/* Icon Container */}
              <div className="p-4 bg-brand-border-muted text-brand-navy rounded-full mb-8 group-hover:scale-105 transition-transform duration-300">
                {card.icon}
              </div>

              {/* Title */}
              <h3 className="font-sans text-xl font-bold text-brand-navy mb-4">
                {card.title}
              </h3>

              {/* Description */}
              <p className="font-sans text-brand-text-muted text-base leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
