import { LoginForm } from "./LoginForm";

export const metadata = {
  title: "Đăng nhập quản trị — Phúc Thịnh Flour",
};

export default function AdminLoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-cream px-4">
      <LoginForm />
    </main>
  );
}
