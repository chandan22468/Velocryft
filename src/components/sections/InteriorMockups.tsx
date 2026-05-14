'use client';

import { ScrollReveal } from '../ui/ScrollReveal';

const mockups = [
  { id: 1, title: 'Luxury Garage', desc: 'Engineered to complement raw concrete and exotic metals.' },
  { id: 2, title: 'Dark Studio', desc: 'Museum-grade presence in strictly controlled lighting environments.' },
  { id: 3, title: 'Collector Space', desc: 'The defining architectural anchor of a modern gallery.' },
];

export const InteriorMockups = () => {
  return (
    <section className="bg-[#0A0A0A] py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-24">
            <h2 className="text-[#F5F5F0] text-3xl md:text-5xl font-bold uppercase tracking-widest mb-4">
              Architectural Scale
            </h2>
            <div className="w-16 h-1 bg-[#C0392B] mx-auto mb-6"></div>
            <p className="text-[#CCCCCC] max-w-2xl mx-auto uppercase tracking-widest text-sm">
              Designed to command the room. 
            </p>
          </div>
        </ScrollReveal>

        <div className="flex flex-col gap-24">
          {mockups.map((mockup, index) => (
            <ScrollReveal key={mockup.id} direction={index % 2 === 0 ? 'left' : 'right'}>
              <div className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-full md:w-2/3 aspect-[16/9] bg-[#111111] border border-[#1A1A1A] relative flex items-center justify-center overflow-hidden">
                  {/* Environment Placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-[#111111] opacity-60"></div>
                  {/* Frame focal point */}
                  <div className="w-1/3 aspect-[4/3] bg-[#0A0A0A] border-2 border-[#222] shadow-[0_10px_30px_rgba(0,0,0,0.9)] relative z-10 flex items-center justify-center">
                    <div className="w-4/5 h-4/5 bg-[#050505] shadow-inner border border-[#1A1A1A]"></div>
                  </div>
                </div>
                
                <div className="w-full md:w-1/3 flex flex-col justify-center">
                  <span className="text-[#C0392B] text-xs uppercase tracking-[0.2em] mb-4 block">
                    Environment 0{index + 1}
                  </span>
                  <h3 className="text-[#F5F5F0] text-2xl uppercase tracking-widest mb-4">
                    {mockup.title}
                  </h3>
                  <p className="text-[#CCCCCC] text-sm leading-relaxed tracking-wider">
                    {mockup.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
