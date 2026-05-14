'use client';

import { ScrollReveal } from '../ui/ScrollReveal';

export const Craftsmanship = () => {
  return (
    <section id="craftsmanship" className="bg-[#0D0D0D] py-32 px-6 border-y border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="text-[#F5F5F0] text-3xl md:text-5xl font-bold uppercase tracking-widest mb-16 text-center">
            Material Obsession
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <ScrollReveal delay={0.1}>
            <div className="flex flex-col items-center md:items-start gap-6">
              <div className="w-12 h-12 border border-[#C0392B] flex items-center justify-center text-[#C0392B] text-xl font-bold">
                01
              </div>
              <h3 className="text-[#F5F5F0] uppercase tracking-widest text-lg font-medium">
                Matte Aluminum
              </h3>
              <p className="text-[#CCCCCC] leading-relaxed text-sm tracking-wide">
                Hand-finished matte black aluminum. No gloss, no compromise. Machined to perfection for a monolithic presence.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="flex flex-col items-center md:items-start gap-6">
              <div className="w-12 h-12 border border-[#C0392B] flex items-center justify-center text-[#C0392B] text-xl font-bold">
                02
              </div>
              <h3 className="text-[#F5F5F0] uppercase tracking-widest text-lg font-medium">
                Architectural Depth
              </h3>
              <p className="text-[#CCCCCC] leading-relaxed text-sm tracking-wide">
                12mm shadow-box recess. The car sits inside the frame, not on it. Creating pure volumetric space.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="flex flex-col items-center md:items-start gap-6">
              <div className="w-12 h-12 border border-[#C0392B] flex items-center justify-center text-[#C0392B] text-xl font-bold">
                03
              </div>
              <h3 className="text-[#F5F5F0] uppercase tracking-widest text-lg font-medium">
                Provenance
              </h3>
              <p className="text-[#CCCCCC] leading-relaxed text-sm tracking-wide">
                Each piece ships with an authenticity document and edition number. A certified museum-grade collectible.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
