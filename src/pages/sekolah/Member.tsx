
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
import { Progress } from "@/components/ui/progress";

const SekolahMember = () => {
  // Dummy data for members
  const members = [
    {
      id: 1,
      name: "Anisa Putri",
      club: "Klub Debat",
      progress: 75,
      status: "Aktif"
    },
    {
      id: 2,
      name: "Denny Wijaya",
      club: "Klub Presentasi",
      progress: 40,
      status: "Aktif"
    },
    {
      id: 3,
      name: "Farah Diba",
      club: "Klub Debat",
      progress: 90,
      status: "Aktif"
    },
    {
      id: 4,
      name: "Galih Pratama",
      club: "Klub Public Speaking",
      progress: 20,
      status: "Baru"
    },
    {
      id: 5,
      name: "Hendra Kusuma",
      club: "Klub Presentasi",
      progress: 65,
      status: "Aktif"
    }
  ];

  return (
    <DashboardLayout role="sekolah">
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Daftar Member</h1>

        <Card>
          <CardHeader>
            <CardTitle>Member Per Klub</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nama</TableHead>
                  <TableHead>Klub</TableHead>
                  <TableHead>Progress Pelatihan</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {members.map((member) => (
                  <TableRow key={member.id}>
                    <TableCell className="font-medium">{member.name}</TableCell>
                    <TableCell>{member.club}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Progress value={member.progress} className="h-2 w-[100px]" />
                        <span className="text-sm text-muted-foreground">{member.progress}%</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={member.status === "Aktif" ? "default" : "secondary"}>
                        {member.status}
                      </Badge>
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

export default SekolahMember;
