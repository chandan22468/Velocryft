'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal } from '../ui/ScrollReveal';

const faqs = [
  {
    q: "Are these real cars or prints?",
    a: "They are highly detailed, precision-engineered 3D sculptures mounted securely within the frame. These are not flat prints, but physical, museum-grade objects."
  },
  {
    q: "What are the frame dimensions?",
    a: "The standard frame measures 80cm x 60cm, with a 12mm deep shadow-box recess. Weight is substantial due to the solid aluminum construction."
  },
  {
    q: "Do you ship internationally?",
    a: "Yes. Every piece is packed in a custom wooden transit crate and shipped via insured international courier. Tracking is provided upon dispatch."
  },
  {
    q: "How are the frames mounted?",
    a: "Each frame features a heavy-duty, integrated French cleat system machined directly into the backplate, ensuring flush and secure wall mounting."
  },
  {
    q: "What makes these limited edition?",
    a: "Each series is restricted to a strict production run—typically 50 or 100 units globally. Once an edition is sold out, those specific specifications are retired forever."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="about" className="bg-[#0A0A0A] py-32 px-6 border-t border-[#1A1A1A]">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <ScrollReveal>
          <h2 className="text-[#F5F5F0] text-3xl md:text-5xl font-bold uppercase tracking-widest mb-16 text-center">
            Acquisition Details
          </h2>
        </ScrollReveal>

        <div className="w-full flex flex-col border-t border-[#1A1A1A]">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="border-b border-[#1A1A1A]">
                <button 
                  className="w-full py-8 flex justify-between items-center text-left focus:outline-none group"
                  onClick={() => toggle(i)}
                >
                  <span className="text-[#F5F5F0] text-sm md:text-lg uppercase tracking-widest font-medium group-hover:text-[#C0392B] transition-colors">
                    {faq.q}
                  </span>
                  <span className={`text-[#CCCCCC] text-xl transition-transform duration-300 ${openIndex === i ? 'rotate-45 text-[#C0392B]' : ''}`}>
                    +
                  </span>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 text-[#CCCCCC] text-sm md:text-base leading-relaxed tracking-wide">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
