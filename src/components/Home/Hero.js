import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiDownload, FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import Hero3DScene from "../Three/Hero3DScene";

const roles = [
  { line1: "FULL STACK", line2: "DEVELOPER" },
  { line1: "SOFTWARE", line2: "ENGINEER" },
  { line1: "AI & LLM", line2: "DEVELOPER" },
  { line1: "FORWARD DEPLOYED", line2: "ENGINEER" },
];

const Hero = () => {
  const navigate = useNavigate();
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-wrapper" id="home">
      <div className="hero-grid">
        {/* Left Column: Text & CTAs */}
        <div className="hero-content">
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px", marginBottom: "18px" }}>
            <div className="hero-greet-badge" style={{ marginBottom: 0 }}>
              <span role="img" aria-label="wave" style={{ fontSize: "1.2rem" }}>
                👋
              </span>
              <span>Hi, I'm <strong style={{ color: "#ffffff" }}>Sourabh Bhakar</strong></span>
            </div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 14px",
                background: "rgba(16, 185, 129, 0.12)",
                border: "1px solid rgba(16, 185, 129, 0.35)",
                borderRadius: "9999px",
                color: "#34d399",
                fontSize: "0.85rem",
                fontWeight: "600",
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#10b981",
                  boxShadow: "0 0 10px #10b981",
                }}
              />
              <span>Available for Immediate Hire</span>
            </div>
          </div>

          {/* Animated Kinetic Main Headline */}
          <h1
            className="hero-main-title"
            style={{
              minHeight: "clamp(100px, 13vw, 155px)",
              display: "flex",
              alignItems: "center",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={roleIndex}
                initial={{ opacity: 0, y: 22, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -22, filter: "blur(6px)" }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                style={{ width: "100%" }}
              >
                <span>{roles[roleIndex].line1}</span>
                <br />
                <span className="text-gradient">{roles[roleIndex].line2}</span>
              </motion.div>
            </AnimatePresence>
          </h1>

          <div className="hero-subtitle-pills">
            {["MERN", "Next.js 14", "TypeScript", "NestJS", "FastAPI", "AI / LLM Systems"].map((tech) => (
              <span key={tech} className="tech-tag-pill">
                {tech}
              </span>
            ))}
          </div>

          <div className="hero-typewriter-box">
            <span style={{ color: "#94a3b8", marginRight: "8px" }}>&gt;</span>
            <Typewriter
              options={{
                strings: [
                  "Full Stack MERN & Next.js 14 Engineer",
                  "AI Systems & LLM Platform Developer",
                  "Forward Deployed Engineer Shipping Scalable Tech",
                  "Creator of Golu AI Interview Simulator & Lots247",
                  "35% Latency Reduction & 2,000+ Users Scaled",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 25,
                delay: 45,
              }}
            />
          </div>

          <p className="hero-description">
            Software Developer specializing in high-throughput web applications, scalable microservices, and production AI platforms. Proven track record architecting enterprise solutions (Lots247 AI Legal Chatbot & Golu AI) with <strong style={{ color: "#38bdf8" }}>35% latency optimization</strong> and serving <strong style={{ color: "#34d399" }}>2,000+ users</strong>.
          </p>

          <div className="hero-cta-buttons">
            <button
              onClick={() => navigate("/projects")}
              className="btn-neon-primary"
            >
              <span>Explore Projects</span>
              <FiArrowRight />
            </button>

            <a
              href="/sourabh-bhakar.pdf"
              download="Sourabh_Bhakar_Resume.pdf"
              className="btn-neon-secondary"
            >
              <FiDownload />
              <span>Download Resume</span>
            </a>

            <button
              onClick={() => navigate("/contact")}
              className="btn-neon-outline"
            >
              <FiMail />
              <span>Hire Me</span>
            </button>
          </div>

          {/* Recruiter Trust Signals */}
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              fontSize: "0.82rem",
              color: "#94a3b8",
            }}
          >
            <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
              ⚡ <strong style={{ color: "#e2e8f0" }}>Immediate Joiner</strong>
            </span>
            <span style={{ color: "#475569" }}>•</span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
              💼 <strong style={{ color: "#e2e8f0" }}>2+ Years Production</strong>
            </span>
            <span style={{ color: "#475569" }}>•</span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
              🌐 <strong style={{ color: "#e2e8f0" }}>Remote / Hybrid / On-site</strong>
            </span>
          </div>

          {/* Social Quick Links */}
          <div style={{ marginTop: "32px", display: "flex", alignItems: "center", gap: "16px" }}>
            <span style={{ fontSize: "0.85rem", color: "#64748b", fontFamily: "var(--font-mono)" }}>
              FIND ME ON:
            </span>
            <a
              href="https://github.com/Sourabh-Bhakar5228"
              target="_blank"
              rel="noreferrer"
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "10px",
                background: "rgba(255,255,255,0.06)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#94a3b8",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
              title="GitHub"
            >
              <FiGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/sourabh-bhakar/"
              target="_blank"
              rel="noreferrer"
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "10px",
                background: "rgba(255,255,255,0.06)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#38bdf8",
                border: "1px solid rgba(56,189,248,0.2)",
              }}
              title="LinkedIn"
            >
              <FiLinkedin size={18} />
            </a>
            <a
              href="mailto:bhakarsoursbh@gmail.com"
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "10px",
                background: "rgba(255,255,255,0.06)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#a855f7",
                border: "1px solid rgba(168,85,247,0.2)",
              }}
              title="Email Sourabh"
            >
              <FiMail size={18} />
            </a>
          </div>
        </div>

        {/* Right Column: 3D Interactive WebGL Scene */}
        <Hero3DScene />
      </div>
    </section>
  );
};

export default Hero;
