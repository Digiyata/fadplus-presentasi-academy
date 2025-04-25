
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import LoginForm from '@/components/LoginForm';

const Login = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1 bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <LoginForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
