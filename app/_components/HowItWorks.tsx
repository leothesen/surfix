const STEPS = [
  {
    n: 1,
    title: "WhatsApp a photo",
    body: "Send Mathew a quick photo of the damage on 074 776 2091. No appointment needed to ask.",
  },
  {
    n: 2,
    title: "Get a free quote",
    body: "You'll get an honest price and a rough turnaround time before any work begins.",
  },
  {
    n: 3,
    title: "Drop off & surf",
    body: "Bring it to the Noordhoek Boat Storage Yard. We fix it, you get back on the water.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" style={{ background: "#08263D", padding: "78px 24px", color: "#fff" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <p
          style={{
            fontWeight: 700,
            fontSize: 13,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#FFE400",
            margin: 0,
          }}
        >
          How it works
        </p>
        <h2
          style={{
            fontWeight: 900,
            fontSize: "clamp(30px,4.4vw,50px)",
            letterSpacing: "-0.025em",
            margin: "8px 0 0",
            color: "#fff",
          }}
        >
          Three steps to fixed.
        </h2>
        <div
          className="surfix-steps-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22, marginTop: 40 }}
        >
          {STEPS.map((s) => (
            <div
              key={s.n}
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 18,
                padding: "30px 26px",
              }}
            >
              <div
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: "50%",
                  background: "#FFE400",
                  color: "#08263D",
                  fontWeight: 900,
                  fontSize: 22,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {s.n}
              </div>
              <h3 style={{ fontWeight: 800, fontSize: 21, margin: "18px 0 8px" }}>{s.title}</h3>
              <p style={{ fontSize: 15, lineHeight: 1.55, color: "rgba(255,255,255,0.72)", margin: 0 }}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
