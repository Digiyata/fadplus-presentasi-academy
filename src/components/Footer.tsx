
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-brand-purple-light to-brand-pink bg-clip-text text-transparent">FadPlus</h3>
            <p className="mb-4 text-gray-300">
              Platform pelatihan public speaking dan presentasi untuk siswa sekolah 
              yang didedikasikan untuk membangun kepercayaan diri dan keterampilan 
              komunikasi generasi muda Indonesia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Menu</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/" className="hover:text-brand-purple-light transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link to="/tentang" className="hover:text-brand-purple-light transition-colors">
                  Tentang
                </Link>
              </li>
              <li>
                <Link to="/program" className="hover:text-brand-purple-light transition-colors">
                  Program
                </Link>
              </li>
              <li>
                <Link to="/mitrasekolah" className="hover:text-brand-purple-light transition-colors">
                  Mitra Sekolah
                </Link>
              </li>
              <li>
                <Link to="/persyaratan" className="hover:text-brand-purple-light transition-colors">
                  Persyaratan
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Hubungi Kami</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Email: info@fadplus.com</li>
              <li>Telepon: +6221-5555-7777</li>
              <li>
                Alamat: Jl. Pendidikan No. 123, Jakarta Selatan, Indonesia
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-bold mb-4">Media Sosial</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-brand-purple-light transition-colors">
                Instagram
              </a>
              <a href="#" className="text-gray-300 hover:text-brand-purple-light transition-colors">
                Facebook
              </a>
              <a href="#" className="text-gray-300 hover:text-brand-purple-light transition-colors">
                YouTube
              </a>
              <a href="#" className="text-gray-300 hover:text-brand-purple-light transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} FadPlus. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/terms" className="text-gray-400 text-sm hover:text-brand-purple-light transition-colors">
              Syarat & Ketentuan
            </Link>
            <Link to="/privacy" className="text-gray-400 text-sm hover:text-brand-purple-light transition-colors">
              Kebijakan Privasi
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
