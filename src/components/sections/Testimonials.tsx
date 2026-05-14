'use client';

import { ScrollReveal } from '../ui/ScrollReveal';

const testimonials = [
  {
    quote: "This is the only wall piece I have ever bought that actually makes the room feel different.",
    author: "Arjun M., Dubai"
  },
  {
    quote: "I have Porsche memorabilia everywhere. The VELOCRYFT frame is the only thing people ask about.",
    author: "Marcus T., London"
  },
  {
    quote: "Ordered the McLaren P1 frame. It arrived like an artwork from a gallery.",
    author: "Kaito R., Tokyo"
  }
];

export const Testimonials = () => {
  return (
    <section className="bg-[#0A0A0A] py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="text-[#F5F5F0] text-3xl md:text-5xl font-bold uppercase tracking-widest mb-20 text-center">
            Collector Remarks
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="flex flex-col h-full bg-[#111111] border border-[#1A1A1A] p-10 relative">
                {/* Subtle accent quote mark placeholder */}
                <span className="absolute top-6 left-6 text-6xl text-[#1A1A1A] font-serif leading-none select-none">
                  "
                </span>
                <p className="text-[#CCCCCC] text-sm md:text-base leading-relaxed tracking-wide italic mb-8 relative z-10 flex-grow">
                  "{t.quote}"
                </p>
                <div className="mt-auto pt-6 border-t border-[#1A1A1A]">
                  <span className="text-[#F5F5F0] uppercase tracking-widest text-xs font-semibold">
                    {t.author}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
