
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, Info, Book, Users, FileText, LogIn, UserPlus } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md w-full">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Site Name */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl bg-gradient-to-r from-brand-purple-light to-brand-pink bg-clip-text text-transparent">FadPlus</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-2">
            <NavLink to="/" icon={<Home size={18} />} label="Beranda" onClick={closeMenu} />
            <NavLink to="/tentang" icon={<Info size={18} />} label="Tentang" onClick={closeMenu} />
            <NavLink to="/program" icon={<Book size={18} />} label="Program" onClick={closeMenu} />
            <NavLink to="/mitrasekolah" icon={<Users size={18} />} label="Mitra Sekolah" onClick={closeMenu} />
            <NavLink to="/persyaratan" icon={<FileText size={18} />} label="Persyaratan" onClick={closeMenu} />
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-2">
            <Button variant="outline" asChild className="border-brand-purple-light text-brand-purple-medium hover:bg-brand-purple-light/10">
              <Link to="/login" className="flex items-center gap-1">
                <LogIn size={18} />
                Login
              </Link>
            </Button>
            <Button className="bg-brand-orange hover:bg-amber-500 text-white" asChild>
              <Link to="/register" className="flex items-center gap-1">
                <UserPlus size={18} />
                Register
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2 animate-fade-in">
            <MobileNavLink to="/" icon={<Home size={18} />} label="Beranda" onClick={closeMenu} />
            <MobileNavLink to="/tentang" icon={<Info size={18} />} label="Tentang" onClick={closeMenu} />
            <MobileNavLink to="/program" icon={<Book size={18} />} label="Program" onClick={closeMenu} />
            <MobileNavLink to="/mitrasekolah" icon={<Users size={18} />} label="Mitra Sekolah" onClick={closeMenu} />
            <MobileNavLink to="/persyaratan" icon={<FileText size={18} />} label="Persyaratan" onClick={closeMenu} />
            
            <div className="flex flex-col pt-2 space-y-2 border-t border-gray-200">
              <Button variant="outline" asChild className="w-full justify-start border-brand-purple-light text-brand-purple-medium">
                <Link to="/login" className="flex items-center gap-2">
                  <LogIn size={18} />
                  Login
                </Link>
              </Button>
              <Button className="w-full justify-start bg-brand-orange hover:bg-amber-500 text-white" asChild>
                <Link to="/register" className="flex items-center gap-2">
                  <UserPlus size={18} />
                  Register
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

interface NavLinkProps {
  to: string;
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

const NavLink = ({ to, label, icon, onClick }: NavLinkProps) => {
  return (
    <Link
      to={to}
      className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-brand-purple-medium hover:bg-gray-100 flex items-center gap-1 transition-colors"
      onClick={onClick}
    >
      {icon}
      {label}
    </Link>
  );
};

const MobileNavLink = ({ to, label, icon, onClick }: NavLinkProps) => {
  return (
    <Link
      to={to}
      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-purple-medium hover:bg-gray-100 flex items-center gap-2"
      onClick={onClick}
    >
      {icon}
      {label}
    </Link>
  );
};

export default NavBar;
