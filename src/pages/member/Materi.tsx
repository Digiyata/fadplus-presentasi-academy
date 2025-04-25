
import { useState } from "react";
import { DashboardLayout } from "@/components/layouts/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Play, Video, Check, Filter } from "lucide-react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { Progress } from "@/components/ui/progress";

interface Materi {
  id: number;
  title: string;
  type: "PDF" | "Video";
  level: "Dasar" | "Terampil" | "Mahir";
  description: string;
  duration: number;
  completed: boolean;
  progress: number;
}

const MemberMateri = () => {
  // Dummy data for materials
  const [materials, setMaterials] = useState<Materi[]>([
    {
      id: 1,
      title: "Pengenalan Dasar Public Speaking",
      type: "PDF",
      level: "Dasar",
      description: "Materi pengenalan dasar-dasar public speaking untuk pemula",
      duration: 30,
      completed: true,
      progress: 100
    },
    {
      id: 2,
      title: "Teknik Berbicara di Depan Umum",
      type: "Video",
      level: "Dasar",
      description: "Video tutorial teknik berbicara di depan umum dengan percaya diri",
      duration: 45,
      completed: true,
      progress: 100
    },
    {
      id: 3,
      title: "Menyusun Slide Presentasi",
      type: "PDF",
      level: "Dasar",
      description: "Panduan menyusun slide presentasi yang efektif",
      duration: 25,
      completed: false,
      progress: 60
    },
    {
      id: 4,
      title: "Teknik Komunikasi Non-verbal",
      type: "Video",
      level: "Terampil",
      description: "Video tutorial teknik komunikasi non-verbal dalam presentasi",
      duration: 35,
      completed: false,
      progress: 0
    },
    {
      id: 5,
      title: "Mengatasi Grogi saat Presentasi",
      type: "PDF",
      level: "Terampil",
      description: "Panduan mengatasi kegugupan dan grogi saat melakukan presentasi",
      duration: 20,
      completed: false,
      progress: 0
    },
    {
      id: 6,
      title: "Teknik Menjawab Pertanyaan",
      type: "Video",
      level: "Terampil",
      description: "Video tutorial teknik menjawab pertanyaan dengan baik",
      duration: 30,
      completed: false,
      progress: 0
    },
    {
      id: 7,
      title: "Presentasi untuk Event Formal",
      type: "PDF",
      level: "Mahir",
      description: "Panduan melakukan presentasi pada acara formal",
      duration: 40,
      completed: false,
      progress: 0
    },
    {
      id: 8,
      title: "Public Speaking untuk Kompetisi",
      type: "Video",
      level: "Mahir",
      description: "Video tutorial public speaking untuk kompetisi",
      duration: 50,
      completed: false,
      progress: 0
    }
  ]);

  // State for active material
  const [activeMaterial, setActiveMaterial] = useState<Materi | null>(null);
  
  // Track progress
  const handleProgress = (id: number, progress: number) => {
    const updatedMaterials = materials.map(material => {
      if (material.id === id) {
        const completed = progress >= 100;
        return {
          ...material,
          progress: progress,
          completed: completed
        };
      }
      return material;
    });
    
    setMaterials(updatedMaterials);
    
    if (progress >= 100) {
      toast.success("Materi telah selesai dipelajari!");
    }
  };
  
  // Mark as complete
  const handleMarkComplete = (id: number) => {
    const updatedMaterials = materials.map(material => {
      if (material.id === id) {
        return {
          ...material,
          progress: 100,
          completed: true
        };
      }
      return material;
    });
    
    setMaterials(updatedMaterials);
    toast.success("Materi ditandai sebagai selesai");
  };
  
  // Calculate progress by level
  const getProgressByLevel = (level: "Dasar" | "Terampil" | "Mahir"): number => {
    const levelMaterials = materials.filter(m => m.level === level);
    if (levelMaterials.length === 0) return 0;
    
    const totalProgress = levelMaterials.reduce((sum, material) => sum + material.progress, 0);
    return Math.floor(totalProgress / levelMaterials.length);
  };

  return (
    <DashboardLayout role="member">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Materi Pelatihan</h1>
        </div>
        
        {/* Progress Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {["Dasar", "Terampil", "Mahir"].map((level) => (
            <Card key={level}>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium">Jenjang {level}</h3>
                  <Badge 
                    variant="outline" 
                    className={
                      level === "Dasar" 
                        ? "border-blue-500 text-blue-600" 
                        : level === "Terampil"
                          ? "border-green-500 text-green-600"
                          : "border-purple-500 text-purple-600"
                    }
                  >
                    {level}
                  </Badge>
                </div>
                <Progress 
                  value={getProgressByLevel(level as "Dasar" | "Terampil" | "Mahir")} 
                  className="h-2 mb-2" 
                />
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Progress</span>
                  <span>{getProgressByLevel(level as "Dasar" | "Terampil" | "Mahir")}%</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Materials List */}
        <Card>
          <CardHeader>
            <CardTitle>Daftar Materi</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="Dasar">
              <div className="flex justify-between items-center mb-4">
                <TabsList>
                  <TabsTrigger value="Dasar">Dasar</TabsTrigger>
                  <TabsTrigger value="Terampil">Terampil</TabsTrigger>
                  <TabsTrigger value="Mahir">Mahir</TabsTrigger>
                </TabsList>
                <Button variant="outline" size="sm">
                  <Filter className="mr-2 h-4 w-4" /> Filter
                </Button>
              </div>
              
              {["Dasar", "Terampil", "Mahir"].map((level) => (
                <TabsContent value={level} key={level}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {materials
                      .filter(material => material.level === level)
                      .map((material) => (
                        <div 
                          key={material.id}
                          className="border rounded-lg p-4 hover:border-primary transition-colors"
                        >
                          <div className="flex justify-between items-start mb-3">
                            <div className="flex items-start gap-3">
                              {material.type === "PDF" ? (
                                <FileText className="h-8 w-8 text-red-500 mt-1" />
                              ) : (
                                <Video className="h-8 w-8 text-blue-500 mt-1" />
                              )}
                              <div>
                                <h3 className="font-medium">{material.title}</h3>
                                <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                                  {material.description}
                                </p>
                              </div>
                            </div>
                            {material.completed && (
                              <Badge className="bg-green-100 text-green-800 border-green-200">
                                <Check className="h-3 w-3 mr-1" /> Selesai
                              </Badge>
                            )}
                          </div>
                          
                          <div className="mt-4">
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-muted-foreground">Progress</span>
                              <span>{material.progress}%</span>
                            </div>
                            <Progress value={material.progress} className="h-1.5 mb-4" />
                          </div>
                          
                          <div className="flex justify-between items-center">
                            <div className="flex items-center text-sm text-muted-foreground">
                              <span>Durasi: {material.duration} menit</span>
                            </div>
                            
                            <Dialog onOpenChange={(open) => {
                              if (open) setActiveMaterial(material);
                            }}>
                              <DialogTrigger asChild>
                                <Button size="sm">
                                  {material.type === "PDF" ? "Baca" : "Tonton"}
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-4xl">
                                <DialogHeader>
                                  <DialogTitle>{activeMaterial?.title}</DialogTitle>
                                  <DialogDescription>
                                    {activeMaterial?.description}
                                  </DialogDescription>
                                </DialogHeader>
                                
                                <div className="py-4">
                                  {activeMaterial?.type === "PDF" ? (
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
                                    <div className="border rounded-md aspect-video bg-muted flex flex-col items-center justify-center">
                                      <Play className="w-16 h-16 text-blue-500 mb-2" />
                                      <p className="text-center text-sm text-muted-foreground">
                                        Video player akan ditampilkan di sini.
                                      </p>
                                      
                                      <div className="mt-4 w-full max-w-md">
                                        <div className="bg-gray-200 h-1.5 rounded-full w-full">
                                          <div 
                                            className="bg-blue-500 h-1.5 rounded-full"
                                            style={{ width: `${activeMaterial?.progress || 0}%` }}
                                          ></div>
                                        </div>
                                      </div>
                                    </div>
                                  )}
                                </div>
                                
                                <DialogFooter className="flex flex-col sm:flex-row gap-2">
                                  {activeMaterial && activeMaterial.progress < 100 && (
                                    <Button 
                                      onClick={() => {
                                        if (activeMaterial) {
                                          handleMarkComplete(activeMaterial.id);
                                        }
                                      }}
                                    >
                                      <Check className="mr-2 h-4 w-4" /> Tandai Selesai
                                    </Button>
                                  )}
                                  {activeMaterial && activeMaterial.progress < 100 && (
                                    <Button 
                                      variant="outline"
                                      onClick={() => {
                                        if (activeMaterial) {
                                          const newProgress = Math.min(activeMaterial.progress + 25, 100);
                                          handleProgress(activeMaterial.id, newProgress);
                                        }
                                      }}
                                    >
                                      Simulasi Progress (+25%)
                                    </Button>
                                  )}
                                </DialogFooter>
                              </DialogContent>
                            </Dialog>
                          </div>
                        </div>
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default MemberMateri;
