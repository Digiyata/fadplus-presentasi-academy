
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, GraduationCap, Users } from 'lucide-react';

const ProgramSection = () => {
  const programs = [
    {
      title: "Dasar",
      duration: "20 JP",
      description: "Pengenalan presentasi & kepercayaan diri.",
      icon: <BookOpen className="h-8 w-8 text-brand-purple-medium" />
    },
    {
      title: "Terampil",
      duration: "30 JP",
      description: "Teknik berbicara, ekspresi, dan alur presentasi.",
      icon: <GraduationCap className="h-8 w-8 text-brand-purple-medium" />
    },
    {
      title: "Mahir",
      duration: "40 JP",
      description: "Latihan intensif & persiapan ujian presentasi.",
      icon: <Users className="h-8 w-8 text-brand-purple-medium" />
    }
  ];
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-brand-dark">Tiga Jenjang Pelatihan</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="border-t-4 border-t-brand-purple-medium hover-lift">
              <CardContent className="p-6">
                <div className="mb-4">{program.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-brand-dark">{program.title}</h3>
                <p className="text-sm text-brand-purple-medium font-medium mb-4">{program.duration}</p>
                <p className="text-gray-600">{program.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
