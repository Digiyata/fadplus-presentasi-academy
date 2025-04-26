
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, BookOpen, Users, ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-blue-500 to-blue-700 text-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Bersama Fadplus, Bangun Generasi Percaya Diri Lewat Presentasi!
                </h1>
                <p className="text-lg text-gray-100 mb-8">
                  Pelatihan Public Speaking & Presentasi untuk Siswa Sekolah Dasar hingga Menengah.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
                    Daftar Sekarang
                  </Button>
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-blue-600">
                    Pelajari Lebih Lanjut
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                  <div className="space-y-4">
                    {[
                      "Daftarkan sekolah Anda dan jadilah bagian dari komunitas pelajar berani tampil!",
                      "Ikuti program ekstrakurikuler presentasi, dari Dasar hingga Mahir!",
                      "Dapatkan sertifikat pelatihan dan pengakuan resmi dari Fadplus!"
                    ].map((text, index) => (
                      <div key={index} className="p-4 bg-white/10 rounded-lg">
                        <p className="text-lg">{text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* School Partners Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Sekolah-Sekolah Mitra Kami</h2>
            <p className="text-center mb-12 text-gray-600 max-w-3xl mx-auto">
              Fadplus telah dipercaya oleh berbagai sekolah di seluruh Indonesia. Berikut beberapa di antaranya:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
              {[
                "SD Harapan Bangsa",
                "SMP Juara Prestasi",
                "SMA Visioner Nusantara",
                "SD Cerdas Islami",
                "SMP Negeri 2 Inspiratif",
                "SMA Global Muda",
                "SMK Kreatif Teknologi"
              ].map((school, index) => (
                <div key={index} className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm">
                  <p className="text-sm font-medium text-gray-700">{school}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Apa itu Fadplus?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center">
              Fadplus adalah platform pembinaan pelatihan presentasi dan public speaking untuk siswa sekolah. 
              Kami hadir untuk membentuk generasi pelajar yang percaya diri, komunikatif, dan mampu 
              menyampaikan gagasan dengan baik.
            </p>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Tiga Jenjang Pelatihan</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Dasar",
                  duration: "20 JP",
                  description: "Pengenalan presentasi & kepercayaan diri.",
                  icon: <BookOpen className="h-8 w-8 text-blue-500" />
                },
                {
                  title: "Terampil",
                  duration: "30 JP",
                  description: "Teknik berbicara, ekspresi, dan alur presentasi.",
                  icon: <GraduationCap className="h-8 w-8 text-blue-500" />
                },
                {
                  title: "Mahir",
                  duration: "40 JP",
                  description: "Latihan intensif & persiapan ujian presentasi.",
                  icon: <Users className="h-8 w-8 text-blue-500" />
                }
              ].map((program, index) => (
                <Card key={index} className="border-t-4 border-blue-500">
                  <CardContent className="p-6">
                    <div className="mb-4">{program.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                    <p className="text-sm text-blue-600 mb-4">{program.duration}</p>
                    <p className="text-gray-600">{program.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Join Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Ayo Bergabung Bersama Kami</h2>
            <div className="max-w-3xl mx-auto mb-8">
              <p className="text-lg mb-4">Untuk Sekolah: Jadikan program ini bagian dari ekstrakurikuler resmi.</p>
              <p className="text-lg">Untuk Siswa: Latih skill komunikasi kamu sejak dini!</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
                Gabung Sekarang
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-blue-700">
                Lihat Persyaratan
              </Button>
            </div>
          </div>
        </section>

        {/* News Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Berita Terbaru</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "10 Tips Presentasi Sukses untuk Siswa",
                  excerpt: "Pelajari tips dan trik untuk membuat presentasi yang menarik dan efektif...",
                  image: "https://placehold.co/600x400?text=Tips+Presentasi"
                },
                {
                  title: "Mengapa Public Speaking Penting Sejak Dini",
                  excerpt: "Ketahui manfaat menguasai public speaking sejak usia sekolah...",
                  image: "https://placehold.co/600x400?text=Public+Speaking"
                },
                {
                  title: "Cerita Sukses Klub Presentasi SMP Pelita Bangsa",
                  excerpt: "Kisah inspiratif dari salah satu klub presentasi terbaik kami...",
                  image: "https://placehold.co/600x400?text=Success+Story"
                }
              ].map((article, index) => (
                <Card key={index}>
                  <CardContent className="p-0">
                    <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                      <p className="text-gray-600 mb-4">{article.excerpt}</p>
                      <Button variant="outline" className="w-full">
                        Baca Selengkapnya <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">
              Siap untuk bergabung dan membuat perubahan di sekolah Anda?
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
                Daftar Sekarang
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-blue-700">
                Hubungi Kami
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
