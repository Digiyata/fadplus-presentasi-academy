
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
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Eye, Pencil, Trash, Plus } from "lucide-react";
import { toast } from "sonner";

const KlubMember = () => {
  // Dummy data for members
  const members = [
    {
      id: 1,
      name: "Anisa Putri",
      nik: "3273012345678901",
      ttl: "Jakarta, 15 Mei 2007",
      status: "Lengkap"
    },
    {
      id: 2,
      name: "Budi Santoso",
      nik: "3273012345678902",
      ttl: "Bandung, 20 Juni 2006",
      status: "Lengkap" 
    },
    {
      id: 3,
      name: "Cindy Aulia",
      nik: "3273012345678903",
      ttl: "Surabaya, 10 Januari 2007",
      status: "Belum Lengkap"
    },
    {
      id: 4,
      name: "Dodi Permana",
      nik: "3273012345678904",
      ttl: "Medan, 5 Maret 2006",
      status: "Lengkap"
    },
  ];

  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Data member berhasil ditambahkan");
    setShowForm(false);
  };

  return (
    <DashboardLayout role="klub">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Kelola Member</h1>
          <Button onClick={() => setShowForm(!showForm)}>
            <Plus className="mr-2 h-4 w-4" /> Tambah Member
          </Button>
        </div>

        {showForm && (
          <Card>
            <CardHeader>
              <CardTitle>Form Tambah Member</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nama Lengkap</Label>
                    <Input id="name" placeholder="Nama lengkap member" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="nik">NIK</Label>
                    <Input id="nik" placeholder="Nomor Induk Kependudukan" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="birthPlace">Tempat Lahir</Label>
                    <Input id="birthPlace" placeholder="Tempat lahir" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="birthDate">Tanggal Lahir</Label>
                    <Input id="birthDate" type="date" />
                  </div>
                </div>
                <div className="flex justify-end gap-2">
                  <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
                    Batal
                  </Button>
                  <Button type="submit">Simpan</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        <Card>
          <CardHeader>
            <CardTitle>Daftar Member</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nama</TableHead>
                  <TableHead>NIK</TableHead>
                  <TableHead>Tempat, Tanggal Lahir</TableHead>
                  <TableHead>Status Data</TableHead>
                  <TableHead>Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {members.map((member) => (
                  <TableRow key={member.id}>
                    <TableCell className="font-medium">{member.name}</TableCell>
                    <TableCell>{member.nik}</TableCell>
                    <TableCell>{member.ttl}</TableCell>
                    <TableCell>
                      <Badge variant={member.status === "Lengkap" ? "default" : "secondary"}>
                        {member.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="outline" size="icon">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="icon">
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="icon">
                          <Trash className="h-4 w-4" />
                        </Button>
                      </div>
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

export default KlubMember;
