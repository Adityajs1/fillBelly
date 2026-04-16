"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        padding: "1.2rem 2rem",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: "linear-gradient(to bottom, rgba(8,6,4,0.95), transparent)",
        backdropFilter: "blur(8px)",
      }}>
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none" }}>
            <span style={{ fontSize: "1.6rem" }}>🔥</span>
            <span style={{ fontFamily: "var(--font-syne, Syne, sans-serif)", fontSize: "1.4rem", fontWeight: 800, color: "#f97316", letterSpacing: "-0.03em" }}>
              FillBelly
            </span>
          </Link>
        </motion.div>

        {/* Desktop nav */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
          style={{ display: "flex", gap: "2rem", alignItems: "center" }}
          className="hidden-mobile">
          <Link href="/explore" style={{ color: "#a8956e", textDecoration: "none", fontSize: "0.9rem", fontWeight: 500, letterSpacing: "0.02em" }}>Explore</Link>
          <Link href="/vendor/register" style={{ color: "#a8956e", textDecoration: "none", fontSize: "0.9rem", fontWeight: 500 }}>List Your Stall</Link>
          <Link href="/login" style={{ color: "#a8956e", textDecoration: "none", fontSize: "0.9rem", fontWeight: 500 }}>Login</Link>
          <Link href="/register" style={{
            background: "#f97316", color: "#080604", padding: "0.5rem 1.2rem",
            borderRadius: "999px", textDecoration: "none", fontSize: "0.85rem", fontWeight: 700,
          }}>
            Get Started
          </Link>
        </motion.div>

        {/* Mobile hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", color: "#fef3c7", cursor: "pointer" }} className="md:hidden">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            style={{
              position: "fixed", top: "4.5rem", left: 0, right: 0, zIndex: 40,
              background: "#0f0b07", padding: "1.5rem 2rem",
              display: "flex", flexDirection: "column", gap: "1.2rem",
              borderBottom: "1px solid rgba(249,115,22,0.2)",
            }}>
            {["Explore", "List Your Stall", "Login"].map((item) => (
              <Link key={item} href={`/${item.toLowerCase().replace(/ /g, "-")}`}
                style={{ color: "#fef3c7", textDecoration: "none", fontSize: "1.1rem", fontWeight: 500 }}
                onClick={() => setMenuOpen(false)}>
                {item}
              </Link>
            ))}
            <Link href="/register" style={{
              background: "#f97316", color: "#080604", padding: "0.75rem 1.5rem",
              borderRadius: "999px", textDecoration: "none", fontWeight: 700, textAlign: "center",
            }} onClick={() => setMenuOpen(false)}>
              Get Started
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
        }
      `}</style>
    </>
  );
}
