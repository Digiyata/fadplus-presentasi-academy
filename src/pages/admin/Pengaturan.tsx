
import { useState } from "react";
import { DashboardLayout } from "@/components/layouts/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { FileText, Upload, Save } from "lucide-react";
import { toast } from "sonner";
import { Separator } from "@/components/ui/separator";

const AdminPengaturan = () => {
  // Settings state
  const [settings, setSettings] = useState({
    // JP Settings
    jpDasar: 40,
    jpTerampil: 60,
    jpMahir: 80,
    
    // Passing score settings
    passingScoreDasar: 70,
    passingScoreTerampil: 75,
    passingScoreMahir: 80,
    
    // Certificate settings
    certificateTemplate: "standard",
    certificateSignature: null,
    certificateValidityMonths: 24,
    
    // App settings
    appName: "FadPlus",
    enableNotifications: true,
    enableEmailNotifications: true,
    footerText: "© 2025 FadPlus - Platform Pelatihan Presentasi untuk Siswa",
  });
  
  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setSettings({
      ...settings,
      [name]: type === "number" ? parseInt(value) : value,
    });
  };
  
  // Handle switch change
  const handleSwitchChange = (name: string, checked: boolean) => {
    setSettings({
      ...settings,
      [name]: checked,
    });
  };
  
  // Handle select change
  const handleSelectChange = (name: string, value: string) => {
    setSettings({
      ...settings,
      [name]: value,
    });
  };
  
  // Handle settings save
  const handleSaveSettings = () => {
    toast.success("Pengaturan berhasil disimpan");
  };

  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Pengaturan Sistem</h1>
          <Button onClick={handleSaveSettings}>
            <Save className="mr-2 h-4 w-4" />
            Simpan Perubahan
          </Button>
        </div>
        
        <Tabs defaultValue="jp">
          <TabsList className="grid grid-cols-4 w-full max-w-lg">
            <TabsTrigger value="jp">Jam Pelajaran</TabsTrigger>
            <TabsTrigger value="nilai">Nilai Kelulusan</TabsTrigger>
            <TabsTrigger value="sertifikat">Sertifikat</TabsTrigger>
            <TabsTrigger value="aplikasi">Aplikasi</TabsTrigger>
          </TabsList>
          
          {/* JP Settings */}
          <TabsContent value="jp">
            <Card>
              <CardHeader>
                <CardTitle>Pengaturan Jam Pelajaran (JP)</CardTitle>
                <CardDescription>
                  Atur jumlah jam pelajaran yang dibutuhkan untuk setiap jenjang
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="jpDasar">Jenjang Dasar (JP)</Label>
                      <Input
                        id="jpDasar"
                        name="jpDasar"
                        type="number"
                        min="0"
                        value={settings.jpDasar}
                        onChange={handleInputChange}
                      />
                      <p className="text-sm text-muted-foreground">
                        Jumlah JP yang harus ditempuh untuk jenjang Dasar
                      </p>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="jpTerampil">Jenjang Terampil (JP)</Label>
                      <Input
                        id="jpTerampil"
                        name="jpTerampil"
                        type="number"
                        min="0"
                        value={settings.jpTerampil}
                        onChange={handleInputChange}
                      />
                      <p className="text-sm text-muted-foreground">
                        Jumlah JP yang harus ditempuh untuk jenjang Terampil
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="jpMahir">Jenjang Mahir (JP)</Label>
                    <Input
                      id="jpMahir"
                      name="jpMahir"
                      type="number"
                      min="0"
                      value={settings.jpMahir}
                      onChange={handleInputChange}
                    />
                    <p className="text-sm text-muted-foreground">
                      Jumlah JP yang harus ditempuh untuk jenjang Mahir
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Passing Score Settings */}
          <TabsContent value="nilai">
            <Card>
              <CardHeader>
                <CardTitle>Pengaturan Nilai Kelulusan</CardTitle>
                <CardDescription>
                  Tentukan nilai minimum yang dibutuhkan untuk lulus setiap jenjang
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="passingScoreDasar">Nilai Kelulusan Dasar</Label>
                      <Input
                        id="passingScoreDasar"
                        name="passingScoreDasar"
                        type="number"
                        min="0"
                        max="100"
                        value={settings.passingScoreDasar}
                        onChange={handleInputChange}
                      />
                      <p className="text-sm text-muted-foreground">
                        Nilai minimum untuk lulus jenjang Dasar (0-100)
                      </p>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="passingScoreTerampil">Nilai Kelulusan Terampil</Label>
                      <Input
                        id="passingScoreTerampil"
                        name="passingScoreTerampil"
                        type="number"
                        min="0"
                        max="100"
                        value={settings.passingScoreTerampil}
                        onChange={handleInputChange}
                      />
                      <p className="text-sm text-muted-foreground">
                        Nilai minimum untuk lulus jenjang Terampil (0-100)
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="passingScoreMahir">Nilai Kelulusan Mahir</Label>
                    <Input
                      id="passingScoreMahir"
                      name="passingScoreMahir"
                      type="number"
                      min="0"
                      max="100"
                      value={settings.passingScoreMahir}
                      onChange={handleInputChange}
                    />
                    <p className="text-sm text-muted-foreground">
                      Nilai minimum untuk lulus jenjang Mahir (0-100)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Certificate Settings */}
          <TabsContent value="sertifikat">
            <Card>
              <CardHeader>
                <CardTitle>Pengaturan Sertifikat</CardTitle>
                <CardDescription>
                  Konfigurasi tampilan dan pengaturan sertifikat
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="certificateTemplate">Template Sertifikat</Label>
                    <Select 
                      value={settings.certificateTemplate} 
                      onValueChange={(value) => handleSelectChange("certificateTemplate", value)}
                    >
                      <SelectTrigger id="certificateTemplate">
                        <SelectValue placeholder="Pilih template" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="standard">Standar</SelectItem>
                        <SelectItem value="modern">Modern</SelectItem>
                        <SelectItem value="classic">Klasik</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-sm text-muted-foreground">
                      Pilih desain template yang digunakan untuk sertifikat
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Tanda Tangan</Label>
                    <div className="border rounded-md p-4 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <FileText className="h-5 w-5 text-muted-foreground" />
                        <span>signature.png</span>
                      </div>
                      <Button variant="outline" size="sm">
                        <Upload className="mr-2 h-4 w-4" />
                        Ganti
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Unggah gambar tanda tangan untuk sertifikat (PNG, maksimal 500KB)
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="certificateValidityMonths">Masa Berlaku Sertifikat (bulan)</Label>
                    <Input
                      id="certificateValidityMonths"
                      name="certificateValidityMonths"
                      type="number"
                      min="0"
                      value={settings.certificateValidityMonths}
                      onChange={handleInputChange}
                    />
                    <p className="text-sm text-muted-foreground">
                      Tentukan berapa lama sertifikat berlaku dalam hitungan bulan (0 = tidak ada batas)
                    </p>
                  </div>
                </div>
                
                <Separator />
                
                {/* Certificate Preview */}
                <div>
                  <h3 className="text-lg font-medium mb-3">Pratinjau Template</h3>
                  <div className="border rounded-md p-4 flex justify-center">
                    <div className="w-full max-w-3xl aspect-[1.4] border-2 border-dashed border-gray-300 bg-gray-50 flex items-center justify-center p-8">
                      <div className="text-center">
                        <FileText className="h-16 w-16 mx-auto text-gray-400 mb-4" />
                        <h3 className="text-xl font-bold mb-2">Template Sertifikat FadPlus</h3>
                        <p className="text-muted-foreground mb-4">
                          Template {
                            settings.certificateTemplate === "standard" ? "Standar" : 
                            settings.certificateTemplate === "modern" ? "Modern" : "Klasik"
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* App Settings */}
          <TabsContent value="aplikasi">
            <Card>
              <CardHeader>
                <CardTitle>Pengaturan Aplikasi</CardTitle>
                <CardDescription>
                  Pengaturan umum untuk aplikasi FadPlus
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="appName">Nama Aplikasi</Label>
                    <Input
                      id="appName"
                      name="appName"
                      value={settings.appName}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-lg font-medium">Notifikasi</h3>
                    
                    <div className="flex items-center justify-between">
                      <Label htmlFor="enableNotifications" className="cursor-pointer">
                        Aktifkan Notifikasi Aplikasi
                      </Label>
                      <Switch
                        id="enableNotifications"
                        checked={settings.enableNotifications}
                        onCheckedChange={(checked) => handleSwitchChange("enableNotifications", checked)}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Label htmlFor="enableEmailNotifications" className="cursor-pointer">
                        Aktifkan Notifikasi Email
                      </Label>
                      <Switch
                        id="enableEmailNotifications"
                        checked={settings.enableEmailNotifications}
                        onCheckedChange={(checked) => handleSwitchChange("enableEmailNotifications", checked)}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="footerText">Teks Footer</Label>
                    <Textarea
                      id="footerText"
                      name="footerText"
                      rows={2}
                      value={settings.footerText}
                      onChange={handleInputChange}
                    />
                    <p className="text-sm text-muted-foreground">
                      Teks yang akan ditampilkan di footer website
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default AdminPengaturan;
