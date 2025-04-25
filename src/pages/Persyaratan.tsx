
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CheckItem = ({ text }: { text: string }) => (
  <div className="flex items-start gap-2 mb-3">
    <Check size={20} className="text-green-500 mt-1 flex-shrink-0" />
    <span>{text}</span>
  </div>
);

const XItem = ({ text }: { text: string }) => (
  <div className="flex items-start gap-2 mb-3">
    <X size={20} className="text-red-500 mt-1 flex-shrink-0" />
    <span>{text}</span>
  </div>
);

const Persyaratan = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-500 to-blue-700 py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Persyaratan</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Informasi lengkap tentang persyaratan untuk bergabung dengan FadPlus sebagai mitra sekolah dan anggota klub.
            </p>
          </div>
        </section>

        {/* Requirements Tabs */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10 text-brand-blue">Syarat & Ketentuan</h2>
            
            <div className="max-w-4xl mx-auto">
              <Tabs defaultValue="sekolah">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="sekolah">Persyaratan Sekolah</TabsTrigger>
                  <TabsTrigger value="siswa">Persyaratan Siswa</TabsTrigger>
                </TabsList>
                
                <TabsContent value="sekolah">
                  <Card>
                    <CardContent className="p-6 space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold mb-4 text-brand-blue">Syarat Administratif</h3>
                        <div className="space-y-2">
                          <CheckItem text="Sekolah berada di wilayah Indonesia" />
                          <CheckItem text="Memiliki izin operasional resmi dari Dinas Pendidikan" />
                          <CheckItem text="Memiliki guru pembina yang bertanggung jawab untuk program" />
                          <CheckItem text="Berkomitmen menjalankan program minimal 1 tahun" />
                          <CheckItem text="Bersedia menyediakan ruang dan fasilitas untuk kegiatan" />
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold mb-4 text-brand-blue">Syarat Teknis</h3>
                        <div className="space-y-2">
                          <CheckItem text="Memiliki akses internet stabil" />
                          <CheckItem text="Memiliki proyektor atau smart TV untuk presentasi" />
                          <CheckItem text="Menyediakan ruangan yang dapat menampung minimal 20 siswa" />
                          <CheckItem text="Memiliki komputer/laptop untuk kegiatan pendukung" />
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold mb-4 text-brand-blue">Biaya Pendaftaran</h3>
                        <div className="space-y-2">
                          <p className="mb-2">Biaya pendaftaran untuk bergabung dengan program FadPlus:</p>
                          <div className="bg-gray-50 p-4 rounded-md">
                            <p className="font-semibold text-lg">Rp 100.000 / tahun</p>
                            <p className="text-sm text-gray-600">Termasuk akses ke platform, materi pembelajaran, dan dukungan teknis</p>
                          </div>
                          <p className="text-sm text-gray-600 mt-2">
                            * Biaya tambahan mungkin berlaku untuk pelatihan khusus dan sertifikasi.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="siswa">
                  <Card>
                    <CardContent className="p-6 space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold mb-4 text-brand-blue">Kriteria Umum</h3>
                        <div className="space-y-2">
                          <CheckItem text="Siswa aktif di sekolah yang sudah terdaftar sebagai mitra FadPlus" />
                          <CheckItem text="Usia minimal 14 tahun" />
                          <CheckItem text="Memiliki minat dalam public speaking dan presentasi" />
                          <CheckItem text="Berkomitmen untuk mengikuti seluruh rangkaian program" />
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold mb-4 text-brand-blue">Dokumen yang Diperlukan</h3>
                        <div className="space-y-2">
                          <CheckItem text="Formulir pendaftaran yang disetujui oleh orang tua/wali" />
                          <CheckItem text="Surat rekomendasi dari guru atau wali kelas" />
                          <CheckItem text="Foto terbaru ukuran 3x4 (2 lembar)" />
                          <CheckItem text="Fotokopi kartu pelajar" />
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold mb-4 text-brand-blue">Komitmen yang Diharapkan</h3>
                        <div className="space-y-2">
                          <CheckItem text="Menghadiri minimal 80% dari seluruh pertemuan" />
                          <CheckItem text="Aktif berpartisipasi dalam kegiatan kelompok" />
                          <CheckItem text="Menyelesaikan tugas-tugas yang diberikan" />
                          <CheckItem text="Berpartisipasi dalam presentasi akhir" />
                          <XItem text="Tidak diperkenankan untuk berhenti di tengah program tanpa alasan yang jelas" />
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold mb-4 text-brand-blue">Biaya Keanggotaan</h3>
                        <div className="bg-gray-50 p-4 rounded-md">
                          <p className="font-semibold text-lg">Rp 25.000 / semester</p>
                          <p className="text-sm text-gray-600">Termasuk materi pembelajaran, akses platform, dan sertifikat keikutsertaan</p>
                        </div>
                        <p className="text-sm text-gray-600 mt-2">
                          * Sekolah mungkin memiliki kebijakan biaya tambahan sendiri. Silakan konsultasikan dengan sekolah Anda.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-brand-blue">Siap Mendaftar?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-600">
              Jika sekolah Anda memenuhi persyaratan di atas dan siap untuk bergabung dengan FadPlus, mulailah pendaftaran sekarang!
            </p>
            
            <Button className="bg-brand-blue hover:bg-blue-700" size="lg" asChild>
              <Link to="/register">Mulai Pendaftaran</Link>
            </Button>
            <p className="mt-4 text-sm text-gray-500">
              Jika Anda memiliki pertanyaan lebih lanjut, silakan hubungi kami di info@fadplus.com
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Persyaratan;
