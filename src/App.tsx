
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Public pages
import Index from "./pages/Index";
import Tentang from "./pages/Tentang";
import Program from "./pages/Program";
import MitraSekolah from "./pages/MitraSekolah";
import Persyaratan from "./pages/Persyaratan";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";

// Admin Dashboard
import AdminDashboard from "./pages/admin/Dashboard";
import AdminMateri from "./pages/admin/Materi";
import AdminSekolah from "./pages/admin/Sekolah";
import AdminKlub from "./pages/admin/Klub";
import AdminMember from "./pages/admin/Member";
import AdminSertifikat from "./pages/admin/Sertifikat";
import AdminPengaturan from "./pages/admin/Pengaturan";

// Sekolah Dashboard
import SekolahDashboard from "./pages/sekolah/Dashboard";
import SekolahKlub from "./pages/sekolah/Klub";
import SekolahMember from "./pages/sekolah/Member";
import SekolahUjian from "./pages/sekolah/Ujian";
import SekolahSertifikat from "./pages/sekolah/Sertifikat";

// Klub Dashboard
import KlubDashboard from "./pages/klub/Dashboard";
import KlubMember from "./pages/klub/Member";
import KlubAbsensi from "./pages/klub/Absensi";
import KlubUjian from "./pages/klub/Ujian";
import KlubSertifikat from "./pages/klub/Sertifikat";

// Member Dashboard
import MemberDashboard from "./pages/member/Dashboard";
import MemberMateri from "./pages/member/Materi";
import MemberPelatihan from "./pages/member/Pelatihan";
import MemberUjian from "./pages/member/Ujian";
import MemberSertifikat from "./pages/member/Sertifikat";

// Theme Provider
import { ThemeProvider } from "@/components/ThemeProvider";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="fadplus-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Index />} />
            <Route path="/tentang" element={<Tentang />} />
            <Route path="/program" element={<Program />} />
            <Route path="/mitrasekolah" element={<MitraSekolah />} />
            <Route path="/persyaratan" element={<Persyaratan />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Admin Routes */}
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/materi" element={<AdminMateri />} />
            <Route path="/admin/sekolah" element={<AdminSekolah />} />
            <Route path="/admin/klub" element={<AdminKlub />} />
            <Route path="/admin/member" element={<AdminMember />} />
            <Route path="/admin/sertifikat" element={<AdminSertifikat />} />
            <Route path="/admin/pengaturan" element={<AdminPengaturan />} />

            {/* Sekolah Routes */}
            <Route path="/sekolah/dashboard" element={<SekolahDashboard />} />
            <Route path="/sekolah/klub" element={<SekolahKlub />} />
            <Route path="/sekolah/member" element={<SekolahMember />} />
            <Route path="/sekolah/ujian" element={<SekolahUjian />} />
            <Route path="/sekolah/sertifikat" element={<SekolahSertifikat />} />

            {/* Klub Routes */}
            <Route path="/klub/dashboard" element={<KlubDashboard />} />
            <Route path="/klub/member" element={<KlubMember />} />
            <Route path="/klub/absensi" element={<KlubAbsensi />} />
            <Route path="/klub/ujian" element={<KlubUjian />} />
            <Route path="/klub/sertifikat" element={<KlubSertifikat />} />

            {/* Member Routes */}
            <Route path="/member/dashboard" element={<MemberDashboard />} />
            <Route path="/member/materi" element={<MemberMateri />} />
            <Route path="/member/pelatihan" element={<MemberPelatihan />} />
            <Route path="/member/ujian" element={<MemberUjian />} />
            <Route path="/member/sertifikat" element={<MemberSertifikat />} />

            {/* 404 Page */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
