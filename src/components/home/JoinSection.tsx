
import React from 'react';
import { Button } from '@/components/ui/button';

const JoinSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-brand-purple-light to-brand-pink text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Ayo Bergabung Bersama Kami</h2>
        <div className="max-w-3xl mx-auto mb-8">
          <p className="text-lg mb-4">Untuk Sekolah: Jadikan program ini bagian dari ekstrakurikuler resmi.</p>
          <p className="text-lg">Untuk Siswa: Latih skill komunikasi kamu sejak dini!</p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="bg-white text-brand-purple-dark hover:bg-gray-100">
            Gabung Sekarang
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
            Lihat Persyaratan
          </Button>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
