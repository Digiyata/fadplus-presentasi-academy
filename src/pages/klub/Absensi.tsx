
import { DashboardLayout } from "@/components/layouts/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { Calendar, CalendarDays, Clock } from "lucide-react";
import { toast } from "sonner";

const KlubAbsensi = () => {
  // Dummy data for members
  const members = [
    { id: 1, name: "Anisa Putri" },
    { id: 2, name: "Budi Santoso" },
    { id: 3, name: "Cindy Aulia" },
    { id: 4, name: "Dodi Permana" },
    { id: 5, name: "Eka Pratama" },
    { id: 6, name: "Fitra Ramadhan" },
  ];

  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [attendance, setAttendance] = useState<Record<number, boolean>>({});

  const handleAttendanceChange = (id: number, checked: boolean) => {
    setAttendance({ ...attendance, [id]: checked });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Data absensi berhasil disimpan");
  };

  return (
    <DashboardLayout role="klub">
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Absensi Pertemuan</h1>

        <Card>
          <CardHeader>
            <CardTitle>Form Absensi</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="date">Tanggal Pertemuan</Label>
                  <div className="relative">
                    <Input
                      id="date"
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                    <CalendarDays className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="title">Judul Pertemuan</Label>
                  <Input
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Contoh: Pertemuan Pelatihan #5"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Daftar Hadir</h3>
                <div className="border rounded-md p-4 space-y-4">
                  {members.map((member) => (
                    <div key={member.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={`member-${member.id}`}
                        checked={attendance[member.id] || false}
                        onCheckedChange={(checked) => 
                          handleAttendanceChange(member.id, checked === true)
                        }
                      />
                      <Label htmlFor={`member-${member.id}`}>{member.name}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <Button type="submit">Simpan Absensi</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default KlubAbsensi;
