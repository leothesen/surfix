"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "motion/react";

/**
 * Scroll-driven intro: a snapped fish-shaped surfboard reassembles as you scroll
 * while "Mat" (a stick-man) walks in, sands the break closed and gives a thumbs-up,
 * then the stage lifts away into the real site. Plays every visit; Skip jumps past it.
 */
export default function ScrollIntro() {
  const trackRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  const [showPrompt, setShowPrompt] = useState(true);
  const [showKeep, setShowKeep] = useState(false);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setShowPrompt((p) => (p === v < 0.2 ? p : v < 0.2));
    setShowKeep((k) => (k === v > 0.72 ? k : v > 0.72));
  });

  const promptOpacity = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const chevronY = useTransform(scrollYProgress, [0, 0.06], [0, 7]);
  const keepOpacity = useTransform(scrollYProgress, [0.72, 0.8, 0.95, 1], [0, 1, 1, 0]);

  // board halves: separated -> joined (then crossfade to a seamless whole board)
  const lX = useTransform(scrollYProgress, [0.12, 0.55], [-90, 0]);
  const lY = useTransform(scrollYProgress, [0.12, 0.55], [-46, 0]);
  const lRot = useTransform(scrollYProgress, [0.12, 0.55], [-9, 0]);
  const rX = useTransform(scrollYProgress, [0.12, 0.55], [90, 0]);
  const rY = useTransform(scrollYProgress, [0.12, 0.55], [46, 0]);
  const rRot = useTransform(scrollYProgress, [0.12, 0.55], [9, 0]);
  const halfOpacity = useTransform(scrollYProgress, [0.62, 0.72], [1, 0]);
  const healedOpacity = useTransform(scrollYProgress, [0.6, 0.72], [0, 1]);
  const glossOpacity = useTransform(scrollYProgress, [0.66, 0.82], [0, 0.85]);
  const boardShadow = useTransform(scrollYProgress, [0.35, 0.55], [0, 1]);

  // Mat: walk in -> sand -> thumbs up
  const matX = useTransform(scrollYProgress, [0.12, 0.46], [-470, 0]);
  const sandY = useTransform(
    scrollYProgress,
    [0.46, 0.5, 0.54, 0.58, 0.62, 0.64],
    [0, -9, 0, -9, 0, 0],
  );
  const workArmOpacity = useTransform(scrollYProgress, [0.63, 0.67], [1, 0]);
  const thumbOpacity = useTransform(scrollYProgress, [0.65, 0.7], [0, 1]);
  const fixedPop = useTransform(scrollYProgress, [0.68, 0.76], [0, 1]);
  const fixedScale = useTransform(scrollYProgress, [0.68, 0.76, 0.86], [0.6, 1.12, 1]);

  // fish board outline (nose left, swallowtail right) — halves tile the whole exactly
  const WHOLE =
    "M140,200 C210,138 360,128 490,128 C620,128 780,138 858,150 L812,200 L858,250 C780,262 620,272 490,272 C360,272 210,262 140,200 Z";
  const LEFT =
    "M140,200 C210,138 360,128 490,128 L508,158 L476,186 L504,214 L474,242 L490,272 C360,272 210,262 140,200 Z";
  const RIGHT =
    "M490,128 C620,128 780,138 858,150 L812,200 L858,250 C780,262 620,272 490,272 L474,242 L504,214 L476,186 L508,158 Z";

  const skip = () =>
    document.getElementById("site-start")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section ref={trackRef} style={{ position: "relative", height: "300vh" }}>
      <motion.div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 95,
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 18,
          overflow: "hidden",
          background: "radial-gradient(120% 120% at 50% 0%,#EAF4FC 0%,#F4F6F8 60%)",
        }}
      >
        <button
          type="button"
          onClick={skip}
          style={{
            position: "absolute",
            top: 22,
            right: 24,
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            background: "#fff",
            color: "#46586A",
            border: "1px solid #E4E9EE",
            fontFamily: "inherit",
            fontWeight: 700,
            fontSize: 14,
            padding: "9px 16px",
            borderRadius: 999,
            cursor: "pointer",
            boxShadow: "0 4px 12px rgba(11,34,51,0.08)",
          }}
        >
          Skip intro ▸
        </button>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/surfix-wordmark.png"
          alt="SURFIX"
          style={{ height: 54, width: "auto" }}
        />

        <svg
          viewBox="0 0 1000 420"
          style={{ width: "100%", maxWidth: 860, height: "auto", display: "block" }}
          role="img"
          aria-label="A snapped fish surfboard being repaired"
        >
          <motion.ellipse cx="500" cy="300" rx="290" ry="15" fill="rgba(11,34,51,0.10)" style={{ opacity: boardShadow }} />

          <motion.g style={{ x: lX, y: lY, rotate: lRot, opacity: halfOpacity }}>
            <path d={LEFT} fill="#FBFDFF" stroke="#0B4F86" strokeWidth="6" strokeLinejoin="round" />
            <line x1="170" y1="200" x2="490" y2="200" stroke="#FFE400" strokeWidth="5" strokeLinecap="round" />
          </motion.g>

          <motion.g style={{ x: rX, y: rY, rotate: rRot, opacity: halfOpacity }}>
            <path d={RIGHT} fill="#FBFDFF" stroke="#0B4F86" strokeWidth="6" strokeLinejoin="round" />
            <line x1="490" y1="200" x2="812" y2="200" stroke="#FFE400" strokeWidth="5" strokeLinecap="round" />
          </motion.g>

          {/* seamless whole board (same outline) fades in over the joined halves */}
          <motion.g style={{ opacity: healedOpacity }}>
            <path d={WHOLE} fill="#FBFDFF" stroke="#0B4F86" strokeWidth="6" strokeLinejoin="round" />
            <line x1="170" y1="200" x2="812" y2="200" stroke="#FFE400" strokeWidth="5" strokeLinecap="round" />
          </motion.g>

          <motion.path
            style={{ opacity: glossOpacity }}
            d="M250,176 C420,150 600,150 740,174"
            fill="none"
            stroke="#ffffff"
            strokeWidth="10"
            strokeLinecap="round"
          />

          {/* MAT — shadow travels with him */}
          <motion.g style={{ x: matX }}>
            <ellipse cx="545" cy="384" rx="46" ry="8" fill="rgba(11,34,51,0.10)" />

            <text x="545" y="206" textAnchor="middle" fontFamily="inherit" fontWeight="800" fontSize="22" fill="#0C74BE">
              Mat
            </text>
            <path d="M545,212 L545,228" stroke="#0C74BE" strokeWidth="2.4" />
            <path d="M540,223 L545,230 L550,223" fill="none" stroke="#0C74BE" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />

            <circle cx="545" cy="250" r="15" fill="none" stroke="#0B2233" strokeWidth="4.5" />
            <line x1="545" y1="265" x2="545" y2="320" stroke="#0B2233" strokeWidth="4.5" strokeLinecap="round" />
            <line x1="545" y1="320" x2="531" y2="380" stroke="#0B2233" strokeWidth="4.5" strokeLinecap="round" />
            <line x1="545" y1="320" x2="559" y2="380" stroke="#0B2233" strokeWidth="4.5" strokeLinecap="round" />
            <line x1="545" y1="282" x2="568" y2="306" stroke="#0B2233" strokeWidth="4.5" strokeLinecap="round" />

            <motion.g style={{ y: sandY, opacity: workArmOpacity }}>
              <line x1="545" y1="282" x2="503" y2="252" stroke="#0B2233" strokeWidth="4.5" strokeLinecap="round" />
              <rect x="487" y="242" width="26" height="13" rx="3" fill="#FFE400" stroke="#0B2233" strokeWidth="3" />
            </motion.g>

            <motion.g style={{ opacity: thumbOpacity }}>
              <line x1="545" y1="282" x2="521" y2="232" stroke="#0B2233" strokeWidth="4.5" strokeLinecap="round" />
              <circle cx="517" cy="226" r="9" fill="none" stroke="#0B2233" strokeWidth="4" />
              <line x1="517" y1="217" x2="517" y2="208" stroke="#0B2233" strokeWidth="4.5" strokeLinecap="round" />
            </motion.g>

            <motion.g style={{ opacity: fixedPop, scale: fixedScale }}>
              <text x="635" y="224" textAnchor="middle" fontFamily="inherit" fontWeight="900" fontStyle="italic" fontSize="28" fill="#0C74BE">
                Fixed!
              </text>
            </motion.g>
          </motion.g>
        </svg>

        {showPrompt && (
          <motion.p
            style={{
              opacity: promptOpacity,
              margin: 0,
              fontWeight: 800,
              fontSize: "clamp(18px,2.4vw,26px)",
              letterSpacing: "-0.01em",
              color: "#0B2233",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            Scroll down to fix the board
            <motion.span style={{ y: chevronY, display: "inline-flex" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0C74BE" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </motion.span>
          </motion.p>
        )}

        {showKeep && (
          <motion.p
            style={{
              opacity: keepOpacity,
              position: "absolute",
              bottom: 28,
              margin: 0,
              fontWeight: 700,
              fontSize: 15,
              color: "#46586A",
            }}
          >
            Keep scrolling ▾
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}
