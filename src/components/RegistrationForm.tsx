
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const schoolFormSchema = z.object({
  schoolName: z.string().min(3, "Nama sekolah minimal 3 karakter"),
  responsiblePerson: z.string().min(3, "Nama penanggung jawab minimal 3 karakter"),
  email: z.string().email("Email tidak valid"),
  password: z.string().min(6, "Password minimal 6 karakter"),
  confirmPassword: z.string().min(6, "Konfirmasi password minimal 6 karakter"),
  address: z.string().min(10, "Alamat minimal 10 karakter"),
  phone: z.string().min(10, "Nomor telepon minimal 10 karakter"),
});

const paymentFormSchema = z.object({
  paymentProof: z.any()
    .refine((file) => !!file, "File bukti pembayaran harus diupload"),
});

type SchoolFormValues = z.infer<typeof schoolFormSchema>;
type PaymentFormValues = z.infer<typeof paymentFormSchema>;

const RegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [schoolData, setSchoolData] = useState<SchoolFormValues | null>(null);
  const navigate = useNavigate();

  // Form for school information
  const schoolForm = useForm<SchoolFormValues>({
    resolver: zodResolver(schoolFormSchema),
    defaultValues: {
      schoolName: "",
      responsiblePerson: "",
      email: "",
      password: "",
      confirmPassword: "",
      address: "",
      phone: "",
    },
  });

  // Form for payment information
  const paymentForm = useForm<PaymentFormValues>({
    resolver: zodResolver(paymentFormSchema),
  });

  function onSchoolSubmit(data: SchoolFormValues) {
    setSchoolData(data);
    setStep(2);
    toast.success("Informasi sekolah berhasil disimpan");
  }

  function onPaymentSubmit() {
    toast.success("Pendaftaran berhasil! Redirecting ke dashboard...");
    setTimeout(() => {
      navigate("/sekolah/dashboard");
    }, 1500);
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Step indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div className={`flex flex-col items-center ${step === 1 ? "text-brand-blue" : "text-gray-400"}`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${step === 1 ? "bg-brand-blue text-white" : "bg-gray-200 text-gray-500"}`}>
              1
            </div>
            <span className="text-sm">Informasi Sekolah</span>
          </div>
          
          <div className="flex-1 h-1 mx-4 bg-gray-200">
            <div className={`h-full ${step === 2 ? "bg-brand-blue" : "bg-gray-200"}`} style={{ width: `${step > 1 ? "100%" : "0%"}` }}></div>
          </div>
          
          <div className={`flex flex-col items-center ${step === 2 ? "text-brand-blue" : "text-gray-400"}`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${step === 2 ? "bg-brand-blue text-white" : "bg-gray-200 text-gray-500"}`}>
              2
            </div>
            <span className="text-sm">Pembayaran</span>
          </div>
        </div>
      </div>

      {step === 1 ? (
        /* Step 1: School Information Form */
        <Form {...schoolForm}>
          <form onSubmit={schoolForm.handleSubmit(onSchoolSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={schoolForm.control}
                name="schoolName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nama Sekolah</FormLabel>
                    <FormControl>
                      <Input placeholder="SMA Negeri 1 Jakarta" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={schoolForm.control}
                name="responsiblePerson"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nama Penanggung Jawab</FormLabel>
                    <FormControl>
                      <Input placeholder="Nama Lengkap" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={schoolForm.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Sekolah</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="info@sekolah.sch.id" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={schoolForm.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={schoolForm.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Konfirmasi Password</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={schoolForm.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Alamat Sekolah</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Alamat lengkap sekolah" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={schoolForm.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nomor Telepon Sekolah</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="021-55556666" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="flex justify-end">
              <Button type="submit" className="bg-brand-blue hover:bg-blue-700">
                Lanjutkan ke Pembayaran
              </Button>
            </div>
          </form>
        </Form>
      ) : (
        /* Step 2: Payment Information Form */
        <Form {...paymentForm}>
          <form onSubmit={paymentForm.handleSubmit(onPaymentSubmit)} className="space-y-6">
            <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
              <h3 className="text-lg font-medium mb-4">Informasi Pembayaran</h3>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  Silakan lakukan pembayaran pendaftaran sebesar:
                </p>
                <p className="text-2xl font-bold text-brand-blue">Rp 100.000</p>
                
                <div className="bg-white border border-gray-200 rounded-md p-4">
                  <p className="font-semibold">Rekening Bank BCA</p>
                  <p>Nomor Rekening: 12345678</p>
                  <p>Atas Nama: PT Fadplus Indonesia</p>
                </div>
                
                <p className="text-sm text-gray-500">
                  Harap transfer sesuai nominal di atas dan simpan bukti pembayaran Anda.
                </p>
              </div>
            </div>
            
            <FormField
              control={paymentForm.control}
              name="paymentProof"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Upload Bukti Transfer</FormLabel>
                  <FormControl>
                    <Input 
                      type="file" 
                      accept="image/*"
                      onChange={(e) => {
                        field.onChange(e.target.files?.[0] || null);
                      }} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="flex justify-between">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setStep(1)}
              >
                Kembali
              </Button>
              <Button type="submit" className="bg-brand-blue hover:bg-blue-700">
                Register
              </Button>
            </div>
          </form>
        </Form>
      )}
    </div>
  );
};

export default RegistrationForm;
