export function ApplicationRow({
  title,
  desc,
  tint,
  reverse,
}: {
  title: string;
  desc: string;
  tint: string;
  reverse?: boolean;
}) {
  return (
    <article
      className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl overflow-hidden"
      style={{ border: "1px solid var(--pt-line)" }}
    >
      <div
        className="min-h-[200px] md:min-h-[260px] flex items-center justify-center"
        style={{ background: tint, order: reverse ? 2 : 0 }}
        aria-hidden="true"
      >
        <ApplicationGlyph />
      </div>
      <div
        className="p-6 lg:p-8 flex flex-col justify-center"
        style={{ background: "white" }}
      >
        <h3 className="text-xl font-semibold" style={{ color: "var(--pt-sage-700)" }}>
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-[var(--pt-ink-soft)]">
          {desc}
        </p>
      </div>
    </article>
  );
}

function ApplicationGlyph() {
  return (
    <svg viewBox="0 0 120 120" width="80">
      <circle
        cx="60"
        cy="60"
        r="44"
        fill="none"
        stroke="var(--pt-cream)"
        strokeWidth="1.2"
        opacity="0.6"
      />
      <circle cx="60" cy="60" r="20" fill="var(--pt-sage-300)" opacity="0.85" />
    </svg>
  );
}
