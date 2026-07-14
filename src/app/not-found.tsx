/**
 * not-found.tsx — Custom 404 page
 *
 * Displays a branded 404 page when a route is not found.
 * Provides navigation back to home and contact options.
 *
 * Per R3 consensus: branded 404 with navigation back.
 */
import type { Metadata } from "next";
import { NotFoundContent } from "@/components/NotFoundContent";

export const metadata: Metadata = {
  title: "404 — Trang không tìm thấy",
  description: "Trang bạn đang tìm kiếm không tồn tại.",
};

export default function NotFound() {
  return <NotFoundContent />;
}
