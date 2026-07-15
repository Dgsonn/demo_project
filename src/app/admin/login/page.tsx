import { PtWordmark } from "@/components/PtLogo";
import { LoginForm } from "./LoginForm";

export const metadata = {
  title: "Đăng nhập quản trị — Phúc Thịnh Flour",
};

export default function AdminLoginPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 bg-cream px-4">
      <PtWordmark size={40} />
      <LoginForm />
    </main>
  );
}
