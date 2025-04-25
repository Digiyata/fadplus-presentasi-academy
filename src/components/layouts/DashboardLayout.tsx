
import { useState, ReactNode } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  ChevronLeft, 
  ChevronRight, 
  LogOut, 
  User,
  Settings,
  Home,
  Layers,
  Users,
  FileText,
  School,
  Award,
  BookOpen,
  Calendar,
  Clock,
  UserCheck
} from "lucide-react";
import { toast } from "sonner";

interface SidebarItemProps {
  icon: ReactNode;
  label: string;
  href: string;
  active: boolean;
}

const SidebarItem = ({ icon, label, href, active }: SidebarItemProps) => {
  return (
    <Link
      to={href}
      className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
        active 
          ? "bg-sidebar-accent text-sidebar-accent-foreground" 
          : "text-sidebar-foreground/80 hover:text-sidebar-foreground hover:bg-sidebar-accent/50"
      }`}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
};

interface DashboardLayoutProps {
  children: ReactNode;
  role: 'admin' | 'sekolah' | 'klub' | 'member';
}

export function DashboardLayout({ children, role }: DashboardLayoutProps) {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Get current path
  const currentPath = location.pathname;

  // Define navigation items based on user role
  const getNavItems = () => {
    switch (role) {
      case 'admin':
        return [
          { icon: <Home size={20} />, label: "Dashboard", href: "/admin/dashboard" },
          { icon: <School size={20} />, label: "Sekolah", href: "/admin/sekolah" },
          { icon: <Layers size={20} />, label: "Klub", href: "/admin/klub" },
          { icon: <Users size={20} />, label: "Member", href: "/admin/member" },
          { icon: <Award size={20} />, label: "Sertifikat", href: "/admin/sertifikat" },
          { icon: <Settings size={20} />, label: "Pengaturan", href: "/admin/pengaturan" },
        ];
      case 'sekolah':
        return [
          { icon: <Home size={20} />, label: "Dashboard", href: "/sekolah/dashboard" },
          { icon: <Layers size={20} />, label: "Klub", href: "/sekolah/klub" },
          { icon: <Users size={20} />, label: "Member", href: "/sekolah/member" },
          { icon: <FileText size={20} />, label: "Ujian", href: "/sekolah/ujian" },
          { icon: <Award size={20} />, label: "Sertifikat", href: "/sekolah/sertifikat" },
        ];
      case 'klub':
        return [
          { icon: <Home size={20} />, label: "Dashboard", href: "/klub/dashboard" },
          { icon: <Users size={20} />, label: "Member", href: "/klub/member" },
          { icon: <Calendar size={20} />, label: "Absensi", href: "/klub/absensi" },
          { icon: <FileText size={20} />, label: "Ujian", href: "/klub/ujian" },
          { icon: <Award size={20} />, label: "Sertifikat", href: "/klub/sertifikat" },
        ];
      case 'member':
        return [
          { icon: <Home size={20} />, label: "Dashboard", href: "/member/dashboard" },
          { icon: <BookOpen size={20} />, label: "Pelatihan", href: "/member/pelatihan" },
          { icon: <FileText size={20} />, label: "Ujian", href: "/member/ujian" },
          { icon: <Award size={20} />, label: "Sertifikat", href: "/member/sertifikat" },
        ];
      default:
        return [];
    }
  };

  const navItems = getNavItems();

  const handleLogout = () => {
    toast.success("Berhasil logout");
    navigate("/");
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside
        className={`bg-sidebar transition-all duration-300 flex flex-col ${
          collapsed ? "w-16" : "w-64"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center p-4 h-16">
          {!collapsed && (
            <Link to="/" className="text-sidebar-foreground font-bold text-xl">
              FadPlus
            </Link>
          )}
          <Button
            variant="ghost"
            size="icon"
            className="text-sidebar-foreground hover:bg-sidebar-accent"
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? <ChevronRight /> : <ChevronLeft />}
          </Button>
        </div>

        <Separator className="bg-sidebar-border" />

        {/* User Profile */}
        <div className="p-4 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-sidebar-accent flex items-center justify-center">
            <User size={20} className="text-sidebar-accent-foreground" />
          </div>
          {!collapsed && (
            <div className="truncate">
              <p className="text-sidebar-foreground font-medium truncate">
                {role === 'admin' && 'Admin Utama'}
                {role === 'sekolah' && 'Admin Sekolah'}
                {role === 'klub' && 'Admin Klub'}
                {role === 'member' && 'Member Club'}
              </p>
              <p className="text-sidebar-foreground/70 text-xs truncate">
                {role === 'admin' && 'admin@fadplus.com'}
                {role === 'sekolah' && 'sekolah@fadplus.com'}
                {role === 'klub' && 'club@fadplus.com'}
                {role === 'member' && 'member@fadplus.com'}
              </p>
            </div>
          )}
        </div>

        <Separator className="bg-sidebar-border" />

        {/* Navigation */}
        <div className="flex-1 p-3 space-y-1">
          {navItems.map((item, index) => (
            <SidebarItem
              key={index}
              icon={item.icon}
              label={collapsed ? "" : item.label}
              href={item.href}
              active={currentPath === item.href}
            />
          ))}
        </div>

        {/* Logout */}
        <div className="p-3">
          <Button
            variant="ghost"
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors justify-${collapsed ? 'center' : 'start'} text-sidebar-foreground/80 hover:text-sidebar-foreground hover:bg-sidebar-accent/50`}
            onClick={handleLogout}
          >
            <LogOut size={20} />
            {!collapsed && <span>Logout</span>}
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden bg-gray-50">
        {/* Top navigation bar */}
        <header className="bg-white h-16 border-b flex items-center px-4 shadow-sm">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-semibold text-gray-800">
              {role === 'admin' && 'Admin Dashboard'}
              {role === 'sekolah' && 'Dashboard Sekolah'}
              {role === 'klub' && 'Dashboard Klub'}
              {role === 'member' && 'Dashboard Member'}
            </h1>
            <div className="flex items-center gap-2">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => navigate('/')}
              >
                Kembali ke Beranda
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={handleLogout}
              >
                <LogOut size={16} className="mr-1" />
                Logout
              </Button>
            </div>
          </div>
        </header>

        {/* Page content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="container mx-auto">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};
