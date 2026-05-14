'use client';

import { useEffect, useRef, useState } from 'react';
import { useImageSequence } from '@/hooks/useImageSequence';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { HeroLoader } from './HeroLoader';
import { HeroCanvas } from './HeroCanvas';
import { HeroCopy } from './HeroCopy';

function useIsNarrowMobile() {
  const [narrow, setNarrow] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    const apply = () => setNarrow(mq.matches);
    apply();
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  }, []);

  return narrow;
}

export const HeroSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsNarrowMobile();

  const { frames, totalFrames, loadProgress, isReady } = useImageSequence('/frames/bmw-hero');

  const progressRef = useScrollProgress(scrollContainerRef);

  // Shorter track = faster scrub. Mobile uses an even shorter track so the hero does not feel endless.
  const containerHeight = isMobile
    ? Math.max(72, Math.floor((totalFrames * 11) / 8))
    : Math.max(95, Math.floor((totalFrames * 11) / 5));

  return (
    <>
      <HeroLoader progress={loadProgress} isReady={isReady} />

      <div
        ref={scrollContainerRef}
        className="relative w-full hero-scroll-container"
        style={{ height: `${containerHeight}vh` }}
      >
        <div className="sticky top-0 h-[100svh] min-h-[100svh] w-full overflow-hidden bg-[#0A0A0A] lg:h-[100dvh] lg:min-h-[100dvh]">
          <HeroCanvas
            framesRef={frames}
            totalFrames={totalFrames}
            progressRef={progressRef}
            isReady={isReady}
          />
          <HeroCopy />

          <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-[#0A0A0A] to-transparent sm:h-32" />
        </div>
      </div>
    </>
  );
};
