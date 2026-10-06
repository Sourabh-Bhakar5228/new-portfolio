import React, { useState, useEffect } from "react";
import {
  FiDownload,
  FiExternalLink,
  FiBriefcase,
  FiAward,
  FiGlobe,
  FiCode,
  FiMail,
  FiPhone,
  FiMapPin,
  FiCheck,
  FiLayers,
  FiCpu,
  FiTerminal,
  FiCheckCircle,
} from "react-icons/fi";
import SEO from "../UI/SEO";

const pdfFile = "/assets/sourabh-bhakar.pdf";

function ResumeNew() {
  const [activeTab, setActiveTab] = useState("preview");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ paddingTop: "110px", paddingBottom: "70px", minHeight: "100vh" }}>
      <SEO
        title="Resume & CV | Sourabh Bhakar — Full Stack Developer"
        description="Official verified resume of Sourabh Bhakar — Full Stack Developer with 2+ years of production experience in React, Next.js, Node.js, TypeScript, NestJS, and Python. Download PDF."
        keywords="Sourabh Bhakar Resume, Full Stack Developer CV, React Developer Resume, Next.js Engineer, Download Resume PDF, Software Engineer CV"
        path="/resume"
      />
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 16px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "36px" }}>
          <div className="section-tag">Curriculum Vitae • Verified</div>
          <h1 className="section-title">
            Sourabh Bhakar <span className="text-gradient">Resume</span>
          </h1>
          <p className="section-subtitle" style={{ marginBottom: "20px" }}>
            Full Stack Developer | 2+ Years Production Experience | React.js • Next.js • Node.js • TypeScript • NestJS • Python
          </p>

          {/* Quick Contact Badges */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              flexWrap: "wrap",
              color: "#94a3b8",
              fontSize: "0.9rem",
              fontFamily: "var(--font-mono)",
              marginBottom: "26px",
            }}
          >
            <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
              <FiMapPin color="#38bdf8" /> Gurugram, Haryana, India
            </span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
              <FiPhone color="#10b981" /> +91 8307802850
            </span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
              <FiMail color="#a855f7" /> bhakarsoursbh@gmail.com
            </span>
          </div>

          {/* Action Buttons */}
          <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
            <a
              href="/sourabh-bhakar.pdf"
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
          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            {/* Professional Summary */}
            <div className="glass-panel" style={{ padding: "30px" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "700", color: "#38bdf8", marginBottom: "14px" }}>
                PROFESSIONAL SUMMARY
              </h3>
              <p style={{ color: "#cbd5e1", fontSize: "1rem", lineHeight: "1.75", margin: 0 }}>
                Full Stack Developer with 2+ years of hands-on experience building and shipping production-ready applications using <strong>React.js, Next.js, Node.js, TypeScript, and MongoDB</strong>. Experienced in developing REST APIs, authentication/RBAC systems, dashboards, payment integrations, AI-powered features, and scalable web applications. Delivered production features and improved application performance by up to <strong>35%</strong> through code refactoring and optimization. Strong focus on clean architecture, performance optimization, debugging, and delivering end-to-end features.
              </p>
            </div>

            {/* Technical Skills Categorized */}
            <div className="glass-panel" style={{ padding: "30px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
                <FiCode color="#38bdf8" size={22} />
                <h3 style={{ fontSize: "1.25rem", fontWeight: "700", color: "#ffffff", margin: 0 }}>
                  TECHNICAL SKILLS
                </h3>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: "18px",
                }}
              >
                {/* Frontend */}
                <div style={{ background: "rgba(3, 7, 18, 0.6)", padding: "18px", borderRadius: "14px", border: "1px solid rgba(255, 255, 255, 0.06)" }}>
                  <div style={{ color: "#38bdf8", fontWeight: 700, fontSize: "0.95rem", marginBottom: "8px", display: "flex", alignItems: "center", gap: "6px" }}>
                    <FiLayers /> Frontend
                  </div>
                  <p style={{ color: "#cbd5e1", fontSize: "0.88rem", lineHeight: "1.6", margin: 0 }}>
                    HTML5, CSS3, JavaScript (ES6+), TypeScript, React.js, Next.js, Tailwind CSS, Material UI, Responsive Design, UI/UX Development
                  </p>
                </div>

                {/* Backend */}
                <div style={{ background: "rgba(3, 7, 18, 0.6)", padding: "18px", borderRadius: "14px", border: "1px solid rgba(255, 255, 255, 0.06)" }}>
                  <div style={{ color: "#818cf8", fontWeight: 700, fontSize: "0.95rem", marginBottom: "8px", display: "flex", alignItems: "center", gap: "6px" }}>
                    <FiTerminal /> Backend
                  </div>
                  <p style={{ color: "#cbd5e1", fontSize: "0.88rem", lineHeight: "1.6", margin: 0 }}>
                    Node.js, Express.js, NestJS, Python (FastAPI), REST APIs, WebSockets, MongoDB, PostgreSQL, Firebase
                  </p>
                </div>

                {/* AI & Integrations */}
                <div style={{ background: "rgba(3, 7, 18, 0.6)", padding: "18px", borderRadius: "14px", border: "1px solid rgba(255, 255, 255, 0.06)" }}>
                  <div style={{ color: "#a855f7", fontWeight: 700, fontSize: "0.95rem", marginBottom: "8px", display: "flex", alignItems: "center", gap: "6px" }}>
                    <FiCpu /> AI & Integrations
                  </div>
                  <p style={{ color: "#cbd5e1", fontSize: "0.88rem", lineHeight: "1.6", margin: 0 }}>
                    AI Chatbot Development, Gemini API, AI/LLM Integration, Third-Party API Integration, Payment Gateway Integration
                  </p>
                </div>

                {/* Tools & Platforms */}
                <div style={{ background: "rgba(3, 7, 18, 0.6)", padding: "18px", borderRadius: "14px", border: "1px solid rgba(255, 255, 255, 0.06)" }}>
                  <div style={{ color: "#f59e0b", fontWeight: 700, fontSize: "0.95rem", marginBottom: "8px", display: "flex", alignItems: "center", gap: "6px" }}>
                    <FiCheckCircle /> Tools & Platforms
                  </div>
                  <p style={{ color: "#cbd5e1", fontSize: "0.88rem", lineHeight: "1.6", margin: 0 }}>
                    Git, GitHub, GitLab, Docker, npm, Postman, Agenda.js, Nodemailer, VS Code, CI/CD, Playwright
                  </p>
                </div>

                {/* Core Competencies / Other */}
                <div style={{ background: "rgba(3, 7, 18, 0.6)", padding: "18px", borderRadius: "14px", border: "1px solid rgba(255, 255, 255, 0.06)", gridColumn: "1 / -1" }}>
                  <div style={{ color: "#10b981", fontWeight: 700, fontSize: "0.95rem", marginBottom: "8px", display: "flex", alignItems: "center", gap: "6px" }}>
                    <FiCheck /> Core Engineering Competencies
                  </div>
                  <p style={{ color: "#cbd5e1", fontSize: "0.88rem", lineHeight: "1.6", margin: 0 }}>
                    JWT Authentication, RBAC, API Development, Database Management, Bug Fixing, Performance Optimization, Agile Methodology, SEO Optimization
                  </p>
                </div>
              </div>
            </div>

            {/* Professional Experience */}
            <div className="glass-panel" style={{ padding: "30px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "24px" }}>
                <FiBriefcase color="#38bdf8" size={22} />
                <h3 style={{ fontSize: "1.25rem", fontWeight: "700", color: "#ffffff", margin: 0 }}>
                  PROFESSIONAL EXPERIENCE
                </h3>
              </div>

              {/* Lawyered */}
              <div style={{ marginBottom: "32px", paddingBottom: "24px", borderBottom: "1px solid rgba(255, 255, 255, 0.08)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", marginBottom: "6px" }}>
                  <div>
                    <h4 style={{ fontSize: "1.15rem", fontWeight: "700", color: "#ffffff", margin: 0 }}>
                      MERN Stack Developer
                    </h4>
                    <div style={{ color: "#38bdf8", fontWeight: "600", fontSize: "0.95rem" }}>
                      Lawyered, Gurugram
                    </div>
                  </div>
                  <div style={{ fontFamily: "var(--font-mono)", color: "#94a3b8", fontSize: "0.88rem" }}>
                    Jan 2026 – Present
                  </div>
                </div>
                <ul className="timeline-bullets" style={{ marginTop: "14px" }}>
                  <li>Develop and maintain production web applications and admin dashboards using React.js, Next.js, TypeScript, Node.js, Express.js, NestJS, MongoDB, MySQL, and PostgreSQL.</li>
                  <li>Developed and integrated an AI-powered legal chatbot into the Lots247 dashboard, reducing manual legal query handling by <strong>40%</strong> and improving the product experience.</li>
                  <li>Designed and developed backend REST APIs using NestJS and Node.js , implementing application business logic and integrating APIs with frontend modules, cutting API response time by <strong>25%</strong>.</li>
                  <li>Worked extensively on product UI/UX, designing and implementing <strong>15+</strong> new interfaces, layouts, reusable components, and UI improvements across web applications and dashboards.</li>
                  <li>Developed and enhanced dashboard features, data flows, authentication modules, and role-based access control (RBAC) functionality, improving access security and reducing unauthorized access incidents to <strong>zero</strong>.</li>
                  <li>Identified and resolved <strong>50+</strong> frontend and backend bugs, debugging application issues and improving overall product stability, reliability, and user experience by <strong>30%</strong>.</li>
                  <li>Integrated third-party services and APIs while maintaining scalable and maintainable application architecture, reducing integration time by <strong>20%</strong>.</li>
                  <li>Used Docker for application and development environments and collaborated with cross-functional teams to deliver features, UI updates, and product improvements.</li>
                </ul>
              </div>

              {/* Jaikvik */}
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", marginBottom: "6px" }}>
                  <div>
                    <h4 style={{ fontSize: "1.15rem", fontWeight: "700", color: "#ffffff", margin: 0 }}>
                      MERN & Next.js Developer
                    </h4>
                    <div style={{ color: "#38bdf8", fontWeight: "600", fontSize: "0.95rem" }}>
                      Jaikvik Technology, Noida
                    </div>
                  </div>
                  <div style={{ fontFamily: "var(--font-mono)", color: "#94a3b8", fontSize: "0.88rem" }}>
                    Oct 2024 – Nov 2025
                  </div>
                </div>
                <ul className="timeline-bullets" style={{ marginTop: "14px" }}>
                  <li>Developed scalable web applications using the MERN stack and Next.js with TypeScript and modern UI libraries, improving page load speed by <strong>35%</strong>.</li>
                  <li>Built responsive dashboards and web interfaces with secure authentication and third-party API integrations, serving <strong>2,000+</strong> concurrent users.</li>
                  <li>Developed and integrated REST APIs and implemented frontend-backend data flows for application features, reducing data fetch latency by <strong>30%</strong>.</li>
                  <li>Improved application performance by refactoring code and adopting reusable components and modular architecture, decreasing code duplication by <strong>40%</strong>.</li>
                  <li>Debugged and resolved <strong>40+</strong> application issues across frontend and backend, improving reliability and maintainability.</li>
                  <li>Collaborated with cross-functional teams in an Agile environment to deliver new features and product enhancements, shipping <strong>20+</strong> features on schedule.</li>
                </ul>
              </div>
            </div>

            {/* Featured Projects */}
            <div className="glass-panel" style={{ padding: "30px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "22px" }}>
                <FiCode color="#a855f7" size={22} />
                <h3 style={{ fontSize: "1.25rem", fontWeight: "700", color: "#ffffff", margin: 0 }}>
                  KEY PROJECTS
                </h3>
              </div>

              {/* Golu AI — Best Project */}
              <div style={{ marginBottom: "28px", paddingBottom: "22px", borderBottom: "1px solid rgba(255, 255, 255, 0.08)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", marginBottom: "4px" }}>
                  <h4 style={{ fontSize: "1.15rem", fontWeight: "700", color: "#ffffff", margin: 0 }}>
                    Golu AI — AI Interviewer & Company Interview Simulator
                  </h4>
                  <span style={{ fontFamily: "var(--font-mono)", color: "#38bdf8", fontSize: "0.85rem" }}>
                    2026 – Present • Flagship
                  </span>
                </div>
                <div style={{ color: "#a855f7", fontSize: "0.85rem", fontFamily: "var(--font-mono)", margin: "4px 0 10px 0" }}>
                  Next.js, TypeScript, NestJS, MongoDB Atlas, Redis, BullMQ, WebRTC, STT/TTS, Tailwind CSS
                </div>
                <ul className="timeline-bullets">
                  <li>AI-powered web-based interview platform conducting adaptive, face-to-face mock interviews using candidate resumes, JDs, and verified public company information.</li>
                  <li>Engineered an adaptive interview state machine with Redis and BullMQ async worker queues for dynamic follow-up questioning and latency-free rubric evaluation.</li>
                  <li>Features live browser video/audio interviewer avatar, real-time code editor with test execution, and production scenario simulations (API failures, database latency, caching bottlenecks).</li>
                </ul>
              </div>

              {/* Lots247 */}
              <div style={{ marginBottom: "28px", paddingBottom: "22px", borderBottom: "1px solid rgba(255, 255, 255, 0.08)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", marginBottom: "4px" }}>
                  <h4 style={{ fontSize: "1.15rem", fontWeight: "700", color: "#ffffff", margin: 0 }}>
                    AI Legal Chatbot — Lots247
                  </h4>
                  <span style={{ fontFamily: "var(--font-mono)", color: "#94a3b8", fontSize: "0.85rem" }}>
                    2026 – Present
                  </span>
                </div>
                <div style={{ color: "#38bdf8", fontSize: "0.85rem", fontFamily: "var(--font-mono)", margin: "4px 0 10px 0" }}>
                  Next.js, TypeScript, Node.js, NestJS, Python, REST APIs, AI/LLM APIs
                </div>
                <ul className="timeline-bullets">
                  <li>Developed and integrated an AI-powered legal chatbot into the Lots247 dashboard for legal AI use cases.</li>
                  <li>Built chatbot-related frontend interfaces and integrated them with backend services and APIs.</li>
                  <li>Developed and maintained backend APIs using NestJS and Node.js, Python to support chatbot and product functionality.</li>
                  <li>Worked on chatbot UI/UX, dashboard integration, conversation workflows, and overall product experience, improving user engagement by <strong>25%</strong>.</li>
                  <li>Debugged and resolved frontend and backend issues while improving chatbot reliability and application usability.</li>
                  <li>Integrated AI capabilities into the existing product architecture while maintaining scalable and maintainable code.</li>
                </ul>
              </div>

              {/* HyGlam */}
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", marginBottom: "4px" }}>
                  <h4 style={{ fontSize: "1.15rem", fontWeight: "700", color: "#ffffff", margin: 0 }}>
                    HyGlam — Beauty Services Platform
                  </h4>
                  <span style={{ fontFamily: "var(--font-mono)", color: "#94a3b8", fontSize: "0.85rem" }}>
                    2025 – Present • Live: hyglamofficial.com
                  </span>
                </div>
                <div style={{ color: "#38bdf8", fontSize: "0.85rem", fontFamily: "var(--font-mono)", margin: "4px 0 10px 0" }}>
                  React.js, Node.js, FastAPI, Python, MongoDB, Tailwind CSS, Razorpay
                </div>
                <ul className="timeline-bullets">
                  <li>Built and deployed a production-ready beauty services platform using React.js and Node.js.</li>
                  <li>Implemented secure authentication and role-based access control (RBAC) for customers and super admins.</li>
                  <li>Developed end-to-end appointment booking workflows with salon and customer management features, processing <strong>200+</strong> bookings per month.</li>
                  <li>Integrated Razorpay payment gateway and automated email notifications for platform transactions and bookings, achieving <strong>99%</strong> transaction success rate.</li>
                </ul>
              </div>
            </div>

            {/* Education & Certifications */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
              <div className="glass-panel" style={{ padding: "26px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                  <FiAward color="#10b981" size={20} />
                  <h3 style={{ fontSize: "1.15rem", fontWeight: "700", color: "#ffffff", margin: 0 }}>
                    EDUCATION & CERTIFICATIONS
                  </h3>
                </div>
                <div style={{ marginBottom: "16px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
                    <strong style={{ color: "#ffffff" }}>Bachelor of Science</strong>
                    <span style={{ fontFamily: "var(--font-mono)", color: "#94a3b8", fontSize: "0.85rem" }}>2021 – 2024</span>
                  </div>
                  <div style={{ color: "#94a3b8", fontSize: "0.88rem" }}>Choudhary Bansilal College, Loharu</div>
                </div>
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
                    <strong style={{ color: "#ffffff" }}>MERN Stack Diploma</strong>
                    <span style={{ fontFamily: "var(--font-mono)", color: "#94a3b8", fontSize: "0.85rem" }}>2023 – 2024</span>
                  </div>
                  <div style={{ color: "#94a3b8", fontSize: "0.88rem" }}>DUCAT, Gurgaon</div>
                </div>
              </div>

              <div className="glass-panel" style={{ padding: "26px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                  <FiGlobe color="#38bdf8" size={20} />
                  <h3 style={{ fontSize: "1.15rem", fontWeight: "700", color: "#ffffff", margin: 0 }}>
                    GLOBAL AVAILABILITY & MOBILITY
                  </h3>
                </div>
                <p style={{ color: "#cbd5e1", fontSize: "0.88rem", lineHeight: "1.65", margin: 0 }}>
                  Based in Gurugram, India and actively open to relocation for full-time international software engineering roles. Interested in Germany, Europe, and global engineering hubs. Available for on-site, hybrid, or remote positions with visa sponsorship.
                </p>
              </div>
            </div>
          </div>
        ) : (
          /* Tab 2: Embedded Iframe PDF Viewer */
          <div className="glass-panel" style={{ padding: "16px", borderRadius: "16px" }}>
            <iframe
              src="/sourabh-bhakar.pdf"
              title="Sourabh Bhakar Resume PDF"
              width="100%"
              height="950px"
              style={{ border: "none", borderRadius: "12px", background: "#ffffff" }}
            />
          </div>
        )}

        {/* Bottom CTA */}
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <a
            href="/sourabh-bhakar.pdf"
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
