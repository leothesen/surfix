import { MAPS_LINK, WA_LINK, WhatsAppIcon } from "./shared";

export default function Hero() {
  return (
    <>
      <a id="top" />
      <section
        style={{
          position: "relative",
          background: "radial-gradient(120% 120% at 80% 0%,#EAF4FC 0%,#F4F6F8 55%)",
          padding: "64px 24px 0",
        }}
      >
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/surfix-logo.png"
            alt="SURFIX — You ding it. We fix it."
            style={{ width: 230, maxWidth: "70%", height: "auto", display: "block", marginBottom: 26 }}
          />
          <h1
            style={{
              fontWeight: 900,
              fontSize: "clamp(40px,6vw,72px)",
              lineHeight: 0.96,
              letterSpacing: "-0.03em",
              margin: "0",
              color: "#0B2233",
            }}
          >
            Get back on
            <br />
            the water.
            <br />
            <span style={{ color: "#0C74BE" }}>Fast.</span>
          </h1>
          <p
            style={{
              fontSize: "clamp(17px,1.4vw,20px)",
              lineHeight: 1.55,
              color: "#46586A",
              maxWidth: 480,
              margin: "22px 0 0",
              textWrap: "pretty",
            }}
          >
            You ding it, we fix it. SURFIX is Mathew&apos;s repair workshop in Noordhoek — surfboards,
            kneeboards, surfskis and SUPs, from small dings to snapped boards.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 30 }}>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 11,
                background: "#25D366",
                color: "#fff",
                fontWeight: 800,
                fontSize: 18,
                padding: "17px 30px",
                borderRadius: 999,
                textDecoration: "none",
                boxShadow: "0 12px 26px rgba(37,211,102,0.4)",
              }}
            >
              <WhatsAppIcon size={22} />
              Chat on WhatsApp
            </a>
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                background: "#fff",
                color: "#0C74BE",
                border: "2px solid #0C74BE",
                fontWeight: 700,
                fontSize: 17,
                padding: "15px 26px",
                borderRadius: 999,
                textDecoration: "none",
              }}
            >
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0C74BE"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11Z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              Get directions
            </a>
          </div>
          <p
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 18,
              marginTop: 24,
              fontSize: 14,
              fontWeight: 600,
              color: "#5A6B78",
            }}
          >
            <span>✓ Free quotes</span>
            <span>✓ Quick turnaround</span>
            <span>✓ WhatsApp a photo to start</span>
          </p>
        </div>

        <svg
          viewBox="0 0 1440 110"
          preserveAspectRatio="none"
          style={{ display: "block", width: "100%", height: 80, marginTop: 40 }}
        >
          <path
            d="M0,50 C240,100 480,10 720,45 C960,80 1200,18 1440,55 L1440,110 L0,110 Z"
            fill="#ffffff"
          />
        </svg>
      </section>
    </>
  );
}
