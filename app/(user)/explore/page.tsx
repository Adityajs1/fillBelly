"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Map as MapIcon, List, Filter, Navigation } from "lucide-react";
import { Navbar } from "@/components/shared/Navbar";
import { PageWrapper } from "@/components/shared/Loader";
import { VendorCard } from "@/components/vendor/VendorCard";
import { Vendor } from "@/types";

const MOCK_VENDORS: Vendor[] = [
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
  },
  {
    id: "2",
    ownerId: "v2",
    name: "Sharma Ji Ki Chaat",
    description: "Famous for tangy and spicy aloo tikki chaat.",
    category: "Snacks",
    location: { lat: 19.085, lng: 72.885, address: "Chowpatty Beach, Mumbai" },
    isOpen: true,
    rating: 4.5,
    numRatings: 85,
    phone: "9876543211",
    updatedAt: new Date().toISOString(),
  },
  {
    id: "3",
    ownerId: "v3",
    name: "Laxman's South Indian",
    description: "Crispy dosas and soft idlis served with love.",
    category: "Main Course",
    location: { lat: 19.065, lng: 72.895, address: "Dadar Market, Mumbai" },
    isOpen: false,
    rating: 4.2,
    numRatings: 210,
    phone: "9876543212",
    updatedAt: new Date().toISOString(),
  }
];

export default function ExplorePage() {
  const [view, setView] = useState<"map" | "list">("list");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <PageWrapper>
      <Navbar />

      <div style={{ paddingTop: "6rem", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        
        {/* Search & Filter Header */}
        <div style={{ padding: "0 2rem 2rem", maxWidth: "1200px", margin: "0 auto", width: "100%" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ position: "relative", flex: 1, minWidth: "300px" }}>
              <Search size={18} style={{ position: "absolute", left: "1.2rem", top: "50%", transform: "translateY(-50%)", color: "#6b5e4e" }} />
              <input 
                type="text" 
                placeholder="Search for vada pav, dosa, chaat..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: "100%", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(249,115,22,0.1)", 
                  padding: "1rem 1.2rem 1rem 3.2rem", borderRadius: "1rem", color: "#fef3c7", outline: "none", fontSize: "0.95rem"
                }}
              />
            </div>

            <div style={{ display: "flex", gap: "0.75rem" }}>
              <button style={{
                background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
                padding: "0.8rem 1.2rem", borderRadius: "0.8rem", color: "#a8956e", display: "flex", alignItems: "center", gap: "0.5rem",
                fontSize: "0.9rem", cursor: "pointer"
              }}>
                <Filter size={16} /> Filters
              </button>
              
              <div style={{ background: "rgba(255,255,255,0.03)", padding: "0.3rem", borderRadius: "0.9rem", border: "1px solid rgba(255,255,255,0.05)", display: "flex" }}>
                <button 
                  onClick={() => setView("list")}
                  style={{
                    padding: "0.5rem 1rem", borderRadius: "0.6rem", border: "none", cursor: "pointer",
                    background: view === "list" ? "#f97316" : "transparent",
                    color: view === "list" ? "#080604" : "#a8956e",
                    display: "flex", alignItems: "center", gap: "0.4rem", transition: "all 0.3s"
                  }}
                >
                  <List size={16} /> List
                </button>
                <button 
                  onClick={() => setView("map")}
                  style={{
                    padding: "0.5rem 1rem", borderRadius: "0.6rem", border: "none", cursor: "pointer",
                    background: view === "map" ? "#f97316" : "transparent",
                    color: view === "map" ? "#080604" : "#a8956e",
                    display: "flex", alignItems: "center", gap: "0.4rem", transition: "all 0.3s"
                  }}
                >
                  <MapIcon size={16} /> Map
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div style={{ flex: 1, position: "relative" }}>
          {view === "list" ? (
            <div style={{ padding: "0 2rem 4rem", maxWidth: "1200px", margin: "0 auto", width: "100%" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "2rem" }}>
                {MOCK_VENDORS.map((vendor) => (
                  <VendorCard key={vendor.id} vendor={vendor} />
                ))}
              </div>
              
              {/* Load More / End of List */}
              <div style={{ textAlign: "center", marginTop: "4rem", color: "#4a3f33" }}>
                <p style={{ fontSize: "0.9rem" }}>Showing all vendors nearby.</p>
                <button style={{
                  marginTop: "1.5rem", background: "none", border: "1px solid rgba(249,115,22,0.2)",
                  color: "#fb923c", padding: "0.8rem 2rem", borderRadius: "999px", fontSize: "0.9rem", fontWeight: 600, cursor: "pointer"
                }}>
                  Refresh Location
                </button>
              </div>
            </div>
          ) : (
            <div style={{ height: "calc(100vh - 12rem)", width: "100%", background: "#0f0b07", position: "relative", overflow: "hidden" }}>
              {/* Map Placeholder */}
              <div style={{ 
                position: "absolute", inset: 0, 
                backgroundImage: 'url("https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/72.877,19.076,12/1200x800?access_token=YOUR_TOKEN")',
                backgroundSize: "cover", backgroundPosition: "center",
                opacity: 0.6
              }} />
              
              {/* Mock Pins */}
              {MOCK_VENDORS.map((v, i) => (
                <motion.div
                  key={v.id}
                  initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: i * 0.1 }}
                  style={{
                    position: "absolute",
                    top: `${40 + i * 15}%`,
                    left: `${30 + i * 20}%`,
                    transform: "translate(-50%, -100%)",
                    cursor: "pointer"
                  }}
                >
                  <div style={{
                    background: "#f97316", width: "40px", height: "40px", borderRadius: "50% 50% 50% 0",
                    transform: "rotate(-45deg)", display: "flex", alignItems: "center", justifyContent: "center",
                    boxShadow: "0 5px 15px rgba(249,115,22,0.4)", border: "2px solid #080604"
                  }}>
                    <div style={{ transform: "rotate(45deg)", fontSize: "1.2rem" }}>🔥</div>
                  </div>
                </motion.div>
              ))}

              <div style={{
                position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)",
                background: "rgba(18, 14, 9, 0.9)", backdropFilter: "blur(10px)", border: "1px solid rgba(249,115,22,0.2)",
                padding: "1rem 2rem", borderRadius: "1rem", display: "flex", alignItems: "center", gap: "1rem"
              }}>
                <Navigation size={20} color="#f97316" />
                <div>
                  <p style={{ fontSize: "0.8rem", color: "#a8956e" }}>Your Location</p>
                  <p style={{ fontSize: "0.95rem", fontWeight: 600, color: "#fef3c7" }}>Andheri West, Mumbai</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </PageWrapper>
  );
}
