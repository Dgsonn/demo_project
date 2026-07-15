import { pgTable, serial, text, timestamp, pgEnum } from "drizzle-orm/pg-core";

export const leadStatusEnum = pgEnum("lead_status", [
  "moi",
  "da_lien_he",
  "da_bao_gia",
  "da_chot",
  "khong_tiem_nang",
]);

export const LEAD_STATUS_LABELS: Record<string, string> = {
  moi: "Mới",
  da_lien_he: "Đã liên hệ",
  da_bao_gia: "Đã báo giá",
  da_chot: "Đã chốt",
  khong_tiem_nang: "Không tiềm năng",
};

/** Badge colors per status, keyed the same as LEAD_STATUS_LABELS. */
export const LEAD_STATUS_COLORS: Record<string, { bg: string; fg: string }> = {
  moi: { bg: "#dce7f8", fg: "#163f85" },
  da_lien_he: { bg: "#fdf0c7", fg: "#8a6d16" },
  da_bao_gia: { bg: "#dce7f8", fg: "#0f2f66" },
  da_chot: { bg: "#d6f0e2", fg: "#1a7f4f" },
  khong_tiem_nang: { bg: "#f3dbd4", fg: "#b0341a" },
};

export const leads = pgTable("leads", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  company: text("company"),
  product: text("product"),
  message: text("message"),
  status: leadStatusEnum("status").notNull().default("moi"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export type Lead = typeof leads.$inferSelect;
export type NewLead = typeof leads.$inferInsert;
