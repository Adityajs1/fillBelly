"use client";

import { motion } from "framer-motion";
import { Star, MapPin, Phone, Share2, Heart, ArrowLeft, Clock } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/shared/Navbar";
import { PageWrapper } from "@/components/shared/Loader";
import { VendorMenu } from "@/components/vendor/VendorMenu";
import { Vendor, MenuItem } from "@/types";

const MOCK_VENDOR: Vendor = {
  id: "1",
  ownerId: "v1",
  name: "Raju's Special Vada Pav",
  description: "Serving the crispiest Vada Pavs with our secret garlic chutney since 1995. Every bite is a journey through Mumbai's street food history. We use only fresh ingredients and high-quality oil.",
  category: "Snacks",
  location: { lat: 19.076, lng: 72.877, address: "Shop 12, Near Gateway of India, Mumbai" },
  isOpen: true,
  rating: 4.8,
  numRatings: 120,
  phone: "9876543210",
  updatedAt: new Date().toISOString(),
};

const MOCK_MENU: MenuItem[] = [
  { id: "m1", name: "Classic Vada Pav", price: 20, isAvailable: true, isVeg: true, description: "The OG Mumbai burger." },
  { id: "m2", name: "Cheese Vada Pav", price: 35, isAvailable: true, isVeg: true, description: "Classic with a slice of cheese." },
  { id: "m3", name: "Masala Pav (Set of 2)", price: 40, isAvailable: true, isVeg: true, description: "Spicy buttery pavs." },
  { id: "m4", name: "Cutting Chai", price: 10, isAvailable: true, isVeg: true, description: "The perfect companion." },
  { id: "m5", name: "Samosa Pav", price: 25, isAvailable: false, isVeg: true, description: "Spicy samosa in a pav." },
];

export default function VendorProfilePage() {
  return (
    <PageWrapper>
      <Navbar />

      <div style={{ paddingTop: "6rem", maxWidth: "1200px", margin: "0 auto", width: "100%", padding: "6rem 2rem 4rem" }}>
        
        {/* Back Button */}
        <Link href="/explore" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#a8956e", textDecoration: "none", marginBottom: "2rem", fontSize: "0.9rem" }}>
          <ArrowLeft size={16} /> Back to Explore
        </Link>

        {/* Hero Section */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem", marginBottom: "4rem" }}>
          
          {/* Vendor Info */}
          <div style={{ position: "relative" }}>
            <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "1rem" }}>
              <span style={{ background: "rgba(249, 115, 22, 0.1)", color: "#fb923c", padding: "0.4rem 1rem", borderRadius: "0.6rem", fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase" }}>
                {MOCK_VENDOR.category}
              </span>
              <div style={{
                background: MOCK_VENDOR.isOpen ? "rgba(34, 197, 94, 0.15)" : "rgba(239, 68, 68, 0.15)",
                color: MOCK_VENDOR.isOpen ? "#4ade80" : "#f87171",
                padding: "0.4rem 1rem", borderRadius: "0.6rem", fontSize: "0.8rem", fontWeight: 700, display: "flex", alignItems: "center", gap: "0.4rem"
              }}>
                <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "currentColor" }} />
                {MOCK_VENDOR.isOpen ? "OPEN" : "CLOSED"}
              </div>
            </div>

            <h1 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, color: "#fef3c7", marginBottom: "1rem", letterSpacing: "-0.02em" }}>
              {MOCK_VENDOR.name}
            </h1>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", marginBottom: "2rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#fb923c" }}>
                <Star size={20} fill="#fb923c" />
                <span style={{ fontSize: "1.2rem", fontWeight: 800 }}>{MOCK_VENDOR.rating}</span>
                <span style={{ fontSize: "0.9rem", color: "#6b5e4e" }}>({MOCK_VENDOR.numRatings}+ ratings)</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#a8956e" }}>
                <Clock size={20} />
                <span style={{ fontSize: "0.95rem" }}>Live Availability</span>
              </div>
            </div>

            <p style={{ color: "#7c6c56", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "2.5rem", maxWidth: "540px" }}>
              {MOCK_VENDOR.description}
            </p>

            <div style={{ display: "flex", gap: "1rem" }}>
              <button style={{
                background: "#f97316", color: "#080604", padding: "1rem 2.5rem", borderRadius: "1rem", border: "none",
                fontWeight: 800, fontSize: "1rem", cursor: "pointer", display: "flex", alignItems: "center", gap: "0.75rem"
              }}>
                <Phone size={18} /> Call Vendor
              </button>
              <button style={{
                background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
                color: "#fef3c7", width: "3.5rem", height: "3.5rem", borderRadius: "1rem", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer"
              }}>
                <Heart size={20} />
              </button>
              <button style={{
                background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
                color: "#fef3c7", width: "3.5rem", height: "3.5rem", borderRadius: "1rem", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer"
              }}>
                <Share2 size={20} />
              </button>
            </div>
          </div>

          {/* Location / Meta Info */}
          <div style={{
            background: "rgba(249, 115, 22, 0.05)", border: "1px solid rgba(249, 115, 22, 0.1)",
            borderRadius: "2rem", padding: "2.5rem"
          }}>
            <h3 style={{ fontFamily: "var(--font-syne)", fontSize: "1.5rem", fontWeight: 700, color: "#fef3c7", marginBottom: "1.5rem" }}>Location</h3>
            <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}>
              <MapPin size={24} color="#f97316" style={{ flexShrink: 0 }} />
              <div>
                <p style={{ color: "#fef3c7", fontWeight: 600, fontSize: "1rem", marginBottom: "0.25rem" }}>{MOCK_VENDOR.location.address}</p>
                <p style={{ color: "#7c6c56", fontSize: "0.9rem" }}>Walking distance from you (0.8 km)</p>
              </div>
            </div>

            <div style={{
              height: "200px", width: "100%", background: "#0f0b07", borderRadius: "1rem", marginBottom: "2rem",
              backgroundImage: 'url("https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/72.877,19.076,14/400x200?access_token=YOUR_TOKEN")',
              backgroundSize: "cover", backgroundPosition: "center", opacity: 0.8
            }} />

            <button style={{
              width: "100%", background: "none", border: "1px solid rgba(249, 115, 22, 0.4)",
              color: "#fb923c", padding: "1rem", borderRadius: "0.8rem", fontWeight: 700, cursor: "pointer"
            }}>
              Get Directions
            </button>
          </div>
        </div>

        {/* Menu Section */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "4rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2.5rem" }}>
            <div>
              <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "2rem", fontWeight: 800, color: "#fef3c7" }}>Menu</h2>
              <p style={{ color: "#7c6c56" }}>Everything freshly prepared</p>
            </div>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              {["All", "Snacks", "Drinks"].map(cat => (
                <button key={cat} style={{
                  background: cat === "All" ? "#f97316" : "rgba(255,255,255,0.03)",
                  color: cat === "All" ? "#080604" : "#a8956e",
                  border: "none", padding: "0.5rem 1.25rem", borderRadius: "999px",
                  fontSize: "0.9rem", fontWeight: 600, cursor: "pointer"
                }}>{cat}</button>
              ))}
            </div>
          </div>

          <VendorMenu items={MOCK_MENU} />
        </div>
      </div>
    </PageWrapper>
  );
}
