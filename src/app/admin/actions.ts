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

  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!adminPassword) {
    return { error: "ADMIN_PASSWORD chưa được cấu hình trên server." };
  }

  if (!constantTimeEqual(password, adminPassword)) {
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
