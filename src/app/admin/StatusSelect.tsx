"use client";

import { useTransition } from "react";
import { updateLeadStatusAction } from "./actions";
import { LEAD_STATUS_LABELS } from "@/lib/db/schema";

const STATUS_OPTIONS = Object.entries(LEAD_STATUS_LABELS);

export function StatusSelect({ id, status }: { id: number; status: string }) {
  const [isPending, startTransition] = useTransition();

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
      className="rounded-[var(--pt-radius-sm)] border border-sage-300/60 bg-white px-2 py-1 text-sm text-navy outline-none focus:border-sage-500 disabled:opacity-50"
    >
      {STATUS_OPTIONS.map(([value, label]) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
}
