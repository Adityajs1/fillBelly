"use client";

import { motion } from "framer-motion";
import { Plus, Minus, Leaf, Info } from "lucide-react";
import { MenuItem } from "@/types";

interface VendorMenuProps {
  items: MenuItem[];
}

export function VendorMenu({ items }: VendorMenuProps) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.5rem" }}>
      {items.map((item) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{
            background: "rgba(255, 255, 255, 0.02)",
            border: "1px solid rgba(249, 115, 22, 0.1)",
            borderRadius: "1.2rem",
            padding: "1.25rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.8rem",
            opacity: item.isAvailable ? 1 : 0.5,
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <div style={{ 
                width: "12px", height: "12px", border: `1px solid ${item.isVeg ? "#22c55e" : "#ef4444"}`,
                display: "flex", alignItems: "center", justifyContent: "center", padding: "1px"
              }}>
                <div style={{ width: "100%", height: "100%", borderRadius: "50%", background: item.isVeg ? "#22c55e" : "#ef4444" }} />
              </div>
              <h4 style={{ color: "#fef3c7", fontWeight: 700, fontSize: "1.05rem" }}>{item.name}</h4>
            </div>
            <span style={{ color: "#fb923c", fontWeight: 800 }}>₹{item.price}</span>
          </div>

          <p style={{ color: "#7c6c56", fontSize: "0.85rem", lineHeight: 1.4 }}>
            {item.description || "No description available."}
          </p>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "auto" }}>
            {!item.isAvailable ? (
              <span style={{ color: "#ef4444", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase" }}>Unavailable</span>
            ) : (
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", background: "rgba(249, 115, 22, 0.1)", padding: "0.3rem 0.6rem", borderRadius: "0.6rem" }}>
                <button style={{ background: "none", border: "none", color: "#fb923c", cursor: "pointer", display: "flex" }}><Minus size={16} /></button>
                <span style={{ color: "#fef3c7", fontWeight: 700, fontSize: "0.9rem" }}>0</span>
                <button style={{ background: "none", border: "none", color: "#fb923c", cursor: "pointer", display: "flex" }}><Plus size={16} /></button>
              </div>
            )}
            
            <button style={{
              background: "none", border: "none", color: "#6b5e4e", cursor: "pointer", display: "flex"
            }}>
              <Info size={16} />
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
