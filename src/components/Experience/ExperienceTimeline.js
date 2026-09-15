import React from "react";
import { FiCalendar, FiMapPin } from "react-icons/fi";

const experiences = [
  {
    role: "MERN Stack Developer",
    company: "Lawyered",
    location: "Gurugram, Haryana, India",
    period: "Jan 2026 – Present",
    type: "Full-time • Current",
    tagline: "High-scale Legal Tech Platform & Lots247 AI Integration",
    responsibilities: [
      "Develop and maintain production web applications and admin dashboards using React.js, Next.js, TypeScript, Node.js, Express.js, NestJS, MongoDB, MySQL, and PostgreSQL.",
      "Developed and integrated an AI-powered legal chatbot into the Lots247 dashboard to support legal AI use cases and improve the product experience.",
      "Designed and developed backend REST APIs using NestJS and Node.js, implementing application business logic and integrating APIs with frontend modules.",
      "Worked extensively on product UI/UX, designing and implementing new interfaces, layouts, reusable components, and UI improvements across web applications and dashboards.",
      "Developed and enhanced dashboard features, data flows, authentication modules, and role-based access control (RBAC) functionality.",
      "Diagnosed and fixed frontend and backend bugs, improving application stability, reliability, and user experience.",
      "Integrated third-party services and APIs while maintaining scalable and maintainable application architecture.",
      "Used Docker for application and development environments and collaborated with cross-functional teams in an Agile environment.",
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
      "Developed scalable web applications using the MERN stack and Next.js with TypeScript and modern UI libraries.",
      "Built responsive dashboards and web interfaces with secure authentication and third-party API integrations.",
      "Developed and integrated REST APIs and implemented frontend-backend data flows for application features.",
      "Improved application performance by refactoring code and adopting reusable components and modular architecture.",
      "Debugged and resolved application issues across frontend and backend, improving reliability and maintainability.",
      "Collaborated with cross-functional teams in an Agile environment to deliver new features and product enhancements on schedule.",
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
