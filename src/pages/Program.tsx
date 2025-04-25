
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Check, BookOpen, Users, Award, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Benefit: React.FC<BenefitProps> = ({ icon, title, description }) => {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-brand-blue">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const Program = () => {
  const benefits = [
    {
      icon: <BookOpen />,
      title: "Kurikulum Terstruktur",
      description: "Program pelatihan dengan kurikulum yang dirancang oleh pakar komunikasi dan pendidik berpengalaman."
    },
    {
      icon: <Users />,
      title: "Pengembangan Soft Skills",
      description: "Siswa akan mengembangkan keterampilan penting seperti kepercayaan diri, berpikir kritis, dan kerja sama tim."
    },
    {
      icon: <Award />,
      title: "Sertifikasi Resmi",
      description: "Siswa yang berhasil menyelesaikan program akan mendapatkan sertifikat resmi dari FadPlus."
    },
    {
      icon: <Clock />,
      title: "Fleksibilitas Waktu",
      description: "Program dapat disesuaikan dengan jadwal sekolah dan kebutuhan spesifik siswa."
    },
  ];

  const stages = [
    {
      level: "Dasar",
      duration: "8 minggu",
      topics: [
        "Pengenalan public speaking",
        "Mengatasi kecemasan berbicara",
        "Struktur dasar presentasi",
        "Bahasa tubuh dasar"
      ]
    },
    {
      level: "Menengah",
      duration: "10 minggu",
      topics: [
        "Teknik storytelling",
        "Desain slide presentasi",
        "Improvisasi dan adaptasi",
        "Menjawab pertanyaan dengan efektif"
      ]
    },
    {
      level: "Lanjutan",
      duration: "12 minggu",
      topics: [
        "Presentasi persuasif",
        "Debat dan argumentasi",
        "Teknik vokal lanjutan",
        "Presentasi dalam Bahasa Inggris"
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-500 to-blue-700 py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Program Ekstrakurikuler Pelatihan Presentasi</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Program khusus untuk mengembangkan keterampilan presentasi dan public speaking siswa di sekolah Anda.
            </p>
          </div>
        </section>

        {/* Program Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10 text-brand-blue">Tentang Program</h2>
            
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <p className="text-lg">
                    Program Ekstrakurikuler Pelatihan Presentasi FadPlus adalah program komprehensif yang dirancang khusus untuk siswa sekolah menengah yang ingin mengembangkan keterampilan presentasi dan public speaking.
                  </p>
                  
                  <p>
                    Program ini tidak hanya berfokus pada teknik presentasi, tetapi juga pada pengembangan kepercayaan diri, keterampilan berpikir kritis, dan kemampuan untuk menyampaikan ide dengan jelas dan meyakinkan.
                  </p>
                  
                  <p>
                    Dengan pendekatan pembelajaran yang interaktif dan berbasis praktik, siswa akan belajar melalui pengalaman langsung, mendapatkan umpan balik konstruktif, dan terlibat dalam proyek kolaboratif.
                  </p>
                  
                  <p>
                    Program ini dapat diintegrasikan sebagai kegiatan ekstrakurikuler resmi di sekolah Anda, dengan dukungan penuh dari tim FadPlus yang akan membantu dalam pelaksanaan dan evaluasi program.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10 text-brand-blue">Manfaat Program</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <Benefit 
                  key={index}
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Program Structure */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10 text-brand-blue">Struktur Program</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {stages.map((stage, index) => (
                <Card key={index} className="border-t-4 border-brand-blue">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-brand-blue">Tingkat {stage.level}</h3>
                    <p className="text-gray-500 mb-4">Durasi: {stage.duration}</p>
                    
                    <h4 className="font-semibold mb-2">Topik yang Dipelajari:</h4>
                    <ul className="space-y-2">
                      {stage.topics.map((topic, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-brand-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Tertarik Menerapkan Program Ini di Sekolah Anda?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Daftarkan sekolah Anda sekarang dan mulailah perjalanan untuk mengembangkan keterampilan presentasi para siswa.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-brand-blue hover:bg-gray-100">
                <Link to="/persyaratan">Lihat Persyaratan</Link>
              </Button>
              <Button size="lg" variant="secondary" className="bg-brand-red hover:bg-red-600">
                <Link to="/register">Daftar Sekarang</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Program;
