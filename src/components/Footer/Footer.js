import React from "react";
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-wrap">
      <div className="footer-content">
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
            <div className="brand-logo-badge" style={{ width: "32px", height: "32px", fontSize: "0.9rem" }}>
              SB
            </div>
            <strong style={{ color: "#ffffff", fontSize: "1.1rem" }}>Sourabh Bhakar</strong>
          </div>
          <div style={{ fontSize: "0.85rem", color: "#94a3b8" }}>
            Full Stack Developer • AI Solutions • Open to International Relocation
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <a
            href="https://github.com/Sourabh-Bhakar5228"
            target="_blank"
            rel="noreferrer"
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "10px",
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#94a3b8",
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
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#38bdf8",
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
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#a855f7",
            }}
            title="Email"
          >
            <FiMail size={18} />
          </a>

          <button
            onClick={scrollToTop}
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "10px",
              background: "rgba(56, 189, 248, 0.12)",
              border: "1px solid rgba(56, 189, 248, 0.35)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#38bdf8",
              cursor: "pointer",
              marginLeft: "10px",
            }}
            title="Back to Top"
          >
            <FiArrowUp size={18} />
          </button>
        </div>
      </div>

      <div
        style={{
          textAlign: "center",
          marginTop: "20px",
          paddingTop: "20px",
          borderTop: "1px solid rgba(255, 255, 255, 0.05)",
          color: "#64748b",
          fontSize: "0.82rem",
        }}
      >
        © {new Date().getFullYear()} Sourabh Bhakar. Engineered with React, Three.js & Tailwind CSS.
      </div>
    </footer>
  );
};

export default Footer;
