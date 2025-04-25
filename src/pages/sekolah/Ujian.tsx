
import { DashboardLayout } from "@/components/layouts/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { toast } from "sonner";

const SekolahUjian = () => {
  const [jenjang, setJenjang] = useState("");
  const [jumlahPeserta, setJumlahPeserta] = useState("");
  const [memberIds, setMemberIds] = useState<string[]>([""]);

  const addMemberField = () => {
    setMemberIds([...memberIds, ""]);
  };

  const updateMemberId = (index: number, value: string) => {
    const newMemberIds = [...memberIds];
    newMemberIds[index] = value;
    setMemberIds(newMemberIds);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Pengajuan ujian berhasil dikirim");
  };

  return (
    <DashboardLayout role="sekolah">
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Pengajuan Ujian</h1>

        <Card>
          <CardHeader>
            <CardTitle>Form Ajukan Ujian</CardTitle>
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

              <div className="space-y-2">
                <Label htmlFor="jumlahPeserta">Jumlah Peserta</Label>
                <Input
                  id="jumlahPeserta"
                  type="number"
                  value={jumlahPeserta}
                  onChange={(e) => setJumlahPeserta(e.target.value)}
                  placeholder="Masukkan jumlah peserta ujian"
                />
              </div>

              <div className="space-y-4">
                <Label>Nomor Member</Label>
                {memberIds.map((id, index) => (
                  <div key={index} className="flex gap-2">
                    <Input
                      value={id}
                      onChange={(e) => updateMemberId(index, e.target.value)}
                      placeholder={`Nomor Member ${index + 1}`}
                    />
                  </div>
                ))}
                <Button type="button" variant="outline" onClick={addMemberField}>
                  Tambah Member
                </Button>
              </div>

              <Button type="submit">Ajukan Ujian</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default SekolahUjian;
