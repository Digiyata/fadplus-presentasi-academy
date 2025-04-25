
import { DashboardLayout } from "@/components/layouts/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Users, 
  BarChart,
  Activity,
  Clock,
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
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const KlubDashboard = () => {
  // Dummy data for dashboard metrics
  const stats = [
    {
      title: "Total Member",
      value: 28,
      icon: <Users className="h-8 w-8 text-blue-500" />,
    },
    {
      title: "Progress Umum",
      value: "65%",
      icon: <BarChart className="h-8 w-8 text-green-500" />,
    }
  ];

  // Dummy data for member activities
  const memberActivities = [
    {
      id: 1,
      member: "Anisa Putri",
      activity: "Mengunggah materi presentasi",
      time: "1 jam yang lalu",
      status: "completed"
    },
    {
      id: 2,
      member: "Budi Santoso",
      activity: "Menghadiri pertemuan latihan",
      time: "3 jam yang lalu",
      status: "completed"
    },
    {
      id: 3,
      member: "Cindy Wijaya",
      activity: "Mendaftar ujian presentasi dasar",
      time: "Kemarin, 15:30",
      status: "pending"
    },
    {
      id: 4,
      member: "Denny Pratama",
      activity: "Menyelesaikan modul pelatihan",
      time: "Kemarin, 10:15",
      status: "completed"
    },
    {
      id: 5,
      member: "Elsa Safitri",
      activity: "Mengajukan sertifikasi",
      time: "2 hari yang lalu",
      status: "pending"
    }
  ];

  // Dummy data for member progress
  const memberProgress = [
    { name: "Tingkat Dasar", progress: 85 },
    { name: "Tingkat Menengah", progress: 60 },
    { name: "Tingkat Lanjutan", progress: 35 }
  ];

  return (
    <DashboardLayout role="klub">
      <h1 className="text-2xl font-bold mb-6">Dashboard Klub</h1>

      {/* Dashboard Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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

      {/* Member Progress Overview */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Progress Pelatihan</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {memberProgress.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{item.name}</span>
                  <span className="text-gray-500">{item.progress}%</span>
                </div>
                <Progress value={item.progress} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Member Activities */}
      <Card className="mb-6">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-xl font-bold">Aktivitas Member</CardTitle>
          <Button variant="ghost" size="sm" className="text-gray-500">
            Lihat Semua <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Member</TableHead>
                <TableHead>Aktivitas</TableHead>
                <TableHead>Waktu</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {memberActivities.map((activity) => (
                <TableRow key={activity.id}>
                  <TableCell className="font-medium">
                    {activity.member}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Activity size={16} className="text-gray-400" />
                      {activity.activity}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-gray-400" />
                      {activity.time}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={activity.status === "completed" ? "default" : "secondary"} className={
                      activity.status === "completed" 
                        ? "bg-green-100 text-green-800 hover:bg-green-100" 
                        : "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                    }>
                      {activity.status === "completed" ? "Selesai" : "Pending"}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Club Information */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-bold">Informasi Klub</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-gray-500">Nama Klub</p>
                <p>Klub Presentasi SMAN 3 Bandung</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Pembina</p>
                <p>Ibu Siti Nurlela</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Ketua Klub</p>
                <p>Faisal Rahman</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Tanggal Berdiri</p>
                <p>15 Februari 2023</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Jadwal Pertemuan</p>
                <p>Setiap Selasa, 15:00-17:00</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Lokasi</p>
                <p>Ruang Multimedia SMAN 3 Bandung</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default KlubDashboard;
