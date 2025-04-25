
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

interface TeamMemberProps {
  name: string;
  position: string;
  image: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, position, image }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-lg font-semibold text-brand-blue">{name}</h3>
      <p className="text-gray-600">{position}</p>
    </div>
  );
};

const Tentang = () => {
  const teamMembers = [
    {
      name: "Dr. Budi Santoso",
      position: "Founder & CEO",
      image: "https://placehold.co/200x200?text=BS",
    },
    {
      name: "Ani Wijaya",
      position: "Head of Education",
      image: "https://placehold.co/200x200?text=AW",
    },
    {
      name: "Rudi Hartono",
      position: "Chief Technology Officer",
      image: "https://placehold.co/200x200?text=RH",
    },
    {
      name: "Lisa Kusuma",
      position: "Marketing Director",
      image: "https://placehold.co/200x200?text=LK",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-500 to-blue-700 py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Tentang FadPlus</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Platform pengembangan keterampilan presentasi dan public speaking yang dirancang khusus untuk siswa sekolah di Indonesia.
            </p>
          </div>
        </section>

        {/* Profile Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10 text-brand-blue">Profil FadPlus</h2>
            
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <p className="text-lg">
                    <span className="font-semibold text-brand-blue">FadPlus</span> didirikan pada tahun 2018 oleh sekelompok pendidik dan profesional komunikasi yang memiliki visi untuk meningkatkan keterampilan komunikasi siswa di Indonesia.
                  </p>
                  
                  <p>
                    Berawal dari program pelatihan kecil di beberapa sekolah di Jakarta, FadPlus kini telah berkembang menjadi platform nasional dengan jangkauan ke lebih dari 100 sekolah di 15 provinsi di Indonesia.
                  </p>
                  
                  <p>
                    Program inti kami adalah ekstrakurikuler presentasi dan public speaking yang dirancang untuk membantu siswa mengembangkan keterampilan berbicara di depan umum, membuat presentasi yang efektif, dan membangun kepercayaan diri.
                  </p>
                  
                  <p>
                    Dengan pendekatan pembelajaran yang interaktif dan berbasis praktik, FadPlus telah membantu ribuan siswa untuk menemukan suara mereka dan menjadi komunikator yang percaya diri.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10 text-brand-blue">Visi & Misi</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-brand-blue">Visi</h3>
                  <p>
                    Menjadi platform terdepan dalam pengembangan keterampilan presentasi dan komunikasi untuk generasi muda Indonesia, sehingga mereka siap menghadapi tantangan global di masa depan.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-brand-blue">Misi</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Mengembangkan program pelatihan presentasi yang inovatif dan efektif untuk siswa sekolah</li>
                    <li>Membangun jaringan sekolah yang berkomitmen pada pengembangan keterampilan komunikasi siswa</li>
                    <li>Memfasilitasi pertukaran pengetahuan dan pengalaman antar sekolah</li>
                    <li>Mendorong perkembangan kepercayaan diri dan keterampilan kepemimpinan siswa</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10 text-brand-blue">Tim Kami</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {teamMembers.map((member, index) => (
                <TeamMember 
                  key={index}
                  name={member.name}
                  position={member.position}
                  image={member.image}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Tentang;
