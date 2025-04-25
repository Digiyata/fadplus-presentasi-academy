
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SliderItem {
  title: string;
  description: string;
  cta: string;
  link: string;
}

const slides: SliderItem[] = [
  {
    title: "Ikuti Pelatihan Public Speaking Siswa Sekolah!",
    description: "Kembangkan skill presentasi untuk masa depan yang lebih cerah.",
    cta: "Pelajari Selengkapnya",
    link: "/program"
  },
  {
    title: "Bangun Rasa Percaya Diri Lewat Presentasi Hebat!",
    description: "Berlatih berbicara di depan umum dengan metode yang menyenangkan.",
    cta: "Lihat Program",
    link: "/program"
  },
  {
    title: "Gabung Bersama Komunitas Fadplus Sekolah!",
    description: "Bergabunglah dengan jaringan sekolah se-Indonesia untuk skill presentasi.",
    cta: "Gabung Sekarang",
    link: "/register"
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[500px] overflow-hidden bg-gradient-to-r from-blue-500 to-blue-400">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full flex items-center justify-center transition-opacity duration-1000 
            ${currentSlide === index ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{slide.title}</h1>
              <p className="text-xl md:text-2xl mb-8">{slide.description}</p>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
                <a href={slide.link}>{slide.cta}</a>
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="text-white" size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="text-white" size={24} />
      </button>

      {/* Indicator Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentSlide === index ? 'bg-white' : 'bg-white/40'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
