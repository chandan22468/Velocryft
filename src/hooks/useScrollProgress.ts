import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useScrollProgress = (triggerRef: React.RefObject<HTMLElement | null>) => {
  const progressRef = useRef(0);

  useEffect(() => {
    const el = triggerRef.current;
    if (!el) return;

    const st = ScrollTrigger.create({
      trigger: el,
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        progressRef.current = self.progress;
      },
    });

    let debounce: ReturnType<typeof setTimeout>;
    const ro = new ResizeObserver(() => {
      clearTimeout(debounce);
      debounce = setTimeout(() => ScrollTrigger.refresh(), 80);
    });
    ro.observe(el);

    return () => {
      clearTimeout(debounce);
      ro.disconnect();
      st.kill();
    };
  }, [triggerRef]);

  return progressRef;
};
