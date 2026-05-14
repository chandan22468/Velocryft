'use client';

import { ScrollReveal } from '../ui/ScrollReveal';

export const LimitedEdition = () => {
  return (
    <section className="relative bg-[#050505] py-40 overflow-hidden flex items-center justify-center min-h-screen">
      {/* Dramatic radial lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(192,57,43,0.1)_0%,rgba(5,5,5,1)_60%)] pointer-events-none" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        <ScrollReveal>
          <span className="text-[#C0392B] uppercase tracking-[0.3em] text-sm font-semibold mb-6 block">
            Founder's Edition
          </span>
          <h2 className="text-[#F5F5F0] text-4xl md:text-6xl font-bold uppercase tracking-widest mb-12">
            The Obsidian Series
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="relative w-full max-w-2xl aspect-[16/9] bg-[#0A0A0A] border border-[#1A1A1A] shadow-[0_0_50px_rgba(0,0,0,0.8)] mb-12 flex items-center justify-center group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-[#111] to-[#0A0A0A] opacity-50" />
            <div className="w-3/4 h-2/3 border border-[#222] bg-[#080808] shadow-inner relative z-10 flex items-center justify-center">
              <span className="text-[#333] uppercase tracking-widest text-sm">Hero Frame Concept</span>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="flex flex-col items-center gap-6">
            <p className="text-[#CCCCCC] tracking-widest text-sm uppercase">
              12 of 50 Allocations Remaining
            </p>
            <button className="px-10 py-4 bg-[#F5F5F0] text-[#0A0A0A] uppercase tracking-widest text-sm font-bold hover:bg-[#C0392B] hover:text-[#F5F5F0] transition-colors duration-400">
              Reserve Yours
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
