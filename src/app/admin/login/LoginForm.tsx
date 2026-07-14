"use client";

import { useActionState } from "react";
import { loginAction } from "../actions";

export function LoginForm() {
  const [state, action, pending] = useActionState(loginAction, undefined);

  return (
    <form
      action={action}
      className="w-full max-w-sm rounded-[var(--pt-radius-lg)] border border-sage-300/40 bg-white p-8 shadow-[var(--pt-shadow-md)]"
    >
      <h1 className="text-xl font-semibold text-navy">Đăng nhập quản trị</h1>
      <p className="mt-1 text-sm text-sage-700">
        Nhập mật khẩu quản trị để xem yêu cầu khách hàng.
      </p>

      <label htmlFor="password" className="mt-6 block text-sm font-medium text-navy">
        Mật khẩu
      </label>
      <input
        id="password"
        name="password"
        type="password"
        required
        autoFocus
        className="mt-2 w-full rounded-[var(--pt-radius-md)] border border-sage-300/60 px-3 py-2 text-sm outline-none focus:border-sage-500"
      />

      {state?.error && (
        <p className="mt-3 text-sm text-[var(--pt-error)]">{state.error}</p>
      )}

      <button type="submit" disabled={pending} className="btn-primary mt-6 w-full">
        {pending ? "Đang kiểm tra…" : "Đăng nhập"}
      </button>
    </form>
  );
}
