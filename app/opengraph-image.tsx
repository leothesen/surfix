import { ImageResponse } from "next/og";

export const alt = "SURFIX — Surfboard ding repairs in Noordhoek, Cape Town";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          backgroundColor: "#0C74BE",
          backgroundImage: "linear-gradient(135deg,#0C74BE 0%,#0A5D9A 55%,#08263D 100%)",
          fontFamily: "sans-serif",
          padding: "72px 80px",
        }}
      >
        {/* board motif, faint, top-right */}
        <svg
          width="760"
          height="760"
          viewBox="0 0 900 290"
          style={{ position: "absolute", top: -150, right: -160, opacity: 0.14 }}
        >
          <path
            d="M40 120 C120 60, 330 34, 455 31 C600 33, 800 56, 866 110 Q880 120, 866 130 C800 184, 620 208, 455 209 C330 206, 120 180, 40 120 Z"
            fill="#FBFDFF"
          />
          <path
            d="M455 31 L446 72 L465 108 L449 150 L463 188 L455 209"
            fill="none"
            stroke="#FFE400"
            strokeWidth="16"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <div
          style={{
            display: "flex",
            fontSize: 26,
            fontWeight: 700,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.82)",
          }}
        >
          Surfboard · Kneeboard · Surfski · SUP repairs
        </div>

        <div style={{ display: "flex", alignItems: "flex-end", marginTop: 6 }}>
          <span style={{ fontSize: 190, fontWeight: 900, fontStyle: "italic", color: "#ffffff", lineHeight: 1 }}>
            SURF
          </span>
          <span style={{ fontSize: 190, fontWeight: 900, fontStyle: "italic", color: "#FFE400", lineHeight: 1 }}>
            IX
          </span>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 14,
            fontSize: 60,
            fontWeight: 800,
            fontStyle: "italic",
            color: "#ffffff",
          }}
        >
          You ding it. We fix it.
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: 34,
          }}
        >
          <div style={{ display: "flex", height: 10, width: 64, backgroundColor: "#FFE400", borderRadius: 999 }} />
          <div style={{ display: "flex", marginLeft: 22, fontSize: 34, fontWeight: 700, color: "#FFE400" }}>
            Noordhoek · Cape Town
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
