'use client';

import { useRef } from 'react';
import { useImageSequence } from '@/hooks/useImageSequence';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { HeroLoader } from './HeroLoader';
import { HeroCanvas } from './HeroCanvas';
import { HeroCopy } from './HeroCopy';

export const HeroSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // 1. Hook fetches frame count and preloads images
  const { frames, totalFrames, loadProgress, isReady } = useImageSequence('/frames/bmw-hero');
  
  // 2. Track scroll progress mapped to this container
  const progressRef = useScrollProgress(scrollContainerRef);

  // Shorter track = faster scrub: `/4` vs original `*11` is ~4× faster total (includes prior 2× step).
  const containerHeight = Math.max(120, Math.floor((totalFrames * 11) / 4));

  return (
    <>
      <HeroLoader progress={loadProgress} isReady={isReady} />
      
      <div 
        ref={scrollContainerRef}
        className="relative w-full hero-scroll-container"
        style={{ height: `${containerHeight}vh` }}
      >
        <div className="sticky top-0 w-full h-screen overflow-hidden bg-[#0A0A0A]">
          <HeroCanvas 
            framesRef={frames} 
            totalFrames={totalFrames} 
            progressRef={progressRef}
            isReady={isReady}
          />
          <HeroCopy />
          
          {/* Subtle gradient overlay to blend into next section */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none" />
        </div>
      </div>
    </>
  );
};
