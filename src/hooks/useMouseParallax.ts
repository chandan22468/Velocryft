import { useEffect, useRef } from 'react';

export const useMouseParallax = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    const apply = (e: MouseEvent) => {
      if (!ref.current) return;

      const nx = (e.clientX / window.innerWidth - 0.5) * 2;
      const ny = (e.clientY / window.innerHeight - 0.5) * 2;

      const rotateX = Math.max(-3, Math.min(3, -(ny * 2)));
      const rotateY = Math.max(-3, Math.min(3, nx * 2));

      ref.current.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const sync = () => {
      window.removeEventListener('mousemove', apply);
      if (ref.current) ref.current.style.transform = '';

      if (!finePointer.matches || reducedMotion.matches) return;

      window.addEventListener('mousemove', apply);
    };

    sync();
    finePointer.addEventListener('change', sync);
    reducedMotion.addEventListener('change', sync);

    return () => {
      finePointer.removeEventListener('change', sync);
      reducedMotion.removeEventListener('change', sync);
      window.removeEventListener('mousemove', apply);
      if (ref.current) ref.current.style.transform = '';
    };
  }, []);

  return ref;
};
