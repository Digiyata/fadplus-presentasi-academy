
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import SchoolCard from '@/components/SchoolCard';

const MitraSekolah = () => {
  // Dummy data for schools
  const schools = [
    {
      id: 1,
      name: "SMA Negeri 1 Jakarta",
      image: "https://placehold.co/600x400?text=SMAN+1+Jakarta",
      memberCount: 45,
      location: "Jakarta Pusat",
      level: "Premium",
      yearJoined: 2019
    },
    {
      id: 2,
      name: "SMA Negeri 3 Bandung",
      image: "https://placehold.co/600x400?text=SMAN+3+Bandung",
      memberCount: 38,
      location: "Bandung",
      level: "Premium",
      yearJoined: 2020
    },
    {
      id: 3,
      name: "SMA Negeri 5 Surabaya",
      image: "https://placehold.co/600x400?text=SMAN+5+Surabaya",
      memberCount: 42,
      location: "Surabaya",
      level: "Premium",
      yearJoined: 2019
    },
    {
      id: 4,
      name: "SMK Negeri 2 Yogyakarta",
      image: "https://placehold.co/600x400?text=SMKN+2+Yogyakarta",
      memberCount: 36,
      location: "Yogyakarta",
      level: "Standard",
      yearJoined: 2021
    },
    {
      id: 5,
      name: "SMA Negeri 1 Makassar",
      image: "https://placehold.co/600x400?text=SMAN+1+Makassar",
      memberCount: 33,
      location: "Makassar",
      level: "Standard",
      yearJoined: 2021
    },
    {
      id: 6,
      name: "SMA Negeri 1 Denpasar",
      image: "https://placehold.co/600x400?text=SMAN+1+Denpasar",
      memberCount: 40,
      location: "Denpasar, Bali",
      level: "Premium",
      yearJoined: 2020
    },
    {
      id: 7,
      name: "SMK Negeri 1 Medan",
      image: "https://placehold.co/600x400?text=SMKN+1+Medan",
      memberCount: 28,
      location: "Medan",
      level: "Standard",
      yearJoined: 2022
    },
    {
      id: 8,
      name: "SMA Santo Thomas Jakarta",
      image: "https://placehold.co/600x400?text=SMA+Santo+Thomas",
      memberCount: 32,
      location: "Jakarta Selatan",
      level: "Premium",
      yearJoined: 2020
    },
    {
      id: 9,
      name: "SMA Al-Azhar Semarang",
      image: "https://placehold.co/600x400?text=SMA+Al-Azhar",
      memberCount: 25,
      location: "Semarang",
      level: "Standard",
      yearJoined: 2022
    },
    {
      id: 10,
      name: "SMA Negeri 2 Palembang",
      image: "https://placehold.co/600x400?text=SMAN+2+Palembang",
      memberCount: 30,
      location: "Palembang",
      level: "Standard",
      yearJoined: 2021
    },
    {
      id: 11,
      name: "SMA Harapan Bangsa",
      image: "https://placehold.co/600x400?text=SMA+Harapan+Bangsa",
      memberCount: 35,
      location: "Jakarta Barat",
      level: "Premium",
      yearJoined: 2020
    },
    {
      id: 12,
      name: "SMK Telkom Jakarta",
      image: "https://placehold.co/600x400?text=SMK+Telkom",
      memberCount: 38,
      location: "Jakarta Timur",
      level: "Premium",
      yearJoined: 2019
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-500 to-blue-700 py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Mitra Sekolah</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Bergabunglah dengan jaringan sekolah-sekolah terbaik yang telah menjadi mitra FadPlus dalam mengembangkan keterampilan presentasi siswa.
            </p>
          </div>
        </section>

        {/* School List */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-brand-blue">Sekolah-sekolah Mitra</h2>
            <p className="text-center mb-10 max-w-2xl mx-auto text-gray-600">
              Berikut adalah sekolah-sekolah yang telah bermitra dengan FadPlus dalam mengembangkan keterampilan presentasi dan public speaking para siswanya.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {schools.map((school) => (
                <SchoolCard
                  key={school.id}
                  name={school.name}
                  image={school.image}
                  memberCount={school.memberCount}
                  location={school.location}
                  level={school.level}
                  yearJoined={school.yearJoined}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-brand-blue">Jadikan Sekolah Anda Mitra Berikutnya!</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-600">
              Daftarkan sekolah Anda sekarang dan mulailah perjalanan untuk mengembangkan keterampilan presentasi para siswa Anda bersama FadPlus.
            </p>
            
            <div className="inline-flex gap-4">
              <a 
                href="/persyaratan" 
                className="px-6 py-3 bg-brand-blue text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
              >
                Lihat Persyaratan
              </a>
              <a 
                href="/register" 
                className="px-6 py-3 bg-brand-red text-white font-medium rounded-md hover:bg-red-600 transition-colors"
              >
                Daftar Sekarang
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MitraSekolah;
