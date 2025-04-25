
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
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const AdminSekolah = () => {
  // Dummy data for schools
  const [schools, setSchools] = useState([
    {
      id: 1,
      name: "SMA Negeri 3 Bandung",
      email: "sman3bandung@edu.id",
      address: "Jl. Belitung No. 8, Bandung",
      contactPerson: "Siti Nurhayati",
      phone: "08123456789",
      status: "active",
      dateJoined: "15 Jan 2024"
    },
    {
      id: 2,
      name: "SMA Harapan Bangsa",
      email: "smahb@edu.id",
      address: "Jl. Merdeka No. 12, Jakarta",
      contactPerson: "Budi Santoso",
      phone: "08234567890",
      status: "pending",
      dateJoined: "22 Feb 2024"
    },
    {
      id: 3,
      name: "SMK Telkom Jakarta",
      email: "smktelkom@edu.id",
      address: "Jl. Telekomunikasi No. 1, Jakarta",
      contactPerson: "Anisa Putri",
      phone: "08345678901",
      status: "active",
      dateJoined: "10 Mar 2024"
    },
    {
      id: 4,
      name: "SMA Negeri 1 Jakarta",
      email: "sman1jakarta@edu.id",
      address: "Jl. Kebon Sirih No. 1, Jakarta",
      contactPerson: "Rudi Hartono",
      phone: "08456789012",
      status: "active",
      dateJoined: "05 Apr 2024"
    },
    {
      id: 5,
      name: "SMA Negeri 5 Surabaya",
      email: "sman5surabaya@edu.id",
      address: "Jl. Ketintang No. 5, Surabaya",
      contactPerson: "Dewi Lestari",
      phone: "08567890123",
      status: "inactive",
      dateJoined: "18 Apr 2024"
    },
    {
      id: 6,
      name: "SMA Cendekia",
      email: "admin@smacendekia.sch.id",
      address: "Jl. Ahmad Yani No. 24, Semarang",
      contactPerson: "Ahmad Fauzi",
      phone: "08678901234",
      status: "active",
      dateJoined: "07 Mar 2024"
    },
    {
      id: 7,
      name: "SMK Nusantara 1",
      email: "smk1@nusantara.sch.id",
      address: "Jl. Diponegoro No. 15, Yogyakarta",
      contactPerson: "Ratna Sari",
      phone: "08789012345",
      status: "active",
      dateJoined: "12 Feb 2024"
    }
  ]);

  // Form states
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    contactPerson: "",
    phone: ""
  });

  // Search state
  const [searchTerm, setSearchTerm] = useState("");
  
  // Edit state
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState<number | null>(null);
  
  // Handle form change
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  // Handle form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isEditing && editId) {
      // Update existing school
      const updatedSchools = schools.map(school => 
        school.id === editId ? { 
          ...school, 
          name: formData.name,
          email: formData.email,
          address: formData.address,
          contactPerson: formData.contactPerson,
          phone: formData.phone
        } : school
      );
      
      setSchools(updatedSchools);
      toast.success("Data sekolah berhasil diperbarui");
    } else {
      // Add new school
      const newSchool = {
        id: schools.length + 1,
        name: formData.name,
        email: formData.email,
        address: formData.address,
        contactPerson: formData.contactPerson,
        phone: formData.phone,
        status: "active",
        dateJoined: new Date().toLocaleDateString('id-ID', {
          day: 'numeric',
          month: 'short',
          year: 'numeric'
        })
      };
      
      setSchools([...schools, newSchool]);
      toast.success("Sekolah baru berhasil ditambahkan");
    }
    
    // Reset form
    resetForm();
  };
  
  // Reset form
  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      address: "",
      contactPerson: "",
      phone: ""
    });
    setIsEditing(false);
    setEditId(null);
  };
  
  // Handle delete
  const handleDelete = (id: number) => {
    setSchools(schools.filter(school => school.id !== id));
    toast.success("Data sekolah berhasil dihapus");
  };
  
  // Handle edit
  const handleEdit = (school: any) => {
    setFormData({
      name: school.name,
      email: school.email,
      address: school.address,
      contactPerson: school.contactPerson,
      phone: school.phone
    });
    setIsEditing(true);
    setEditId(school.id);
  };
  
  // Filter schools based on search
  const filteredSchools = schools.filter(school => 
    school.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    school.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    school.contactPerson.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Manajemen Sekolah</h1>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Tambah Sekolah
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{isEditing ? "Edit Sekolah" : "Tambah Sekolah Baru"}</DialogTitle>
                <DialogDescription>
                  {isEditing 
                    ? "Edit informasi sekolah di bawah ini." 
                    : "Isi data sekolah untuk mendaftarkan sekolah baru."}
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit}>
                <div className="grid gap-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nama Sekolah</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Masukkan nama sekolah"
                      value={formData.name}
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Sekolah</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="email@sekolah.edu"
                        value={formData.email}
                        onChange={handleFormChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Nomor Telepon</Label>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="08xxxxxxxxxx"
                        value={formData.phone}
                        onChange={handleFormChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contactPerson">Penanggung Jawab</Label>
                    <Input
                      id="contactPerson"
                      name="contactPerson"
                      placeholder="Nama penanggung jawab"
                      value={formData.contactPerson}
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Alamat Sekolah</Label>
                    <Textarea
                      id="address"
                      name="address"
                      placeholder="Alamat lengkap sekolah"
                      value={formData.address}
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
            <CardTitle>Daftar Sekolah</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Cari sekolah..."
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
                    <TableHead>Nama Sekolah</TableHead>
                    <TableHead className="hidden md:table-cell">Email</TableHead>
                    <TableHead className="hidden md:table-cell">Alamat</TableHead>
                    <TableHead>Penanggung Jawab</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Aksi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredSchools.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center h-24">
                        Tidak ada data sekolah yang sesuai dengan pencarian
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredSchools.map((school) => (
                      <TableRow key={school.id}>
                        <TableCell className="font-medium">{school.name}</TableCell>
                        <TableCell className="hidden md:table-cell">{school.email}</TableCell>
                        <TableCell className="hidden md:table-cell max-w-xs truncate">
                          {school.address}
                        </TableCell>
                        <TableCell>{school.contactPerson}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className={
                            school.status === "active" 
                              ? "border-green-500 text-green-600" 
                              : school.status === "pending"
                                ? "border-yellow-500 text-yellow-600"
                                : "border-red-500 text-red-600"
                          }>
                            {school.status === "active" 
                              ? "Aktif" 
                              : school.status === "pending" 
                                ? "Pending" 
                                : "Tidak Aktif"}
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
                                  <DialogTitle>Detail Sekolah</DialogTitle>
                                </DialogHeader>
                                <div className="py-4">
                                  <div className="space-y-4">
                                    <div>
                                      <h3 className="font-medium">Nama Sekolah</h3>
                                      <p className="text-muted-foreground">{school.name}</p>
                                    </div>
                                    <div>
                                      <h3 className="font-medium">Email</h3>
                                      <p className="text-muted-foreground">{school.email}</p>
                                    </div>
                                    <div>
                                      <h3 className="font-medium">Alamat</h3>
                                      <p className="text-muted-foreground">{school.address}</p>
                                    </div>
                                    <div>
                                      <h3 className="font-medium">Penanggung Jawab</h3>
                                      <p className="text-muted-foreground">{school.contactPerson}</p>
                                    </div>
                                    <div>
                                      <h3 className="font-medium">Nomor Telepon</h3>
                                      <p className="text-muted-foreground">{school.phone}</p>
                                    </div>
                                    <div>
                                      <h3 className="font-medium">Status</h3>
                                      <Badge variant="outline" className={
                                        school.status === "active" 
                                          ? "border-green-500 text-green-600" 
                                          : school.status === "pending"
                                            ? "border-yellow-500 text-yellow-600"
                                            : "border-red-500 text-red-600"
                                      }>
                                        {school.status === "active" 
                                          ? "Aktif" 
                                          : school.status === "pending" 
                                            ? "Pending" 
                                            : "Tidak Aktif"}
                                      </Badge>
                                    </div>
                                    <div>
                                      <h3 className="font-medium">Tanggal Bergabung</h3>
                                      <p className="text-muted-foreground">{school.dateJoined}</p>
                                    </div>
                                  </div>
                                </div>
                                <DialogFooter>
                                  <Button variant="outline" onClick={() => handleEdit(school)}>
                                    <Edit className="mr-2 h-4 w-4" />
                                    Edit
                                  </Button>
                                </DialogFooter>
                              </DialogContent>
                            </Dialog>
                            <Button 
                              variant="outline" 
                              size="icon"
                              onClick={() => handleEdit(school)}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="outline"
                              size="icon"
                              className="text-destructive"
                              onClick={() => handleDelete(school.id)}
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

export default AdminSekolah;
