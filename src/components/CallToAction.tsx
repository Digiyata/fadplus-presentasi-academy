
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Siap Bergabung dengan FadPlus?
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Tingkatkan keterampilan presentasi dan public speaking siswa di sekolah Anda. 
          Daftarkan sekolah Anda sekarang dan jadilah bagian dari jaringan 
          pendidikan inovatif se-Indonesia!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100" asChild>
            <Link to="/program">Pelajari Program</Link>
          </Button>
          <Button size="lg" variant="secondary" className="bg-brand-red hover:bg-red-600" asChild>
            <Link to="/register">Daftar Sekarang</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
