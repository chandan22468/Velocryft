'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const [fineHover, setFineHover] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    const apply = () => setFineHover(mq.matches);
    apply();
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  }, []);

  return (
    <motion.div
      whileHover={
        fineHover
          ? {
              scale: 1.02,
              rotateX: 2,
              rotateY: -2,
              boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
            }
          : { scale: 1.01 }
      }
      transition={{ duration: 0.3, ease: 'easeOut' }}
      style={{ perspective: fineHover ? 1000 : undefined }}
      className="bg-[#111111] border border-[#1A1A1A] flex flex-col group cursor-pointer touch-manipulation"
    >
      <div className="w-full aspect-[4/3] bg-[#1A1A1A] p-6 flex flex-col justify-between">
        {product.limitedEdition && (
          <span className="text-[10px] tracking-widest uppercase text-[#CCCCCC]">
            Limited Edition
          </span>
        )}
        {/* Placeholder for Frame Display Area */}
        <div className="flex-1 w-full flex items-center justify-center mt-4">
          <div className="w-3/4 h-3/4 border border-[#333] shadow-inner bg-[#0D0D0D]"></div>
        </div>
      </div>
      
      <div className="p-6 flex flex-col gap-2">
        <h3 className="text-[#F5F5F0] text-lg font-medium tracking-wide uppercase">
          {product.name}
        </h3>
        <p className="text-[#CCCCCC] text-sm tracking-wider">
          {product.price}
        </p>
        
        <div className="mt-4 pt-4 border-t border-[#1A1A1A] flex justify-between items-center group-hover:border-[#333] transition-colors">
          <span className="text-xs uppercase tracking-widest text-[#F5F5F0] group-hover:text-[#C0392B] transition-colors">
            View in Motion
          </span>
          <span className="text-[#F5F5F0] text-lg group-hover:translate-x-1 transition-transform">
            →
          </span>
        </div>
      </div>
    </motion.div>
  );
};
