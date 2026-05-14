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

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: parentContainer,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.55,
      },
    });

    // Intro copy eases out early so the car stays the hero while you keep scrolling.
    tl.to(
      intro,
      { opacity: 0, y: -36, ease: 'power2.out', duration: 0.28 },
      0
    );

    // CTA stays until the final moments of the hero track (fade only in the last ~4% of scroll).
    tl.to(
      cta,
      { opacity: 0, y: 28, ease: 'power2.in', duration: 0.04 },
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
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const },
    },
  };

  return (
    <div
      ref={rootRef}
      className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none text-center px-4"
    >
      <div className="flex w-full max-w-4xl flex-col items-center gap-10">
        <motion.div
          ref={introRef}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <motion.h1
            variants={itemVariants}
            className="text-[clamp(2.25rem,12vw,6rem)] md:text-8xl font-bold tracking-[0.12em] md:tracking-widest text-[#F5F5F0] mb-2 uppercase max-w-full"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            VELOCRYFT
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xs sm:text-sm md:text-base tracking-[0.15em] md:tracking-[0.2em] text-[#C0392B] uppercase mb-6 px-1"
          >
            AUTOMOTIVE ART. REENGINEERED.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-base md:text-xl text-[#CCCCCC] max-w-2xl font-light px-1 leading-snug md:leading-normal"
          >
            Limited edition framed automotive sculptures crafted for enthusiasts.
          </motion.p>
        </motion.div>

        <motion.div
          ref={ctaRef}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="pointer-events-auto flex w-full max-w-xl flex-col gap-4 rounded-2xl border border-white/10 bg-black/35 px-5 py-6 shadow-[0_8px_40px_rgba(0,0,0,0.45)] backdrop-blur-md sm:flex-row sm:justify-center sm:px-8 sm:py-6"
        >
          <button
            type="button"
            className="px-8 py-4 bg-[#F5F5F0] text-[#0A0A0A] uppercase tracking-wider text-sm font-semibold transition-transform duration-300 ease-out hover:scale-[1.02] hover:shadow-lg"
          >
            Explore Collection
          </button>
          <button
            type="button"
            className="px-8 py-4 border border-[#CCCCCC] text-[#F5F5F0] uppercase tracking-wider text-sm font-semibold transition-all duration-300 ease-out hover:bg-[#111111] hover:scale-[1.02]"
          >
            View Motion Series
          </button>
        </motion.div>
      </div>
    </div>
  );
};
