"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { eq } from "drizzle-orm";
import { getDb } from "@/lib/db/client";
import { leads, leadStatusEnum } from "@/lib/db/schema";
import {
  constantTimeEqual,
  createAdminSession,
  destroyAdminSession,
  verifyAdminPassword,
} from "@/lib/auth/session";

export type LoginState = { error?: string } | undefined;

export async function loginAction(
  _prevState: LoginState,
  formData: FormData,
): Promise<LoginState> {
  const password = formData.get("password");
  if (typeof password !== "string" || password.length === 0) {
    return { error: "Vui lòng nhập mật khẩu." };
  }

  // Ưu tiên mật khẩu đã băm. ADMIN_PASSWORD dạng chữ thường vẫn chạy được để
  // không gãy cấu hình cũ, nhưng nên chuyển sang ADMIN_PASSWORD_HASH — xem .env.example.
  const passwordHash = process.env.ADMIN_PASSWORD_HASH;
  const plainPassword = process.env.ADMIN_PASSWORD;

  let ok: boolean;
  if (passwordHash) {
    ok = verifyAdminPassword(password, passwordHash);
  } else if (plainPassword) {
    ok = constantTimeEqual(password, plainPassword);
  } else {
    return { error: "Chưa cấu hình mật khẩu quản trị trên server." };
  }

  if (!ok) {
    return { error: "Sai mật khẩu." };
  }

  await createAdminSession();
  redirect("/admin");
}

export async function logoutAction() {
  await destroyAdminSession();
  redirect("/admin/login");
}

const STATUS_VALUES = leadStatusEnum.enumValues;
type LeadStatus = (typeof STATUS_VALUES)[number];

export async function updateLeadStatusAction(id: number, status: string) {
  if (!STATUS_VALUES.includes(status as LeadStatus)) {
    throw new Error("Trạng thái không hợp lệ.");
  }
  const db = getDb();
  await db
    .update(leads)
    .set({ status: status as LeadStatus })
    .where(eq(leads.id, id));
  revalidatePath("/admin");
}
