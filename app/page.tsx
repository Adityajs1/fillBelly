"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { MapPin, Flame, Clock, Star, ChevronRight, Utensils, Navigation } from "lucide-react";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { PageWrapper } from "@/components/shared/Loader";

const FOOD_EMOJIS = ["🍢", "🥙", "🌮", "🍜", "🥘", "🫔", "🍱", "🧆"];

const FEATURES = [
  {
    icon: <Navigation size={22} />,
    title: "Live Nearby Discovery",
    desc: "Uses your real-time location to surface vendors within walking distance.",
  },
  {
    icon: <Flame size={22} />,
    title: "Authentic Street Eats",
    desc: "Not cloud kitchens. Real stalls, real people, real flavour.",
  },
  {
    icon: <Clock size={22} />,
    title: "Live Open/Closed Status",
    desc: "Know before you walk. Vendors update their availability in real time.",
  },
  {
    icon: <Star size={22} />,
    title: "Community Rated",
    desc: "Ratings from people who actually eat there — not paid reviewers.",
  },
];

const STEPS = [
  { num: "01", title: "Allow Location", desc: "One tap — we find what's around you." },
  { num: "02", title: "Browse the Map", desc: "See live vendor pins near you on the map." },
  { num: "03", title: "Eat Local", desc: "Check the menu, get directions, and go." },
];

function FloatingEmoji({ emoji, style }: { emoji: string; style: React.CSSProperties }) {
  return (
    <motion.span
      style={{ ...style, position: "absolute", fontSize: "2rem", userSelect: "none", pointerEvents: "none" }}
      animate={{ y: [0, -18, 0], rotate: [-6, 6, -6] }}
      transition={{ duration: 4 + Math.random() * 2, repeat: Infinity, ease: "easeInOut" }}
    >
      {emoji}
    </motion.span>
  );
}

export default function LandingPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 120]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <PageWrapper>
      <Navbar />

      {/* ── HERO ───────────────────────────────────────────────────────────── */}
      <section ref={heroRef} style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>

        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "radial-gradient(ellipse 80% 60% at 50% 60%, rgba(249,115,22,0.12) 0%, rgba(8,6,4,0) 70%)",
        }} />

        {FOOD_EMOJIS.map((e, i) => (
          <FloatingEmoji key={i} emoji={e} style={{
            top: `${15 + (i * 9) % 60}%`,
            left: `${5 + (i * 13) % 90}%`,
            opacity: 0.25,
          }} />
        ))}

        <motion.div
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.2, delay: 0.5 }}
          style={{
            position: "absolute", top: "50%", left: 0, right: 0, height: "1px",
            background: "linear-gradient(to right, transparent, rgba(249,115,22,0.3), transparent)",
            transformOrigin: "center",
          }}
        />

        <motion.div 
          style={{ 
            y: heroY, 
            opacity: heroOpacity,
            textAlign: "center", 
            padding: "0 1.5rem", 
            position: "relative", 
            zIndex: 2, 
            maxWidth: "820px" 
          }}>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span style={{
              display: "inline-flex", alignItems: "center", gap: "0.4rem",
              background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.3)",
              color: "#fb923c", padding: "0.35rem 1rem", borderRadius: "999px",
              fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase",
              marginBottom: "2rem",
            }}>
              <MapPin size={12} /> Hyperlocal Street Food Discovery
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }}
            style={{
              fontFamily: "var(--font-syne, Syne, sans-serif)",
              fontSize: "clamp(3rem, 9vw, 7rem)",
              fontWeight: 900, lineHeight: 0.95, letterSpacing: "-0.04em",
              marginBottom: "1.5rem",
            }}>
            <span style={{ color: "#fef3c7" }}>Street Food</span>
            <br />
            <span style={{
              WebkitTextStroke: "2px #f97316", color: "transparent",
              display: "inline-block",
            }}>
              Around You.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
            style={{ color: "#a8956e", fontSize: "clamp(1rem, 2.5vw, 1.2rem)", maxWidth: "540px", margin: "0 auto 2.5rem", lineHeight: 1.6 }}>
            Find the best local stalls, their menus, and real-time availability — all within walking distance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.45 }}
            style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/explore" style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              background: "#f97316", color: "#080604",
              padding: "0.9rem 2rem", borderRadius: "999px",
              fontWeight: 800, fontSize: "1rem", textDecoration: "none",
              boxShadow: "0 0 40px rgba(249,115,22,0.35)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}>
              <Navigation size={18} /> Find Food Near Me
            </Link>
            <Link href="/vendor/register" style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              border: "1px solid rgba(249,115,22,0.4)", color: "#fb923c",
              padding: "0.9rem 2rem", borderRadius: "999px",
              fontWeight: 600, fontSize: "1rem", textDecoration: "none",
              transition: "background 0.2s",
            }}>
              <Utensils size={18} /> List Your Stall
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
            style={{ marginTop: "2.5rem", color: "#6b5e4e", fontSize: "0.82rem", letterSpacing: "0.04em" }}>
            🍢 Join 500+ vendors already on FillBelly
          </motion.p>
        </motion.div>

        <motion.div
          animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}
          style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", color: "#6b5e4e", fontSize: "0.75rem", letterSpacing: "0.1em", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.4rem" }}>
          <span>SCROLL</span>
          <div style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, #f97316, transparent)" }} />
        </motion.div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────────────────── */}
      <section style={{ padding: "6rem 2rem", position: "relative" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ marginBottom: "4rem" }}>
            <p style={{ color: "#f97316", fontSize: "0.78rem", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600, marginBottom: "0.75rem" }}>Simple as eating</p>
            <h2 style={{ fontFamily: "var(--font-syne, Syne, sans-serif)", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "#fef3c7" }}>
              Three steps to your next meal
            </h2>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {STEPS.map((step, i) => (
              <motion.div key={step.num}
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -4 }}
                style={{
                  background: "linear-gradient(135deg, #120e09, #1a1208)",
                  border: "1px solid rgba(249,115,22,0.15)",
                  borderRadius: "1.25rem", padding: "2rem",
                  position: "relative", overflow: "hidden",
                }}>
                <div style={{
                  position: "absolute", top: "-1rem", right: "1.5rem",
                  fontFamily: "var(--font-syne, Syne, sans-serif)",
                  fontSize: "5rem", fontWeight: 900, color: "rgba(249,115,22,0.07)", lineHeight: 1,
                }}>
                  {step.num}
                </div>
                <div style={{ fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#f97316", fontWeight: 700, marginBottom: "0.75rem" }}>{step.num}</div>
                <h3 style={{ fontFamily: "var(--font-syne, Syne, sans-serif)", fontSize: "1.3rem", fontWeight: 700, color: "#fef3c7", marginBottom: "0.6rem" }}>{step.title}</h3>
                <p style={{ color: "#7c6c56", fontSize: "0.9rem", lineHeight: 1.6 }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES GRID ─────────────────────────────────────────────────── */}
      <section style={{ padding: "4rem 2rem 6rem", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ marginBottom: "4rem" }}>
            <p style={{ color: "#f97316", fontSize: "0.78rem", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600, marginBottom: "0.75rem" }}>Why FillBelly</p>
            <h2 style={{ fontFamily: "var(--font-syne, Syne, sans-serif)", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "#fef3c7" }}>
              Built for street food lovers
            </h2>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.25rem" }}>
            {FEATURES.map((f, i) => (
              <motion.div key={f.title}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ borderColor: "rgba(249,115,22,0.4)", y: -4 }}
                style={{
                  background: "#0d0a06", border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "1rem", padding: "1.75rem",
                  transition: "border-color 0.3s, transform 0.3s",
                }}>
                <div style={{
                  width: "2.5rem", height: "2.5rem", borderRadius: "0.6rem",
                  background: "rgba(249,115,22,0.12)", border: "1px solid rgba(249,115,22,0.25)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#f97316", marginBottom: "1.2rem",
                }}>
                  {f.icon}
                </div>
                <h3 style={{ fontFamily: "var(--font-syne, Syne, sans-serif)", fontSize: "1.05rem", fontWeight: 700, color: "#fef3c7", marginBottom: "0.5rem" }}>{f.title}</h3>
                <p style={{ color: "#7c6c56", fontSize: "0.875rem", lineHeight: 1.6 }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VENDOR CTA ─────────────────────────────────────────────────────── */}
      <section style={{ padding: "4rem 2rem 8rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            style={{
              background: "linear-gradient(135deg, #1a0e04, #241206)",
              border: "1px solid rgba(249,115,22,0.25)",
              borderRadius: "1.5rem", padding: "4rem 3rem",
              display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "2rem",
              position: "relative", overflow: "hidden",
            }}>
            <div style={{ position: "absolute", top: "-50%", right: "-10%", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(249,115,22,0.12), transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />
            
            <div style={{ position: "relative" }}>
              <p style={{ color: "#f97316", fontSize: "0.78rem", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600, marginBottom: "0.75rem" }}>For Vendors</p>
              <h2 style={{ fontFamily: "var(--font-syne, Syne, sans-serif)", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fef3c7", letterSpacing: "-0.03em", marginBottom: "0.75rem" }}>
                Own a stall? <br />Get on the map.
              </h2>
              <p style={{ color: "#7c6c56", fontSize: "0.95rem", maxWidth: "420px", lineHeight: 1.6 }}>
                List your stall for free. Add your menu, set your hours, and let hungry people find you.
              </p>
            </div>

            <Link href="/vendor/register" style={{
              display: "inline-flex", alignItems: "center", gap: "0.6rem",
              background: "#f97316", color: "#080604",
              padding: "1rem 2.2rem", borderRadius: "999px",
              fontWeight: 800, fontSize: "1rem", textDecoration: "none",
              whiteSpace: "nowrap", position: "relative",
              boxShadow: "0 0 50px rgba(249,115,22,0.3)",
            }}>
              Register Your Stall <ChevronRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </PageWrapper>
  );
}
