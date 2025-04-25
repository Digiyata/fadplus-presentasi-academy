
import { useState } from "react";
import { DashboardLayout } from "@/components/layouts/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Eye, Download, FileText, Search } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const AdminSertifikat = () => {
  // Dummy data for certificates
  const [certificates, setCertificates] = useState([
    {
      id: 1,
      memberName: "Arya Pratama",
      club: "SMAN 1 Jakarta Presenter Club",
      school: "SMA Negeri 1 Jakarta",
      level: "Mahir",
      score: 95,
      status: "issued",
      issueDate: "12 Mar 2024",
      certNumber: "FP-MHR-2024-0001"
    },
    {
      id: 2,
      memberName: "Sinta Dewi",
      club: "Telkom Speech Club",
      school: "SMK Telkom Jakarta",
      level: "Terampil",
      score: 88,
      status: "issued",
      issueDate: "15 Mar 2024",
      certNumber: "FP-TRM-2024-0002"
    },
    {
      id: 3,
      memberName: "Maya Indah",
      club: "SMA Cendekia Speaking Club",
      school: "SMA Cendekia",
      level: "Terampil",
      score: 92,
      status: "issued",
      issueDate: "20 Mar 2024",
      certNumber: "FP-TRM-2024-0003"
    },
    {
      id: 4,
      memberName: "Dinda Putri",
      club: "Klub Presentasi SMAN 3 Bandung",
      school: "SMA Negeri 3 Bandung",
      level: "Dasar",
      score: 85,
      status: "pending",
      issueDate: "-",
      certNumber: "-"
    },
    {
      id: 5,
      memberName: "Rafi Ahmad",
      club: "Public Speaking Club SMA Harapan Bangsa",
      school: "SMA Harapan Bangsa",
      level: "Dasar",
      score: 80,
      status: "pending",
      issueDate: "-",
      certNumber: "-"
    }
  ]);

  // Search state
  const [searchTerm, setSearchTerm] = useState("");
  
  const handleDownload = (id: number) => {
    toast.success("Sertifikat sedang diunduh");
  };

  const handleIssueCertificate = (id: number) => {
    const updatedCertificates = certificates.map(cert => {
      if (cert.id === id) {
        const certNumber = `FP-${cert.level === "Dasar" ? "DSR" : cert.level === "Terampil" ? "TRM" : "MHR"}-2024-${String(certificates.filter(c => c.status === "issued").length + 1).padStart(4, '0')}`;
        return {
          ...cert,
          status: "issued",
          issueDate: new Date().toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
          }),
          certNumber
        };
      }
      return cert;
    });
    
    setCertificates(updatedCertificates);
    toast.success("Sertifikat berhasil diterbitkan");
  };
  
  // Render certificate status badge
  const renderStatusBadge = (status: string) => {
    switch(status) {
      case 'issued':
        return (
          <Badge variant="outline" className="border-green-500 text-green-600">
            Terbit
          </Badge>
        );
      case 'pending':
        return (
          <Badge variant="outline" className="border-yellow-500 text-yellow-600">
            Menunggu
          </Badge>
        );
      default:
        return null;
    }
  };
  
  // Filter certificates based on search
  const filteredCertificates = certificates.filter(cert => 
    cert.memberName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cert.club.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cert.school.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cert.certNumber.includes(searchTerm)
  );

  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Manajemen Sertifikat</h1>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Daftar Sertifikat</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Cari sertifikat..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nama</TableHead>
                    <TableHead className="hidden md:table-cell">Club / Sekolah</TableHead>
                    <TableHead>Jenjang</TableHead>
                    <TableHead>No. Sertifikat</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Aksi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredCertificates.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center h-24">
                        Tidak ada sertifikat yang sesuai dengan pencarian
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredCertificates.map((cert) => (
                      <TableRow key={cert.id}>
                        <TableCell className="font-medium">{cert.memberName}</TableCell>
                        <TableCell className="hidden md:table-cell">
                          <div>
                            <p className="font-medium">{cert.club}</p>
                            <p className="text-sm text-muted-foreground">{cert.school}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge 
                            variant="outline" 
                            className={
                              cert.level === "Dasar" 
                                ? "border-blue-500 text-blue-600" 
                                : cert.level === "Terampil"
                                  ? "border-green-500 text-green-600"
                                  : "border-purple-500 text-purple-600"
                            }
                          >
                            {cert.level}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          {cert.certNumber !== "-" ? cert.certNumber : <span className="text-muted-foreground">-</span>}
                        </TableCell>
                        <TableCell>{renderStatusBadge(cert.status)}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant="outline" size="icon">
                                  <Eye className="h-4 w-4" />
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-2xl">
                                <DialogHeader>
                                  <DialogTitle>Detail Sertifikat</DialogTitle>
                                  <DialogDescription>
                                    Informasi lengkap sertifikat
                                  </DialogDescription>
                                </DialogHeader>
                                <div className="py-4">
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                      <p className="text-sm font-medium">Nama Peserta</p>
                                      <p className="text-muted-foreground">{cert.memberName}</p>
                                    </div>
                                    <div className="space-y-1">
                                      <p className="text-sm font-medium">Jenjang</p>
                                      <Badge 
                                        variant="outline" 
                                        className={
                                          cert.level === "Dasar" 
                                            ? "border-blue-500 text-blue-600" 
                                            : cert.level === "Terampil"
                                              ? "border-green-500 text-green-600"
                                              : "border-purple-500 text-purple-600"
                                        }
                                      >
                                        {cert.level}
                                      </Badge>
                                    </div>
                                    <div className="space-y-1">
                                      <p className="text-sm font-medium">Klub</p>
                                      <p className="text-muted-foreground">{cert.club}</p>
                                    </div>
                                    <div className="space-y-1">
                                      <p className="text-sm font-medium">Sekolah</p>
                                      <p className="text-muted-foreground">{cert.school}</p>
                                    </div>
                                    <div className="space-y-1">
                                      <p className="text-sm font-medium">Nilai</p>
                                      <p className="text-muted-foreground">{cert.score}</p>
                                    </div>
                                    <div className="space-y-1">
                                      <p className="text-sm font-medium">Status</p>
                                      {renderStatusBadge(cert.status)}
                                    </div>
                                    <div className="space-y-1">
                                      <p className="text-sm font-medium">Tanggal Terbit</p>
                                      <p className="text-muted-foreground">
                                        {cert.issueDate !== "-" ? cert.issueDate : <span>-</span>}
                                      </p>
                                    </div>
                                    <div className="space-y-1">
                                      <p className="text-sm font-medium">Nomor Sertifikat</p>
                                      <p className="text-muted-foreground">
                                        {cert.certNumber !== "-" ? cert.certNumber : <span>-</span>}
                                      </p>
                                    </div>
                                  </div>
                                  
                                  {cert.status === "issued" && (
                                    <div className="mt-8 border rounded-md p-6">
                                      <div className="flex justify-center mb-4">
                                        <FileText className="h-16 w-16 text-blue-500" />
                                      </div>
                                      <div className="text-center">
                                        <h3 className="font-bold text-lg mb-2">Pratinjau Sertifikat</h3>
                                        <p className="text-muted-foreground mb-4">
                                          Sertifikat FadPlus - {cert.level} - {cert.memberName}
                                        </p>
                                        <Button 
                                          className="mt-2"
                                          onClick={() => handleDownload(cert.id)}
                                        >
                                          <Download className="mr-2 h-4 w-4" /> Unduh Sertifikat
                                        </Button>
                                      </div>
                                    </div>
                                  )}
                                </div>
                                <DialogFooter>
                                  {cert.status === "pending" && (
                                    <Button onClick={() => handleIssueCertificate(cert.id)}>
                                      Terbitkan Sertifikat
                                    </Button>
                                  )}
                                </DialogFooter>
                              </DialogContent>
                            </Dialog>
                            
                            {cert.status === "issued" && (
                              <Button 
                                variant="outline" 
                                size="icon"
                                onClick={() => handleDownload(cert.id)}
                              >
                                <Download className="h-4 w-4" />
                              </Button>
                            )}
                            
                            {cert.status === "pending" && (
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleIssueCertificate(cert.id)}
                              >
                                Terbitkan
                              </Button>
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
        
        {/* Certificate Template */}
        <Card>
          <CardHeader>
            <CardTitle>Template Sertifikat</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="border rounded-md p-6">
              <div className="flex justify-center">
                {/* Dummy certificate template */}
                <div className="w-full max-w-3xl aspect-[1.4] border-2 border-dashed border-gray-300 bg-gray-50 flex items-center justify-center p-8">
                  <div className="text-center">
                    <FileText className="h-24 w-24 mx-auto text-gray-400 mb-4" />
                    <h3 className="text-xl font-bold mb-2">Template Sertifikat FadPlus</h3>
                    <p className="text-muted-foreground mb-4">
                      Template ini digunakan untuk menerbitkan semua sertifikat FadPlus
                    </p>
                    <Button>
                      Kelola Template
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default AdminSertifikat;
