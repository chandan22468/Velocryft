'use client';

import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-[#050505] pt-24 pb-12 px-6 border-t border-[#111]">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <Link 
          href="/" 
          className="text-2xl md:text-3xl font-bold tracking-[0.25em] text-[#F5F5F0] uppercase mb-4"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          VELOCRYFT
        </Link>
        <p className="text-[#C0392B] text-xs uppercase tracking-[0.3em] mb-16">
          Automotive Art. Reengineered.
        </p>

        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {['Collection', 'Motion Series', 'Craftsmanship', 'About'].map((link) => (
            <Link 
              key={link} 
              href={`#${link.toLowerCase().replace(' ', '-')}`}
              className="text-[#CCCCCC] text-xs uppercase tracking-widest hover:text-[#F5F5F0] transition-colors"
            >
              {link}
            </Link>
          ))}
        </div>

        <div className="flex gap-6 mb-16">
          {/* Social Icons Outlines */}
          {['Instagram', 'Twitter', 'YouTube'].map((social) => (
            <a 
              key={social}
              href="#" 
              className="w-10 h-10 border border-[#333] flex items-center justify-center text-[#CCCCCC] hover:border-[#F5F5F0] hover:text-[#F5F5F0] transition-colors group relative overflow-hidden"
              aria-label={social}
            >
              <span className="text-xs tracking-wider uppercase group-hover:scale-110 transition-transform">
                {social[0]}
              </span>
            </a>
          ))}
        </div>

        <div className="w-full pt-8 border-t border-[#111] flex flex-col md:flex-row justify-between items-center text-[#666] text-[10px] uppercase tracking-widest">
          <p>© {new Date().getFullYear()} VELOCRYFT. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-[#CCCCCC]">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#CCCCCC]">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
