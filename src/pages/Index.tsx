
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/home/HeroSection';
import SchoolPartners from '@/components/home/SchoolPartners';
import AboutSection from '@/components/home/AboutSection';
import ProgramSection from '@/components/home/ProgramSection';
import JoinSection from '@/components/home/JoinSection';
import NewsSection from '@/components/home/NewsSection';
import CtaSection from '@/components/home/CtaSection';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1">
        <HeroSection />
        <SchoolPartners />
        <AboutSection />
        <ProgramSection />
        <JoinSection />
        <NewsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
