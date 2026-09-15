import React from "react";
import Tilt from "react-parallax-tilt";
import { FiMapPin, FiBriefcase, FiGlobe, FiCheckCircle } from "react-icons/fi";
import myPhoto from "../../Assets/sourabh.jpg";

const AboutSection = () => {
  const stats = [
    { number: "2+", label: "Years Experience" },
    { number: "20+", label: "Completed Projects" },
    { number: "15+", label: "Tech Stack Mastered" },
    { number: "100%", label: "Code Quality & Passion" },
  ];

  const highlights = [
    "Full-stack MERN & Next.js production web applications & admin dashboards",
    "Developed & integrated AI Legal Chatbot in Lots247 dashboard",
    "Robust REST APIs & backend services using NestJS, Node.js & FastAPI",
    "Authentication, RBAC (Role-Based Access Control) & data protection",
    "Dockerized container development, CI/CD pipelines & cloud deployment",
    "Razorpay payment gateway & automated transactional notifications",
  ];

  return (
    <section className="section-wrapper" id="about">
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <div className="section-tag">Who I Am</div>
        <h2 className="section-title">
          About <span className="text-gradient">Me</span>
        </h2>
        <p className="section-subtitle">
          Transforming complex system requirements into elegant, resilient, and ultra-fast digital solutions.
        </p>
      </div>

      <div className="about-grid">
        {/* Left Column: 3D Interactive Profile Card */}
        <div>
          <Tilt
            tiltMaxAngleX={12}
            tiltMaxAngleY={12}
            perspective={1000}
            scale={1.02}
            transitionSpeed={1200}
          >
            <div className="profile-card-3d">
              <div className="profile-img-frame">
                <img
                  src={myPhoto}
                  alt="Sourabh Bhakar"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center 12%",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: "12px",
                    left: "12px",
                    right: "12px",
                    padding: "8px 12px",
                    background: "rgba(3, 7, 18, 0.85)",
                    backdropFilter: "blur(8px)",
                    borderRadius: "10px",
                    border: "1px solid rgba(255,255,255,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span style={{ fontSize: "0.8rem", color: "#38bdf8", fontWeight: "600" }}>
                    Verified Developer
                  </span>
                  <span className="status-beacon" style={{ padding: "4px 8px", fontSize: "0.75rem" }}>
                    <span className="status-dot" /> Available for Hire
                  </span>
                </div>
              </div>

              <div className="profile-card-info">
                <h3 className="profile-name">Sourabh Bhakar</h3>
                <div className="profile-role">Full Stack Developer & AI Engineer</div>

                <div className="profile-meta-pills">
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "0.82rem",
                      color: "#94a3b8",
                      background: "rgba(255,255,255,0.06)",
                      padding: "5px 10px",
                      borderRadius: "8px",
                    }}
                  >
                    <FiMapPin color="#38bdf8" /> Gurugram, India
                  </span>

                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "0.82rem",
                      color: "#94a3b8",
                      background: "rgba(255,255,255,0.06)",
                      padding: "5px 10px",
                      borderRadius: "8px",
                    }}
                  >
                    <FiBriefcase color="#a855f7" /> 2+ Years Exp.
                  </span>

                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "0.82rem",
                      color: "#34d399",
                      background: "rgba(16, 185, 129, 0.1)",
                      border: "1px solid rgba(16, 185, 129, 0.25)",
                      padding: "5px 10px",
                      borderRadius: "8px",
                    }}
                  >
                    <FiGlobe color="#10b981" /> Open to Relocation
                  </span>
                </div>
              </div>
            </div>
          </Tilt>
        </div>

        {/* Right Column: Bio & Core Strengths */}
        <div>
          <h3 style={{ fontSize: "2rem", fontWeight: "700", marginBottom: "16px" }}>
            Engineering High-Performance Web Apps & AI Systems
          </h3>

          <p style={{ fontSize: "1.05rem", color: "#cbd5e1", lineHeight: "1.8", marginBottom: "20px" }}>
            I am a <strong>Full Stack Developer</strong> with 2+ years of hands-on experience building and shipping production-ready applications using <strong>React.js, Next.js, Node.js, TypeScript, NestJS, Python, FastAPI, and MongoDB</strong>.
          </p>

          <p style={{ fontSize: "1rem", color: "#94a3b8", lineHeight: "1.7", marginBottom: "28px" }}>
            My core strength lies in clean architecture, reusable UI design systems, bulletproof backend APIs, and end-to-end integration of cutting-edge AI technologies (such as LLMs and intelligent chatbots) into business platforms.
          </p>

          {/* Highlights Checklist */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "10px", marginBottom: "32px" }}>
            {highlights.map((item, idx) => (
              <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <FiCheckCircle color="#38bdf8" style={{ marginTop: "4px", flexShrink: 0 }} size={16} />
                <span style={{ color: "#e2e8f0", fontSize: "0.92rem", lineHeight: "1.5" }}>{item}</span>
              </div>
            ))}
          </div>

          {/* International Mobility Callout */}
          <div
            style={{
              padding: "16px 20px",
              borderRadius: "14px",
              background: "rgba(56, 189, 248, 0.08)",
              border: "1px solid rgba(56, 189, 248, 0.25)",
              display: "flex",
              alignItems: "center",
              gap: "14px",
            }}
          >
            <span style={{ fontSize: "1.8rem" }}>🌍</span>
            <div>
              <strong style={{ color: "#ffffff", fontSize: "0.95rem" }}>
                International Relocation & Global Opportunities
              </strong>
              <div style={{ fontSize: "0.85rem", color: "#94a3b8", marginTop: "2px" }}>
                Interested in software engineering roles in Germany, Europe, and globally. Open to on-site, hybrid, or remote positions.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Stats Bar */}
      <div style={{ maxWidth: "1280px", margin: "50px auto 0 auto", padding: "0 24px" }}>
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <div key={i} className="stat-box">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
