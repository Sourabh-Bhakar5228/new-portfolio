import React from "react";
import { FiAward, FiBookOpen, FiGlobe, FiCheck } from "react-icons/fi";

const EducationSection = () => {
  return (
    <section className="section-wrapper" id="education" style={{ background: "rgba(15, 23, 42, 0.3)" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <div className="section-tag">Credentials & Global Reach</div>
          <h2 className="section-title">
            Education & <span className="text-gradient">Relocation</span>
          </h2>
          <p className="section-subtitle">
            Solid foundations in computer science and full-stack software development, combined with an international mindset.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "28px",
          }}
        >
          {/* Card 1: BSc */}
          <div className="glass-panel" style={{ padding: "30px" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                background: "rgba(56, 189, 248, 0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#38bdf8",
                fontSize: "1.4rem",
                marginBottom: "20px",
              }}
            >
              <FiBookOpen />
            </div>
            <div style={{ fontSize: "0.85rem", color: "#38bdf8", fontFamily: "var(--font-mono)", marginBottom: "6px" }}>
              2021 – 2024
            </div>
            <h3 style={{ fontSize: "1.35rem", fontWeight: "700", marginBottom: "8px" }}>
              Bachelor of Science
            </h3>
            <div style={{ color: "#94a3b8", fontSize: "1rem", marginBottom: "14px", fontWeight: "500" }}>
              Choudhary Bansilal College, Loharu
            </div>
            <p style={{ color: "#64748b", fontSize: "0.9rem", lineHeight: "1.6" }}>
              Comprehensive undergraduate studies developing mathematical modeling, analytical reasoning, logic building, and computer scientific problem solving.
            </p>
          </div>

          {/* Card 2: MERN Stack Diploma */}
          <div className="glass-panel" style={{ padding: "30px" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                background: "rgba(168, 85, 247, 0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#a855f7",
                fontSize: "1.4rem",
                marginBottom: "20px",
              }}
            >
              <FiAward />
            </div>
            <div style={{ fontSize: "0.85rem", color: "#a855f7", fontFamily: "var(--font-mono)", marginBottom: "6px" }}>
              2023 – 2024
            </div>
            <h3 style={{ fontSize: "1.35rem", fontWeight: "700", marginBottom: "8px" }}>
              MERN Stack Diploma
            </h3>
            <div style={{ color: "#94a3b8", fontSize: "1rem", marginBottom: "14px", fontWeight: "500" }}>
              DUCAT, Gurgaon
            </div>
            <p style={{ color: "#64748b", fontSize: "0.9rem", lineHeight: "1.6" }}>
              Rigorous hands-on specialization covering React, Node.js, Express, MongoDB, RESTful architectures, authentication, performance tuning, and production workflows.
            </p>
          </div>

          {/* Card 3: International Mobility */}
          <div
            className="glass-panel"
            style={{
              padding: "30px",
              border: "1px solid rgba(16, 185, 129, 0.3)",
              background: "linear-gradient(145deg, rgba(16, 185, 129, 0.05) 0%, rgba(15, 23, 42, 0.85) 100%)",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                background: "rgba(16, 185, 129, 0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#10b981",
                fontSize: "1.4rem",
                marginBottom: "20px",
              }}
            >
              <FiGlobe />
            </div>
            <div style={{ fontSize: "0.85rem", color: "#34d399", fontFamily: "var(--font-mono)", marginBottom: "6px" }}>
              GLOBAL CAREER
            </div>
            <h3 style={{ fontSize: "1.35rem", fontWeight: "700", marginBottom: "8px" }}>
              International Mobility
            </h3>
            <div style={{ color: "#94a3b8", fontSize: "1rem", marginBottom: "14px", fontWeight: "500" }}>
              Open to Relocation & Remote
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
              <li style={{ display: "flex", alignItems: "center", gap: "8px", color: "#cbd5e1", fontSize: "0.88rem" }}>
                <FiCheck color="#10b981" /> Based in India • Ready for immediate global onboarding
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "8px", color: "#cbd5e1", fontSize: "0.88rem" }}>
                <FiCheck color="#10b981" /> Actively exploring roles in Germany, Europe & worldwide
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "8px", color: "#cbd5e1", fontSize: "0.88rem" }}>
                <FiCheck color="#10b981" /> Willing to work on-site, hybrid, or remote with visa sponsorship
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
