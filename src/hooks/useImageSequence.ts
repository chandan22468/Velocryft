import { useState, useEffect, useRef } from 'react';

export const useImageSequence = (basePath: string) => {
  const [totalFrames, setTotalFrames] = useState(0);
  const [loadProgress, setLoadProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const framesRef = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    let isMounted = true;

    const load = async () => {
      try {
        const response = await fetch('/api/frame-count');
        const { totalFrames: count, files }: { totalFrames: number; files: string[] } = await response.json();

        if (!isMounted) return;
        setTotalFrames(count);

        if (count === 0 || !files || files.length === 0) {
          setIsReady(true);
          return;
        }

        // Build URLs directly from actual filenames — naming convention agnostic
        const urls = files.map((filename: string) => `${basePath}/${filename}`);

        let loaded = 0;
        const images = await Promise.all(
          urls.map((url: string) => new Promise<HTMLImageElement>((resolve) => {
            const img = new Image();
            img.onload = () => {
              loaded++;
              if (isMounted) setLoadProgress(loaded / count);
              resolve(img);
            };
            img.onerror = () => {
              loaded++;
              if (isMounted) setLoadProgress(loaded / count);
              resolve(img);
            };
            img.src = url;
          }))
        );

        if (!isMounted) return;
        framesRef.current = images;
        setIsReady(true);
      } catch (error) {
        console.error('Failed to load image sequence:', error);
        if (isMounted) setIsReady(true);
      }
    };

    load();

    return () => {
      isMounted = false;
    };
  }, [basePath]);

  return { frames: framesRef, totalFrames, loadProgress, isReady };
};
