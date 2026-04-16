import Link from "next/link";

export function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(255,255,255,0.05)", padding: "3rem 2rem", textAlign: "center", background: "#080604" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", marginBottom: "1rem" }}>
        <span style={{ fontFamily: "var(--font-syne, Syne, sans-serif)", fontSize: "1.2rem", fontWeight: 800, color: "#f97316" }}>FillBelly</span>
      </div>
      <p style={{ color: "#4a3f33", fontSize: "0.82rem" }}>
        Supporting local street food vendors across India. © {new Date().getFullYear()}
      </p>
    </footer>
  );
}
