import React, { useState, useEffect } from "react";
import { FiDownload, FiExternalLink, FiBriefcase, FiAward, FiGlobe, FiCode } from "react-icons/fi";
import pdfFile from "../../Assets/bhakar-ai.pdf";

function ResumeNew() {
  const [activeTab, setActiveTab] = useState("preview");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ paddingTop: "120px", paddingBottom: "80px", minHeight: "100vh" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <div className="section-tag">Curriculum Vitae</div>
          <h1 className="section-title">
            Sourabh Bhakar <span className="text-gradient">Resume</span>
          </h1>
          <p className="section-subtitle" style={{ marginBottom: "24px" }}>
            Full Stack Developer | 2+ Years Experience | MERN • Next.js • Python • FastAPI • AI/LLM
          </p>

          {/* Action Buttons */}
          <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
            <a
              href="/bhakar-ai.pdf"
              download="Sourabh_Bhakar_Resume.pdf"
              className="btn-neon-primary"
            >
              <FiDownload />
              <span>Download Resume (PDF)</span>
            </a>

            <a
              href={pdfFile}
              target="_blank"
              rel="noreferrer"
              className="btn-neon-secondary"
            >
              <FiExternalLink />
              <span>Open PDF in New Tab</span>
            </a>
          </div>

          {/* Toggle Tabs */}
          <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "30px" }}>
            <button
              onClick={() => setActiveTab("preview")}
              className={`skill-tab-btn ${activeTab === "preview" ? "active" : ""}`}
            >
              Structured Interactive View
            </button>
            <button
              onClick={() => setActiveTab("pdf")}
              className={`skill-tab-btn ${activeTab === "pdf" ? "active" : ""}`}
            >
              Embedded PDF Document
            </button>
          </div>
        </div>

        {/* Tab 1: Interactive Structured Resume */}
        {activeTab === "preview" ? (
          <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
            {/* Summary */}
            <div className="glass-panel" style={{ padding: "30px" }}>
              <h3 style={{ fontSize: "1.3rem", fontWeight: "700", color: "#38bdf8", marginBottom: "12px" }}>
                PROFESSIONAL SUMMARY
              </h3>
              <p style={{ color: "#cbd5e1", fontSize: "1rem", lineHeight: "1.7", margin: 0 }}>
                Full Stack Developer with 2+ years of hands-on experience building and shipping production web applications using <strong>React.js, Next.js, Node.js, TypeScript, NestJS, MongoDB, PostgreSQL, and MySQL</strong>. Experienced in end-to-end feature development, REST APIs, authentication and RBAC, dashboards, payment integrations, AI/LLM-powered features, third-party integrations and Docker-based development. Strong focus on clean architecture, reusable components, debugging, performance and reliable product delivery. Open to relocation and international opportunities.
              </p>
            </div>

            {/* Experience */}
            <div className="glass-panel" style={{ padding: "30px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
                <FiBriefcase color="#38bdf8" size={22} />
                <h3 style={{ fontSize: "1.3rem", fontWeight: "700", color: "#ffffff", margin: 0 }}>
                  PROFESSIONAL EXPERIENCE
                </h3>
              </div>

              {/* Lawyered */}
              <div style={{ marginBottom: "28px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", marginBottom: "6px" }}>
                  <div>
                    <h4 style={{ fontSize: "1.15rem", fontWeight: "700", color: "#ffffff", margin: 0 }}>
                      MERN Stack Developer
                    </h4>
                    <div style={{ color: "#38bdf8", fontWeight: "600" }}>Lawyered, Gurugram</div>
                  </div>
                  <div style={{ fontFamily: "var(--font-mono)", color: "#94a3b8", fontSize: "0.88rem" }}>
                    Jan 2026 – Present
                  </div>
                </div>
                <ul className="timeline-bullets" style={{ marginTop: "12px" }}>
                  <li>Develop and maintain production web applications and admin dashboards using React.js, Next.js, TypeScript, Node.js, Express.js, NestJS, MongoDB, MySQL and PostgreSQL.</li>
                  <li>Developed and integrated an AI-powered legal chatbot into the Lots247 dashboard, connecting frontend workflows with backend services and AI/LLM capabilities.</li>
                  <li>Designed and developed REST APIs with NestJS and Node.js, implementing business logic and frontend-backend data flows.</li>
                  <li>Built reusable UI components, dashboards, layouts and product interfaces while improving usability and UI/UX consistency.</li>
                  <li>Implemented authentication, data flows and role-based access control (RBAC) across application modules.</li>
                  <li>Diagnosed and fixed frontend/backend issues, improving application stability, reliability and maintainability.</li>
                  <li>Integrated third-party APIs and services and used Docker for application and development environments.</li>
                </ul>
              </div>

              {/* Jaikvik */}
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", marginBottom: "6px" }}>
                  <div>
                    <h4 style={{ fontSize: "1.15rem", fontWeight: "700", color: "#ffffff", margin: 0 }}>
                      MERN & Next.js Developer
                    </h4>
                    <div style={{ color: "#38bdf8", fontWeight: "600" }}>Jaikvik Technology, Noida</div>
                  </div>
                  <div style={{ fontFamily: "var(--font-mono)", color: "#94a3b8", fontSize: "0.88rem" }}>
                    Oct 2024 – Nov 2025
                  </div>
                </div>
                <ul className="timeline-bullets" style={{ marginTop: "12px" }}>
                  <li>Developed scalable web applications using MERN and Next.js with TypeScript and modern UI libraries.</li>
                  <li>Built responsive dashboards and web interfaces with authentication and third-party API integrations.</li>
                  <li>Developed REST APIs and implemented frontend-backend data flows for application features.</li>
                  <li>Improved performance and maintainability through refactoring, reusable components and modular architecture.</li>
                  <li>Debugged frontend and backend issues and collaborated with cross-functional teams in an Agile environment.</li>
                </ul>
              </div>
            </div>

            {/* Featured Projects */}
            <div className="glass-panel" style={{ padding: "30px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
                <FiCode color="#a855f7" size={22} />
                <h3 style={{ fontSize: "1.3rem", fontWeight: "700", color: "#ffffff", margin: 0 }}>
                  KEY PROJECTS
                </h3>
              </div>

              {/* Lots247 */}
              <div style={{ marginBottom: "24px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
                  <h4 style={{ fontSize: "1.1rem", fontWeight: "700", color: "#ffffff" }}>
                    AI Legal Chatbot — Lots247
                  </h4>
                  <span style={{ fontFamily: "var(--font-mono)", color: "#94a3b8", fontSize: "0.85rem" }}>
                    2026 – Present
                  </span>
                </div>
                <div style={{ color: "#38bdf8", fontSize: "0.85rem", fontFamily: "var(--font-mono)", marginBottom: "8px" }}>
                  Next.js, TypeScript, Node.js, NestJS, REST APIs, AI/LLM APIs, Docker
                </div>
                <p style={{ color: "#cbd5e1", fontSize: "0.92rem", lineHeight: "1.6" }}>
                  Integrated an AI-powered legal chatbot into a production dashboard for legal AI use cases. Built chatbot interfaces, conversation workflows and backend API integrations. Improved reliability and usability through UI/UX refinement and backend optimization.
                </p>
              </div>

              {/* HyGlam */}
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
                  <h4 style={{ fontSize: "1.1rem", fontWeight: "700", color: "#ffffff" }}>
                    HyGlam — Beauty Services Platform
                  </h4>
                  <span style={{ fontFamily: "var(--font-mono)", color: "#94a3b8", fontSize: "0.85rem" }}>
                    2025 – Present
                  </span>
                </div>
                <div style={{ color: "#38bdf8", fontSize: "0.85rem", fontFamily: "var(--font-mono)", marginBottom: "8px" }}>
                  React.js, Node.js, FastAPI, Python, MongoDB, Tailwind CSS, Razorpay (Live: hyglamofficial.com)
                </div>
                <p style={{ color: "#cbd5e1", fontSize: "0.92rem", lineHeight: "1.6" }}>
                  Built and deployed a production-ready beauty services platform. Implemented authentication and RBAC for customers and super admins and developed end-to-end appointment booking workflows. Integrated Razorpay payments and automated transactional emails.
                </p>
              </div>
            </div>

            {/* Education & International Mobility */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
              <div className="glass-panel" style={{ padding: "26px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                  <FiAward color="#10b981" size={20} />
                  <h3 style={{ fontSize: "1.15rem", fontWeight: "700", color: "#ffffff", margin: 0 }}>
                    EDUCATION
                  </h3>
                </div>
                <div style={{ marginBottom: "12px" }}>
                  <strong style={{ color: "#ffffff" }}>Bachelor of Science</strong>
                  <div style={{ color: "#94a3b8", fontSize: "0.88rem" }}>Choudhary Bansilal College (2021 – 2024)</div>
                </div>
                <div>
                  <strong style={{ color: "#ffffff" }}>MERN Stack Diploma</strong>
                  <div style={{ color: "#94a3b8", fontSize: "0.88rem" }}>DUCAT, Gurgaon (2023 – 2024)</div>
                </div>
              </div>

              <div className="glass-panel" style={{ padding: "26px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                  <FiGlobe color="#38bdf8" size={20} />
                  <h3 style={{ fontSize: "1.15rem", fontWeight: "700", color: "#ffffff", margin: 0 }}>
                    INTERNATIONAL MOBILITY
                  </h3>
                </div>
                <p style={{ color: "#cbd5e1", fontSize: "0.88rem", lineHeight: "1.6", margin: 0 }}>
                  Based in India and open to relocation for full-time international software engineering roles. Interested in Germany and global markets; willing to work on-site, hybrid, or remote with visa sponsorship.
                </p>
              </div>
            </div>
          </div>
        ) : (
          /* Tab 2: Embedded Iframe PDF Viewer */
          <div className="glass-panel" style={{ padding: "16px", borderRadius: "16px" }}>
            <iframe
              src="/bhakar-ai.pdf"
              title="Sourabh Bhakar Resume PDF"
              width="100%"
              height="900px"
              style={{ border: "none", borderRadius: "12px", background: "#ffffff" }}
            />
          </div>
        )}

        {/* Bottom CTA */}
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <a
            href="/bhakar-ai.pdf"
            download="Sourabh_Bhakar_Resume.pdf"
            className="btn-neon-primary"
          >
            <FiDownload />
            <span>Download Resume PDF</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ResumeNew;
