
import { DashboardLayout } from "@/components/layouts/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, Upload, FileText } from "lucide-react";
import { toast } from "sonner";

const MemberUjian = () => {
  const handleUpload = () => {
    toast.success("File berhasil diupload");
  };

  // Dummy data for upcoming exam
  const upcomingExam = {
    title: "Ujian Presentasi Level Dasar",
    date: "10 Mei 2025",
    time: "09:00 - 12:00",
    location: "Aula Sekolah",
    requirements: [
      "Presentasi tentang tema bebas (durasi 5-7 menit)",
      "Minimal 10 slide PowerPoint",
      "Wajib menggunakan teknik yang sudah dipelajari"
    ]
  };

  return (
    <DashboardLayout role="member">
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Ujian</h1>

        {/* Upcoming Exam Info */}
        <Card className="border-l-4 border-l-blue-500">
          <CardHeader>
            <CardTitle className="text-xl font-bold">Jadwal Ujian Mendatang</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">{upcomingExam.title}</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-gray-500" />
                  <span>{upcomingExam.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-gray-500" />
                  <span>{upcomingExam.time}</span>
                </div>
                <div className="flex items-center gap-2 col-span-2">
                  <FileText className="h-5 w-5 text-gray-500" />
                  <span>{upcomingExam.location}</span>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Persyaratan Ujian:</h4>
                <ul className="list-disc list-inside space-y-1">
                  {upcomingExam.requirements.map((req, index) => (
                    <li key={index} className="text-gray-700">{req}</li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Upload Materials */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="h-5 w-5" />
              Upload Materi Ujian
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Judul Materi</Label>
                <Input id="title" placeholder="Masukkan judul materi ujian Anda" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="presentasi">File Presentasi (PPT/PDF)</Label>
                <div className="border-2 border-dashed rounded-md p-6 flex flex-col items-center justify-center">
                  <Upload className="h-8 w-8 text-gray-400 mb-2" />
                  <p className="text-sm text-gray-500 mb-2">Klik atau seret file kemari</p>
                  <Input id="presentasi" type="file" className="hidden" />
                  <Button type="button" variant="outline">Pilih File</Button>
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button onClick={handleUpload}>Upload Materi</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default MemberUjian;
