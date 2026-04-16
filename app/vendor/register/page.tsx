"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Store, 
  MapPin, 
  Phone, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft,
  Camera,
  UtensilsCrossed,
  Info
} from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/shared/Navbar";
import { PageWrapper } from "@/components/shared/Loader";

const CATEGORIES = [
  { label: "Snacks", icon: "🥙" },
  { label: "Main Course", icon: "🥘" },
  { label: "Beverages", icon: "🥤" },
  { label: "Desserts", icon: "🍦" },
  { label: "Bakery", icon: "🥐" },
  { label: "Other", icon: "🍽️" },
];

export default function VendorRegistrationPage() {
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  const nextStep = () => setStep(s => Math.min(s + 1, totalSteps));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  return (
    <PageWrapper>
      <Navbar />

      <div style={{ paddingTop: "6rem", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "6rem 2rem 4rem" }}>
        
        {/* Progress Bar */}
        <div style={{ position: "fixed", top: "5.5rem", left: 0, right: 0, height: "4px", background: "rgba(255,255,255,0.05)", zIndex: 60 }}>
          <motion.div 
            initial={{ width: "0%" }}
            animate={{ width: `${(step / totalSteps) * 100}%` }}
            style={{ height: "100%", background: "#f97316", boxShadow: "0 0 15px rgba(249,115,22,0.5)" }}
          />
        </div>

        <motion.div 
          layout
          style={{ 
            width: "100%", 
            maxWidth: "600px", 
            background: "rgba(18, 14, 9, 0.7)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(249, 115, 22, 0.15)",
            borderRadius: "2.5rem",
            padding: "3.5rem",
            position: "relative",
            boxShadow: "0 30px 60px rgba(0,0,0,0.6)"
          }}
        >
          <div style={{ marginBottom: "3rem", textAlign: "center" }}>
            <span style={{ 
              background: "rgba(249,115,22,0.1)", color: "#fb923c", 
              padding: "0.4rem 1rem", borderRadius: "999px", fontSize: "0.75rem", fontWeight: 800, letterSpacing: "0.1em"
            }}>
              STEP {step} OF {totalSteps}
            </span>
            <h1 style={{ fontFamily: "var(--font-syne)", fontSize: "2rem", fontWeight: 800, color: "#fef3c7", marginTop: "1rem" }}>
              {step === 1 && "Basic Stall Info"}
              {step === 2 && "Location & Contact"}
              {step === 3 && "Final Details"}
            </h1>
          </div>

          <form onSubmit={(e) => e.preventDefault()}>
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div 
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
                >
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <label style={{ color: "#a8956e", fontSize: "0.9rem", fontWeight: 600 }}>Stall Name</label>
                    <div style={{ position: "relative" }}>
                      <Store size={18} style={{ position: "absolute", left: "1.2rem", top: "50%", transform: "translateY(-50%)", color: "#6b5e4e" }} />
                      <input 
                        type="text" 
                        placeholder="e.g. Raju's Famous Vada Pav" 
                        style={{
                          width: "100%", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", 
                          padding: "1.1rem 1.2rem 1.1rem 3.2rem", borderRadius: "1rem", color: "#fef3c7", outline: "none", fontSize: "1rem"
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <label style={{ color: "#a8956e", fontSize: "0.9rem", fontWeight: 600 }}>Short Description</label>
                    <textarea 
                      placeholder="Tell us about your signature dish..." 
                      rows={3}
                      style={{
                        width: "100%", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", 
                        padding: "1.1rem", borderRadius: "1rem", color: "#fef3c7", outline: "none", fontSize: "1rem", resize: "none"
                      }}
                    />
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <label style={{ color: "#a8956e", fontSize: "0.9rem", fontWeight: 600 }}>Category</label>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.75rem" }}>
                      {CATEGORIES.map(cat => (
                        <button 
                          key={cat.label}
                          type="button"
                          style={{
                            background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)",
                            padding: "0.75rem", borderRadius: "0.8rem", color: "#fef3c7", fontSize: "0.85rem",
                            display: "flex", flexDirection: "column", alignItems: "center", gap: "0.4rem", cursor: "pointer"
                          }}
                        >
                          <span style={{ fontSize: "1.5rem" }}>{cat.icon}</span>
                          {cat.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div 
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
                >
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <label style={{ color: "#a8956e", fontSize: "0.9rem", fontWeight: 600 }}>Stall Address</label>
                    <div style={{ position: "relative" }}>
                      <MapPin size={18} style={{ position: "absolute", left: "1.2rem", top: "50%", transform: "translateY(-50%)", color: "#6b5e4e" }} />
                      <input 
                        type="text" 
                        placeholder="Street, Area, City" 
                        style={{
                          width: "100%", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", 
                          padding: "1.1rem 1.2rem 1.1rem 3.2rem", borderRadius: "1rem", color: "#fef3c7", outline: "none", fontSize: "1rem"
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ 
                    padding: "1.5rem", background: "rgba(249,115,22,0.05)", border: "1px dashed rgba(249,115,22,0.2)",
                    borderRadius: "1rem", display: "flex", alignItems: "center", gap: "1rem", cursor: "pointer"
                  }}>
                    <div style={{ 
                      width: "40px", height: "40px", borderRadius: "50%", background: "#f97316", color: "#080604",
                      display: "flex", alignItems: "center", justifyContent: "center"
                    }}>
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 style={{ color: "#fef3c7", fontWeight: 700, fontSize: "0.95rem" }}>Detect Precise Location</h4>
                      <p style={{ color: "#7c6c56", fontSize: "0.8rem" }}>Allows customers to find you on the map.</p>
                    </div>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <label style={{ color: "#a8956e", fontSize: "0.9rem", fontWeight: 600 }}>Contact Number</label>
                    <div style={{ position: "relative" }}>
                      <Phone size={18} style={{ position: "absolute", left: "1.2rem", top: "50%", transform: "translateY(-50%)", color: "#6b5e4e" }} />
                      <input 
                        type="tel" 
                        placeholder="10-digit mobile number" 
                        style={{
                          width: "100%", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", 
                          padding: "1.1rem 1.2rem 1.1rem 3.2rem", borderRadius: "1rem", color: "#fef3c7", outline: "none", fontSize: "1rem"
                        }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div 
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
                >
                  <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <label style={{ color: "#a8956e", fontSize: "0.9rem", fontWeight: 600 }}>Stall Photos</label>
                    <div style={{ 
                      height: "150px", border: "2px dashed rgba(255,255,255,0.1)", borderRadius: "1.5rem",
                      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                      gap: "0.75rem", background: "rgba(255,255,255,0.01)", cursor: "pointer"
                    }}>
                      <Camera size={32} color="#6b5e4e" />
                      <p style={{ color: "#6b5e4e", fontSize: "0.9rem" }}>Upload photos of your stall</p>
                    </div>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <label style={{ color: "#a8956e", fontSize: "0.9rem", fontWeight: 600 }}>Operational Status</label>
                    <div style={{ 
                      padding: "1.25rem", background: "rgba(34,197,94,0.05)", border: "1px solid rgba(34,197,94,0.15)",
                      borderRadius: "1.2rem", display: "flex", justifyContent: "space-between", alignItems: "center"
                    }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                        <Clock size={20} color="#4ade80" />
                        <div>
                          <p style={{ color: "#4ade80", fontWeight: 700, fontSize: "0.95rem" }}>Ready to Open</p>
                          <p style={{ color: "#7c6c56", fontSize: "0.8rem" }}>Toggle this anytime from dashboard</p>
                        </div>
                      </div>
                      <div style={{ 
                        width: "44px", height: "24px", background: "#f97316", 
                        borderRadius: "99px", padding: "2px", position: "relative"
                      }}>
                        <div style={{ width: "20px", height: "20px", background: "#080604", borderRadius: "50%", position: "absolute", right: "2px" }} />
                      </div>
                    </div>
                  </div>

                  <div style={{ 
                    padding: "1.25rem", background: "rgba(255, 255, 255, 0.03)", 
                    borderRadius: "1.2rem", display: "flex", gap: "0.75rem"
                  }}>
                    <Info size={20} color="#fb923c" style={{ flexShrink: 0 }} />
                    <p style={{ fontSize: "0.85rem", color: "#7c6c56", lineHeight: 1.5 }}>
                      By listing your stall, you agree to show real-time availability and maintain high quality food standards.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div style={{ display: "flex", gap: "1rem", marginTop: "3rem" }}>
              {step > 1 && (
                <button 
                  type="button"
                  onClick={prevStep}
                  style={{
                    flex: 1, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
                    color: "#fef3c7", padding: "1.1rem", borderRadius: "1.2rem", fontWeight: 700, cursor: "pointer",
                    display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem"
                  }}
                >
                  <ArrowLeft size={18} /> Back
                </button>
              )}
              
              <button 
                type="button"
                onClick={step === totalSteps ? () => {} : nextStep}
                style={{
                  flex: 2, background: "#f97316", color: "#080604", 
                  padding: "1.1rem", borderRadius: "1.2rem", border: "none",
                  fontWeight: 800, fontSize: "1rem", cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem",
                  boxShadow: "0 10px 30px rgba(249,115,22,0.2)"
                }}
              >
                {step === totalSteps ? "Finish Registration" : "Continue"} 
                {step === totalSteps ? <CheckCircle2 size={20} /> : <ArrowRight size={20} />}
              </button>
            </div>
          </form>

          {/* Decorative icons */}
          <div style={{ position: "absolute", top: "-2rem", right: "-2rem", opacity: 0.1 }}>
            <UtensilsCrossed size={120} color="#f97316" />
          </div>
        </motion.div>
      </div>

      <div style={{ textAlign: "center", paddingBottom: "4rem", color: "#4a3f33" }}>
        <p style={{ fontSize: "0.9rem" }}>Need help? <Link href="#" style={{ color: "#fb923c" }}>Contact Support</Link></p>
      </div>
    </PageWrapper>
  );
}
