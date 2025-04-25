
import { useState } from "react";
import { DashboardLayout } from "@/components/layouts/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Eye, Edit, Trash2, Plus, Search } from "lucide-react";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const AdminKlub = () => {
  // Dummy data for clubs
  const [clubs, setClubs] = useState([
    {
      id: 1,
      name: "Klub Presentasi SMAN 3 Bandung",
      school: "SMA Negeri 3 Bandung",
      memberCount: 24,
      leader: "Budi Santoso",
      status: "active",
      dateCreated: "22 Jan 2024"
    },
    {
      id: 2,
      name: "Public Speaking Club SMA Harapan Bangsa",
      school: "SMA Harapan Bangsa",
      memberCount: 18,
      leader: "Dian Purnama",
      status: "active",
      dateCreated: "15 Feb 2024"
    },
    {
      id: 3,
      name: "Telkom Speech Club",
      school: "SMK Telkom Jakarta",
      memberCount: 32,
      leader: "Rina Wijaya",
      status: "active",
      dateCreated: "03 Mar 2024"
    },
    {
      id: 4,
      name: "SMAN 1 Jakarta Presenter Club",
      school: "SMA Negeri 1 Jakarta",
      memberCount: 15,
      leader: "Ahmad Fauzi",
      status: "inactive",
      dateCreated: "12 Apr 2024"
    },
    {
      id: 5,
      name: "SMA Cendekia Speaking Club",
      school: "SMA Cendekia",
      memberCount: 20,
      leader: "Sari Indah",
      status: "active",
      dateCreated: "18 Mar 2024"
    },
    {
      id: 6,
      name: "SMK Nusantara Speaker Club",
      school: "SMK Nusantara 1",
      memberCount: 22,
      leader: "Kurnia Adi",
      status: "active",
      dateCreated: "05 Feb 2024"
    }
  ]);

  // Form states
  const [formData, setFormData] = useState({
    name: "",
    school: "",
    leader: "",
    memberCount: 0,
  });

  // Schools for select dropdown (derived from clubs)
  const schools = [...new Set(clubs.map(club => club.school))];

  // Search state
  const [searchTerm, setSearchTerm] = useState("");
  
  // Edit state
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState<number | null>(null);
  
  // Handle form change
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  // Handle select change
  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, school: value }));
  };
  
  // Handle form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isEditing && editId) {
      // Update existing club
      const updatedClubs = clubs.map(club => 
        club.id === editId ? { 
          ...club, 
          name: formData.name,
          school: formData.school,
          leader: formData.leader,
          memberCount: formData.memberCount || 0
        } : club
      );
      
      setClubs(updatedClubs);
      toast.success("Data klub berhasil diperbarui");
    } else {
      // Add new club
      const newClub = {
        id: clubs.length + 1,
        name: formData.name,
        school: formData.school,
        leader: formData.leader,
        memberCount: formData.memberCount || 0,
        status: "active",
        dateCreated: new Date().toLocaleDateString('id-ID', {
          day: 'numeric',
          month: 'short',
          year: 'numeric'
        })
      };
      
      setClubs([...clubs, newClub]);
      toast.success("Klub baru berhasil ditambahkan");
    }
    
    // Reset form
    resetForm();
  };
  
  // Reset form
  const resetForm = () => {
    setFormData({
      name: "",
      school: "",
      leader: "",
      memberCount: 0
    });
    setIsEditing(false);
    setEditId(null);
  };
  
  // Handle delete
  const handleDelete = (id: number) => {
    setClubs(clubs.filter(club => club.id !== id));
    toast.success("Data klub berhasil dihapus");
  };
  
  // Handle edit
  const handleEdit = (club: any) => {
    setFormData({
      name: club.name,
      school: club.school,
      leader: club.leader,
      memberCount: club.memberCount
    });
    setIsEditing(true);
    setEditId(club.id);
  };
  
  // Filter clubs based on search
  const filteredClubs = clubs.filter(club => 
    club.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    club.school.toLowerCase().includes(searchTerm.toLowerCase()) ||
    club.leader.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Manajemen Klub</h1>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Tambah Klub
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{isEditing ? "Edit Klub" : "Tambah Klub Baru"}</DialogTitle>
                <DialogDescription>
                  {isEditing 
                    ? "Edit informasi klub di bawah ini." 
                    : "Isi data untuk mendaftarkan klub baru."}
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit}>
                <div className="grid gap-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nama Klub</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Masukkan nama klub"
                      value={formData.name}
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="school">Sekolah</Label>
                    <Select 
                      value={formData.school} 
                      onValueChange={handleSelectChange}
                      required
                    >
                      <SelectTrigger id="school">
                        <SelectValue placeholder="Pilih sekolah" />
                      </SelectTrigger>
                      <SelectContent>
                        {schools.map((school, index) => (
                          <SelectItem key={index} value={school}>
                            {school}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="leader">Ketua Klub</Label>
                    <Input
                      id="leader"
                      name="leader"
                      placeholder="Nama ketua klub"
                      value={formData.leader}
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="memberCount">Jumlah Member</Label>
                    <Input
                      id="memberCount"
                      name="memberCount"
                      type="number"
                      min="0"
                      value={formData.memberCount}
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="button" variant="outline" onClick={resetForm}>
                    Batal
                  </Button>
                  <Button type="submit">
                    {isEditing ? "Perbarui" : "Simpan"}
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Daftar Klub</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Cari klub..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nama Klub</TableHead>
                    <TableHead>Sekolah</TableHead>
                    <TableHead className="hidden md:table-cell">Ketua</TableHead>
                    <TableHead className="text-center">Member</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Aksi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredClubs.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center h-24">
                        Tidak ada klub yang sesuai dengan pencarian
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredClubs.map((club) => (
                      <TableRow key={club.id}>
                        <TableCell className="font-medium">{club.name}</TableCell>
                        <TableCell>{club.school}</TableCell>
                        <TableCell className="hidden md:table-cell">{club.leader}</TableCell>
                        <TableCell className="text-center">{club.memberCount}</TableCell>
                        <TableCell>
                          <Badge 
                            variant="outline" 
                            className={
                              club.status === "active" 
                                ? "border-green-500 text-green-600" 
                                : "border-red-500 text-red-600"
                            }
                          >
                            {club.status === "active" ? "Aktif" : "Tidak Aktif"}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant="outline" size="icon">
                                  <Eye className="h-4 w-4" />
                                </Button>
                              </DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle>Detail Klub</DialogTitle>
                                </DialogHeader>
                                <div className="py-4">
                                  <div className="space-y-4">
                                    <div>
                                      <h3 className="font-medium">Nama Klub</h3>
                                      <p className="text-muted-foreground">{club.name}</p>
                                    </div>
                                    <div>
                                      <h3 className="font-medium">Sekolah</h3>
                                      <p className="text-muted-foreground">{club.school}</p>
                                    </div>
                                    <div>
                                      <h3 className="font-medium">Ketua Klub</h3>
                                      <p className="text-muted-foreground">{club.leader}</p>
                                    </div>
                                    <div>
                                      <h3 className="font-medium">Jumlah Member</h3>
                                      <p className="text-muted-foreground">{club.memberCount} orang</p>
                                    </div>
                                    <div>
                                      <h3 className="font-medium">Status</h3>
                                      <Badge 
                                        variant="outline" 
                                        className={
                                          club.status === "active" 
                                            ? "border-green-500 text-green-600" 
                                            : "border-red-500 text-red-600"
                                        }
                                      >
                                        {club.status === "active" ? "Aktif" : "Tidak Aktif"}
                                      </Badge>
                                    </div>
                                    <div>
                                      <h3 className="font-medium">Tanggal Dibuat</h3>
                                      <p className="text-muted-foreground">{club.dateCreated}</p>
                                    </div>
                                  </div>
                                </div>
                                <DialogFooter>
                                  <Button variant="outline" onClick={() => handleEdit(club)}>
                                    <Edit className="mr-2 h-4 w-4" />
                                    Edit
                                  </Button>
                                </DialogFooter>
                              </DialogContent>
                            </Dialog>
                            <Button 
                              variant="outline" 
                              size="icon"
                              onClick={() => handleEdit(club)}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="outline"
                              size="icon"
                              className="text-destructive"
                              onClick={() => handleDelete(club.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default AdminKlub;
