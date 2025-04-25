
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SchoolLogos = () => {
  // Dummy logos
  const logos = [
    { id: 1, name: "SMA Negeri 1", path: "https://placehold.co/100x60?text=SMAN+1" },
    { id: 2, name: "SMA Negeri 2", path: "https://placehold.co/100x60?text=SMAN+2" },
    { id: 3, name: "SMA Negeri 3", path: "https://placehold.co/100x60?text=SMAN+3" },
    { id: 4, name: "SMA Negeri 4", path: "https://placehold.co/100x60?text=SMAN+4" },
    { id: 5, name: "SMK Negeri 1", path: "https://placehold.co/100x60?text=SMKN+1" },
    { id: 6, name: "SMK Negeri 2", path: "https://placehold.co/100x60?text=SMKN+2" },
    { id: 7, name: "SMK Negeri 3", path: "https://placehold.co/100x60?text=SMKN+3" },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
      {logos.map((logo) => (
        <div key={logo.id} className="bg-white rounded-lg shadow p-4 flex items-center justify-center hover:shadow-md transition-shadow">
          <img src={logo.path} alt={`Logo ${logo.name}`} className="max-h-12" />
        </div>
      ))}
    </div>
  );
};

const AboutSection = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-brand-blue">Tentang Fadplus</h3>
      <p>
        FadPlus adalah platform pendidikan inovatif yang berfokus pada pengembangan 
        keterampilan presentasi dan public speaking untuk siswa sekolah di seluruh Indonesia. 
        Didirikan pada tahun 2018, FadPlus telah membantu ribuan siswa menemukan 
        kepercayaan diri mereka melalui program ekstrakurikuler yang terstruktur.
      </p>
      <p>
        Visi kami adalah menjadi platform terdepan dalam mengembangkan 
        generasi muda Indonesia yang percaya diri dan memiliki keterampilan 
        komunikasi yang unggul.
      </p>
      <div className="pt-2">
        <Button asChild>
          <Link to="/tentang">Baca Selengkapnya</Link>
        </Button>
      </div>
    </div>
  );
};

const ProgramSection = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-brand-blue">Program</h3>
      <p>
        Program Ekstrakurikuler Pelatihan Presentasi FadPlus dirancang untuk 
        memberikan siswa pengalaman belajar yang komprehensif dalam bidang 
        komunikasi publik. Program ini mencakup:
      </p>
      <ul className="list-disc pl-5 space-y-2">
        <li>Pelatihan dasar public speaking</li>
        <li>Teknik presentasi efektif</li>
        <li>Manajemen rasa takut dan kecemasan</li>
        <li>Desain slide dan materi presentasi</li>
        <li>Praktik presentasi berkelompok</li>
      </ul>
      <div className="pt-2">
        <Button asChild>
          <Link to="/program">Lihat Program</Link>
        </Button>
      </div>
    </div>
  );
};

const JoinSection = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-brand-blue">Gabung Bersama Kami</h3>
      <p>
        Jadilah bagian dari jaringan sekolah-sekolah terbaik di Indonesia yang 
        telah menerapkan program FadPlus. Manfaat bergabung:
      </p>
      <ul className="list-disc pl-5 space-y-2">
        <li>Akses ke kurikulum presentasi yang terstruktur</li>
        <li>Pendampingan dari trainer berpengalaman</li>
        <li>Sertifikasi untuk siswa</li>
        <li>Jaringan dengan sekolah-sekolah lainnya</li>
        <li>Kesempatan mengikuti kompetisi tingkat nasional</li>
      </ul>
      <div className="pt-2">
        <Button variant="secondary" asChild className="bg-brand-red hover:bg-red-600">
          <Link to="/register">Daftar Sekarang</Link>
        </Button>
      </div>
    </div>
  );
};

const ArticleSection = () => {
  const articles = [
    {
      id: 1,
      title: "5 Tips Presentasi untuk Siswa Pemula",
      excerpt: "Panduan praktis untuk memulai perjalanan presentasi Anda dengan percaya diri.",
      date: "12 April 2023"
    },
    {
      id: 2,
      title: "Cara Mengatasi Demam Panggung",
      excerpt: "Strategi efektif untuk mengelola kecemasan saat berbicara di depan umum.",
      date: "28 Mei 2023"
    },
    {
      id: 3,
      title: "Desain Slide Presentasi yang Menarik",
      excerpt: "Prinsip-prinsip desain untuk membuat slide presentasi yang efektif.",
      date: "10 Juni 2023"
    }
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-brand-blue">Artikel Terbaru</h3>
      <div className="space-y-4">
        {articles.map((article) => (
          <div key={article.id} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <h4 className="font-medium text-lg">{article.title}</h4>
            <p className="text-gray-600 mt-1">{article.excerpt}</p>
            <div className="flex justify-between items-center mt-2">
              <span className="text-sm text-gray-500">{article.date}</span>
              <Button variant="link" className="text-brand-blue p-0">Baca Artikel</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const FadplusAccordion = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-lg font-semibold">
          Mitra Sekolah
        </AccordionTrigger>
        <AccordionContent>
          <SchoolLogos />
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger className="text-lg font-semibold">
          Tentang Fadplus
        </AccordionTrigger>
        <AccordionContent>
          <AboutSection />
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger className="text-lg font-semibold">
          Program
        </AccordionTrigger>
        <AccordionContent>
          <ProgramSection />
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4">
        <AccordionTrigger className="text-lg font-semibold">
          Bergabung dengan Fadplus
        </AccordionTrigger>
        <AccordionContent>
          <JoinSection />
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-5">
        <AccordionTrigger className="text-lg font-semibold">
          Artikel
        </AccordionTrigger>
        <AccordionContent>
          <ArticleSection />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default FadplusAccordion;
