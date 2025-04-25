
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
import { Plus, Eye, Pencil, Trash } from "lucide-react";

const SekolahKlub = () => {
  // Dummy data for clubs
  const clubs = [
    {
      id: 1,
      name: "Klub Debat",
      memberCount: 23,
      leader: "Ahmad Fadhil"
    },
    {
      id: 2,
      name: "Klub Presentasi",
      memberCount: 18,
      leader: "Sinta Wijaya"
    },
    {
      id: 3,
      name: "Klub Public Speaking",
      memberCount: 15,
      leader: "Budi Santoso"
    }
  ];

  return (
    <DashboardLayout role="sekolah">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Kelola Klub</h1>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Tambah Klub
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Daftar Klub</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nama Klub</TableHead>
                  <TableHead>Jumlah Member</TableHead>
                  <TableHead>Ketua Klub</TableHead>
                  <TableHead>Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {clubs.map((club) => (
                  <TableRow key={club.id}>
                    <TableCell className="font-medium">{club.name}</TableCell>
                    <TableCell>{club.memberCount} orang</TableCell>
                    <TableCell>{club.leader}</TableCell>
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

export default SekolahKlub;
