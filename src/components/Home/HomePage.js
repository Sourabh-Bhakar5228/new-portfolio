import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Hero from "./Hero";
import SEO from "../UI/SEO";
import {
  FiArrowRight,
  FiUser,
  FiBriefcase,
  FiLayers,
  FiCpu,
  FiDatabase,
  FiServer,
  FiGlobe,
  FiCheckCircle,
  FiCopy,
  FiCheck,
  FiDownload,
  FiMail,
  FiPhone,
  FiExternalLink,
  FiGithub,
  FiZap,
  FiCode,
  FiAward,
} from "react-icons/fi";

// High-speed static public assets (zero bundle overhead & browser cached)
const goluImg = "/assets/projects/goluAi.png";
const lotsImg = "/assets/projects/lots247.jpg";
const hyglamImg = "/assets/projects/hyglam.jpg";

const HomePage = () => {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("bhakarsoursbh@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const stats = [
    {
      number: "2+",
      label: "Years Production Tenure",
      detail: "Full Stack & AI Systems",
    },
    {
      number: "35%",
      label: "Latency & Speedup",
      detail: "Optimized API load times",
    },

    {
      number: "40%",
      label: "Query Overhead Cut",
      detail: "Via Redis & Indexing",
    },
    {
      number: "100%",
      label: "Clean Code & Reliability",
      detail: "Production grade quality",
    },
  ];

  const valuePillars = [
    {
      icon: <FiCpu />,
      iconColor: "#38bdf8",
      iconBg: "rgba(56, 189, 248, 0.12)",
      title: "Production AI & LLM Systems",
      description:
        "Architecting intelligent conversational agents, prompt evaluation pipelines, real-time context streaming, and adaptive mock interview simulators (Golu AI & Lots247).",
      tags: [
        "OpenAI API",
        "LangChain",
        "WebRTC",
        "Context Streaming",
        "Dynamic Prompting",
      ],
    },
    {
      icon: <FiServer />,
      iconColor: "#a855f7",
      iconBg: "rgba(168, 85, 247, 0.12)",
      title: "Scalable Microservices & APIs",
      description:
        "Building high-concurrency NestJS, Node.js, and FastAPI services with JWT authentication, RBAC authorization, BullMQ queues, and robust error resilience.",
      tags: ["NestJS", "Node.js", "FastAPI", "Python", "REST", "WebSockets"],
    },
    {
      icon: <FiGlobe />,
      iconColor: "#10b981",
      iconBg: "rgba(16, 185, 129, 0.12)",
      title: "High-Performance Frontends",
      description:
        "Engineering responsive, sub-second web applications in Next.js 14 and React 18 with modern styling, Redux Toolkit, and 95+ Lighthouse optimization scores.",
      tags: [
        "Next.js 14",
        "React 18",
        "TypeScript",
        "Tailwind CSS",
        "Redux Toolkit",
      ],
    },
    {
      icon: <FiDatabase />,
      iconColor: "#f59e0b",
      iconBg: "rgba(245, 158, 11, 0.12)",
      title: "Database Tuning & DevOps",
      description:
        "Profiling MongoDB Atlas & PostgreSQL queries, deploying Redis caching layers, Docker containerization, and configuring automated CI/CD pipelines.",
      tags: [
        "MongoDB Atlas",
        "PostgreSQL",
        "Redis",
        "Docker",
        "AWS S3 / EC2",
        "CI/CD",
      ],
    },
  ];

  const techCategories = [
    {
      title: "Frontend Engineering",
      icon: <FiGlobe />,
      color: "#38bdf8",
      skills: [
        "React.js",
        "Next.js 14 (App Router)",
        "TypeScript",
        "JavaScript (ES6+)",
        "Redux Toolkit",
        "Tailwind CSS",
        "HTML5 / CSS3",
        "Responsive UX",
      ],
    },
    {
      title: "Backend & Microservices",
      icon: <FiServer />,
      color: "#a855f7",
      skills: [
        "Node.js",
        "NestJS",
        "Express.js",
        "Python",
        "FastAPI",
        "RESTful APIs",
        "WebSockets",
        "BullMQ Queues",
      ],
    },
    {
      title: "Databases & Caching",
      icon: <FiDatabase />,
      color: "#10b981",
      skills: [
        "MongoDB Atlas",
        "PostgreSQL",
        "Redis Caching",
        "Mongoose",
        "Prisma ORM",
        "MySQL",
        "Data Modeling",
      ],
    },
    {
      title: "AI, Cloud & DevOps",
      icon: <FiZap />,
      color: "#f59e0b",
      skills: [
        "OpenAI API",
        "LangChain",
        "WebRTC",
        "Docker",
        "Git / GitHub",
        "AWS (S3, EC2)",
        "Postman",
        "Linux",
      ],
    },
  ];

  return (
    <div>
      <SEO
        title="Sourabh Bhakar | Full Stack Developer & AI Engineer"
        description="Portfolio of Sourabh Bhakar — Full Stack Developer & AI Engineer with 2+ years of production experience in React.js, Next.js, Node.js, TypeScript, NestJS, and AI systems (Golu AI, Lots247). Open to immediate hire."
        keywords="Sourabh Bhakar, Full Stack Developer, Next.js Developer, NestJS Engineer, React Developer, Golu AI, TypeScript, MERN Stack, AI Interviewer, Portfolio, Hire Full Stack Developer"
        path="/"
      />

      {/* 1. 3D Cyber Hero Section */}
      <Hero />

      {/* 2. Quantified Production Impact Numbers Bar */}
      <div
        className="home-container"
        style={{ marginTop: "20px", marginBottom: "70px" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "16px",
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="stat-box"
              style={{
                padding: "24px 18px",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                className="stat-number"
                style={{
                  fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                  marginBottom: "4px",
                }}
              >
                {stat.number}
              </div>
              <div
                className="stat-label"
                style={{
                  fontWeight: "700",
                  color: "#f8fafc",
                  marginBottom: "4px",
                }}
              >
                {stat.label}
              </div>
              <span
                style={{
                  fontSize: "0.78rem",
                  color: "#64748b",
                  fontFamily: "var(--font-mono)",
                }}
              >
                {stat.detail}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Flagship Showcase: Golu AI (AI Interviewer & Simulator) */}
      <div className="home-container" style={{ marginBottom: "80px" }}>
        <div className="home-section-header">
          <div className="home-section-badge">
            <FiAward />
            <span>Featured Innovation</span>
          </div>
          <h2 className="home-section-title">
            Flagship Engineering <span className="text-gradient">Showcase</span>
          </h2>
          <p className="home-section-desc">
            Production-grade systems built from ground up with real-world
            architecture, modern AI integrations, and high performance.
          </p>
        </div>

        {/* Golu AI Spotlight Banner Card */}
        <div className="home-showcase-card">
          <div className="home-showcase-grid">
            {/* Left Column: Details */}
            <div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "16px",
                }}
              >
                <span
                  style={{
                    padding: "5px 12px",
                    background: "rgba(56, 189, 248, 0.15)",
                    border: "1px solid rgba(56, 189, 248, 0.4)",
                    borderRadius: "9999px",
                    fontSize: "0.78rem",
                    fontWeight: "700",
                    color: "#38bdf8",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <FiZap /> #1 Flagship AI Product
                </span>
                <span
                  style={{
                    padding: "5px 12px",
                    background: "rgba(16, 185, 129, 0.12)",
                    border: "1px solid rgba(16, 185, 129, 0.3)",
                    borderRadius: "9999px",
                    fontSize: "0.78rem",
                    fontWeight: "600",
                    color: "#34d399",
                  }}
                >
                  Live Architecture
                </span>
              </div>

              <h3
                style={{
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  fontWeight: "800",
                  color: "#ffffff",
                  marginBottom: "14px",
                  lineHeight: "1.2",
                }}
              >
                Golu AI — AI Interviewer & Company Simulator
              </h3>

              <p
                style={{
                  color: "#94a3b8",
                  fontSize: "0.96rem",
                  lineHeight: "1.65",
                  marginBottom: "20px",
                }}
              >
                An autonomous web-based mock interview platform conducting
                personalized, adaptive, face-to-face technical & behavioral
                interviews. Utilizes candidate resume context, job descriptions,
                and verified public company hiring signals.
              </p>

              {/* Architectural Highlights */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  marginBottom: "24px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                    color: "#cbd5e1",
                    fontSize: "0.9rem",
                  }}
                >
                  <FiCheckCircle
                    style={{
                      color: "#38bdf8",
                      flexShrink: 0,
                      marginTop: "3px",
                    }}
                  />
                  <span>
                    <strong style={{ color: "#ffffff" }}>
                      Adaptive Difficulty Loop:
                    </strong>{" "}
                    Dynamically adjusts follow-up questions and complexity based
                    on candidate response analysis.
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                    color: "#cbd5e1",
                    fontSize: "0.9rem",
                  }}
                >
                  <FiCheckCircle
                    style={{
                      color: "#38bdf8",
                      flexShrink: 0,
                      marginTop: "3px",
                    }}
                  />
                  <span>
                    <strong style={{ color: "#ffffff" }}>
                      Resume & JD Context Parser:
                    </strong>{" "}
                    Automated skill extraction, experience mapping, and
                    role-specific interview plan generation.
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                    color: "#cbd5e1",
                    fontSize: "0.9rem",
                  }}
                >
                  <FiCheckCircle
                    style={{
                      color: "#38bdf8",
                      flexShrink: 0,
                      marginTop: "3px",
                    }}
                  />
                  <span>
                    <strong style={{ color: "#ffffff" }}>
                      Verified Company Signals:
                    </strong>{" "}
                    Researches public interview formats and company competencies
                    with source-based evidence.
                  </span>
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                  marginBottom: "28px",
                }}
              >
                {[
                  "Next.js 14",
                  "TypeScript",
                  "NestJS",
                  "MongoDB Atlas",
                  "Redis",
                  "BullMQ",
                  "WebRTC",
                  "Tailwind CSS",
                ].map((tech) => (
                  <span
                    key={tech}
                    style={{
                      padding: "4px 10px",
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      borderRadius: "6px",
                      fontSize: "0.78rem",
                      fontFamily: "var(--font-mono)",
                      color: "#94a3b8",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "14px",
                  alignItems: "center",
                }}
              >
                <Link
                  to="/projects"
                  className="btn-neon-primary"
                  style={{ textDecoration: "none" }}
                >
                  <span>View Project Details</span>
                  <FiArrowRight />
                </Link>

                <a
                  href="https://github.com/Sourabh-Bhakar5228"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-neon-secondary"
                  style={{ textDecoration: "none" }}
                >
                  <FiGithub />
                  <span>Source Code</span>
                </a>
              </div>
            </div>

            {/* Right Column: Visual Mockup */}
            <div className="home-showcase-preview">
              <img
                src={goluImg}
                alt="Golu AI Interview Simulator Platform Interface"
                className="home-showcase-img"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>

        {/* Secondary Featured Systems: Lots247 & HyGlam */}
        <div className="home-sub-projects-grid">
          {/* Lots247 Card */}
          <div className="home-sub-project-card">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: "16px",
              }}
            >
              <span
                style={{
                  padding: "4px 10px",
                  background: "rgba(168, 85, 247, 0.12)",
                  border: "1px solid rgba(168, 85, 247, 0.3)",
                  borderRadius: "9999px",
                  fontSize: "0.75rem",
                  fontWeight: "600",
                  color: "#c084fc",
                }}
              >
                Production Enterprise Platform
              </span>
              <a
                href="https://lots247.in"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#94a3b8", display: "inline-flex" }}
                title="Visit Live"
              >
                <FiExternalLink size={18} />
              </a>
            </div>

            <h3
              style={{
                fontSize: "1.3rem",
                fontWeight: "700",
                color: "#ffffff",
                marginBottom: "10px",
              }}
            >
              AI Legal Chatbot & Case Dashboard — Lots247
            </h3>

            <div
              style={{
                height: "170px",
                borderRadius: "14px",
                overflow: "hidden",
                marginBottom: "16px",
                border: "1px solid rgba(168, 85, 247, 0.25)",
                background: "#020617",
              }}
            >
              <img
                src={lotsImg}
                alt="Lots247 AI Legal Chatbot Platform"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                loading="lazy"
                decoding="async"
              />
            </div>

            <p
              style={{
                color: "#94a3b8",
                fontSize: "0.92rem",
                lineHeight: "1.6",
                flexGrow: 1,
                marginBottom: "18px",
              }}
            >
              Engineered production AI legal assistant integrated with
              enterprise case management. Decreased API response
              latency by <strong style={{ color: "#38bdf8" }}>35%</strong> and
              handled{" "}
              <strong style={{ color: "#34d399" }}>2,000+ consultations</strong>{" "}
              with sub-second response streaming.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "6px",
                marginBottom: "20px",
              }}
            >
              {[
                "Next.js",
                "NestJS",
                "TypeScript",
                "Node.js",
                "Docker",
                "AI/LLM APIs",
              ].map((t) => (
                <span key={t} className="home-pillar-tag-item">
                  {t}
                </span>
              ))}
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingTop: "14px",
                borderTop: "1px solid rgba(255, 255, 255, 0.06)",
              }}
            >
              <Link
                to="/experience"
                style={{
                  color: "#a855f7",
                  fontWeight: "600",
                  fontSize: "0.88rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  textDecoration: "none",
                }}
              >
                <span>View Career Details</span>
                <FiArrowRight />
              </Link>
              <a
                href="https://lots247.in"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "#94a3b8",
                  fontSize: "0.85rem",
                  textDecoration: "none",
                }}
              >
                lots247.in ↗
              </a>
            </div>
          </div>

          {/* HyGlam Card */}
          <div className="home-sub-project-card">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: "16px",
              }}
            >
              <span
                style={{
                  padding: "4px 10px",
                  background: "rgba(16, 185, 129, 0.12)",
                  border: "1px solid rgba(16, 185, 129, 0.3)",
                  borderRadius: "9999px",
                  fontSize: "0.75rem",
                  fontWeight: "600",
                  color: "#34d399",
                }}
              >
                Commercial Full-Stack Platform
              </span>
              <a
                href="https://hyglamofficial.com"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#94a3b8", display: "inline-flex" }}
                title="Visit Live"
              >
                <FiExternalLink size={18} />
              </a>
            </div>

            <h3
              style={{
                fontSize: "1.3rem",
                fontWeight: "700",
                color: "#ffffff",
                marginBottom: "10px",
              }}
            >
              HyGlam — Salon & Beauty Services Platform
            </h3>

            <div
              style={{
                height: "170px",
                borderRadius: "14px",
                overflow: "hidden",
                marginBottom: "16px",
                border: "1px solid rgba(16, 185, 129, 0.25)",
                background: "#020617",
              }}
            >
              <img
                src={hyglamImg}
                alt="HyGlam Platform"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                loading="lazy"
                decoding="async"
              />
            </div>

            <p
              style={{
                color: "#94a3b8",
                fontSize: "0.92rem",
                lineHeight: "1.6",
                flexGrow: 1,
                marginBottom: "18px",
              }}
            >
              Scalable multi-vendor appointment booking web app featuring 3-tier
              Role-Based Access Control (Super Admin, Vendor, Customer),
              Razorpay payment gateway integration, and automated email
              confirmation triggers.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "6px",
                marginBottom: "20px",
              }}
            >
              {[
                "React.js",
                "Node.js",
                "FastAPI",
                "Python",
                "MongoDB",
                "Razorpay",
              ].map((t) => (
                <span key={t} className="home-pillar-tag-item">
                  {t}
                </span>
              ))}
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingTop: "14px",
                borderTop: "1px solid rgba(255, 255, 255, 0.06)",
              }}
            >
              <Link
                to="/projects"
                style={{
                  color: "#10b981",
                  fontWeight: "600",
                  fontSize: "0.88rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  textDecoration: "none",
                }}
              >
                <span>Explore Full Showcase</span>
                <FiArrowRight />
              </Link>
              <a
                href="https://hyglamofficial.com"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "#94a3b8",
                  fontSize: "0.85rem",
                  textDecoration: "none",
                }}
              >
                hyglamofficial.com ↗
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Why Hire Me: Core Engineering Superpowers */}
      <div className="home-container" style={{ marginBottom: "80px" }}>
        <div className="home-section-header">
          <div className="home-section-badge">
            <FiZap />
            <span>Value Pillars</span>
          </div>
          <h2 className="home-section-title">
            Why Hire <span className="text-gradient">Sourabh Bhakar?</span>
          </h2>
          <p className="home-section-desc">
            Bridging cutting-edge AI capabilities with robust enterprise
            software engineering principles to deliver impactful, scalable
            products from Day 1.
          </p>
        </div>

        <div className="home-pillars-grid">
          {valuePillars.map((pillar, i) => (
            <div key={i} className="home-pillar-card">
              <div
                className="home-pillar-icon-box"
                style={{
                  background: pillar.iconBg,
                  color: pillar.iconColor,
                }}
              >
                {pillar.icon}
              </div>

              <h3 className="home-pillar-title">{pillar.title}</h3>
              <p className="home-pillar-text">{pillar.description}</p>

              <div className="home-pillar-tags">
                {pillar.tags.map((tag, idx) => (
                  <span key={idx} className="home-pillar-tag-item">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Categorized Tech Stack Matrix */}
      <div className="home-container" style={{ marginBottom: "80px" }}>
        <div className="home-section-header">
          <div className="home-section-badge">
            <FiCode />
            <span>Technical Arsenal</span>
          </div>
          <h2 className="home-section-title">
            Core Tech <span className="text-gradient">Matrix</span>
          </h2>
          <p className="home-section-desc">
            Production-tested stack honed through high-throughput APIs, AI
            implementations, and enterprise frontend architecture.
          </p>
        </div>

        <div className="home-tech-category-grid">
          {techCategories.map((cat, i) => (
            <div key={i} className="home-tech-cat-box">
              <div className="home-tech-cat-header">
                <div
                  className="home-tech-cat-icon"
                  style={{
                    background: `${cat.color}18`,
                    color: cat.color,
                  }}
                >
                  {cat.icon}
                </div>
                <h3 className="home-tech-cat-title">{cat.title}</h3>
              </div>

              <div className="home-tech-pill-list">
                {cat.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="home-tech-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 7. Direct Recruiter Conversion / Hire Me Banner */}
      <div className="home-container">
        <div className="home-hire-banner">
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 16px",
              background: "rgba(16, 185, 129, 0.15)",
              border: "1px solid rgba(16, 185, 129, 0.4)",
              borderRadius: "9999px",
              fontSize: "0.85rem",
              fontWeight: "600",
              color: "#34d399",
              marginBottom: "20px",
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
            <span>Open for Full-Time Roles & Immediate Joining</span>
          </div>

          <h2
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3rem)",
              fontWeight: "900",
              color: "#ffffff",
              marginBottom: "16px",
              lineHeight: "1.2",
              letterSpacing: "-0.02em",
            }}
          >
            Ready to Build{" "}
            <span className="text-gradient">Something Extraordinary?</span>
          </h2>

          <p
            style={{
              color: "#94a3b8",
              fontSize: "clamp(1rem, 2vw, 1.15rem)",
              lineHeight: "1.65",
              maxWidth: "680px",
              margin: "0 auto 36px auto",
            }}
          >
            Whether you are looking for an engineer to architect an AI platform,
            scale your full-stack web applications, or optimize your backend
            microservices — let’s connect today.
          </p>

          {/* Action CTAs */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "16px",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "36px",
            }}
          >
            <button
              onClick={() => navigate("/contact")}
              className="btn-neon-primary"
              style={{ fontSize: "1rem", padding: "14px 28px" }}
            >
              <FiMail />
              <span>Schedule Interview / Message</span>
            </button>

            <a
              href="/sourabh-bhakar.pdf"
              download="Sourabh_Bhakar_Resume.pdf"
              className="btn-neon-secondary"
              style={{
                fontSize: "1rem",
                padding: "14px 28px",
                textDecoration: "none",
              }}
            >
              <FiDownload />
              <span>Download Latest Resume</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="btn-neon-outline"
              style={{ fontSize: "1rem", padding: "14px 24px" }}
            >
              {copied ? <FiCheck style={{ color: "#34d399" }} /> : <FiCopy />}
              <span>{copied ? "Email Copied! ✓" : "Copy Email"}</span>
            </button>
          </div>

          {/* Direct Contact Cards */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "24px",
              paddingTop: "24px",
              borderTop: "1px solid rgba(255, 255, 255, 0.08)",
              fontSize: "0.95rem",
              color: "#cbd5e1",
            }}
          >
            <a
              href="mailto:bhakarsoursbh@gmail.com"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                color: "#38bdf8",
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              <FiMail />
              <span>bhakarsoursbh@gmail.com</span>
            </a>

            <span style={{ color: "#475569" }}>•</span>

            <a
              href="tel:+918307802850"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                color: "#34d399",
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              <FiPhone />
              <span>+91 8307802850</span>
            </a>

            <span style={{ color: "#475569" }}>•</span>

            <a
              href="https://www.linkedin.com/in/sourabh-bhakar/"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                color: "#a855f7",
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              <span>LinkedIn Profile ↗</span>
            </a>
          </div>
        </div>
      </div>

      {/* 8. Exploration Gateways */}
      <div className="home-container" style={{ marginBottom: "80px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          {/* Card 1: About & Skills */}
          <Link
            to="/about"
            className="glass-panel"
            style={{
              padding: "clamp(20px, 4vw, 32px)",
              display: "flex",
              flexDirection: "column",
              textDecoration: "none",
            }}
          >
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
            <h3
              style={{
                fontSize: "1.35rem",
                fontWeight: "700",
                color: "#ffffff",
                marginBottom: "10px",
              }}
            >
              About & Full Bio
            </h3>
            <p
              style={{
                color: "#94a3b8",
                fontSize: "0.92rem",
                lineHeight: "1.6",
                flexGrow: 1,
              }}
            >
              Learn more about Sourabh’s background, engineering philosophy, and
              full skill breakdowns.
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                color: "#38bdf8",
                fontWeight: "600",
                marginTop: "16px",
              }}
            >
              <span>View Profile & Bio</span>
              <FiArrowRight />
            </div>
          </Link>

          {/* Card 2: Experience */}
          <Link
            to="/experience"
            className="glass-panel"
            style={{
              padding: "clamp(20px, 4vw, 32px)",
              display: "flex",
              flexDirection: "column",
              textDecoration: "none",
            }}
          >
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
            <h3
              style={{
                fontSize: "1.35rem",
                fontWeight: "700",
                color: "#ffffff",
                marginBottom: "10px",
              }}
            >
              Career Timeline
            </h3>
            <p
              style={{
                color: "#94a3b8",
                fontSize: "0.92rem",
                lineHeight: "1.6",
                flexGrow: 1,
              }}
            >
              Full timeline at Lawyered (Lots247 AI Legal Chatbot) and Jaikvik
              Technology with verified achievements.
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                color: "#a855f7",
                fontWeight: "600",
                marginTop: "16px",
              }}
            >
              <span>View Career Details</span>
              <FiArrowRight />
            </div>
          </Link>

          {/* Card 3: GitHub & Projects */}
          <Link
            to="/projects"
            className="glass-panel"
            style={{
              padding: "clamp(20px, 4vw, 32px)",
              display: "flex",
              flexDirection: "column",
              textDecoration: "none",
            }}
          >
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
            <h3
              style={{
                fontSize: "1.35rem",
                fontWeight: "700",
                color: "#ffffff",
                marginBottom: "10px",
              }}
            >
              Projects & Repos
            </h3>
            <p
              style={{
                color: "#94a3b8",
                fontSize: "0.92rem",
                lineHeight: "1.6",
                flexGrow: 1,
              }}
            >
              Explore deep architecture spotlight of Golu AI, Lots247, HyGlam,
              and live GitHub repositories.
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                color: "#10b981",
                fontWeight: "600",
                marginTop: "16px",
              }}
            >
              <span>Explore All Projects</span>
              <FiArrowRight />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
