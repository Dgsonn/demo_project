"use client";

import { useTransition } from "react";
import { updateLeadStatusAction } from "./actions";
import { LEAD_STATUS_LABELS, LEAD_STATUS_COLORS } from "@/lib/db/schema";

const STATUS_OPTIONS = Object.entries(LEAD_STATUS_LABELS);

export function StatusSelect({ id, status }: { id: number; status: string }) {
  const [isPending, startTransition] = useTransition();
  const color = LEAD_STATUS_COLORS[status] ?? { bg: "#eee", fg: "#333" };

  return (
    <select
      value={status}
      disabled={isPending}
      onChange={(e) => {
        const next = e.target.value;
        startTransition(() => {
          updateLeadStatusAction(id, next);
        });
      }}
      style={{ background: color.bg, color: color.fg }}
      className="cursor-pointer rounded-full border-0 px-3 py-1.5 text-xs font-semibold outline-none transition-opacity disabled:cursor-wait disabled:opacity-50"
    >
      {STATUS_OPTIONS.map(([value, label]) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
}
