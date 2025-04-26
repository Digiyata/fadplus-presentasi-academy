
import React from 'react';
import { Button } from '@/components/ui/button';

const CtaSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-brand-purple-medium to-brand-purple-dark text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">
          Siap untuk bergabung dan membuat perubahan di sekolah Anda?
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="bg-brand-orange hover:bg-amber-500 text-white">
            Daftar Sekarang
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
            Hubungi Kami
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
