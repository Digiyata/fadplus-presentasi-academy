
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
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const KlubSertifikat = () => {
  // Dummy data for certificates
  const certificates = [
    {
      id: 1,
      name: "Anisa Putri",
      jenjang: "Dasar",
      nilai: 90,
      status: "Terbit"
    },
    {
      id: 2,
      name: "Budi Santoso",
      jenjang: "Dasar",
      nilai: 85,
      status: "Terbit"
    },
    {
      id: 3,
      name: "Cindy Aulia",
      jenjang: "Dasar",
      nilai: 78,
      status: "Tertunda"
    },
    {
      id: 4,
      name: "Dodi Permana",
      jenjang: "Terampil",
      nilai: 88,
      status: "Terbit"
    },
  ];

  return (
    <DashboardLayout role="klub">
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Sertifikat Member</h1>

        <Card>
          <CardHeader>
            <CardTitle>Daftar Sertifikat</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nama</TableHead>
                  <TableHead>Jenjang</TableHead>
                  <TableHead>Nilai</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {certificates.map((cert) => (
                  <TableRow key={cert.id}>
                    <TableCell className="font-medium">{cert.name}</TableCell>
                    <TableCell>{cert.jenjang}</TableCell>
                    <TableCell>{cert.nilai}</TableCell>
                    <TableCell>
                      <Badge variant={cert.status === "Terbit" ? "default" : "secondary"}>
                        {cert.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {cert.status === "Terbit" && (
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-2" /> Unduh
                        </Button>
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

export default KlubSertifikat;
