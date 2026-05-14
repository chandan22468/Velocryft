'use client';

import { useEffect, useState } from 'react';

interface HeroLoaderProps {
  progress: number;
  isReady: boolean;
}

export const HeroLoader = ({ progress, isReady }: HeroLoaderProps) => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (isReady) {
      const timer = setTimeout(() => {
        setHidden(true);
      }, 600); // Wait for opacity transition
      return () => clearTimeout(timer);
    }
  }, [isReady]);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#0A0A0A] transition-opacity duration-600 ease-out ${
        isReady ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="w-64 h-[2px] bg-[#111111] overflow-hidden">
        <div
          className="h-full bg-[#F5F5F0] transition-transform duration-300 ease-out origin-left"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>
    </div>
  );
};
