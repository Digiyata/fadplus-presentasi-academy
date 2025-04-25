
import { DashboardLayout } from "@/components/layouts/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Users, 
  School,
  Award,
  BarChart
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const MemberDashboard = () => {
  // Dummy data for program levels
  const programLevels = [
    { name: "Dasar", progress: 100, status: "completed" },
    { name: "Menengah", progress: 65, status: "in-progress" },
    { name: "Lanjutan", progress: 0, status: "not-started" }
  ];

  // Dummy data for upcoming events
  const upcomingEvents = [
    {
      title: "Pertemuan Pelatihan #6",
      date: "28 April 2025",
      time: "15:00 - 17:00",
    },
    {
      title: "Ujian Presentasi Menengah",
      date: "10 Mei 2025",
      time: "09:00 - 12:00",
    },
    {
      title: "Workshop Public Speaking",
      date: "15 Mei 2025",
      time: "13:00 - 16:00",
    }
  ];

  return (
    <DashboardLayout role="member">
      <h1 className="text-2xl font-bold mb-6">Dashboard Member</h1>

      {/* Member Info */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
            <div className="w-32 h-32 rounded-full bg-blue-100 flex items-center justify-center">
              <Users size={64} className="text-brand-blue" />
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold mb-1">Anisa Putri</h2>
              <p className="text-gray-500 mb-4">Member sejak 12 Januari 2023</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-500">Status Keanggotaan</p>
                  <Badge className="mt-1 bg-green-100 text-green-800 hover:bg-green-100">Aktif</Badge>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-500">Klub</p>
                  <div className="flex items-center mt-1 gap-2">
                    <School size={18} />
                    <span>Klub Presentasi SMAN 3 Bandung</span>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-500">Level Saat Ini</p>
                  <div className="flex items-center mt-1 gap-2">
                    <Award size={18} className="text-amber-500" />
                    <span>Menengah</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Program Progress */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Progress Pelatihan</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {programLevels.map((level, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Level {level.name}</span>
                    {level.status === "completed" && (
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Selesai</Badge>
                    )}
                    {level.status === "in-progress" && (
                      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Berlangsung</Badge>
                    )}
                  </div>
                  <span className="text-gray-500">{level.progress}%</span>
                </div>
                <Progress value={level.progress} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Upcoming Events */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-bold">Jadwal Mendatang</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 p-4 rounded-lg border-l-4 border-brand-blue"
                >
                  <h3 className="font-semibold">{event.title}</h3>
                  <div className="flex flex-col mt-1 text-sm text-gray-600">
                    <span>{event.date}</span>
                    <span>{event.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-bold">Statistik Kehadiran</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center h-[calc(100%-4rem)]">
            <div className="w-32 h-32 rounded-full border-8 border-brand-blue flex items-center justify-center text-center">
              <div>
                <div className="text-3xl font-bold">90%</div>
                <div className="text-sm text-gray-500">Kehadiran</div>
              </div>
            </div>
            <div className="mt-4 text-center">
              <p>Anda telah menghadiri 9 dari 10 pertemuan</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default MemberDashboard;
