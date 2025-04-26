
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-purple-light to-brand-pink opacity-90 z-0"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3')] bg-cover bg-center opacity-10 z-[-1]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Bersama Fadplus, Bangun Generasi Percaya Diri Lewat Presentasi!
            </h1>
            <p className="text-lg text-white/90 mb-8">
              Pelatihan Public Speaking & Presentasi untuk Siswa Sekolah Dasar hingga Menengah.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-brand-orange hover:bg-amber-500 text-white">
                Daftar Sekarang
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Pelajari Lebih Lanjut <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg">
            <div className="space-y-4">
              {[
                "Daftarkan sekolah Anda dan jadilah bagian dari komunitas pelajar berani tampil!",
                "Ikuti program ekstrakurikuler presentasi, dari Dasar hingga Mahir!",
                "Dapatkan sertifikat pelatihan dan pengakuan resmi dari Fadplus!"
              ].map((text, index) => (
                <div key={index} className="p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                  <p className="text-white">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
