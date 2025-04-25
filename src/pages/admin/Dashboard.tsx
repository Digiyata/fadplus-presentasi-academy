
import { DashboardLayout } from "@/components/layouts/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  School, 
  Users, 
  CalendarClock,
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

const AdminDashboard = () => {
  // Dummy data for dashboard metrics
  const stats = [
    {
      title: "Sekolah Terdaftar",
      value: 42,
      icon: <School className="h-8 w-8 text-blue-500" />,
      change: "+3 bulan ini"
    },
    {
      title: "Klub Presentasi",
      value: 68,
      icon: <Users className="h-8 w-8 text-green-500" />,
      change: "+5 bulan ini"
    },
    {
      title: "Pelatihan Berjalan",
      value: 24,
      icon: <CalendarClock className="h-8 w-8 text-purple-500" />,
      change: "12 selesai bulan ini"
    }
  ];

  // Dummy data for recent members
  const recentMembers = [
    {
      id: 1,
      name: "Siti Nurhayati",
      school: "SMA Negeri 3 Bandung",
      date: "23 Apr 2025",
      status: "active"
    },
    {
      id: 2,
      name: "Budi Santoso",
      school: "SMA Harapan Bangsa",
      date: "22 Apr 2025",
      status: "pending"
    },
    {
      id: 3,
      name: "Anisa Putri",
      school: "SMK Telkom Jakarta",
      date: "20 Apr 2025",
      status: "active"
    },
    {
      id: 4,
      name: "Rudi Hartono",
      school: "SMA Negeri 1 Jakarta",
      date: "18 Apr 2025",
      status: "active"
    },
    {
      id: 5,
      name: "Dewi Lestari",
      school: "SMA Negeri 5 Surabaya",
      date: "15 Apr 2025",
      status: "pending"
    }
  ];

  return (
    <DashboardLayout role="admin">
      <h1 className="text-2xl font-bold mb-6">Dashboard Admin</h1>

      {/* Dashboard Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6 flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                <h3 className="text-3xl font-bold">{stat.value}</h3>
                <p className="text-xs text-gray-500 mt-1">{stat.change}</p>
              </div>
              {stat.icon}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Members */}
      <Card className="mb-6">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-xl font-bold">Member Terbaru</CardTitle>
          <Button variant="ghost" size="sm" className="text-gray-500">
            Lihat Semua <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nama</TableHead>
                <TableHead>Sekolah</TableHead>
                <TableHead>Tanggal Bergabung</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentMembers.map((member) => (
                <TableRow key={member.id}>
                  <TableCell className="font-medium">{member.name}</TableCell>
                  <TableCell>{member.school}</TableCell>
                  <TableCell>{member.date}</TableCell>
                  <TableCell>
                    <Badge variant={member.status === "active" ? "default" : "secondary"} className={
                      member.status === "active" 
                        ? "bg-green-100 text-green-800 hover:bg-green-100" 
                        : "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                    }>
                      {member.status === "active" ? "Aktif" : "Pending"}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* More dashboard content can be added here */}
    </DashboardLayout>
  );
};

export default AdminDashboard;
