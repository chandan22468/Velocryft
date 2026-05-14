'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const HeroCopy = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const intro = introRef.current;
    const cta = ctaRef.current;
    if (!root || !intro || !cta) return;

    const parentContainer = root.closest('.hero-scroll-container') as HTMLElement | null;
    if (!parentContainer) return;

    gsap.set([intro, cta], { opacity: 1, y: 0 });

    const narrow = window.matchMedia('(max-width: 768px)').matches;
    const scrubLag = narrow ? 0.12 : 0.22;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: parentContainer,
        start: 'top top',
        end: 'bottom bottom',
        scrub: scrubLag,
      },
    });

    tl.to(
      intro,
      { opacity: 0, y: -28, ease: 'power2.out', duration: narrow ? 0.22 : 0.26 },
      0
    );

    tl.to(
      cta,
      { opacity: 0, y: 20, ease: 'power2.in', duration: 0.04 },
      0.96
    );

    let debounce: ReturnType<typeof setTimeout>;
    const ro = new ResizeObserver(() => {
      clearTimeout(debounce);
      debounce = setTimeout(() => ScrollTrigger.refresh(), 80);
    });
    ro.observe(parentContainer);

    return () => {
      clearTimeout(debounce);
      ro.disconnect();
      tl.kill();
    };
  }, []);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] as const },
    },
  };

  return (
    <div
      ref={rootRef}
      className="pointer-events-none absolute inset-0 z-10 flex flex-col px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-[calc(4.5rem+env(safe-area-inset-top))] max-md:justify-between max-md:pt-[calc(4rem+env(safe-area-inset-top))] sm:justify-center sm:px-6 sm:pb-0 sm:pt-[calc(5rem+env(safe-area-inset-top))] md:pt-[calc(5.5rem+env(safe-area-inset-top))]"
    >
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-5 md:gap-10 max-md:mt-0">
        <motion.div
          ref={introRef}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex w-full flex-col items-center text-center"
        >
          <motion.h1
            variants={itemVariants}
            className="mb-1 max-w-full text-[clamp(1.65rem,9.5vw,3.25rem)] font-bold uppercase leading-[1.05] tracking-[0.06em] text-[#F5F5F0] sm:tracking-widest md:mb-2 md:text-8xl md:tracking-widest"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            VELOCRYFT
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mb-3 max-w-88 px-1 text-[11px] uppercase leading-snug tracking-[0.12em] text-[#C0392B] sm:mb-6 sm:max-w-none sm:text-sm sm:tracking-[0.15em] md:text-base md:tracking-[0.2em]"
          >
            AUTOMOTIVE ART. REENGINEERED.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="max-w-md px-0.5 text-sm font-light leading-snug text-[#CCCCCC] sm:max-w-2xl sm:px-1 sm:text-base sm:leading-snug md:text-xl md:leading-normal"
          >
            Limited edition framed automotive sculptures crafted for enthusiasts.
          </motion.p>
        </motion.div>

        <motion.div
          ref={ctaRef}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="pointer-events-auto mt-auto flex w-full max-w-xl flex-col gap-3 rounded-2xl border border-white/10 bg-black/45 px-4 py-4 shadow-[0_8px_40px_rgba(0,0,0,0.45)] backdrop-blur-md max-md:shrink-0 sm:flex-row sm:justify-center sm:gap-4 sm:px-8 sm:py-6"
        >
          <button
            type="button"
            className="min-h-12 w-full rounded-sm bg-[#F5F5F0] px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#0A0A0A] transition-transform duration-200 ease-out active:scale-[0.99] sm:min-h-0 sm:w-auto sm:px-8 sm:py-4 sm:text-sm md:hover:scale-[1.02] md:hover:shadow-lg"
          >
            Explore Collection
          </button>
          <button
            type="button"
            className="min-h-12 w-full rounded-sm border border-[#CCCCCC] px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#F5F5F0] transition-all duration-200 ease-out active:scale-[0.99] sm:min-h-0 sm:w-auto sm:px-8 sm:py-4 sm:text-sm md:hover:scale-[1.02] md:hover:bg-[#111111]"
          >
            View Motion Series
          </button>
        </motion.div>
      </div>
    </div>
  );
};
