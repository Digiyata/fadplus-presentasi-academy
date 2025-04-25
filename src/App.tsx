
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

// Sekolah Dashboard
import SekolahDashboard from "./pages/sekolah/Dashboard";

// Klub Dashboard
import KlubDashboard from "./pages/klub/Dashboard";

// Member Dashboard
import MemberDashboard from "./pages/member/Dashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
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
          <Route path="/admin/sekolah" element={<AdminDashboard />} />
          <Route path="/admin/klub" element={<AdminDashboard />} />
          <Route path="/admin/member" element={<AdminDashboard />} />
          <Route path="/admin/sertifikat" element={<AdminDashboard />} />
          <Route path="/admin/pengaturan" element={<AdminDashboard />} />

          {/* Sekolah Routes */}
          <Route path="/sekolah/dashboard" element={<SekolahDashboard />} />
          <Route path="/sekolah/klub" element={<SekolahDashboard />} />
          <Route path="/sekolah/member" element={<SekolahDashboard />} />
          <Route path="/sekolah/ujian" element={<SekolahDashboard />} />
          <Route path="/sekolah/sertifikat" element={<SekolahDashboard />} />

          {/* Klub Routes */}
          <Route path="/klub/dashboard" element={<KlubDashboard />} />
          <Route path="/klub/member" element={<KlubDashboard />} />
          <Route path="/klub/absensi" element={<KlubDashboard />} />
          <Route path="/klub/ujian" element={<KlubDashboard />} />
          <Route path="/klub/sertifikat" element={<KlubDashboard />} />

          {/* Member Routes */}
          <Route path="/member/dashboard" element={<MemberDashboard />} />
          <Route path="/member/pelatihan" element={<MemberDashboard />} />
          <Route path="/member/ujian" element={<MemberDashboard />} />
          <Route path="/member/sertifikat" element={<MemberDashboard />} />

          {/* 404 Page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
