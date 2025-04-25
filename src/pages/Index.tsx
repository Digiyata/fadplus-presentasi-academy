
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import HeroSlider from '@/components/HeroSlider';
import FadplusAccordion from '@/components/FadplusAccordion';
import CallToAction from '@/components/CallToAction';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1">
        <HeroSlider />
        
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10 text-brand-blue">
              FadPlus - Platform Pelatihan Presentasi untuk Siswa
            </h2>
            <div className="max-w-4xl mx-auto">
              <FadplusAccordion />
            </div>
          </div>
        </section>
        
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
