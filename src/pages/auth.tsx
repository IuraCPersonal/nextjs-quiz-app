import AuthForm from "@/components/auth/auth-form"

const AuthPage = () => {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-between p-24"
    >
      <AuthForm />
    </div>
  );
};

export default AuthPage;
