import React from "react";
import { FiCalendar, FiMapPin } from "react-icons/fi";

const experiences = [
  {
    role: "MERN Stack Developer",
    company: "Lawyered",
    location: "Gurugram, Haryana, India",
    period: "Jan 2026 – Oct 2026",
    type: "Full-time",
    tagline: "High-scale Legal Tech Platform & Lots247 AI Integration",
    responsibilities: [
      "Developed an AI-powered legal chatbot for the Lots247 dashboard, reducing manual legal query handling by 40%.",
      "Designed backend REST APIs with NestJS and Node.js and integrated them with frontend modules, cutting API response time by 25%.",
      "Designed and built 15+ new interfaces, layouts, and reusable components across web apps and dashboards.",
      "Built dashboard features, authentication modules, and RBAC, reducing unauthorized access incidents to zero.",
      "Resolved 50+ frontend and backend bugs, improving product stability and user experience by 30%.",
      "Integrated third-party APIs on a scalable architecture, reducing integration time by 20%; used Docker for environments.",
    ],
    tech: ["React.js", "Next.js", "TypeScript", "Node.js", "NestJS", "AI/LLM Chatbot", "PostgreSQL", "MongoDB", "Docker", "RBAC"],
  },
  {
    role: "MERN & Next.js Developer",
    company: "Jaikvik Technology",
    location: "Noida, Uttar Pradesh, India",
    period: "Oct 2024 – Nov 2025",
    type: "Full-time",
    tagline: "Enterprise Web Applications & Modular Frontend Systems",
    responsibilities: [
      "Built scalable web applications with the MERN stack, Next.js, and TypeScript, improving page load speed by 35%.",
      "Developed responsive dashboards with secure authentication and third-party API integrations, serving 2,000+ concurrent users.",
      "Built REST APIs and frontend-backend data flows, reducing data fetch latency by 30%.",
      "Refactored code into reusable, modular components, decreasing code duplication by 40%.",
      "Resolved 40+ issues and shipped 20+ features on schedule in an Agile, cross-functional team.",
    ],
    tech: ["MERN Stack", "Next.js", "TypeScript", "REST APIs", "Tailwind CSS", "Authentication", "Agile"],
  },
];

const ExperienceTimeline = () => {
  return (
    <section className="section-wrapper" id="experience">
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <div className="section-tag">Career Journey</div>
        <h2 className="section-title">
          Professional <span className="text-gradient">Experience</span>
        </h2>
        <p className="section-subtitle">
          Over 2 years of hands-on production experience building, architecting, and optimizing enterprise applications.
        </p>

        {/* Immediately Available Banner */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            background: "rgba(16, 185, 129, 0.12)",
            border: "1px solid rgba(16, 185, 129, 0.35)",
            padding: "8px 20px",
            borderRadius: "30px",
            color: "#10b981",
            fontSize: "0.92rem",
            fontWeight: 600,
            marginTop: "16px",
          }}
        >
          <span
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: "#10b981",
              boxShadow: "0 0 10px #10b981",
            }}
          />
          Immediately Available for Hire (Oct 2026 – Present) • Notice: 0 Days
        </div>
      </div>

      <div className="timeline-container">
        <div className="timeline-line" />

        {experiences.map((exp, index) => (
          <div key={index} className="timeline-card-wrapper">
            <div className="timeline-node-pin">
              <span
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "#38bdf8",
                }}
              />
            </div>

            <div className="timeline-card">
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-role-title">{exp.role}</h3>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                    <span className="timeline-company-name">{exp.company}</span>
                    <span style={{ color: "#64748b" }}>•</span>
                    <span style={{ fontSize: "0.88rem", color: "#94a3b8", display: "inline-flex", alignItems: "center", gap: "4px" }}>
                      <FiMapPin size={13} color="#38bdf8" /> {exp.location}
                    </span>
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "6px" }}>
                  <span className="timeline-date-badge">
                    <FiCalendar style={{ marginRight: "6px" }} />
                    {exp.period}
                  </span>
                  <span style={{ fontSize: "0.78rem", color: "#10b981", fontWeight: "600" }}>
                    {exp.type}
                  </span>
                </div>
              </div>

              <div
                style={{
                  padding: "8px 14px",
                  background: "rgba(255, 255, 255, 0.04)",
                  borderLeft: "3px solid #818cf8",
                  borderRadius: "0 8px 8px 0",
                  fontSize: "0.9rem",
                  color: "#e2e8f0",
                  marginBottom: "18px",
                  fontWeight: "500",
                }}
              >
                {exp.tagline}
              </div>

              <ul className="timeline-bullets">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "16px" }}>
                {exp.tech.map((t, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: "0.78rem",
                      fontFamily: "var(--font-mono)",
                      padding: "4px 10px",
                      borderRadius: "6px",
                      background: "rgba(56, 189, 248, 0.08)",
                      border: "1px solid rgba(56, 189, 248, 0.2)",
                      color: "#7dd3fc",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceTimeline;
