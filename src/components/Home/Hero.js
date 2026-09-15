import React from "react";
import { useNavigate } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { FiArrowRight, FiDownload, FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import Hero3DScene from "../Three/Hero3DScene";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero-wrapper" id="home">
      <div className="hero-grid">
        {/* Left Column: Text & CTAs */}
        <div className="hero-content">
          <div className="hero-greet-badge">
            <span role="img" aria-label="wave" style={{ fontSize: "1.2rem" }}>
              👋
            </span>
            <span>Hi, I'm <strong style={{ color: "#ffffff" }}>Sourabh Bhakar</strong></span>
          </div>

          <h1 className="hero-main-title">
            FULL STACK <br />
            <span className="text-gradient">DEVELOPER</span>
          </h1>

          <div className="hero-subtitle-pills">
            {["MERN", "Next.js", "TypeScript", "Python", "FastAPI", "AI / LLM"].map((tech) => (
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
                  "Full Stack MERN & Next.js Engineer",
                  "AI Legal Chatbot Developer ",
                  "Backend Architect: NestJS, Python, FastAPI",
                  "Building Scalable Cloud & Docker Solutions",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 30,
                delay: 50,
              }}
            />
          </div>

          <p className="hero-description">
            I build scalable, high-performance web applications, APIs, and AI-powered products with modern technologies. 2+ years of production experience shipping mission-critical systems and dashboards.
          </p>

          <div className="hero-cta-buttons">
            <button
              onClick={() => navigate("/projects")}
              className="btn-neon-primary"
            >
              <span>View Projects</span>
              <FiArrowRight />
            </button>

            <a
              href="/bhakar-ai.pdf"
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
              <span>Contact Me</span>
            </button>
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
