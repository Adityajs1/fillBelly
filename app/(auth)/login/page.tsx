"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Lock, ArrowRight, MapPin, Key } from "lucide-react";
import { PageWrapper } from "@/components/shared/Loader";

export default function LoginPage() {
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
            maxWidth: "440px", 
            position: "relative", 
            zIndex: 2,
            background: "rgba(18, 14, 9, 0.8)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(249, 115, 22, 0.2)",
            borderRadius: "2rem",
            padding: "3.5rem 2.5rem",
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
              Welcome Back
            </h1>
            <p style={{ color: "#a8956e", fontSize: "0.9rem", marginTop: "0.5rem" }}>
              Ready for your next street food adventure?
            </p>
          </div>

          {/* Form */}
          <form style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
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
                placeholder="Password" 
                style={{
                  width: "100%", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", 
                  padding: "1rem 1.2rem 1rem 3.2rem", borderRadius: "1rem", color: "#fef3c7", outline: "none", fontSize: "0.95rem"
                }}
              />
            </div>

            <div style={{ textAlign: "right" }}>
              <Link href="#" style={{ fontSize: "0.85rem", color: "#fb923c", textDecoration: "none" }}>
                Forgot Password?
              </Link>
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
              Login to Account <ArrowRight size={18} />
            </button>
          </form>

          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <p style={{ color: "#7c6c56", fontSize: "0.9rem" }}>
              Don't have an account? {" "}
              <Link href="/register" style={{ color: "#fb923c", fontWeight: 600, textDecoration: "none" }}>
                Register here
              </Link>
            </p>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <div style={{ position: "absolute", bottom: "10%", right: "5%", opacity: 0.05, pointerEvents: "none" }}>
          <Key size={300} color="#f97316" />
        </div>
        <div style={{ position: "absolute", top: "10%", left: "10%", opacity: 0.1, pointerEvents: "none" }}>
          <MapPin size={200} color="#f97316" />
        </div>
      </div>
    </PageWrapper>
  );
}
