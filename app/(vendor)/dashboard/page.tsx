"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Settings, Plus, Edit2, Trash2, Power, Clock, BarChart3, MessageSquare } from "lucide-react";
import { Navbar } from "@/components/shared/Navbar";
import { PageWrapper } from "@/components/shared/Loader";
import { MenuItem } from "@/types";

const MOCK_ITEMS: MenuItem[] = [
  { id: "m1", name: "Classic Vada Pav", price: 20, isAvailable: true, isVeg: true },
  { id: "m2", name: "Cheese Vada Pav", price: 35, isAvailable: true, isVeg: true },
  { id: "m3", name: "Masala Pav (Set of 2)", price: 40, isAvailable: true, isVeg: true },
];

export default function VendorDashboard() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <PageWrapper>
      <Navbar />

      <div style={{ paddingTop: "6rem", maxWidth: "1200px", margin: "0 auto", width: "100%", padding: "6rem 2rem 4rem" }}>
        
        {/* Header */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "2rem", marginBottom: "4rem" }}>
          <div>
            <h1 style={{ fontFamily: "var(--font-syne)", fontSize: "2.5rem", fontWeight: 800, color: "#fef3c7" }}>Vendor Dashboard</h1>
            <p style={{ color: "#7c6c56" }}>Manage your stall, menu, and availability in real-time.</p>
          </div>
          
          <div style={{ display: "flex", gap: "1rem" }}>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              style={{
                background: isOpen ? "rgba(34, 197, 94, 0.1)" : "rgba(239, 68, 68, 0.1)",
                border: `1px solid ${isOpen ? "rgba(34, 197, 94, 0.2)" : "rgba(239, 68, 68, 0.2)"}`,
                color: isOpen ? "#4ade80" : "#f87171",
                padding: "0.8rem 1.5rem", borderRadius: "1rem", fontWeight: 700, cursor: "pointer",
                display: "flex", alignItems: "center", gap: "0.75rem", transition: "all 0.3s"
              }}
            >
              <Power size={18} /> {isOpen ? "Stall is Open" : "Stall is Closed"}
            </button>
            <button style={{
              background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
              color: "#fef3c7", width: "3.2rem", height: "3.2rem", borderRadius: "1rem", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer"
            }}>
              <Settings size={20} />
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem", marginBottom: "4rem" }}>
          {[
            { label: "Views Today", value: "342", icon: <BarChart3 size={20} />, color: "#3b82f6" },
            { label: "Menu Items", value: "12", icon: <Edit2 size={20} />, color: "#fb923c" },
            { label: "Customer Reviews", value: "48", icon: <MessageSquare size={20} />, color: "#a855f7" },
            { label: "Avg. Rating", value: "4.8", icon: <Clock size={20} />, color: "#22c55e" },
          ].map(stat => (
            <div key={stat.label} style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "1.5rem", padding: "1.5rem" }}>
              <div style={{ color: stat.color, marginBottom: "1rem" }}>{stat.icon}</div>
              <p style={{ color: "#7c6c56", fontSize: "0.85rem", marginBottom: "0.25rem" }}>{stat.label}</p>
              <h3 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#fef3c7" }}>{stat.value}</h3>
            </div>
          ))}
        </div>

        {/* Menu Management */}
        <div style={{ background: "rgba(18, 14, 9, 0.4)", border: "1px solid rgba(249, 115, 22, 0.1)", borderRadius: "2rem", padding: "2.5rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2.5rem" }}>
            <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "1.75rem", fontWeight: 800, color: "#fef3c7" }}>Manage Menu</h2>
            <button style={{
              background: "#f97316", color: "#080604", padding: "0.8rem 1.5rem", borderRadius: "0.8rem", border: "none",
              fontWeight: 800, cursor: "pointer", display: "flex", alignItems: "center", gap: "0.5rem"
            }}>
              <Plus size={18} /> Add Item
            </button>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {MOCK_ITEMS.map(item => (
              <div key={item.id} style={{
                background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)",
                borderRadius: "1.2rem", padding: "1.25rem", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "1.5rem"
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{ 
                    width: "40px", height: "40px", borderRadius: "10px", background: "rgba(249, 115, 22, 0.1)",
                    display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem"
                  }}>
                    🍔
                  </div>
                  <div>
                    <h4 style={{ color: "#fef3c7", fontWeight: 700 }}>{item.name}</h4>
                    <p style={{ color: "#7c6c56", fontSize: "0.85rem" }}>₹{item.price} • {item.isVeg ? "Veg" : "Non-Veg"}</p>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span style={{ fontSize: "0.85rem", color: item.isAvailable ? "#4ade80" : "#7c6c56" }}>
                      {item.isAvailable ? "Available" : "Sold Out"}
                    </span>
                    <div style={{ 
                      width: "36px", height: "20px", background: item.isAvailable ? "#f97316" : "#2a1a0a", 
                      borderRadius: "99px", padding: "2px", cursor: "pointer", position: "relative"
                    }}>
                      <div style={{ 
                        width: "16px", height: "16px", background: item.isAvailable ? "#080604" : "#6b5e4e", 
                        borderRadius: "50%", position: "absolute", left: item.isAvailable ? "18px" : "2px", transition: "all 0.2s"
                      }} />
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "0.5rem" }}>
                    <button style={{ background: "none", border: "none", color: "#a8956e", cursor: "pointer", padding: "0.5rem" }}><Edit2 size={18} /></button>
                    <button style={{ background: "none", border: "none", color: "#ef4444", cursor: "pointer", padding: "0.5rem" }}><Trash2 size={18} /></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
