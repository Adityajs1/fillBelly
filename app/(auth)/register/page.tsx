"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { User, Mail, Lock, ArrowRight, MapPin, Utensils, ShieldCheck } from "lucide-react";
import { PageWrapper } from "@/components/shared/Loader";

export default function RegisterPage() {
  const [role, setRole] = useState<"user" | "vendor">("user");

  return (
    <PageWrapper>
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}>
        
        {/* Radial glow background */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "radial-gradient(circle at 50% 50%, rgba(249,115,22,0.08) 0%, rgba(8,6,4,0) 70%)",
        }} />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ 
            width: "100%", 
            maxWidth: "480px", 
            position: "relative", 
            zIndex: 2,
            background: "rgba(18, 14, 9, 0.8)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(249, 115, 22, 0.2)",
            borderRadius: "2rem",
            padding: "3rem 2.5rem",
            boxShadow: "0 20px 50px rgba(0,0,0,0.5)"
          }}
        >
          {/* Logo */}
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", textDecoration: "none" }}>
              <span style={{ fontSize: "1.8rem" }}>🔥</span>
              <span style={{ fontFamily: "var(--font-syne, Syne, sans-serif)", fontSize: "1.6rem", fontWeight: 800, color: "#f97316", letterSpacing: "-0.03em" }}>
                FillBelly
              </span>
            </Link>
            <h1 style={{ fontFamily: "var(--font-syne, Syne, sans-serif)", fontSize: "1.8rem", fontWeight: 800, marginTop: "1rem", color: "#fef3c7" }}>
              Create Account
            </h1>
            <p style={{ color: "#a8956e", fontSize: "0.9rem", marginTop: "0.5rem" }}>
              Join the street food revolution.
            </p>
          </div>

          {/* Role Selector */}
          <div style={{ 
            display: "flex", 
            background: "rgba(255,255,255,0.03)", 
            padding: "0.4rem", 
            borderRadius: "999px", 
            marginBottom: "2rem",
            border: "1px solid rgba(255,255,255,0.05)"
          }}>
            <button 
              type="button"
              onClick={() => setRole("user")}
              style={{
                flex: 1, padding: "0.75rem", borderRadius: "999px", border: "none", fontSize: "0.9rem", fontWeight: 600, cursor: "pointer",
                background: role === "user" ? "#f97316" : "transparent",
                color: role === "user" ? "#080604" : "#a8956e",
                transition: "all 0.3s"
              }}
            >
              I'm a Foodie
            </button>
            <button 
              type="button"
              onClick={() => setRole("vendor")}
              style={{
                flex: 1, padding: "0.75rem", borderRadius: "999px", border: "none", fontSize: "0.9rem", fontWeight: 600, cursor: "pointer",
                background: role === "vendor" ? "#f97316" : "transparent",
                color: role === "vendor" ? "#080604" : "#a8956e",
                transition: "all 0.3s"
              }}
            >
              I'm a Vendor
            </button>
          </div>

          {/* Form */}
          <form style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={{ position: "relative" }}>
              <User size={18} style={{ position: "absolute", left: "1.2rem", top: "50%", transform: "translateY(-50%)", color: "#6b5e4e" }} />
              <input 
                type="text" 
                placeholder="Full Name" 
                style={{
                  width: "100%", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", 
                  padding: "1rem 1.2rem 1rem 3.2rem", borderRadius: "1rem", color: "#fef3c7", outline: "none", fontSize: "0.95rem"
                }}
              />
            </div>

            <div style={{ position: "relative" }}>
              <Mail size={18} style={{ position: "absolute", left: "1.2rem", top: "50%", transform: "translateY(-50%)", color: "#6b5e4e" }} />
              <input 
                type="email" 
                placeholder="Email Address" 
                style={{
                  width: "100%", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", 
                  padding: "1rem 1.2rem 1rem 3.2rem", borderRadius: "1rem", color: "#fef3c7", outline: "none", fontSize: "0.95rem"
                }}
              />
            </div>

            <div style={{ position: "relative" }}>
              <Lock size={18} style={{ position: "absolute", left: "1.2rem", top: "50%", transform: "translateY(-50%)", color: "#6b5e4e" }} />
              <input 
                type="password" 
                placeholder="Create Password" 
                style={{
                  width: "100%", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", 
                  padding: "1rem 1.2rem 1rem 3.2rem", borderRadius: "1rem", color: "#fef3c7", outline: "none", fontSize: "0.95rem"
                }}
              />
            </div>

            {role === "vendor" && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
              >
                <div style={{ position: "relative" }}>
                  <Utensils size={18} style={{ position: "absolute", left: "1.2rem", top: "50%", transform: "translateY(-50%)", color: "#6b5e4e" }} />
                  <input 
                    type="text" 
                    placeholder="Stall/Business Name" 
                    style={{
                      width: "100%", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", 
                      padding: "1rem 1.2rem 1rem 3.2rem", borderRadius: "1rem", color: "#fef3c7", outline: "none", fontSize: "0.95rem"
                    }}
                  />
                </div>
              </motion.div>
            )}

            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.5rem 0" }}>
              <input type="checkbox" id="terms" style={{ accentColor: "#f97316" }} />
              <label htmlFor="terms" style={{ fontSize: "0.85rem", color: "#7c6c56" }}>
                I agree to the <span style={{ color: "#fb923c" }}>Terms & Conditions</span>
              </label>
            </div>

            <button 
              type="submit"
              style={{
                background: "#f97316", color: "#080604", padding: "1.1rem", borderRadius: "1rem", border: "none",
                fontSize: "1rem", fontWeight: 800, cursor: "pointer", marginTop: "1rem",
                display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem",
                boxShadow: "0 10px 30px rgba(249,115,22,0.2)",
                transition: "transform 0.2s"
              }}
            >
              Start Your Journey <ArrowRight size={18} />
            </button>
          </form>

          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <p style={{ color: "#7c6c56", fontSize: "0.9rem" }}>
              Already have an account? {" "}
              <Link href="/login" style={{ color: "#fb923c", fontWeight: 600, textDecoration: "none" }}>
                Login here
              </Link>
            </p>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <div style={{ position: "absolute", top: "10%", right: "10%", opacity: 0.1, pointerEvents: "none" }}>
          <MapPin size={200} color="#f97316" />
        </div>
        <div style={{ position: "absolute", bottom: "10%", left: "5%", opacity: 0.05, pointerEvents: "none" }}>
          <ShieldCheck size={300} color="#f97316" />
        </div>
      </div>
    </PageWrapper>
  );
}
