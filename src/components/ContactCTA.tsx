/**
 * ContactCTA — per R3 consensus:
 *  - Inline form (no modal)
 *  - 3 required visible: Họ và tên, Email, Sản phẩm quan tâm
 *  - 3 optional collapsible: Công ty, Số điện thoại, Ghi chú
 *  - Trust signals below submit: privacy shield, 24h clock, hotline tel:
 *  - Submit CTA: "Gửi yêu cầu — phản hồi 24h"
 *  - Blue/gold brand palette (matches logo)
 */

"use client";

import { useState } from "react";
import { useT } from "@/lib/i18n/useT";

type Status = "idle" | "sending" | "ok" | "err";

export function ContactCTA() {
  const [status, setStatus] = useState<Status>("idle");
  const [msg, setMsg] = useState<string>("");
  const [optionalOpen, setOptionalOpen] = useState(false);
  const t = useT();

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setMsg("");

    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      product: String(fd.get("product") || ""),
      company: String(fd.get("company") || ""),
      phone: String(fd.get("phone") || ""),
      message: String(fd.get("message") || ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("ok");
      setMsg(t.contactCTA.successMsg);
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus("err");
      setMsg(t.contactCTA.errorMsg);
    }
  }

  return (
    <section
      id="yeu-cau-mau"
      className="section"
      style={{ background: "var(--pt-cream)" }}
      aria-label={t.contactCTA.eyebrow}
    >
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left: heading + value prop */}
          <div>
            <p className="eyebrow">{t.contactCTA.eyebrow}</p>
            <h2 className="headline-lg mt-3" style={{ color: "var(--pt-sage-700)" }}>
              {t.contactCTA.titleA}
              <br />
              {t.contactCTA.titleB}
            </h2>
            <p className="lede mt-4">
              {t.contactCTA.description}
            </p>
            <p className="mt-4 text-sm opacity-70">
              {t.contactCTA.seeContactPrefix}{" "}
              <a href="/#lien-he" style={{ color: "var(--pt-sage-600)", fontWeight: 600 }}>
                {t.contactCTA.seeContactLink}
              </a>
            </p>
          </div>

          {/* Right: form */}
          <form
            onSubmit={onSubmit}
            className="rounded-2xl p-6 lg:p-8 grid grid-cols-1 sm:grid-cols-2 gap-4"
            style={{
              background: "white",
              border: "1px solid var(--pt-line)",
            }}
            aria-label={t.contactCTA.titleA}
            noValidate
          >
            {/* 3 required fields — always visible */}
            <Field
              name="name"
              label={t.contactCTA.fieldName}
              required
              colSpan="sm:col-span-1"
            />
            <Field
              name="email"
              label={t.contactCTA.fieldEmail}
              type="email"
              required
              colSpan="sm:col-span-1"
            />
            <SelectField
              name="product"
              label={t.contactCTA.fieldProduct}
              required
              colSpan="sm:col-span-2"
              options={[
                { value: "", label: t.contactCTA.fieldProductPlaceholder },
                { value: "tinh-bot-san", label: t.nav.tinhBotSan },
                { value: "bot-bien-tinh", label: t.nav.botBienTinh },
                { value: "khac", label: t.contactCTA.fieldProductOther },
              ]}
            />

            {/* Optional fields — collapsible */}
            <div className="sm:col-span-2">
              <button
                type="button"
                onClick={() => setOptionalOpen((v) => !v)}
                className="text-xs font-medium underline underline-offset-2"
                style={{ color: "var(--pt-sage-500)" }}
                aria-expanded={optionalOpen}
                aria-controls="optional-fields"
                suppressHydrationWarning
              >
                {optionalOpen ? t.contactCTA.optionalHide : t.contactCTA.optionalShow}
              </button>
            </div>

            {optionalOpen && (
              <div id="optional-fields" className="sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field name="company" label={t.contactCTA.fieldCompany} colSpan="sm:col-span-1" />
                <Field name="phone" label={t.contactCTA.fieldPhone} type="tel" colSpan="sm:col-span-1" />
                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium mb-1 opacity-70">
                    {t.contactCTA.fieldMessage}
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    className="w-full rounded-lg border px-3 py-2 text-sm outline-none focus:border-[var(--pt-sage-500)] focus-visible:ring-2 focus-visible:ring-[rgba(26,74,156,0.35)] transition-colors"
                    style={{ borderColor: "var(--pt-line)" }}
                    aria-label={t.contactCTA.fieldMessage}
                  />
                </div>
              </div>
            )}

            {/* Submit + trust signals */}
            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary w-full justify-center disabled:opacity-60"
                aria-live="polite"
                suppressHydrationWarning
              >
                {status === "sending" ? t.contactCTA.submitting : t.contactCTA.submit}
              </button>

              {/* Trust signals */}
              <div className="mt-4 flex flex-col gap-2" aria-label={t.contactCTA.trustSecure}>
                <div className="flex items-center gap-2 text-xs opacity-70">
                  {/* Shield icon */}
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M8 1L2 4v5c0 3.5 2.5 6 6 7 3.5-1 6-3.5 6-7V4L8 1z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                    <path d="M5.5 8l1.5 1.5L10.5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {t.contactCTA.trustSecure}
                </div>
                <div className="flex items-center gap-2 text-xs opacity-70">
                  {/* Clock icon */}
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M8 5v3l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  {t.contactCTA.trust24h}
                </div>
                <div className="flex items-center gap-2 text-xs opacity-70">
                  {/* Phone icon */}
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M13.5 10.5c0-2-1.5-3-2.5-3.5-.5-.2-1-.2-1.5-.2-.5 0-1 .1-1.5.3C7 7.5 5.5 6 5 4.5 4.5 3.5 4 3 4 2.5c-.5-1-.5-2.5 1-2.5h1c1.5 0 2.5 1 3 2l1 3c.2.5.2 1-.1 1.5L8.5 8l.5.5c.5.5 1 .5 1.5.3l3-1c1-.5 2-1.5 2-3v-1z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
                  </svg>
                  {t.contactCTA.trustHotlinePrefix}{" "}
                  <a
                    href="tel:1900xxxx"
                    style={{ color: "var(--pt-sage-600)", fontWeight: 600 }}
                    aria-label="Gọi hotline 1900 xxxx"
                  >
                    1900 xxxx
                  </a>
                </div>
              </div>

              {/* Status message */}
              {msg && (
                <p
                  className="mt-3 text-sm font-medium"
                  style={{
                    color: status === "ok" ? "var(--pt-success)" : "var(--pt-error)",
                  }}
                  role="status"
                  aria-live="polite"
                >
                  {msg}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ─── Field helpers ─── */

type FieldProps = {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  colSpan?: string;
};

function Field({ name, label, type = "text", required, colSpan }: FieldProps) {
  return (
    <div className={colSpan}>
      <label htmlFor={name} className="block text-xs font-medium mb-1 opacity-70">
        {label}
        {required && (
          <span style={{ color: "var(--pt-error)" }}> *</span>
        )}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        suppressHydrationWarning
        className="w-full rounded-lg border px-3 py-2 text-sm outline-none focus:border-[var(--pt-sage-500)] focus-visible:ring-2 focus-visible:ring-[rgba(26,74,156,0.35)] transition-colors"
        style={{ borderColor: "var(--pt-line)" }}
        autoComplete={
          name === "name" ? "name" :
          name === "email" ? "email" :
          name === "phone" ? "tel" :
          name === "company" ? "organization" : undefined
        }
      />
    </div>
  );
}

type SelectFieldProps = {
  name: string;
  label: string;
  options: { value: string; label: string }[];
  required?: boolean;
  colSpan?: string;
};

function SelectField({ name, label, options, required, colSpan }: SelectFieldProps) {
  return (
    <div className={colSpan}>
      <label htmlFor={name} className="block text-xs font-medium mb-1 opacity-70">
        {label}
        {required && (
          <span style={{ color: "var(--pt-error)" }}> *</span>
        )}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        defaultValue=""
        suppressHydrationWarning
        className="w-full rounded-lg border px-3 py-2 text-sm outline-none focus:border-[var(--pt-sage-500)] focus-visible:ring-2 focus-visible:ring-[rgba(26,74,156,0.35)] transition-colors"
        style={{ borderColor: "var(--pt-line)" }}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}
