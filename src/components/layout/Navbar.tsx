'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export const Navbar = () => {
  const navRef = useRef<HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!navRef.current) return;

    const st = ScrollTrigger.create({
      start: 'top -50',
      end: 99999,
      toggleClass: { targets: navRef.current, className: 'bg-[#0D0D0D]' },
    });

    return () => {
      st.kill();
    };
  }, []);

  const links = ['Collection', 'Motion Series', 'Craftsmanship', 'About'];

  return (
    <>
      <nav 
        ref={navRef} 
        className="fixed top-0 left-0 w-full z-40 px-6 py-6 transition-colors duration-400 ease-in-out border-b border-transparent data-[scrolled=true]:border-[#1A1A1A]"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link 
            href="/" 
            className="text-xl md:text-2xl font-bold tracking-[0.25em] text-[#F5F5F0] uppercase z-50 relative"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            VELOCRYFT
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8">
            {links.map((link) => (
              <Link 
                key={link} 
                href={`#${link.toLowerCase().replace(' ', '-')}`}
                className="text-xs uppercase tracking-widest text-[#CCCCCC] hover:text-[#F5F5F0] transition-colors duration-300"
              >
                {link}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-[#F5F5F0] z-50 relative"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-[#0A0A0A] z-30 flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center gap-8">
              {links.map((link, i) => (
                <motion.div
                  key={link}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <Link 
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl uppercase tracking-[0.2em] text-[#F5F5F0] hover:text-[#C0392B] transition-colors"
                  >
                    {link}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
