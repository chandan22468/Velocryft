'use client';

import { ScrollReveal } from '../ui/ScrollReveal';

export const MotionSeries = () => {
  return (
    <section id="motion-series" className="bg-[#050505] py-40 overflow-hidden relative">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl aspect-square bg-[#C0392B] opacity-5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <ScrollReveal>
          <h2 className="text-[#F5F5F0] text-4xl md:text-6xl font-bold uppercase tracking-widest mb-6">
            The Motion Series
          </h2>
          <p className="text-[#CCCCCC] max-w-2xl mx-auto uppercase tracking-widest text-sm leading-relaxed mb-12">
            Integrated LED ambient backlighting. Dynamic illumination designed to reflect the raw energy of the machine.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="w-full max-w-4xl aspect-[21/9] bg-[#0A0A0A] border border-[#1A1A1A] relative mb-12 flex items-center justify-center overflow-hidden">
            {/* Animated glowing lines placeholder */}
            <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(192,57,43,0.1),transparent)] w-[200%] animate-[pulse_4s_ease-in-out_infinite]" style={{ transform: 'skewX(-20deg)' }}></div>
            <span className="text-[#333] uppercase tracking-widest text-xs relative z-10">
              Interactive Lighting Preview
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <button className="px-10 py-4 border border-[#F5F5F0] text-[#F5F5F0] uppercase tracking-widest text-sm font-bold hover:bg-[#F5F5F0] hover:text-[#0A0A0A] transition-colors duration-400">
            Explore Motion Series
          </button>
        </ScrollReveal>
      </div>
    </section>
  );
};
