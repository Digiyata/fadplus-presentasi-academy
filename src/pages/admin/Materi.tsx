
import { useState } from "react";
import { DashboardLayout } from "@/components/layouts/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { FileText, Film, Eye, Edit, Trash2, Upload } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

const AdminMateri = () => {
  // State for form inputs
  const [judul, setJudul] = useState("");
  const [jenjang, setJenjang] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [videoLink, setVideoLink] = useState("");
  const [videoType, setVideoType] = useState("upload"); // upload or link

  // Dummy data for materi
  const [materiList, setMateriList] = useState([
    {
      id: 1,
      judul: "Dasar Public Speaking",
      jenjang: "Dasar",
      tipe: "PDF",
      tanggalUpload: "15 Mar 2025",
      deskripsi: "Pengenalan dasar public speaking untuk pemula"
    },
    {
      id: 2,
      judul: "Teknik Presentasi Dasar",
      jenjang: "Dasar",
      tipe: "Video",
      tanggalUpload: "16 Mar 2025",
      deskripsi: "Video tutorial teknik presentasi dasar"
    },
    {
      id: 3,
      judul: "Presentasi dengan Slide Efektif",
      jenjang: "Terampil",
      tipe: "PDF",
      tanggalUpload: "20 Mar 2025",
      deskripsi: "Panduan membuat slide presentasi yang efektif"
    },
    {
      id: 4,
      judul: "Teknik Persuasi dalam Presentasi",
      jenjang: "Terampil",
      tipe: "Video",
      tanggalUpload: "22 Mar 2025",
      deskripsi: "Video tutorial teknik persuasi dalam presentasi"
    },
    {
      id: 5,
      judul: "Presentasi Profesional",
      jenjang: "Mahir",
      tipe: "PDF",
      tanggalUpload: "25 Mar 2025",
      deskripsi: "Panduan lengkap presentasi profesional tingkat lanjut"
    },
    {
      id: 6,
      judul: "Master Presentasi untuk Event Besar",
      jenjang: "Mahir",
      tipe: "Video",
      tanggalUpload: "27 Mar 2025",
      deskripsi: "Video tutorial teknik presentasi untuk event besar"
    },
  ]);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create new materi object
    const newMateri = {
      id: materiList.length + 1,
      judul,
      jenjang,
      tipe: pdfFile ? "PDF" : "Video",
      tanggalUpload: new Date().toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      }),
      deskripsi
    };

    // Add to list and reset form
    setMateriList([newMateri, ...materiList]);
    resetForm();
    
    toast.success("Materi berhasil ditambahkan");
  };

  const resetForm = () => {
    setJudul("");
    setJenjang("");
    setDeskripsi("");
    setPdfFile(null);
    setVideoFile(null);
    setVideoLink("");
    setVideoType("upload");
  };

  const handleDeleteMateri = (id: number) => {
    setMateriList(materiList.filter(materi => materi.id !== id));
    toast.success("Materi berhasil dihapus");
  };

  // Render file input based on type
  const renderVideoInput = () => {
    if (videoType === "upload") {
      return (
        <div className="space-y-2">
          <Label htmlFor="video-file">Upload Video</Label>
          <Input 
            id="video-file" 
            type="file" 
            accept="video/*" 
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                setVideoFile(e.target.files[0]);
              }
            }} 
          />
          <p className="text-sm text-muted-foreground">Max file size: 500MB</p>
        </div>
      );
    } else {
      return (
        <div className="space-y-2">
          <Label htmlFor="video-link">Link YouTube</Label>
          <Input 
            id="video-link" 
            type="url" 
            placeholder="https://www.youtube.com/watch?v=..." 
            value={videoLink}
            onChange={(e) => setVideoLink(e.target.value)} 
          />
        </div>
      );
    }
  };

  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Manajemen Materi</h1>
        </div>

        {/* Form Tambah Materi */}
        <Card>
          <CardHeader>
            <CardTitle>Tambah Materi Baru</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="judul">Judul Materi</Label>
                  <Input 
                    id="judul" 
                    placeholder="Masukkan judul materi" 
                    value={judul}
                    onChange={(e) => setJudul(e.target.value)}
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="jenjang">Jenjang</Label>
                  <Select 
                    value={jenjang} 
                    onValueChange={setJenjang}
                    required
                  >
                    <SelectTrigger id="jenjang">
                      <SelectValue placeholder="Pilih jenjang" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Dasar">Dasar</SelectItem>
                      <SelectItem value="Terampil">Terampil</SelectItem>
                      <SelectItem value="Mahir">Mahir</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="deskripsi">Deskripsi</Label>
                <Textarea 
                  id="deskripsi" 
                  placeholder="Masukkan deskripsi materi" 
                  rows={3} 
                  value={deskripsi}
                  onChange={(e) => setDeskripsi(e.target.value)}
                  required 
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="pdf-file">Upload PDF Materi</Label>
                <Input 
                  id="pdf-file" 
                  type="file" 
                  accept=".pdf" 
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      setPdfFile(e.target.files[0]);
                    }
                  }} 
                />
                <p className="text-sm text-muted-foreground">Max file size: 10MB</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Label>Video Materi</Label>
                  <div className="flex gap-2">
                    <Button 
                      type="button" 
                      variant={videoType === "upload" ? "default" : "outline"} 
                      size="sm" 
                      onClick={() => setVideoType("upload")}
                    >
                      Upload
                    </Button>
                    <Button 
                      type="button" 
                      variant={videoType === "link" ? "default" : "outline"} 
                      size="sm" 
                      onClick={() => setVideoType("link")}
                    >
                      Link YouTube
                    </Button>
                  </div>
                </div>
                {renderVideoInput()}
              </div>

              <div className="flex justify-end">
                <Button type="submit" className="w-full md:w-auto">
                  <Upload className="mr-2 h-4 w-4" /> Tambah Materi
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Tabel Daftar Materi */}
        <Card>
          <CardHeader>
            <CardTitle>Daftar Materi</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Judul</TableHead>
                    <TableHead>Jenjang</TableHead>
                    <TableHead>Tipe File</TableHead>
                    <TableHead>Tanggal Upload</TableHead>
                    <TableHead className="text-right">Aksi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {materiList.map((materi) => (
                    <TableRow key={materi.id}>
                      <TableCell className="font-medium">{materi.judul}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className={
                          materi.jenjang === "Dasar" ? "border-blue-500 text-blue-500" :
                          materi.jenjang === "Terampil" ? "border-green-500 text-green-500" :
                          "border-purple-500 text-purple-500"
                        }>
                          {materi.jenjang}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          {materi.tipe === "PDF" ? (
                            <FileText className="mr-2 h-4 w-4 text-red-500" />
                          ) : (
                            <Film className="mr-2 h-4 w-4 text-blue-500" />
                          )}
                          {materi.tipe}
                        </div>
                      </TableCell>
                      <TableCell>{materi.tanggalUpload}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="outline" size="icon">
                                <Eye className="h-4 w-4" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl">
                              <DialogHeader>
                                <DialogTitle>{materi.judul}</DialogTitle>
                                <DialogDescription>
                                  Jenjang: {materi.jenjang} | Tipe: {materi.tipe} | Tanggal: {materi.tanggalUpload}
                                </DialogDescription>
                              </DialogHeader>
                              <div className="py-4">
                                <h3 className="font-medium mb-2">Deskripsi:</h3>
                                <p className="text-muted-foreground">{materi.deskripsi}</p>
                                
                                <div className="mt-6">
                                  {materi.tipe === "PDF" ? (
                                    <div className="border rounded-md p-8 flex flex-col items-center justify-center">
                                      <FileText className="w-16 h-16 text-red-500 mb-2" />
                                      <p className="text-center text-sm text-muted-foreground">
                                        Preview PDF akan ditampilkan di sini.
                                      </p>
                                      <Button className="mt-4">
                                        Download PDF
                                      </Button>
                                    </div>
                                  ) : (
                                    <div className="border rounded-md aspect-video bg-muted flex items-center justify-center">
                                      <Film className="w-16 h-16 text-blue-500" />
                                      <p className="text-center text-sm text-muted-foreground">
                                        Video player akan ditampilkan di sini.
                                      </p>
                                    </div>
                                  )}
                                </div>
                              </div>
                              <DialogFooter>
                                <DialogClose asChild>
                                  <Button variant="outline">Tutup</Button>
                                </DialogClose>
                              </DialogFooter>
                            </DialogContent>
                          </Dialog>
                          <Button variant="outline" size="icon">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button 
                            variant="outline" 
                            size="icon" 
                            className="text-destructive"
                            onClick={() => handleDeleteMateri(materi.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default AdminMateri;
