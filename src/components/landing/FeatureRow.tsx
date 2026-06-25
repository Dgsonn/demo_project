export function FeatureRow({
  index,
  title,
  desc,
}: {
  index: number;
  title: string;
  desc: string;
}) {
  return (
    <div
      className="rounded-2xl p-6 lg:p-8"
      style={{ background: "var(--pt-cream)" }}
    >
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm"
        style={{ background: "var(--pt-sage-500)", color: "white" }}
      >
        {String(index).padStart(2, "0")}
      </div>
      <h3 className="mt-4 text-lg font-semibold" style={{ color: "#2d3a2b" }}>
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed" style={{ color: "#5a6b58" }}>
        {desc}
      </p>
    </div>
  );
}
