
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-purple-50 to-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Your Gateway to Endless Learning
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  Tingkatkan keterampilan presentasi dan public speaking Anda melalui platform pembelajaran yang inovatif dan interaktif.
                </p>
                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                  Mulai Belajar
                </Button>
              </div>
              <div className="relative">
                <img 
                  src="/lovable-uploads/27ac6c7e-1862-4fb7-94cf-20accc67b4d5.png" 
                  alt="Platform Preview" 
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Optimize Your Brain for Peak Performance
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="border-none shadow-lg">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Courses Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl font-bold">Program Pelatihan Populer</h2>
              <Button variant="outline">Lihat Semua</Button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-0">
                    <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded-full">
                          {course.category}
                        </span>
                        <div className="flex items-center text-yellow-400">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="text-gray-600 text-sm ml-1">{course.rating}</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{course.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <img src={course.instructor.avatar} alt={course.instructor.name} className="w-8 h-8 rounded-full" />
                          <span className="text-sm text-gray-600">{course.instructor.name}</span>
                        </div>
                        <span className="text-indigo-600 font-semibold">{course.price}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

// Dummy data
const features = [
  {
    icon: <span className="text-2xl">🎯</span>,
    title: "Presentasi yang Efektif",
    description: "Pelajari teknik presentasi yang menarik dan mudah dipahami audiens"
  },
  {
    icon: <span className="text-2xl">💡</span>,
    title: "Public Speaking",
    description: "Kuasai seni berbicara di depan umum dengan percaya diri"
  },
  {
    icon: <span className="text-2xl">🚀</span>,
    title: "Pengembangan Diri",
    description: "Tingkatkan kemampuan komunikasi dan kepercayaan diri Anda"
  }
];

const courses = [
  {
    title: "Dasar-dasar Public Speaking",
    description: "Pelajari fundamental public speaking untuk pemula",
    category: "Basic",
    rating: "4.8",
    price: "Rp 299.000",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    instructor: {
      name: "John Doe",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg"
    }
  },
  {
    title: "Teknik Presentasi Profesional",
    description: "Tingkatkan kemampuan presentasi Anda ke level pro",
    category: "Advanced",
    rating: "4.9",
    price: "Rp 499.000",
    image: "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    instructor: {
      name: "Jane Smith",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg"
    }
  },
  {
    title: "Master Public Speaking",
    description: "Kuasai public speaking untuk berbagai situasi",
    category: "Expert",
    rating: "4.7",
    price: "Rp 699.000",
    image: "https://images.unsplash.com/photo-1544531585-9847b68c8c86?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    instructor: {
      name: "Mike Johnson",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg"
    }
  }
];

export default Index;
