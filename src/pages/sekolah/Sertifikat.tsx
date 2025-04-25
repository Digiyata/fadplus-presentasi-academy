
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
import { Download } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const SekolahSertifikat = () => {
  // Dummy data for certificates
  const certificates = [
    {
      id: 1,
      name: "Anisa Putri",
      jenjang: "Dasar",
      tanggalUjian: "15 Maret 2025",
      status: "Terbit"
    },
    {
      id: 2,
      name: "Farah Diba",
      jenjang: "Dasar",
      tanggalUjian: "15 Maret 2025",
      status: "Terbit"
    },
    {
      id: 3,
      name: "Denny Wijaya",
      jenjang: "Dasar",
      tanggalUjian: "10 Februari 2025",
      status: "Terbit"
    },
    {
      id: 4,
      name: "Hendra Kusuma",
      jenjang: "Terampil",
      tanggalUjian: "5 Januari 2025",
      status: "Terbit"
    }
  ];

  return (
    <DashboardLayout role="sekolah">
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Sertifikat Member</h1>

        <Card>
          <CardHeader>
            <CardTitle>Member yang Lolos Ujian</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nama</TableHead>
                  <TableHead>Jenjang</TableHead>
                  <TableHead>Tanggal Ujian</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Sertifikat</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {certificates.map((cert) => (
                  <TableRow key={cert.id}>
                    <TableCell className="font-medium">{cert.name}</TableCell>
                    <TableCell>{cert.jenjang}</TableCell>
                    <TableCell>{cert.tanggalUjian}</TableCell>
                    <TableCell>
                      <Badge variant="default">{cert.status}</Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" /> Unduh
                      </Button>
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

export default SekolahSertifikat;
