
import { DashboardLayout } from "@/components/layouts/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  School, 
  Users, 
  CalendarClock,
  ChevronRight,
  Building,
  Phone,
  Mail,
  Eye,
  Edit,
  Trash2
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
import { useState } from "react";
import { Link } from "react-router-dom";

// Import chart components from recharts
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend
} from 'recharts';

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

  // Dummy data for school chart
  const schoolChartData = [
    { name: 'Jan 2024', count: 15 },
    { name: 'Feb 2024', count: 18 },
    { name: 'Mar 2024', count: 22 },
    { name: 'Apr 2024', count: 25 },
    { name: 'May 2024', count: 28 },
    { name: 'Jun 2024', count: 30 },
    { name: 'Jul 2024', count: 32 },
    { name: 'Aug 2024', count: 33 },
    { name: 'Sep 2024', count: 35 },
    { name: 'Oct 2024', count: 38 },
    { name: 'Nov 2024', count: 40 },
    { name: 'Dec 2024', count: 41 },
    { name: 'Jan 2025', count: 42 },
    { name: 'Feb 2025', count: 45 },
    { name: 'Mar 2025', count: 48 }
  ];

  // Dummy data for school status pie chart
  const schoolStatusData = [
    { name: 'Aktif', value: 89, color: '#22c55e' },
    { name: 'Tidak Aktif', value: 11, color: '#ef4444' }
  ];

  // Dummy data for recent schools
  const recentSchools = [
    {
      id: 1,
      name: "SMA Negeri 3 Bandung",
      contactPerson: "Siti Nurhayati",
      phone: "08123456789",
      email: "sman3bandung@edu.id",
      date: "23 Apr 2025",
      status: "active"
    },
    {
      id: 2,
      name: "SMA Harapan Bangsa",
      contactPerson: "Budi Santoso",
      phone: "08234567890",
      email: "smahb@edu.id",
      date: "22 Apr 2025",
      status: "pending"
    },
    {
      id: 3,
      name: "SMK Telkom Jakarta",
      contactPerson: "Anisa Putri",
      phone: "08345678901",
      email: "smktelkom@edu.id",
      date: "20 Apr 2025",
      status: "active"
    },
    {
      id: 4,
      name: "SMA Negeri 1 Jakarta",
      contactPerson: "Rudi Hartono",
      phone: "08456789012",
      email: "sman1jakarta@edu.id",
      date: "18 Apr 2025",
      status: "active"
    },
    {
      id: 5,
      name: "SMA Negeri 5 Surabaya",
      contactPerson: "Dewi Lestari",
      phone: "08567890123",
      email: "sman5surabaya@edu.id",
      date: "15 Apr 2025",
      status: "pending"
    }
  ];

  // Define a state to track action modal (not implemented yet)
  const [actionModalOpen, setActionModalOpen] = useState(false);
  const [selectedSchool, setSelectedSchool] = useState(null);

  return (
    <DashboardLayout role="admin">
      <h1 className="text-2xl font-bold mb-6">Dashboard Admin</h1>

      {/* Dashboard Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6 flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                <h3 className="text-3xl font-bold">{stat.value}</h3>
                <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
              </div>
              {stat.icon}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
        {/* Bar Chart - School Growth */}
        <Card className="lg:col-span-8">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xl font-bold">Pertumbuhan Sekolah Terdaftar</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={schoolChartData}
                  margin={{
                    top: 10, right: 30, left: 0, bottom: 30,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" angle={-45} textAnchor="end" height={70} />
                  <YAxis />
                  <RechartsTooltip />
                  <Bar dataKey="count" fill="#3b82f6" name="Jumlah Sekolah" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Pie Chart - School Status */}
        <Card className="lg:col-span-4">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xl font-bold">Status Sekolah</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={schoolStatusData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    fill="#8884d8"
                    paddingAngle={2}
                    dataKey="value"
                    label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {schoolStatusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Schools */}
      <Card className="mb-6">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-xl font-bold">Sekolah Terbaru</CardTitle>
          <Link to="/admin/sekolah">
            <Button variant="ghost" size="sm" className="text-muted-foreground">
              Lihat Semua <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nama Sekolah</TableHead>
                  <TableHead>Penanggung Jawab</TableHead>
                  <TableHead className="hidden md:table-cell">No. Kontak</TableHead>
                  <TableHead className="hidden md:table-cell">Email</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentSchools.map((school) => (
                  <TableRow key={school.id}>
                    <TableCell className="font-medium">{school.name}</TableCell>
                    <TableCell>{school.contactPerson}</TableCell>
                    <TableCell className="hidden md:table-cell">{school.phone}</TableCell>
                    <TableCell className="hidden md:table-cell">{school.email}</TableCell>
                    <TableCell>
                      <Badge variant={school.status === "active" ? "default" : "secondary"} className={
                        school.status === "active" 
                          ? "bg-green-100 text-green-800 hover:bg-green-100" 
                          : "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                      }>
                        {school.status === "active" ? "Aktif" : "Pending"}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="outline" size="icon">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="icon">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="icon" className="text-destructive">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="mt-4">
            <Link to="/admin/sekolah">
              <Button>
                + Tambah Sekolah
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default AdminDashboard;
