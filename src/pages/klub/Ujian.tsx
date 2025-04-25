
import { DashboardLayout } from "@/components/layouts/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { Upload } from "lucide-react";
import { toast } from "sonner";

const KlubUjian = () => {
  // Dummy data for members
  const members = [
    { id: 1, name: "Anisa Putri" },
    { id: 2, name: "Budi Santoso" },
    { id: 3, name: "Cindy Aulia" },
    { id: 4, name: "Dodi Permana" },
  ];

  const [jenjang, setJenjang] = useState("");
  const [selectedMembers, setSelectedMembers] = useState<Record<number, boolean>>({});

  const handleMemberChange = (id: number, checked: boolean) => {
    setSelectedMembers({ ...selectedMembers, [id]: checked });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Pengajuan ujian berhasil dikirim");
  };

  return (
    <DashboardLayout role="klub">
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Pengajuan Ujian Member</h1>

        <Card>
          <CardHeader>
            <CardTitle>Form Pengajuan</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="jenjang">Jenjang</Label>
                <Select value={jenjang} onValueChange={setJenjang}>
                  <SelectTrigger id="jenjang">
                    <SelectValue placeholder="Pilih Jenjang" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dasar">Dasar</SelectItem>
                    <SelectItem value="terampil">Terampil</SelectItem>
                    <SelectItem value="mahir">Mahir</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Pilih Member</Label>
                <div className="border rounded-md p-4 mt-2 space-y-4">
                  {members.map((member) => (
                    <div key={member.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={`member-${member.id}`}
                        checked={selectedMembers[member.id] || false}
                        onCheckedChange={(checked) => 
                          handleMemberChange(member.id, checked === true)
                        }
                      />
                      <Label htmlFor={`member-${member.id}`}>{member.name}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="materi">Upload Materi Ujian</Label>
                <div className="border-2 border-dashed rounded-md p-6 flex flex-col items-center justify-center">
                  <Upload className="h-8 w-8 text-gray-400 mb-2" />
                  <p className="text-sm text-gray-500 mb-2">Klik atau seret file kemari</p>
                  <Input id="materi" type="file" className="hidden" />
                  <Button type="button" variant="outline">Pilih File</Button>
                </div>
              </div>

              <Button type="submit">Ajukan Ujian</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default KlubUjian;
