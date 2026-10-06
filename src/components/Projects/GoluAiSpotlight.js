// Golu AI Spotlight - Flagship AI Interviewer Component
import React, { useState } from "react";
import {
  FiCpu,
  FiVideo,
  FiMic,
  FiFileText,
  FiSearch,
  FiSliders,
  FiCode,
  FiAlertTriangle,
  FiCheckSquare,
  FiTrendingUp,
  FiServer,
  FiDatabase,
  FiLayers,
  FiCheck,
  FiArrowRight,
  FiActivity,
  FiZap,
  FiAward,
} from "react-icons/fi";

const goluImg = "/assets/projects/goluAi.png";

const features = [
  {
    icon: <FiFileText />,
    title: "Resume-Based Interviewing",
    desc: "Upload a resume and automatically generate questions based on the candidate’s actual skills, projects, experience, and technologies.",
    color: "#38bdf8",
  },
  {
    icon: <FiSearch />,
    title: "Company-Specific Interview Prep",
    desc: "Upload a JD, recruiter email, or interview details and generate a role-specific, tailored interview plan.",
    color: "#818cf8",
  },
  {
    icon: <FiCheckSquare />,
    title: "Company Verification",
    desc: "Research and verify publicly available company information, job details, career pages, and recruiter/interview signals with source-based evidence.",
    color: "#34d399",
  },
  {
    icon: <FiSliders />,
    title: "Adaptive AI Interviewer",
    desc: "Dynamically changes difficulty and asks intelligent follow-up questions based on the candidate’s previous answers instead of using a static question list.",
    color: "#a855f7",
  },
  {
    icon: <FiVideo />,
    title: "Face-to-Face AI Interview",
    desc: "Browser-based camera and microphone experience with a Golu AI interviewer avatar, real-time voice interaction, speech-to-text, and text-to-speech.",
    color: "#f43f5e",
  },
  {
    icon: <FiLayers />,
    title: "Technical & Project Deep Dive",
    desc: "Generates JavaScript, React, Node.js, MongoDB, Next.js, system design, project-based, and production-scenario questions.",
    color: "#38bdf8",
  },
  {
    icon: <FiCode />,
    title: "Live Coding Round",
    desc: "Provides coding problems, test cases, code execution, complexity questions, and code-quality feedback in real time.",
    color: "#f59e0b",
  },
  {
    icon: <FiAlertTriangle />,
    title: "Production Scenario Interviews",
    desc: "Simulates real engineering incidents such as API failures, database latency, caching issues, duplicate webhooks, and scaling bottlenecks.",
    color: "#ef4444",
  },
  {
    icon: <FiCpu />,
    title: "Interview Evidence & Evaluation",
    desc: "Connects each question to the JD/resume context and evaluates correctness, relevance, depth, completeness, and production awareness.",
    color: "#06b6d4",
  },
  {
    icon: <FiActivity />,
    title: "Detailed Interview Reports",
    desc: "Provides strengths, improvement areas, missing concepts, question-by-question analysis, and a personalized preparation plan.",
    color: "#10b981",
  },
  {
    icon: <FiTrendingUp />,
    title: "Interview Progress Tracking",
    desc: "Tracks improvement across multiple mock interviews and identifies recurring weak areas with longitudinal analytics.",
    color: "#c084fc",
  },
];

const architectureSteps = [
  { step: "01", title: "Inputs Ingestion", desc: "Resume + JD + Interview Details parsed and normalized" },
  { step: "02", title: "Document Analysis", desc: "Extract candidate capabilities, experience levels & requirements" },
  { step: "03", title: "Company Verification", desc: "Source-based retrieval of publicly available company tech signals" },
  { step: "04", title: "Interview Planner", desc: "Generate custom round agenda, target competencies & pacing" },
  { step: "05", title: "Adaptive Question Engine", desc: "Context-aware question graph dynamically tuned to responses" },
  { step: "06", title: "Voice / Video Interview", desc: "Face-to-face WebRTC avatar interaction with real-time STT & TTS" },
  { step: "07", title: "Answer Transcription", desc: "Real-time stream transcription with acoustic speech cues" },
  { step: "08", title: "AI Answer Evaluation", desc: "Rubric evaluation for depth, correctness, relevance & edge cases" },
  { step: "09", title: "Follow-up Questions", desc: "Drill downs, probe questions, or incident stress-testing" },
  { step: "10", title: "Report & Roadmap", desc: "Question-by-question breakdown, scoring & personalized preparation plan" },
];

const techStack = [
  {
    category: "Frontend",
    icon: <FiCode color="#38bdf8" />,
    items: ["Next.js", "TypeScript", "Tailwind CSS", "WebRTC", "Web APIs (MediaStreams)"],
  },
  {
    category: "Backend",
    icon: <FiServer color="#818cf8" />,
    items: ["NestJS", "Node.js", "TypeScript", "RESTful Architecture", "Microservices"],
  },
  {
    category: "Database",
    icon: <FiDatabase color="#34d399" />,
    items: ["MongoDB Atlas", "Mongoose ORM", "Document Store"],
  },
  {
    category: "Infrastructure",
    icon: <FiLayers color="#f59e0b" />,
    items: ["Redis (In-Memory State)", "BullMQ (Job Worker Queues)", "Containerization"],
  },
  {
    category: "AI & Intelligence",
    icon: <FiCpu color="#c084fc" />,
    items: ["LLM-based interview orchestration", "Adaptive question generation", "Answer rubric evaluation"],
  },
  {
    category: "Voice & Audio",
    icon: <FiMic color="#f43f5e" />,
    items: ["Speech-to-Text (STT)", "Text-to-Speech (TTS)", "Real-time waveform streaming"],
  },
  {
    category: "Real-Time Comms",
    icon: <FiActivity color="#06b6d4" />,
    items: ["WebSockets", "Real-time interview events", "Live telemetry streaming"],
  },
];

const engineeringHighlights = [
  {
    title: "Adaptive Interview State Machine",
    desc: "Designed an adaptive interview state machine instead of a static question-answer flow, maintaining dynamic interview progression based on candidate performance.",
  },
  {
    title: "Resume & JD Context Mapping",
    desc: "Implemented resume-to-question and JD-to-question context mapping to generate hyper-relevant technical queries tied directly to candidate claims.",
  },
  {
    title: "Dual-Tier Session State Management",
    desc: "Built ultra-fast session state management using Redis for volatile interview states, with MongoDB Atlas as the persistent source of truth.",
  },
  {
    title: "Asynchronous AI Pipeline via BullMQ",
    desc: "Implemented asynchronous background AI processing using BullMQ queues, preventing latency spikes during long transcription and evaluation tasks.",
  },
  {
    title: "Auth & Session Ownership Controls",
    desc: "Added strict authentication and interview-session ownership controls to safeguard confidential candidate transcripts and evaluation data.",
  },
  {
    title: "Comprehensive Privacy Architecture",
    desc: "Designed rigorous privacy controls for camera, microphone, transcript, and recording data to ensure enterprise-grade security.",
  },
  {
    title: "Evidence-Based Verification Engine",
    desc: "Added evidence-based company and JD analysis instead of fabricating company-specific information, anchoring questions in verified public facts.",
  },
  {
    title: "Modular Provider Abstractions",
    desc: "Built modular AI, STT, and TTS provider abstractions to allow seamless switching between different LLM, voice, and transcription engines.",
  },
];

const GoluAiSpotlight = () => {
  const [activeTab, setActiveTab] = useState("features");

  return (
    <div
      className="golu-spotlight-card"
      style={{
        background: "linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(10, 16, 33, 0.98) 100%)",
        border: "1.5px solid rgba(56, 189, 248, 0.35)",
        borderRadius: "28px",
        padding: "36px",
        marginBottom: "60px",
        boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.8), 0 0 40px rgba(56, 189, 248, 0.15)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative Cyber Glow Background */}
      <div
        style={{
          position: "absolute",
          top: "-150px",
          right: "-100px",
          width: "450px",
          height: "450px",
          background: "radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-150px",
          left: "-100px",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(168, 85, 247, 0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Top Header Badge & Title */}
      <div style={{ position: "relative", zIndex: 2 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            flexWrap: "wrap",
            marginBottom: "16px",
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 14px",
              borderRadius: "9999px",
              background: "linear-gradient(135deg, rgba(56, 189, 248, 0.2), rgba(168, 85, 247, 0.2))",
              border: "1px solid rgba(56, 189, 248, 0.5)",
              color: "#7dd3fc",
              fontSize: "0.82rem",
              fontFamily: "var(--font-mono)",
              fontWeight: 700,
              letterSpacing: "0.05em",
              boxShadow: "0 0 15px rgba(56, 189, 248, 0.25)",
            }}
          >
            <FiAward color="#f59e0b" size={16} />
            BEST PROJECT • FLAGSHIP AI SYSTEM
          </span>

          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "4px 12px",
              borderRadius: "9999px",
              background: "rgba(16, 185, 129, 0.12)",
              border: "1px solid rgba(16, 185, 129, 0.35)",
              color: "#34d399",
              fontSize: "0.78rem",
              fontFamily: "var(--font-mono)",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#10b981",
                boxShadow: "0 0 8px #10b981",
              }}
            />
            Real-Time Face-to-Face Simulation
          </span>
        </div>

        {/* Hero Row: Left Details + Right Image Preview */}
        <div
          className="golu-hero-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "36px",
            alignItems: "center",
            marginBottom: "36px",
          }}
        >
          <div>
            <h2
              style={{
                fontSize: "clamp(1.9rem, 4vw, 2.7rem)",
                fontWeight: "800",
                color: "#ffffff",
                letterSpacing: "-0.03em",
                lineHeight: "1.2",
                marginBottom: "12px",
              }}
            >
              Golu AI — <span className="text-gradient">AI Interviewer & Company Interview Simulator</span>
            </h2>

            <p
              style={{
                fontSize: "1.05rem",
                color: "#cbd5e1",
                lineHeight: "1.65",
                marginBottom: "22px",
              }}
            >
              AI-powered web-based interview platform that conducts personalized, adaptive, face-to-face mock interviews using the candidate’s resume, job description, interview details, and verified public company information.
            </p>

            {/* Core Capability Pills */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
                marginBottom: "26px",
              }}
            >
              {[
                "Next.js",
                "NestJS",
                "TypeScript",
                "WebRTC Voice/Video",
                "Redis State Machine",
                "BullMQ Queues",
                "MongoDB Atlas",
                "Live Code Execution",
              ].map((badge, bIdx) => (
                <span
                  key={bIdx}
                  style={{
                    padding: "4px 10px",
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    borderRadius: "8px",
                    color: "#94a3b8",
                    fontSize: "0.8rem",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* Quick Metrics Bar */}
            <div
              className="golu-metrics-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "12px",
                padding: "16px",
                background: "rgba(3, 7, 18, 0.55)",
                borderRadius: "14px",
                border: "1px solid rgba(255, 255, 255, 0.06)",
              }}
            >
              <div>
                <div style={{ fontSize: "0.75rem", color: "#94a3b8", fontFamily: "var(--font-mono)" }}>
                  INTERACTION
                </div>
                <div style={{ fontSize: "1rem", fontWeight: "700", color: "#38bdf8", marginTop: "2px" }}>
                  Face-to-Face Voice
                </div>
              </div>
              <div>
                <div style={{ fontSize: "0.75rem", color: "#94a3b8", fontFamily: "var(--font-mono)" }}>
                  ENGINE
                </div>
                <div style={{ fontSize: "1rem", fontWeight: "700", color: "#a855f7", marginTop: "2px" }}>
                  Adaptive State Machine
                </div>
              </div>
              <div>
                <div style={{ fontSize: "0.75rem", color: "#94a3b8", fontFamily: "var(--font-mono)" }}>
                  EVALUATION
                </div>
                <div style={{ fontSize: "1rem", fontWeight: "700", color: "#10b981", marginTop: "2px" }}>
                  JD & Evidence Based
                </div>
              </div>
            </div>
          </div>

          {/* Right Preview Image with Cyber Glow */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                border: "1.5px solid rgba(56, 189, 248, 0.4)",
                boxShadow: "0 20px 45px rgba(0, 0, 0, 0.8), 0 0 30px rgba(56, 189, 248, 0.2)",
                background: "#030712",
                position: "relative",
              }}
            >
              <img
                src={goluImg}
                alt="Golu AI Interface Mockup"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  objectFit: "cover",
                  transition: "transform 0.4s ease",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "12px",
                  left: "12px",
                  right: "12px",
                  padding: "10px 14px",
                  background: "rgba(3, 7, 18, 0.85)",
                  backdropFilter: "blur(12px)",
                  borderRadius: "10px",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontSize: "0.82rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#f8fafc" }}>
                  <FiZap color="#38bdf8" />
                  <span style={{ fontWeight: 600 }}>Golu AI Real-Time Avatar & Code Sandbox</span>
                </div>
                <span
                  style={{
                    color: "#34d399",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                  }}
                >
                  LIVE SIMULATOR
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Section Navigation Tabs */}
        <div
          className="golu-tabs-container"
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            paddingBottom: "14px",
            marginBottom: "28px",
          }}
        >
          {[
            { id: "features", label: "🎯 Key Features (11)" },
            { id: "architecture", label: "🏗️ System Architecture Flow" },
            { id: "techstack", label: "⚡ Tech Stack by Layer" },
            { id: "engineering", label: "🛠️ Engineering Highlights" },
            { id: "impact", label: "💡 Product Impact" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`skill-tab-btn ${activeTab === tab.id ? "active" : ""}`}
              style={{
                padding: "8px 18px",
                fontSize: "0.88rem",
                cursor: "pointer",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* TAB 1: Key Features */}
        {activeTab === "features" && (
          <div>
            <div
              className="golu-features-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                gap: "18px",
              }}
            >
              {features.map((f, i) => (
                <div
                  key={i}
                  style={{
                    background: "rgba(15, 23, 42, 0.65)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    borderRadius: "16px",
                    padding: "20px",
                    display: "flex",
                    flexDirection: "column",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = f.color;
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = `0 10px 25px -5px ${f.color}25`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      background: `${f.color}15`,
                      color: f.color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.2rem",
                      marginBottom: "14px",
                    }}
                  >
                    {f.icon}
                  </div>
                  <h4
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: "700",
                      color: "#ffffff",
                      marginBottom: "8px",
                    }}
                  >
                    {f.title}
                  </h4>
                  <p
                    style={{
                      fontSize: "0.88rem",
                      color: "#94a3b8",
                      lineHeight: "1.55",
                      margin: 0,
                    }}
                  >
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: System Architecture Flow */}
        {activeTab === "architecture" && (
          <div>
            <div
              style={{
                marginBottom: "20px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "10px",
              }}
            >
              <div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "#ffffff", margin: 0 }}>
                  End-to-End Interview Pipeline Architecture
                </h3>
                <p style={{ color: "#94a3b8", fontSize: "0.88rem", margin: "4px 0 0 0" }}>
                  State machine lifecycle from candidate ingestion through live speech evaluation and roadmap generation.
                </p>
              </div>
            </div>

            {/* Visual Step-by-Step Flow */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                gap: "14px",
                marginBottom: "28px",
              }}
            >
              {architectureSteps.map((step, sIdx) => (
                <div
                  key={sIdx}
                  style={{
                    background: "rgba(3, 7, 18, 0.7)",
                    border: "1px solid rgba(56, 189, 248, 0.2)",
                    borderRadius: "14px",
                    padding: "16px",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "8px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        color: "#38bdf8",
                        fontWeight: 700,
                        fontSize: "0.85rem",
                      }}
                    >
                      STAGE {step.step}
                    </span>
                    {sIdx < architectureSteps.length - 1 && (
                      <FiArrowRight color="#64748b" size={14} />
                    )}
                  </div>
                  <div style={{ fontSize: "0.95rem", fontWeight: "700", color: "#ffffff", marginBottom: "6px" }}>
                    {step.title}
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "#94a3b8", lineHeight: "1.4" }}>
                    {step.desc}
                  </div>
                </div>
              ))}
            </div>

            {/* High-Fidelity Flowchart Diagram Box */}
            <div
              style={{
                background: "rgba(3, 7, 18, 0.9)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                borderRadius: "16px",
                padding: "24px",
                fontFamily: "var(--font-mono)",
                color: "#7dd3fc",
                fontSize: "0.86rem",
                overflowX: "auto",
              }}
            >
              <div style={{ color: "#a855f7", fontWeight: 700, marginBottom: "12px" }}>
                {"// Architecture Flowchart Sequence"}
              </div>
              <pre style={{ margin: 0, lineHeight: "1.7", color: "#cbd5e1" }}>
{`Resume + JD + Interview Details
              ↓
       Document Analysis
              ↓
       Company Verification
              ↓
       Interview Planner
              ↓
      Adaptive Question Engine
              ↓
       Voice / Video Interview (WebRTC)
              ↓
      Answer Transcription (STT)
              ↓
       AI Answer Evaluation
              ↓
       Follow-up Questions (Dynamic State Machine)
              ↓
       Interview Report
              ↓
       Personalized Roadmap`}
              </pre>
            </div>
          </div>
        )}

        {/* TAB 3: Tech Stack by Layer */}
        {activeTab === "techstack" && (
          <div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "20px",
              }}
            >
              {techStack.map((tech, idx) => (
                <div
                  key={idx}
                  style={{
                    background: "rgba(15, 23, 42, 0.7)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    borderRadius: "18px",
                    padding: "22px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      marginBottom: "16px",
                    }}
                  >
                    <div style={{ fontSize: "1.3rem" }}>{tech.icon}</div>
                    <h4 style={{ fontSize: "1.1rem", fontWeight: "700", color: "#ffffff", margin: 0 }}>
                      {tech.category}
                    </h4>
                  </div>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {tech.items.map((item, itemIdx) => (
                      <span
                        key={itemIdx}
                        style={{
                          background: "rgba(3, 7, 18, 0.6)",
                          border: "1px solid rgba(56, 189, 248, 0.25)",
                          padding: "6px 12px",
                          borderRadius: "8px",
                          color: "#f8fafc",
                          fontSize: "0.85rem",
                          fontFamily: "var(--font-mono)",
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: Engineering Highlights */}
        {activeTab === "engineering" && (
          <div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "18px",
              }}
            >
              {engineeringHighlights.map((hl, hIdx) => (
                <div
                  key={hIdx}
                  style={{
                    background: "rgba(15, 23, 42, 0.7)",
                    border: "1px solid rgba(168, 85, 247, 0.2)",
                    borderRadius: "16px",
                    padding: "20px",
                    display: "flex",
                    gap: "14px",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      background: "rgba(168, 85, 247, 0.15)",
                      borderRadius: "8px",
                      padding: "8px",
                      color: "#c084fc",
                      marginTop: "2px",
                      flexShrink: 0,
                    }}
                  >
                    <FiCheck size={18} />
                  </div>
                  <div>
                    <h4
                      style={{
                        fontSize: "1rem",
                        fontWeight: "700",
                        color: "#ffffff",
                        marginBottom: "6px",
                      }}
                    >
                      {hl.title}
                    </h4>
                    <p
                      style={{
                        fontSize: "0.88rem",
                        color: "#94a3b8",
                        lineHeight: "1.55",
                        margin: 0,
                      }}
                    >
                      {hl.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: Product Impact */}
        {activeTab === "impact" && (
          <div>
            <div
              style={{
                background: "linear-gradient(135deg, rgba(30, 58, 138, 0.3) 0%, rgba(88, 28, 135, 0.3) 100%)",
                border: "1.5px solid rgba(56, 189, 248, 0.4)",
                borderRadius: "20px",
                padding: "32px",
                marginBottom: "28px",
              }}
            >
              <div style={{ color: "#38bdf8", fontFamily: "var(--font-mono)", fontSize: "0.85rem", fontWeight: 700, marginBottom: "8px" }}>
                CORE VALUE PROPOSITION & TRANSFORMATION
              </div>
              <h3 style={{ fontSize: "1.6rem", fontWeight: "800", color: "#ffffff", lineHeight: "1.4", margin: "0 0 16px 0" }}>
                "Golu AI Interviewer transforms a generic mock interview into a personalized interview simulation based on the candidate’s actual resume, target role, job description, and interview context."
              </h3>
              <p style={{ color: "#cbd5e1", fontSize: "0.98rem", lineHeight: "1.7", margin: 0 }}>
                Traditional mock interviews rely on static, canned question banks that fail to test whether a developer actually understands their own listed stack or production edge cases. Golu AI bridges this gap through deep context ingestion, dynamic question trees, live coding feedback, and verifiable company alignment.
              </p>
            </div>

            {/* Comparison Matrix */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "20px",
              }}
            >
              <div
                style={{
                  background: "rgba(15, 23, 42, 0.6)",
                  border: "1px solid rgba(239, 68, 68, 0.3)",
                  borderRadius: "16px",
                  padding: "22px",
                }}
              >
                <div style={{ color: "#f87171", fontWeight: 700, fontSize: "1rem", marginBottom: "12px" }}>
                  ❌ Generic Mock Interviews
                </div>
                <ul style={{ margin: 0, paddingLeft: "18px", color: "#94a3b8", fontSize: "0.88rem", lineHeight: "1.7" }}>
                  <li>Static predetermined question lists</li>
                  <li>Zero connection to candidate's real resume or code</li>
                  <li>No company-specific signals or verified JDs</li>
                  <li>Text-only or impersonal prompt templates</li>
                  <li>Vague, generic scorecards with no actionable remediation</li>
                </ul>
              </div>

              <div
                style={{
                  background: "rgba(15, 23, 42, 0.6)",
                  border: "1px solid rgba(16, 185, 129, 0.4)",
                  borderRadius: "16px",
                  padding: "22px",
                }}
              >
                <div style={{ color: "#34d399", fontWeight: 700, fontSize: "1rem", marginBottom: "12px" }}>
                  ✅ Golu AI Simulation
                </div>
                <ul style={{ margin: 0, paddingLeft: "18px", color: "#cbd5e1", fontSize: "0.88rem", lineHeight: "1.7" }}>
                  <li>Adaptive state machine with dynamic difficulty adjustments</li>
                  <li>Direct context mapping between candidate resume & target JD</li>
                  <li>Source-verified company intelligence and culture signals</li>
                  <li>Face-to-face video avatar with low-latency voice interaction</li>
                  <li>Incident scenario simulations (API latency, caching, webhooks)</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GoluAiSpotlight;
