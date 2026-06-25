import { MAPS_LINK, WA_LINK, WhatsAppIcon, PinIcon } from "./shared";

export default function FindUs() {
  return (
    <section id="find" style={{ background: "#F4F6F8", padding: "78px 24px" }}>
      <div
        className="surfix-find-grid"
        style={{
          maxWidth: 1160,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "0.9fr 1.1fr",
          gap: 36,
          alignItems: "stretch",
        }}
      >
        <div
          style={{
            background: "#fff",
            border: "1px solid #E4EDF5",
            borderRadius: 22,
            padding: "34px 32px",
            display: "flex",
            flexDirection: "column",
          }}
        >
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
            Find us
          </p>
          <h2
            style={{
              fontWeight: 900,
              fontSize: "clamp(28px,3.6vw,42px)",
              letterSpacing: "-0.025em",
              margin: "8px 0 0",
              color: "#0B2233",
            }}
          >
            Noordhoek drop-off.
          </h2>
          <div style={{ display: "flex", alignItems: "flex-start", gap: 13, marginTop: 24 }}>
            <span style={{ flex: "none", marginTop: 2 }}>
              <PinIcon size={22} />
            </span>
            <div>
              <div style={{ fontWeight: 800, fontSize: 17, color: "#0B2233" }}>Noordhoek Boat Storage Yard</div>
              <div style={{ fontSize: 15, color: "#5A6B78" }}>Noordhoek, Cape Town, Western Cape</div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start", gap: 13, marginTop: 18 }}>
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0C74BE"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ flex: "none", marginTop: 2 }}
              aria-hidden="true"
            >
              <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
            </svg>
            <div>
              <div style={{ fontWeight: 800, fontSize: 17, color: "#0B2233" }}>Mathew · 074 776 2091</div>
              <div style={{ fontSize: 15, color: "#5A6B78" }}>Drop-offs by arrangement — message first</div>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 11, marginTop: "auto", paddingTop: 28 }}>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 11,
                background: "#25D366",
                color: "#fff",
                fontWeight: 800,
                fontSize: 17,
                padding: "16px 24px",
                borderRadius: 999,
                textDecoration: "none",
                boxShadow: "0 10px 22px rgba(37,211,102,0.35)",
              }}
            >
              <WhatsAppIcon size={20} />
              Chat on WhatsApp
            </a>
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 9,
                background: "#fff",
                color: "#0C74BE",
                border: "2px solid #0C74BE",
                fontWeight: 700,
                fontSize: 16,
                padding: "14px 22px",
                borderRadius: 999,
                textDecoration: "none",
              }}
            >
              Get directions on Google Maps
            </a>
          </div>
        </div>
        <div
          style={{
            borderRadius: 22,
            overflow: "hidden",
            border: "1px solid #E4EDF5",
            minHeight: 380,
            background: "#dfe7ee",
          }}
        >
          <iframe
            title="Map to Noordhoek Boat Storage Yard, Cape Town"
            src="https://www.google.com/maps?q=Noordhoek+Boat+Storage+Yard,+Cape+Town&output=embed"
            style={{ width: "100%", height: "100%", minHeight: 380, border: 0, display: "block" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
