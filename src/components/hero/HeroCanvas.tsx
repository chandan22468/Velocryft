'use client';

import { useEffect, useRef, MutableRefObject } from 'react';
import { useMouseParallax } from '@/hooks/useMouseParallax';

interface HeroCanvasProps {
  framesRef: MutableRefObject<HTMLImageElement[]>;
  totalFrames: number;
  progressRef: MutableRefObject<number>;
  isReady: boolean;
}

/** Skip weak / intro frames at start; small trim at end. */
const TRIM_START = 45;
const TRIM_END = 10;

export const HeroCanvas = ({ framesRef, totalFrames, progressRef, isReady }: HeroCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useMouseParallax<HTMLDivElement>();
  
  const displayFrameRef = useRef(0);
  const drawnFrameRef = useRef(-1);

  useEffect(() => {
    if (!isReady || totalFrames === 0) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let rafRunning = false;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    const hasTrim = totalFrames > TRIM_START + TRIM_END;
    const firstUsable = hasTrim ? TRIM_START : 0;
    const lastUsable = hasTrim ? totalFrames - 1 - TRIM_END : totalFrames - 1;
    const usableCount = Math.max(1, lastUsable - firstUsable + 1);

    displayFrameRef.current = firstUsable;
    drawnFrameRef.current = -1;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        width = entry.contentRect.width;
        height = entry.contentRect.height;
        canvas.width = width;
        canvas.height = height;
        // Force redraw on resize
        drawnFrameRef.current = -1;
      }
    });

    resizeObserver.observe(canvas.parentElement!);
    
    // Initial size setup
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const render = () => {
      if (document.visibilityState === 'hidden') {
        rafRunning = false;
        return;
      }

      const t = Math.min(1, Math.max(0, progressRef.current));
      const targetFloat =
        usableCount <= 1
          ? firstUsable
          : firstUsable + t * (lastUsable - firstUsable);

      const lerp = reducedMotion.matches ? 1 : 0.22;

      displayFrameRef.current += (targetFloat - displayFrameRef.current) * lerp;

      const currentFrame = Math.min(
        lastUsable,
        Math.max(firstUsable, Math.round(displayFrameRef.current))
      );
      
      if (currentFrame !== drawnFrameRef.current && framesRef.current[currentFrame]) {
        // Draw image cover style (aspect fill)
        const img = framesRef.current[currentFrame];
        const canvasRatio = width / height;
        const imgRatio = img.width / img.height;
        
        let drawWidth = width;
        let drawHeight = height;
        let offsetX = 0;
        let offsetY = 0;
        
        if (canvasRatio > imgRatio) {
          drawHeight = width / imgRatio;
          offsetY = (height - drawHeight) / 2;
        } else {
          drawWidth = height * imgRatio;
          offsetX = (width - drawWidth) / 2;
        }

        ctx.clearRect(0, 0, width, height);
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
        drawnFrameRef.current = currentFrame;
      }

      if (rafRunning) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    const startRaf = () => {
      if (rafRunning) return;
      rafRunning = true;
      render();
    };

    const stopRaf = () => {
      rafRunning = false;
      cancelAnimationFrame(animationFrameId);
    };

    const onVisibility = () => {
      if (document.visibilityState === 'hidden') {
        stopRaf();
      } else {
        startRaf();
      }
    };

    document.addEventListener('visibilitychange', onVisibility);
    startRaf();

    return () => {
      document.removeEventListener('visibilitychange', onVisibility);
      stopRaf();
      resizeObserver.disconnect();
    };
  }, [isReady, totalFrames, framesRef, progressRef]);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 w-full h-full will-change-transform transform-[translateZ(0)]"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{ imageRendering: 'crisp-edges' }}
      />
    </div>
  );
};
