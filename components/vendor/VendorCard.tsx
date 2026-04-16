"use client";

import { motion } from "framer-motion";
import { Star, MapPin, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Vendor } from "@/types";

interface VendorCardProps {
  vendor: Vendor;
}

export function VendorCard({ vendor }: VendorCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      style={{
        background: "rgba(18, 14, 9, 0.6)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(249, 115, 22, 0.15)",
        borderRadius: "1.5rem",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Image Placeholder */}
      <div style={{
        height: "160px",
        background: "linear-gradient(45deg, #1a0e04, #2a1a0a)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "3rem",
      }}>
        {vendor.category === "Snacks" ? "🥙" : vendor.category === "Main Course" ? "🥘" : "🍜"}
      </div>

      {/* Status Badge */}
      <div style={{
        position: "absolute", top: "1rem", right: "1rem",
        background: vendor.isOpen ? "rgba(34, 197, 94, 0.15)" : "rgba(239, 68, 68, 0.15)",
        border: `1px solid ${vendor.isOpen ? "rgba(34, 197, 94, 0.3)" : "rgba(239, 68, 68, 0.3)"}`,
        color: vendor.isOpen ? "#4ade80" : "#f87171",
        padding: "0.3rem 0.8rem",
        borderRadius: "999px",
        fontSize: "0.75rem",
        fontWeight: 700,
        display: "flex", alignItems: "center", gap: "0.4rem"
      }}>
        <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "currentColor" }} />
        {vendor.isOpen ? "Open Now" : "Closed"}
      </div>

      <div style={{ padding: "1.5rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem" }}>
          <h3 style={{ fontFamily: "var(--font-syne)", fontSize: "1.2rem", fontWeight: 700, color: "#fef3c7" }}>
            {vendor.name}
          </h3>
          <div style={{ display: "flex", alignItems: "center", gap: "0.3rem", color: "#fb923c" }}>
            <Star size={14} fill="#fb923c" />
            <span style={{ fontSize: "0.9rem", fontWeight: 700 }}>{vendor.rating}</span>
          </div>
        </div>

        <p style={{ color: "#a8956e", fontSize: "0.85rem", marginBottom: "1.2rem", display: "flex", alignItems: "center", gap: "0.4rem" }}>
          <MapPin size={14} /> {vendor.location.address}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.5rem" }}>
          <span style={{ background: "rgba(249, 115, 22, 0.08)", color: "#fb923c", padding: "0.25rem 0.7rem", borderRadius: "0.5rem", fontSize: "0.75rem", fontWeight: 600 }}>
            {vendor.category}
          </span>
          <span style={{ background: "rgba(255, 255, 255, 0.03)", color: "#7c6c56", padding: "0.25rem 0.7rem", borderRadius: "0.5rem", fontSize: "0.75rem" }}>
            <Clock size={12} style={{ display: "inline", marginRight: "0.3rem" }} />
            Updated 2h ago
          </span>
        </div>

        <Link href={`/vendor/${vendor.id}`} style={{
          display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem",
          background: "rgba(249, 115, 22, 0.1)", color: "#fb923c", border: "1px solid rgba(249, 115, 22, 0.2)",
          padding: "0.75rem", borderRadius: "0.8rem", fontSize: "0.9rem", fontWeight: 700, textDecoration: "none",
          transition: "all 0.2s"
        }}
          onMouseEnter={e => { e.currentTarget.style.background = "#f97316"; e.currentTarget.style.color = "#080604"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "rgba(249, 115, 22, 0.1)"; e.currentTarget.style.color = "#fb923c"; }}
        >
          View Menu <ArrowRight size={16} />
        </Link>
      </div>
    </motion.div>
  );
}
