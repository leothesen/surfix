const CARDS = [
  {
    title: "Surfboards",
    body: "Dings, cracks, buckles and snapped boards — epoxy and fibreglass/poly.",
    path: "M24 4 C30 14, 30 34, 24 44 C18 34, 18 14, 24 4 Z",
    line: [24, 9, 24, 39],
  },
  {
    title: "Kneeboards",
    body: "Dings, cracked rails and fin-box damage on kneeboards, repaired and sealed.",
    path: "M24 7 C31 14, 31 32, 24 41 C17 32, 17 14, 24 7 Z",
    line: [24, 11, 24, 37],
  },
  {
    title: "Surfskis",
    body: "Hull cracks and impact damage repaired and sealed watertight.",
    path: "M24 3 C27 14, 27 34, 24 45 C21 34, 21 14, 24 3 Z",
    line: [24, 8, 24, 40],
  },
  {
    title: "SUPs",
    body: "Stand-up paddleboard dings, rail damage and leaks made good.",
    path: "M24 4 C29 12, 29 36, 24 44 C19 36, 19 12, 24 4 Z",
    line: [24, 9, 24, 39],
  },
];

const CHIPS = ["Dings & cracks", "Fin box repairs", "Snapped boards", "Delamination", "Rail & nose damage"];

export default function Services() {
  return (
    <section id="services" style={{ background: "#ffffff", padding: "78px 24px" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <p
          style={{
            fontWeight: 700,
            fontSize: 13,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#0C74BE",
            margin: 0,
          }}
        >
          What we fix
        </p>
        <h2
          style={{
            fontWeight: 900,
            fontSize: "clamp(30px,4.4vw,50px)",
            letterSpacing: "-0.025em",
            margin: "8px 0 0",
            color: "#0B2233",
          }}
        >
          Every board, back in the water.
        </h2>
        <div
          className="surfix-services-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 18, marginTop: 38 }}
        >
          {CARDS.map((c) => (
            <div
              key={c.title}
              style={{
                background: "#F7FAFD",
                border: "1px solid #E4EDF5",
                borderRadius: 18,
                padding: "26px 22px",
              }}
            >
              <svg width="44" height="44" viewBox="0 0 48 48" aria-hidden="true">
                <path d={c.path} fill="#EAF4FC" stroke="#0C74BE" strokeWidth="2.6" strokeLinejoin="round" />
                <line x1={c.line[0]} y1={c.line[1]} x2={c.line[2]} y2={c.line[3]} stroke="#0C74BE" strokeWidth="2" />
              </svg>
              <h3 style={{ fontWeight: 800, fontSize: 19, margin: "16px 0 6px", color: "#0B2233" }}>{c.title}</h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.5, color: "#5A6B78", margin: 0 }}>{c.body}</p>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 24 }}>
          {CHIPS.map((chip) => (
            <span
              key={chip}
              style={{
                fontSize: 13.5,
                fontWeight: 600,
                color: "#46586A",
                background: "#F7FAFD",
                border: "1px solid #E4EDF5",
                padding: "9px 16px",
                borderRadius: 999,
              }}
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
