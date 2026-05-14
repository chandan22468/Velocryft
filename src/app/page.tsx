import { HeroSection } from '@/components/hero/HeroSection';
import { FeaturedCollection } from '@/components/sections/FeaturedCollection';
import { LimitedEdition } from '@/components/sections/LimitedEdition';
import { InteriorMockups } from '@/components/sections/InteriorMockups';
import { Craftsmanship } from '@/components/sections/Craftsmanship';
import { MotionSeries } from '@/components/sections/MotionSeries';
import { Testimonials } from '@/components/sections/Testimonials';
import { FAQ } from '@/components/sections/FAQ';
import { Footer } from '@/components/sections/Footer';
import { Navbar } from '@/components/layout/Navbar';

export default function Home() {
  return (
    <main className="bg-[#0A0A0A] text-[#F5F5F0] min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturedCollection />
      <LimitedEdition />
      <InteriorMockups />
      <Craftsmanship />
      <MotionSeries />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
