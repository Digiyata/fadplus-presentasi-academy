
import { DashboardLayout } from "@/components/layouts/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Users, 
  CheckCircle,
  Activity,
  ChevronRight
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
import { Button } from "@/components/ui/button";

const SekolahDashboard = () => {
  // Dummy data for dashboard metrics
  const stats = [
    {
      title: "Klub Aktif",
      value: 3,
      icon: <Users className="h-8 w-8 text-blue-500" />,
    },
    {
      title: "Total Member",
      value: 85,
      icon: <Users className="h-8 w-8 text-green-500" />,
    },
    {
      title: "Status Pendaftaran",
      value: "Aktif",
      icon: <CheckCircle className="h-8 w-8 text-green-500" />,
    }
  ];

  // Dummy data for recent activities
  const activities = [
    {
      id: 1,
      activity: "Klub Debat menambahkan member baru",
      date: "2 jam yang lalu",
      user: "Ibu Siti (Admin Klub)",
    },
    {
      id: 2,
      activity: "Sertifikat Presentasi Dasar diterbitkan",
      date: "Kemarin, 14:30",
      user: "System",
    },
    {
      id: 3,
      activity: "Ujian Presentasi Lanjutan dijadwalkan",
      date: "Kemarin, 09:15",
      user: "Bapak Joko (Admin Sekolah)",
    },
    {
      id: 4,
      activity: "Pertemuan pelatihan #5 selesai",
      date: "2 hari yang lalu",
      user: "Ibu Siti (Admin Klub)",
    },
    {
      id: 5,
      activity: "5 member baru ditambahkan",
      date: "3 hari yang lalu",
      user: "Bapak Joko (Admin Sekolah)",
    }
  ];

  return (
    <DashboardLayout role="sekolah">
      <h1 className="text-2xl font-bold mb-6">Dashboard Sekolah</h1>

      {/* Dashboard Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6 flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                <h3 className="text-3xl font-bold">{stat.value}</h3>
              </div>
              {stat.icon}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activities */}
      <Card className="mb-6">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-xl font-bold">Aktivitas Terbaru</CardTitle>
          <Button variant="ghost" size="sm" className="text-gray-500">
            Lihat Semua <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
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

      {/* School Information */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-bold">Informasi Sekolah</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-gray-500">Nama Sekolah</p>
                <p>SMA Negeri 3 Bandung</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Email</p>
                <p>info@sman3bdg.sch.id</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Penanggung Jawab</p>
                <p>Bapak Joko Widodo</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Telepon</p>
                <p>022-7654321</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Alamat</p>
                <p>Jl. Belitung No. 8, Bandung, Jawa Barat</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Tanggal Bergabung</p>
                <p>12 Januari 2023</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default SekolahDashboard;
