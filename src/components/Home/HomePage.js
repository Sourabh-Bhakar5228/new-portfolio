import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Hero from "./Hero";
import { FiArrowRight, FiUser, FiBriefcase, FiLayers } from "react-icons/fi";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { number: "2+", label: "Years Experience" },
    { number: "20+", label: "Completed Projects" },
    { number: "15+", label: "Tech Stack Mastered" },
    { number: "100%", label: "Code Quality & Passion" },
  ];

  return (
    <div>
      {/* 3D Hero Section */}
      <Hero />

      {/* Clean Quick Stats Bar */}
      <div style={{ maxWidth: "1280px", margin: "0 auto 60px auto", padding: "0 24px" }}>
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <div key={i} className="stat-box">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 3 Interactive Exploration Gateways */}
      <div style={{ maxWidth: "1280px", margin: "0 auto 100px auto", padding: "0 24px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          {/* Card 1: About & Skills */}
          <Link to="/about" className="glass-panel" style={{ padding: "32px", display: "flex", flexDirection: "column", textDecoration: "none" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "14px",
                background: "rgba(56, 189, 248, 0.12)",
                color: "#38bdf8",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.3rem",
                marginBottom: "20px",
              }}
            >
              <FiUser />
            </div>
            <h3 style={{ fontSize: "1.4rem", fontWeight: "700", color: "#ffffff", marginBottom: "10px" }}>
              About & Skills
            </h3>
            <p style={{ color: "#94a3b8", fontSize: "0.95rem", lineHeight: "1.6", flexGrow: 1 }}>
              Full profile, background, technical capabilities in MERN, Next.js, Python, FastAPI, and verified developer details.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#38bdf8", fontWeight: "600", marginTop: "16px" }}>
              <span>View Profile & Skills</span>
              <FiArrowRight />
            </div>
          </Link>

          {/* Card 2: Experience */}
          <Link to="/experience" className="glass-panel" style={{ padding: "32px", display: "flex", flexDirection: "column", textDecoration: "none" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "14px",
                background: "rgba(168, 85, 247, 0.12)",
                color: "#a855f7",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.3rem",
                marginBottom: "20px",
              }}
            >
              <FiBriefcase />
            </div>
            <h3 style={{ fontSize: "1.4rem", fontWeight: "700", color: "#ffffff", marginBottom: "10px" }}>
              Career Experience
            </h3>
            <p style={{ color: "#94a3b8", fontSize: "0.95rem", lineHeight: "1.6", flexGrow: 1 }}>
              Production tenure at Lawyered (Lots247 AI Legal Chatbot, NestJS APIs) and Jaikvik Technology.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#a855f7", fontWeight: "600", marginTop: "16px" }}>
              <span>View Career Timeline</span>
              <FiArrowRight />
            </div>
          </Link>

          {/* Card 3: GitHub & Projects */}
          <Link to="/projects" className="glass-panel" style={{ padding: "32px", display: "flex", flexDirection: "column", textDecoration: "none" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "14px",
                background: "rgba(16, 185, 129, 0.12)",
                color: "#10b981",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.3rem",
                marginBottom: "20px",
              }}
            >
              <FiLayers />
            </div>
            <h3 style={{ fontSize: "1.4rem", fontWeight: "700", color: "#ffffff", marginBottom: "10px" }}>
              Projects & Repos
            </h3>
            <p style={{ color: "#94a3b8", fontSize: "0.95rem", lineHeight: "1.6", flexGrow: 1 }}>
              Flagship products (Lots247 AI Chatbot, HyGlam platform) and live public repositories fetched via GitHub API.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#10b981", fontWeight: "600", marginTop: "16px" }}>
              <span>Explore Projects</span>
              <FiArrowRight />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
