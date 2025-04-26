
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const NewsSection = () => {
  const articles = [
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
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-brand-dark">Berita Terbaru</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Card key={index} className="overflow-hidden hover-lift">
              <CardContent className="p-0">
                <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-brand-dark">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <Button variant="outline" className="w-full group">
                    Baca Selengkapnya 
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
