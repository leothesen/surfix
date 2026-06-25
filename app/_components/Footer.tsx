import { WA_LINK, WhatsAppIcon } from "./shared";

export default function Footer() {
  return (
    <footer style={{ background: "#08263D", color: "#fff", padding: "60px 24px 32px" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <div
          className="surfix-footer-grid"
          style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: 32, alignItems: "start" }}
        >
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/surfix-logo.png"
              alt="SURFIX"
              style={{ width: 210, height: "auto", display: "block" }}
            />
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.6,
                color: "rgba(255,255,255,0.65)",
                maxWidth: 300,
                margin: "14px 0 0",
              }}
            >
              Surfboard, kneeboard, surfski &amp; SUP repairs in Noordhoek, Cape Town. You ding it, we fix it.
            </p>
          </div>
          <div>
            <div
              style={{
                fontWeight: 800,
                fontSize: 13,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#FFE400",
                marginBottom: 14,
              }}
            >
              Contact
            </div>
            <p style={{ fontSize: 15, lineHeight: 1.9, color: "rgba(255,255,255,0.8)", margin: 0 }}>
              Mathew
              <br />
              <a href="tel:+27747762091" style={{ color: "#fff", textDecoration: "none" }}>
                074 776 2091
              </a>
              <br />
              Noordhoek Boat Storage Yard
              <br />
              Noordhoek, Cape Town
            </p>
          </div>
          <div>
            <div
              style={{
                fontWeight: 800,
                fontSize: 13,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#FFE400",
                marginBottom: 14,
              }}
            >
              We fix
            </div>
            <p style={{ fontSize: 15, lineHeight: 1.9, color: "rgba(255,255,255,0.8)", margin: 0 }}>
              Surfboards
              <br />
              Kneeboards
              <br />
              Surfskis
              <br />
              SUPs
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 14,
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(255,255,255,0.12)",
            marginTop: 40,
            paddingTop: 22,
          }}
        >
          <span style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>© 2026 SURFIX · Noordhoek, Cape Town</span>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              background: "#25D366",
              color: "#fff",
              fontWeight: 800,
              fontSize: 15,
              padding: "11px 20px",
              borderRadius: 999,
              textDecoration: "none",
            }}
          >
            <WhatsAppIcon size={18} />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
