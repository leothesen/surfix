import { WA_LINK } from "./shared";

export default function FloatingWhatsApp() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener"
      aria-label="Chat on WhatsApp"
      style={{
        position: "fixed",
        right: 22,
        bottom: 22,
        zIndex: 90,
        width: 62,
        height: 62,
        borderRadius: "50%",
        background: "#25D366",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 12px 28px rgba(37,211,102,0.45)",
        textDecoration: "none",
      }}
    >
      <span
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "50%",
          background: "#25D366",
          animation: "surfixPing 2.6s ease-out infinite",
          zIndex: -1,
        }}
      />
      <svg width="32" height="32" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
        <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.6-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.6.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-2-1.2 7.4 7.4 0 0 1-1.4-1.7c-.1-.2 0-.4.1-.5l.4-.5c.1-.2.2-.3.2-.5s0-.3 0-.4-.6-1.5-.8-2-.4-.5-.6-.5h-.5a1 1 0 0 0-.7.3A2.9 2.9 0 0 0 5.6 11a5 5 0 0 0 1.1 2.7 11.5 11.5 0 0 0 4.4 3.9c.6.3 1.1.4 1.5.5a3.5 3.5 0 0 0 1.6.1c.5-.1 1.5-.6 1.7-1.2s.2-1.1.2-1.2-.2-.2-.4-.3Z" />
      </svg>
    </a>
  );
}
