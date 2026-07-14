export function SpecTable({
  rows,
}: {
  rows: { label: string; value: string }[];
}) {
  return (
    <div
      className="rounded-2xl overflow-hidden border"
      style={{ borderColor: "var(--pt-line)" }}
    >
      <table className="w-full text-sm">
        <tbody>
          {rows.map((r, i) => (
            <tr
              key={r.label}
              style={{
                background: i % 2 === 0 ? "white" : "var(--pt-cream)",
              }}
            >
              <td className="px-5 py-3.5 font-medium w-1/2" style={{ color: "#47576e" }}>
                {r.label}
              </td>
              <td className="px-5 py-3.5 font-medium" style={{ color: "#0f2f66" }}>
                {r.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
