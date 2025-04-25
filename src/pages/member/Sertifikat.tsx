
import { DashboardLayout } from "@/components/layouts/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Award, Download, Trophy } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const MemberSertifikat = () => {
  // Dummy data for certificates
  const certificates = [
    {
      id: 1,
      jenjang: "Dasar",
      tanggalLulus: "20 Maret 2025",
      available: true
    },
    {
      id: 2,
      jenjang: "Terampil",
      tanggalLulus: "Belum lulus",
      available: false
    },
    {
      id: 3,
      jenjang: "Mahir",
      tanggalLulus: "Belum lulus",
      available: false
    }
  ];

  return (
    <DashboardLayout role="member">
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Sertifikat Saya</h1>

        {/* Certificate Summary */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-32 h-32 rounded-full bg-blue-100 flex items-center justify-center">
                <Award size={64} className="text-blue-500" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl font-bold mb-1">Sertifikasi Presentasi</h2>
                <p className="text-gray-500 mb-4">Program FadPlus</p>
                
                <div className="flex flex-wrap gap-3">
                  <Badge className="py-1 px-3 bg-green-100 text-green-800 hover:bg-green-100">Dasar ✓</Badge>
                  <Badge className="py-1 px-3 bg-gray-100 text-gray-800 hover:bg-gray-100">Terampil</Badge>
                  <Badge className="py-1 px-3 bg-gray-100 text-gray-800 hover:bg-gray-100">Mahir</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Certificates Table */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-amber-500" />
              Daftar Sertifikat
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Jenjang</TableHead>
                  <TableHead>Tanggal Lulus</TableHead>
                  <TableHead>Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {certificates.map((cert) => (
                  <TableRow key={cert.id}>
                    <TableCell className="font-medium">{cert.jenjang}</TableCell>
                    <TableCell>
                      {cert.available ? cert.tanggalLulus : (
                        <span className="text-gray-500">{cert.tanggalLulus}</span>
                      )}
                    </TableCell>
                    <TableCell>
                      {cert.available ? (
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-2" /> Unduh Sertifikat
                        </Button>
                      ) : (
                        <span className="text-gray-500 text-sm">Belum tersedia</span>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default MemberSertifikat;
