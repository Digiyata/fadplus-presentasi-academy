
import React from 'react';
import { Book } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-8">
          <div className="p-3 rounded-full bg-gradient-to-br from-brand-purple-light to-brand-pink">
            <Book className="h-6 w-6 text-white" />
          </div>
        </div>
        
        <h2 className="text-3xl font-bold text-center mb-6 text-brand-dark">Apa itu Fadplus?</h2>
        
        <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center leading-relaxed">
          Fadplus adalah platform pembinaan pelatihan presentasi dan public speaking untuk siswa sekolah. 
          Kami hadir untuk membentuk generasi pelajar yang percaya diri, komunikatif, dan mampu 
          menyampaikan gagasan dengan baik.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
