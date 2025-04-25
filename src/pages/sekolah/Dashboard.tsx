
import { DashboardLayout } from "@/components/layouts/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Users, 
  School,
  Activity,
  CheckCircle
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const SekolahDashboard = () => {
  // Generate random member number
  const memberNumber = Math.random().toString().slice(2, 9);

  // Dummy data for activities
  const activities = [
    {
      id: 1,
      activity: "Penambahan member baru di Klub Debat",
      date: "2 jam yang lalu",
      user: "Admin Klub"
    },
    {
      id: 2,
      activity: "Pengajuan ujian untuk 5 member",
      date: "Kemarin, 14:30",
      user: "Admin Klub"
    },
    {
      id: 3,
      activity: "Update status kelulusan member",
      date: "Kemarin, 09:15",
      user: "Sistem"
    }
  ];

  return (
    <DashboardLayout role="sekolah">
      <div className="space-y-6">
        {/* Welcome Card */}
        <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-2">Selamat Datang di Komunitas FadPlus! 🎉</h2>
            <p className="text-lg">Nomor Anggota Anda: <span className="font-mono font-bold">{memberNumber}</span></p>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-6 flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-gray-500">Total Klub Aktif</p>
                <h3 className="text-2xl font-bold">3</h3>
              </div>
              <School className="h-8 w-8 text-blue-500" />
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-gray-500">Total Member</p>
                <h3 className="text-2xl font-bold">85</h3>
              </div>
              <Users className="h-8 w-8 text-green-500" />
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-gray-500">Status Pendaftaran</p>
                <Badge className="mt-1" variant="success">Aktif</Badge>
              </div>
              <CheckCircle className="h-8 w-8 text-green-500" />
            </CardContent>
          </Card>
        </div>

        {/* Activity Log */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-bold">Log Aktivitas</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Aktivitas</TableHead>
                  <TableHead>Pengguna</TableHead>
                  <TableHead>Waktu</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {activities.map((activity) => (
                  <TableRow key={activity.id}>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        <Activity size={16} className="text-gray-400" />
                        {activity.activity}
                      </div>
                    </TableCell>
                    <TableCell>{activity.user}</TableCell>
                    <TableCell>{activity.date}</TableCell>
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

export default SekolahDashboard;
