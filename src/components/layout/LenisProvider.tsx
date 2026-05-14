'use client';

import { ReactNode, useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const LenisProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    const mmNarrow = window.matchMedia('(max-width: 768px)');
    const mmReduce = window.matchMedia('(prefers-reduced-motion: reduce)');

    let lenis: Lenis | null = null;
    let onRaf: ((time: number) => void) | null = null;

    const onScrollNative = () => {
      ScrollTrigger.update();
    };

    const teardownLenis = () => {
      if (onRaf) {
        gsap.ticker.remove(onRaf);
        onRaf = null;
      }
      if (lenis) {
        lenis.destroy();
        lenis = null;
      }
    };

    const apply = () => {
      window.removeEventListener('scroll', onScrollNative);
      teardownLenis();

      const useNative = mmNarrow.matches || mmReduce.matches;

      if (useNative) {
        window.addEventListener('scroll', onScrollNative, { passive: true });
      } else {
        lenis = new Lenis({
          lerp: 0.22,
          wheelMultiplier: 1.2,
          smoothWheel: true,
          syncTouch: false,
          touchMultiplier: 1,
          orientation: 'vertical',
          gestureOrientation: 'vertical',
        });

        lenis.on('scroll', ScrollTrigger.update);

        onRaf = (time: number) => {
          lenis!.raf(time * 1000);
        };
        gsap.ticker.add(onRaf);
        gsap.ticker.lagSmoothing(0);
      }

      ScrollTrigger.refresh();
    };

    apply();
    mmNarrow.addEventListener('change', apply);
    mmReduce.addEventListener('change', apply);

    const onResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener('resize', onResize);

    return () => {
      mmNarrow.removeEventListener('change', apply);
      mmReduce.removeEventListener('change', apply);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', onScrollNative);
      teardownLenis();
    };
  }, []);

  return <>{children}</>;
};
