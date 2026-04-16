"use client";

import { motion } from "framer-motion";
import { Heart, Search, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/shared/Navbar";
import { PageWrapper } from "@/components/shared/Loader";
import { VendorCard } from "@/components/vendor/VendorCard";
import { Vendor } from "@/types";

const SAVED_VENDORS: Vendor[] = [
  {
    id: "1",
    ownerId: "v1",
    name: "Raju's Special Vada Pav",
    description: "The most authentic Mumbai Vada Pav in the city.",
    category: "Snacks",
    location: { lat: 19.076, lng: 72.877, address: "Near Gateway of India, Mumbai" },
    isOpen: true,
    rating: 4.8,
    numRatings: 120,
    phone: "9876543210",
    updatedAt: new Date().toISOString(),
  }
];

export default function SavedVendorsPage() {
  return (
    <PageWrapper>
      <Navbar />

      <div style={{ paddingTop: "6rem", maxWidth: "1200px", margin: "0 auto", width: "100%", padding: "6rem 2rem 4rem" }}>
        
        <div style={{ marginBottom: "4rem" }}>
          <h1 style={{ fontFamily: "var(--font-syne)", fontSize: "2.5rem", fontWeight: 800, color: "#fef3c7", display: "flex", alignItems: "center", gap: "1rem" }}>
            <Heart size={32} fill="#f97316" color="#f97316" /> Saved Stalls
          </h1>
          <p style={{ color: "#7c6c56", marginTop: "0.5rem" }}>Quickly find your favourite street eats.</p>
        </div>

        {SAVED_VENDORS.length > 0 ? (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "2rem" }}>
            {SAVED_VENDORS.map((vendor) => (
              <VendorCard key={vendor.id} vendor={vendor} />
            ))}
          </div>
        ) : (
          <div style={{ 
            textAlign: "center", padding: "6rem 2rem", 
            background: "rgba(255,255,255,0.02)", border: "1px dashed rgba(249,115,22,0.2)",
            borderRadius: "2rem" 
          }}>
            <Search size={48} color="#4a3f33" style={{ marginBottom: "1.5rem" }} />
            <h3 style={{ color: "#fef3c7", fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.5rem" }}>No saved stalls yet</h3>
            <p style={{ color: "#7c6c56", marginBottom: "2rem" }}>Start exploring to find your new favourites.</p>
            <Link href="/explore" style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              background: "#f97316", color: "#080604",
              padding: "0.9rem 2rem", borderRadius: "999px",
              fontWeight: 800, fontSize: "1rem", textDecoration: "none",
            }}>
              Explore Vendors <ArrowRight size={18} />
            </Link>
          </div>
        )}
      </div>
    </PageWrapper>
  );
}
