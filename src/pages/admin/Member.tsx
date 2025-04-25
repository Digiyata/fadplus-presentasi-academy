
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
import { Eye, Edit, Trash2, Plus, Search, UserCheck } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
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

const AdminMember = () => {
  // Dummy data for members
  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Dinda Putri",
      nik: "3273012509050001",
      club: "Klub Presentasi SMAN 3 Bandung",
      school: "SMA Negeri 3 Bandung",
      level: "Dasar",
      progress: 75,
      status: "active",
      dateJoined: "05 Feb 2024"
    },
    {
      id: 2,
      name: "Rafi Ahmad",
      nik: "3271031204050002",
      club: "Public Speaking Club SMA Harapan Bangsa",
      school: "SMA Harapan Bangsa",
      level: "Dasar",
      progress: 50,
      status: "active",
      dateJoined: "12 Feb 2024"
    },
    {
      id: 3,
      name: "Sinta Dewi",
      nik: "3275046710050003",
      club: "Telkom Speech Club",
      school: "SMK Telkom Jakarta",
      level: "Terampil",
      progress: 85,
      status: "active",
      dateJoined: "20 Mar 2024"
    },
    {
      id: 4,
      name: "Arya Pratama",
      nik: "3271050309050004",
      club: "SMAN 1 Jakarta Presenter Club",
      school: "SMA Negeri 1 Jakarta",
      level: "Mahir",
      progress: 100,
      status: "certified",
      dateJoined: "15 Jan 2024"
    },
    {
      id: 5,
      name: "Maya Indah",
      nik: "3272062205050005",
      club: "SMA Cendekia Speaking Club",
      school: "SMA Cendekia",
      level: "Terampil",
      progress: 90,
      status: "active",
      dateJoined: "10 Feb 2024"
    },
    {
      id: 6,
      name: "Rizki Pratama",
      nik: "3274072006050006",
      club: "SMK Nusantara Speaker Club",
      school: "SMK Nusantara 1",
      level: "Dasar",
      progress: 60,
      status: "inactive",
      dateJoined: "25 Mar 2024"
    },
    {
      id: 7,
      name: "Anisa Rahmawati",
      nik: "3272081809050007",
      club: "Telkom Speech Club",
      school: "SMK Telkom Jakarta",
      level: "Dasar",
      progress: 40,
      status: "active",
      dateJoined: "08 Apr 2024"
    }
  ]);

  // Dummy data for clubs and schools
  const clubs = [
    { name: "Klub Presentasi SMAN 3 Bandung", school: "SMA Negeri 3 Bandung" },
    { name: "Public Speaking Club SMA Harapan Bangsa", school: "SMA Harapan Bangsa" },
    { name: "Telkom Speech Club", school: "SMK Telkom Jakarta" },
    { name: "SMAN 1 Jakarta Presenter Club", school: "SMA Negeri 1 Jakarta" },
    { name: "SMA Cendekia Speaking Club", school: "SMA Cendekia" },
    { name: "SMK Nusantara Speaker Club", school: "SMK Nusantara 1" }
  ];

  // Form states
  const [formData, setFormData] = useState({
    name: "",
    nik: "",
    club: "",
    level: "Dasar",
    progress: 0,
  });

  // Search state
  const [searchTerm, setSearchTerm] = useState("");
  
  // Edit state
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState<number | null>(null);
  
  // Selected club's school
  const [selectedClub, setSelectedClub] = useState("");
  const selectedSchool = clubs.find(club => club.name === selectedClub)?.school || "";
  
  // Handle form change
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  // Handle select change
  const handleClubChange = (value: string) => {
    setFormData(prev => ({ ...prev, club: value }));
    setSelectedClub(value);
  };

  const handleLevelChange = (value: string) => {
    setFormData(prev => ({ ...prev, level: value }));
  };
  
  // Handle form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isEditing && editId) {
      // Update existing member
      const updatedMembers = members.map(member => 
        member.id === editId ? { 
          ...member, 
          name: formData.name,
          nik: formData.nik,
          club: formData.club,
          school: selectedSchool,
          level: formData.level,
          progress: formData.progress || 0
        } : member
      );
      
      setMembers(updatedMembers);
      toast.success("Data member berhasil diperbarui");
    } else {
      // Add new member
      const newMember = {
        id: members.length + 1,
        name: formData.name,
        nik: formData.nik,
        club: formData.club,
        school: selectedSchool,
        level: formData.level,
        progress: formData.progress || 0,
        status: "active",
        dateJoined: new Date().toLocaleDateString('id-ID', {
          day: 'numeric',
          month: 'short',
          year: 'numeric'
        })
      };
      
      setMembers([...members, newMember]);
      toast.success("Member baru berhasil ditambahkan");
    }
    
    // Reset form
    resetForm();
  };
  
  // Reset form
  const resetForm = () => {
    setFormData({
      name: "",
      nik: "",
      club: "",
      level: "Dasar",
      progress: 0
    });
    setIsEditing(false);
    setEditId(null);
    setSelectedClub("");
  };
  
  // Handle delete
  const handleDelete = (id: number) => {
    setMembers(members.filter(member => member.id !== id));
    toast.success("Data member berhasil dihapus");
  };
  
  // Handle edit
  const handleEdit = (member: any) => {
    setFormData({
      name: member.name,
      nik: member.nik,
      club: member.club,
      level: member.level,
      progress: member.progress
    });
    setSelectedClub(member.club);
    setIsEditing(true);
    setEditId(member.id);
  };
  
  // Render status badge
  const renderStatusBadge = (status: string) => {
    switch(status) {
      case 'active':
        return (
          <Badge variant="outline" className="border-green-500 text-green-600">
            Aktif
          </Badge>
        );
      case 'certified':
        return (
          <Badge variant="outline" className="border-blue-500 text-blue-600">
            <UserCheck className="mr-1 h-3 w-3" /> Tersertifikasi
          </Badge>
        );
      case 'inactive':
        return (
          <Badge variant="outline" className="border-red-500 text-red-600">
            Tidak Aktif
          </Badge>
        );
      default:
        return null;
    }
  };
  
  // Filter members based on search
  const filteredMembers = members.filter(member => 
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.nik.includes(searchTerm) ||
    member.club.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.school.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Manajemen Member</h1>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Tambah Member
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-lg">
              <DialogHeader>
                <DialogTitle>{isEditing ? "Edit Member" : "Tambah Member Baru"}</DialogTitle>
                <DialogDescription>
                  {isEditing 
                    ? "Edit informasi member di bawah ini." 
                    : "Isi data untuk mendaftarkan member baru."}
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit}>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nama Lengkap</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Masukkan nama lengkap"
                        value={formData.name}
                        onChange={handleFormChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="nik">NIK</Label>
                      <Input
                        id="nik"
                        name="nik"
                        placeholder="Nomor NIK"
                        value={formData.nik}
                        onChange={handleFormChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="club">Klub</Label>
                    <Select 
                      value={formData.club} 
                      onValueChange={handleClubChange}
                      required
                    >
                      <SelectTrigger id="club">
                        <SelectValue placeholder="Pilih klub" />
                      </SelectTrigger>
                      <SelectContent>
                        {clubs.map((club, index) => (
                          <SelectItem key={index} value={club.name}>
                            {club.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  {selectedClub && (
                    <div className="space-y-2">
                      <Label>Sekolah</Label>
                      <Input
                        value={selectedSchool}
                        disabled
                        className="bg-muted"
                      />
                    </div>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="level">Jenjang</Label>
                      <Select 
                        value={formData.level} 
                        onValueChange={handleLevelChange}
                        required
                      >
                        <SelectTrigger id="level">
                          <SelectValue placeholder="Pilih jenjang" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Dasar">Dasar</SelectItem>
                          <SelectItem value="Terampil">Terampil</SelectItem>
                          <SelectItem value="Mahir">Mahir</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="progress">Progress (%)</Label>
                      <Input
                        id="progress"
                        name="progress"
                        type="number"
                        min="0"
                        max="100"
                        value={formData.progress}
                        onChange={handleFormChange}
                        required
                      />
                    </div>
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
            <CardTitle>Daftar Member</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Cari member..."
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
                    <TableHead>Nama</TableHead>
                    <TableHead className="hidden md:table-cell">NIK</TableHead>
                    <TableHead className="hidden md:table-cell">Klub / Sekolah</TableHead>
                    <TableHead>Jenjang</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Aksi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredMembers.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center h-24">
                        Tidak ada member yang sesuai dengan pencarian
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredMembers.map((member) => (
                      <TableRow key={member.id}>
                        <TableCell className="font-medium">{member.name}</TableCell>
                        <TableCell className="hidden md:table-cell">{member.nik}</TableCell>
                        <TableCell className="hidden md:table-cell">
                          <div>
                            <p className="font-medium">{member.club}</p>
                            <p className="text-sm text-muted-foreground">{member.school}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge 
                            variant="outline" 
                            className={
                              member.level === "Dasar" 
                                ? "border-blue-500 text-blue-600" 
                                : member.level === "Terampil"
                                  ? "border-green-500 text-green-600"
                                  : "border-purple-500 text-purple-600"
                            }
                          >
                            {member.level}
                          </Badge>
                        </TableCell>
                        <TableCell>{renderStatusBadge(member.status)}</TableCell>
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
                                  <DialogTitle>Detail Member</DialogTitle>
                                </DialogHeader>
                                <div className="py-4">
                                  <div className="space-y-4">
                                    <div>
                                      <h3 className="font-medium">Nama Lengkap</h3>
                                      <p className="text-muted-foreground">{member.name}</p>
                                    </div>
                                    <div>
                                      <h3 className="font-medium">NIK</h3>
                                      <p className="text-muted-foreground">{member.nik}</p>
                                    </div>
                                    <div>
                                      <h3 className="font-medium">Klub</h3>
                                      <p className="text-muted-foreground">{member.club}</p>
                                    </div>
                                    <div>
                                      <h3 className="font-medium">Sekolah</h3>
                                      <p className="text-muted-foreground">{member.school}</p>
                                    </div>
                                    <div>
                                      <h3 className="font-medium">Jenjang</h3>
                                      <Badge 
                                        variant="outline" 
                                        className={
                                          member.level === "Dasar" 
                                            ? "border-blue-500 text-blue-600" 
                                            : member.level === "Terampil"
                                              ? "border-green-500 text-green-600"
                                              : "border-purple-500 text-purple-600"
                                        }
                                      >
                                        {member.level}
                                      </Badge>
                                    </div>
                                    <div>
                                      <h3 className="font-medium">Progress</h3>
                                      <div className="flex items-center gap-2">
                                        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                                          <div 
                                            className="h-full bg-blue-500 rounded-full"
                                            style={{ width: `${member.progress}%` }}
                                          ></div>
                                        </div>
                                        <span className="text-sm text-muted-foreground">{member.progress}%</span>
                                      </div>
                                    </div>
                                    <div>
                                      <h3 className="font-medium">Status</h3>
                                      {renderStatusBadge(member.status)}
                                    </div>
                                    <div>
                                      <h3 className="font-medium">Tanggal Bergabung</h3>
                                      <p className="text-muted-foreground">{member.dateJoined}</p>
                                    </div>
                                  </div>
                                </div>
                                <DialogFooter>
                                  <Button variant="outline" onClick={() => handleEdit(member)}>
                                    <Edit className="mr-2 h-4 w-4" />
                                    Edit
                                  </Button>
                                </DialogFooter>
                              </DialogContent>
                            </Dialog>
                            <Button 
                              variant="outline" 
                              size="icon"
                              onClick={() => handleEdit(member)}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="outline"
                              size="icon"
                              className="text-destructive"
                              onClick={() => handleDelete(member.id)}
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

export default AdminMember;
