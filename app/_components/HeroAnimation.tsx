"use client";

import { useState } from "react";

export default function HeroAnimation() {
  const [playKey, setPlayKey] = useState(0);

  return (
    <div key={playKey} style={{ position: "relative" }}>
      <svg
        viewBox="0 0 900 290"
        style={{ width: "100%", height: "auto", display: "block", marginTop: 6 }}
        role="img"
        aria-label="A snapped surfboard reassembling into one whole board"
      >
        <ellipse cx="455" cy="262" rx="300" ry="16" fill="rgba(0,0,0,0.18)" />
        <g
          style={{
            animation: "surfixBob 4.2s ease-in-out 1.7s infinite",
            transformBox: "fill-box",
            transformOrigin: "center",
          }}
        >
          <g
            style={{
              animation: "surfixLeft 1.5s cubic-bezier(.2,.85,.25,1) both",
              transformBox: "fill-box",
              transformOrigin: "center",
            }}
          >
            <path
              d="M40 120 C120 60, 330 34, 455 31 L446 72 L465 108 L449 150 L463 188 L455 209 C330 206, 120 180, 40 120 Z"
              fill="#FBFDFF"
              stroke="#0B4F86"
              strokeWidth="7"
              strokeLinejoin="round"
            />
            <line x1="46" y1="120" x2="455" y2="120" stroke="#0C74BE" strokeWidth="3.5" strokeLinecap="round" />
            <path
              d="M150 120 C150 98, 250 90, 360 96 L360 144 C250 150, 150 142, 150 120 Z"
              fill="#FFE400"
              opacity="0.92"
            />
          </g>
          <g
            style={{
              animation: "surfixRight 1.5s cubic-bezier(.2,.85,.25,1) both",
              transformBox: "fill-box",
              transformOrigin: "center",
            }}
          >
            <path
              d="M455 31 C600 33, 800 56, 866 110 Q880 120, 866 130 C800 184, 620 208, 455 209 L463 188 L449 150 L465 108 L446 72 Z"
              fill="#FBFDFF"
              stroke="#0B4F86"
              strokeWidth="7"
              strokeLinejoin="round"
            />
            <line x1="455" y1="120" x2="858" y2="120" stroke="#0C74BE" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M745 206 L804 206 L760 244 Z" fill="#0C74BE" stroke="#0B4F86" strokeWidth="3" strokeLinejoin="round" />
          </g>
          <path
            d="M455 31 L446 72 L465 108 L449 150 L463 188 L455 209"
            fill="none"
            stroke="#FFE400"
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              animation: "surfixWeld 1.8s ease both",
              filter: "drop-shadow(0 0 7px rgba(255,228,0,0.9))",
            }}
          />
          <path
            d="M455 31 L446 72 L465 108 L449 150 L463 188 L455 209"
            fill="none"
            stroke="#0B2233"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.5"
            style={{ animation: "surfixCrack 1.8s ease both" }}
          />
        </g>
      </svg>
      <button
        type="button"
        onClick={() => setPlayKey((k) => k + 1)}
        style={{
          position: "absolute",
          right: 6,
          bottom: 0,
          display: "inline-flex",
          alignItems: "center",
          gap: 7,
          background: "rgba(255,255,255,0.16)",
          color: "#fff",
          border: "1px solid rgba(255,255,255,0.35)",
          fontFamily: "inherit",
          fontWeight: 700,
          fontSize: 13,
          padding: "8px 14px",
          borderRadius: 999,
          cursor: "pointer",
          backdropFilter: "blur(4px)",
        }}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fff"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M3 12a9 9 0 1 0 3-6.7" />
          <path d="M3 3v4h4" />
        </svg>
        Replay
      </button>
    </div>
  );
}
