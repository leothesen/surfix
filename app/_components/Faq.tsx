const QA: [string, string][] = [
  [
    "Where can I get my surfboard repaired in Cape Town?",
    "SURFIX repairs surfboards in Noordhoek, Cape Town. Drop-offs are at the Noordhoek Boat Storage Yard — WhatsApp a photo of your board to Mathew on 074 776 2091 for a free quote.",
  ],
  [
    "How much does a ding repair cost?",
    "Quotes are free. Send a photo of the damage on WhatsApp and Mathew will give you a price before any work starts. Cost depends on the size and type of repair.",
  ],
  [
    "How long does a repair take?",
    "Turnaround is fast. Small dings are usually quick; structural or snapped-board repairs take a little longer. A collection time will be set on WhatsApp when you get the quote.",
  ],
  [
    "What kinds of boards do you fix?",
    "Surfboards, kneeboards, surfskis and SUPs — including epoxy and fibreglass/poly construction. Repairs cover dings, cracks, fin boxes, delamination and snapped boards.",
  ],
  [
    "Do you repair snapped boards?",
    "Yes. SURFIX does structural repairs including snapped boards and broken fin boxes — not just small dings.",
  ],
  [
    "How do I get started?",
    "Message Mathew on WhatsApp at 074 776 2091 with a photo of your board, get a free quote, then drop it off at the Noordhoek Boat Storage Yard.",
  ],
];

export default function Faq() {
  return (
    <section style={{ background: "#fff", padding: "78px 24px" }}>
      <div style={{ maxWidth: 840, margin: "0 auto" }}>
        <p
          style={{
            fontWeight: 700,
            fontSize: 13,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#0C74BE",
            margin: 0,
            textAlign: "center",
          }}
        >
          FAQ
        </p>
        <h2
          style={{
            fontWeight: 900,
            fontSize: "clamp(28px,4vw,46px)",
            letterSpacing: "-0.025em",
            margin: "8px 0 0",
            color: "#0B2233",
            textAlign: "center",
          }}
        >
          Surfboard repair questions, answered.
        </h2>
        <div style={{ marginTop: 36, display: "flex", flexDirection: "column", gap: 12 }}>
          {QA.map(([q, a], i) => (
            <details
              key={q}
              open={i === 0}
              style={{
                background: "#F7FAFD",
                border: "1px solid #E4EDF5",
                borderRadius: 14,
                padding: "20px 22px",
              }}
            >
              <summary style={{ fontWeight: 800, fontSize: 17.5, color: "#0B2233" }}>{q}</summary>
              <p style={{ fontSize: 15.5, lineHeight: 1.6, color: "#5A6B78", margin: "12px 0 0" }}>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
