import { WA_LINK, WhatsAppIcon } from "./shared";

export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(255,255,255,0.92)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid #E4E9EE",
      }}
    >
      <div
        style={{
          maxWidth: 1160,
          margin: "0 auto",
          padding: "14px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        <a href="#top" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/surfix-wordmark.png"
            alt="SURFIX — surfboard repairs, Noordhoek"
            style={{ height: 64, width: "auto", display: "block" }}
          />
        </a>
        <nav style={{ display: "flex", alignItems: "center", gap: 26 }}>
          <a
            href="#services"
            className="surfix-nav-links"
            style={{ textDecoration: "none", fontWeight: 600, fontSize: 15, color: "#46586A" }}
          >
            What we fix
          </a>
          <a
            href="#how"
            className="surfix-nav-links"
            style={{ textDecoration: "none", fontWeight: 600, fontSize: 15, color: "#46586A" }}
          >
            How it works
          </a>
          <a
            href="#find"
            className="surfix-nav-links"
            style={{ textDecoration: "none", fontWeight: 600, fontSize: 15, color: "#46586A" }}
          >
            Find us
          </a>
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
              boxShadow: "0 6px 16px rgba(37,211,102,0.35)",
            }}
          >
            <WhatsAppIcon size={18} />
            Chat on WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
