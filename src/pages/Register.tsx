
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import RegistrationForm from '@/components/RegistrationForm';

const Register = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1 bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-brand-blue mb-3">Pendaftaran Sekolah</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Daftarkan sekolah Anda untuk menjadi bagian dari jaringan FadPlus dan berikan siswa Anda kesempatan untuk mengembangkan keterampilan presentasi.
            </p>
          </div>
          
          <RegistrationForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Register;
