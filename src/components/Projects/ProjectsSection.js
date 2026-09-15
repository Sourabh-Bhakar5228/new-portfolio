import React, { useState } from "react";
import { FiExternalLink, FiGithub, FiCheck } from "react-icons/fi";
import chatImg from "../../Assets/Projects/chatify.png";
import codeImg from "../../Assets/Projects/codeEditor.png";
import blogImg from "../../Assets/Projects/blog.png";
import leafImg from "../../Assets/Projects/leaf.png";

const projects = [
  {
    title: "AI Legal Chatbot — Lots247",
    category: "ai",
    badge: "Production • 2026",
    image: chatImg,
    description:
      "Engineered and integrated an AI-powered legal chatbot into the Lots247 dashboard to support legal use cases. Built conversational interfaces, prompt management, and backend API integrations with NestJS and Node.js.",
    tech: ["Next.js", "TypeScript", "NestJS", "Node.js", "AI/LLM APIs", "Docker", "REST APIs"],
    liveLink: "https://lots247.in",
    githubLink: "https://github.com/Sourabh-Bhakar5228",
    highlights: [
      "AI conversation workflows & real-time context streaming",
      "NestJS microservices & high-throughput API endpoints",
      "Seamless integration with production legal dashboard",
    ],
  },
  {
    title: "HyGlam — Beauty Services Platform",
    category: "production",
    badge: "Live Product • 2025",
    image: blogImg,
    description:
      "Full-featured, production-ready beauty services platform with appointment booking workflows, salon management, customer portals, Razorpay payment gateway, and automated email notifications.",
    tech: ["React.js", "Node.js", "FastAPI", "Python", "MongoDB", "Tailwind CSS", "Razorpay"],
    liveLink: "https://hyglamofficial.com",
    githubLink: "https://github.com/Sourabh-Bhakar5228",
    highlights: [
      "Live at hyglamofficial.com serving active bookings",
      "Role-Based Access Control (RBAC) for salons, users & super admins",
      "Razorpay payment gateway & instant booking receipts",
    ],
  },
  {
    title: "DevSync — Real-Time Cloud Studio",
    category: "fullstack",
    badge: "Featured System",
    image: codeImg,
    description:
      "Interactive cloud development studio with live multi-user collaborative editing, WebSocket state sync, syntax highlighting, containerized code execution sandboxes, and instant browser preview.",
    tech: ["React.js", "Node.js", "WebSockets", "Docker", "Monaco Editor", "Tailwind CSS"],
    liveLink: "https://github.com/Sourabh-Bhakar5228",
    githubLink: "https://github.com/Sourabh-Bhakar5228",
    highlights: [
      "Sub-millisecond collaborative typing via WebSockets",
      "Isolated container runtime execution for code snippets",
      "Integrated Monaco editor with theme & language switches",
    ],
  },
  {
    title: "AI Agent Automation Hub",
    category: "ai",
    badge: "AI Workflow",
    image: leafImg,
    description:
      "Autonomous AI agent workflow pipeline connecting Gemini API and FastAPI to perform document summarization, context extraction, automated data transformation, and scheduled job processing.",
    tech: ["Python", "FastAPI", "Gemini API", "React.js", "Redis", "Docker"],
    liveLink: "https://github.com/Sourabh-Bhakar5228",
    githubLink: "https://github.com/Sourabh-Bhakar5228",
    highlights: [
      "Gemini API function calling & chain-of-thought processing",
      "FastAPI asynchronous worker queue with Redis",
      "Interactive management dashboard with metrics",
    ],
  },
];

const ProjectsSection = () => {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section className="section-wrapper" id="projects">
      <div className="projects-container">
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <div className="section-tag">Portfolio Showcase</div>
          <h2 className="section-title">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subtitle">
            A selection of production platforms, enterprise AI applications, and full-stack systems I have engineered.
          </p>

          {/* Filter Pills */}
          <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap", marginTop: "24px" }}>
            {[
              { id: "all", label: "All Projects" },
              { id: "production", label: "Production & Live" },
              { id: "ai", label: "AI & Chatbots" },
              { id: "fullstack", label: "Full Stack Systems" },
            ].map((tab) => (
              <button
                key={tab.id}
                className={`skill-tab-btn ${filter === tab.id ? "active" : ""}`}
                onClick={() => setFilter(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-banner-wrap">
                <img src={project.image} alt={project.title} />
                <div className="project-banner-overlay" />
                <span className="project-category-badge">{project.badge}</span>
              </div>

              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                {/* Highlights */}
                <div style={{ marginBottom: "16px", display: "flex", flexDirection: "column", gap: "6px" }}>
                  {project.highlights.map((h, hIdx) => (
                    <div
                      key={hIdx}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        fontSize: "0.82rem",
                        color: "#cbd5e1",
                      }}
                    >
                      <FiCheck size={14} color="#38bdf8" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="project-tags-list">
                  {project.tech.map((t, tIdx) => (
                    <span key={tIdx} className="project-tag">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="project-links" style={{ marginTop: "auto" }}>
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-neon-primary"
                      style={{ padding: "10px 18px", fontSize: "0.88rem", flex: 1 }}
                    >
                      <FiExternalLink />
                      <span>Live Preview</span>
                    </a>
                  )}

                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-neon-secondary"
                      style={{ padding: "10px 18px", fontSize: "0.88rem" }}
                      title="View Source Code"
                    >
                      <FiGithub />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
