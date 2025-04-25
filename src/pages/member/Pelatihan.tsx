
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
import { Checkbox } from "@/components/ui/checkbox";
import { CheckCheck, Video } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const MemberPelatihan = () => {
  // Dummy data for meetings
  const meetings = [
    {
      id: 1,
      title: "Pertemuan #1: Pengenalan Public Speaking",
      date: "10 Februari 2025",
      attended: true
    },
    {
      id: 2,
      title: "Pertemuan #2: Teknik Dasar Presentasi",
      date: "17 Februari 2025",
      attended: true
    },
    {
      id: 3,
      title: "Pertemuan #3: Penggunaan Visual dalam Presentasi",
      date: "24 Februari 2025",
      attended: true
    },
    {
      id: 4,
      title: "Pertemuan #4: Teknik Menjawab Pertanyaan",
      date: "3 Maret 2025",
      attended: true
    },
    {
      id: 5,
      title: "Pertemuan #5: Simulasi Presentasi",
      date: "10 Maret 2025",
      attended: false
    },
    {
      id: 6,
      title: "Pertemuan #6: Persiapan Ujian",
      date: "17 Maret 2025",
      attended: false
    }
  ];

  // Dummy data for watched materials
  const materials = [
    {
      id: 1,
      title: "Dasar-dasar Public Speaking",
      type: "Video",
      watched: true
    },
    {
      id: 2,
      title: "Teknik Presentasi Efektif",
      type: "Video",
      watched: true
    },
    {
      id: 3,
      title: "Mengatasi Grogi Saat Presentasi",
      type: "Video",
      watched: false
    },
    {
      id: 4,
      title: "Panduan Membuat Slide Menarik",
      type: "PDF",
      watched: true
    },
  ];

  // Calculate attendance percentage
  const attendedCount = meetings.filter(m => m.attended).length;
  const attendancePercentage = (attendedCount / meetings.length) * 100;

  return (
    <DashboardLayout role="member">
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Pelatihan Saya</h1>

        {/* Attendance Summary */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCheck className="h-5 w-5 text-green-500" />
              Ringkasan Kehadiran
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">Total Kehadiran</p>
                  <p className="font-medium">{attendedCount} dari {meetings.length} Pertemuan</p>
                </div>
                <Badge variant="default">{Math.round(attendancePercentage)}% Hadir</Badge>
              </div>
              <Progress value={attendancePercentage} className="h-2" />
            </div>
          </CardContent>
        </Card>

        {/* Meeting History */}
        <Card>
          <CardHeader>
            <CardTitle>History Kehadiran</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Pertemuan</TableHead>
                  <TableHead>Tanggal</TableHead>
                  <TableHead>Kehadiran</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {meetings.map((meeting) => (
                  <TableRow key={meeting.id}>
                    <TableCell className="font-medium">{meeting.title}</TableCell>
                    <TableCell>{meeting.date}</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <Checkbox checked={meeting.attended} disabled />
                        <span className="ml-2">{meeting.attended ? "Hadir" : "Tidak Hadir"}</span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Watched Materials */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Video className="h-5 w-5 text-blue-500" />
              Materi yang Sudah Ditonton
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Judul Materi</TableHead>
                  <TableHead>Jenis</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {materials.map((material) => (
                  <TableRow key={material.id}>
                    <TableCell className="font-medium">{material.title}</TableCell>
                    <TableCell>{material.type}</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <Checkbox checked={material.watched} disabled />
                        <span className="ml-2">{material.watched ? "Sudah Ditonton" : "Belum Ditonton"}</span>
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

export default MemberPelatihan;
