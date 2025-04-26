
import React from 'react';

const SchoolPartners = () => {
  const schools = [
    "SD Harapan Bangsa",
    "SMP Juara Prestasi",
    "SMA Visioner Nusantara",
    "SD Cerdas Islami",
    "SMP Negeri 2 Inspiratif",
    "SMA Global Muda",
    "SMK Kreatif Teknologi"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-brand-dark">Sekolah-Sekolah Mitra Kami</h2>
        <p className="text-center mb-12 text-gray-600 max-w-3xl mx-auto">
          Fadplus telah dipercaya oleh berbagai sekolah di seluruh Indonesia. Berikut beberapa di antaranya:
        </p>
        
        <div className="relative overflow-hidden">
          <div className="flex space-x-8 animate-slide">
            {[...schools, ...schools].map((school, index) => (
              <div key={index} className="flex-shrink-0 bg-white rounded-lg shadow-sm p-6 min-w-[180px] hover:shadow-md transition-shadow">
                <p className="text-center font-medium text-gray-700">{school}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolPartners;
