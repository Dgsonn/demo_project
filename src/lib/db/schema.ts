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
