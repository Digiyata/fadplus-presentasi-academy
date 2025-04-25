
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
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const loginFormSchema = z.object({
  email: z.string().email("Email tidak valid"),
  password: z.string().min(6, "Password minimal 6 karakter"),
});

type LoginFormValues = z.infer<typeof loginFormSchema>;

// Mock user database
const users = [
  { email: "admin@fadplus.com", password: "admin123", role: "admin" },
  { email: "sekolah@fadplus.com", password: "admin123", role: "sekolah" },
  { email: "club@fadplus.com", password: "admin123", role: "klub" },
  { email: "member@fadplus.com", password: "admin123", role: "member" },
];

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(data: LoginFormValues) {
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      const user = users.find(
        (u) => u.email === data.email && u.password === data.password
      );

      if (user) {
        toast.success("Login berhasil!");
        
        // Navigate to appropriate dashboard based on role
        switch (user.role) {
          case "admin":
            navigate("/admin/dashboard");
            break;
          case "sekolah":
            navigate("/sekolah/dashboard");
            break;
          case "klub":
            navigate("/klub/dashboard");
            break;
          case "member":
            navigate("/member/dashboard");
            break;
        }
      } else {
        toast.error("Email atau password salah!");
      }

      setLoading(false);
    }, 1000);
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-brand-blue">Login</h1>
        <p className="text-gray-600 mt-2">
          Masuk ke akun Fadplus Anda
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="nama@email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
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

            <Button type="submit" className="w-full bg-brand-blue hover:bg-blue-700" disabled={loading}>
              {loading ? "Memproses..." : "Login"}
            </Button>
          </form>
        </Form>
        
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>Demo accounts:</p>
          <div className="mt-2 grid grid-cols-1 gap-1">
            <div className="text-left p-2 border border-gray-200 rounded-md">
              <p><span className="font-medium">Admin:</span> admin@fadplus.com / admin123</p>
            </div>
            <div className="text-left p-2 border border-gray-200 rounded-md">
              <p><span className="font-medium">Sekolah:</span> sekolah@fadplus.com / admin123</p>
            </div>
            <div className="text-left p-2 border border-gray-200 rounded-md">
              <p><span className="font-medium">Klub:</span> club@fadplus.com / admin123</p>
            </div>
            <div className="text-left p-2 border border-gray-200 rounded-md">
              <p><span className="font-medium">Member:</span> member@fadplus.com / admin123</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
