'use client';

import { products } from '@/data/products';
import { ProductCard } from '../ui/ProductCard';
import { ScrollReveal } from '../ui/ScrollReveal';

export const FeaturedCollection = () => {
  return (
    <section id="collection" className="bg-[#0A0A0A] py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="text-[#F5F5F0] text-3xl md:text-5xl font-bold uppercase tracking-widest mb-4">
            The Collection
          </h2>
          <div className="w-16 h-1 bg-[#C0392B] mb-16"></div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ScrollReveal key={product.id} delay={index * 0.1}>
              <ProductCard product={product} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
