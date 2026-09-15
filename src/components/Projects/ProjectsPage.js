import React, { useState, useEffect } from "react";
import {
  FiGithub,
  FiExternalLink,
  FiStar,
  FiGitBranch,
  FiSearch,
  FiCode,
  FiLayers,
} from "react-icons/fi";
import chatImg from "../../Assets/Projects/chatify.png";
import blogImg from "../../Assets/Projects/blog.png";

// Flagship Featured Production Projects from Resume
const flagshipProjects = [
  {
    name: "AI Legal Chatbot — Lots247",
    description:
      "Production-ready AI legal chatbot integrated into Lots247 dashboard. Features conversational workflows, NestJS microservices, Node.js backend, and AI/LLM context streaming.",
    language: "Next.js / NestJS",
    stars: 12,
    forks: 4,
    html_url: "https://github.com/Sourabh-Bhakar5228",
    homepage: "https://lots247.in",
    isFlagship: true,
    image: chatImg,
    tech: ["Next.js", "TypeScript", "NestJS", "Node.js", "AI/LLM APIs", "Docker"],
  },
  {
    name: "HyGlam — Beauty Services Platform",
    description:
      "Full-stack appointment booking platform with customer & super admin RBAC, salon management, Razorpay payment gateway integration, and automated email notifications.",
    language: "React.js / FastAPI",
    stars: 15,
    forks: 5,
    html_url: "https://github.com/Sourabh-Bhakar5228",
    homepage: "https://hyglamofficial.com",
    isFlagship: true,
    image: blogImg,
    tech: ["React.js", "Node.js", "FastAPI", "Python", "MongoDB", "Razorpay"],
  },
];

// Fallback Repositories if GitHub API rate limits
const fallbackRepos = [
  {
    id: 1,
    name: "AI-Legal-Chatbot-Lots247",
    description: "AI-powered legal chatbot integration into production dashboard using Next.js, NestJS, and LLM APIs.",
    language: "TypeScript",
    stargazers_count: 8,
    forks_count: 2,
    html_url: "https://github.com/Sourabh-Bhakar5228",
    homepage: "https://lots247.in",
  },
  {
    id: 2,
    name: "HyGlam-Platform",
    description: "Beauty services appointment and salon management platform with Razorpay and RBAC.",
    language: "JavaScript",
    stargazers_count: 11,
    forks_count: 3,
    html_url: "https://github.com/Sourabh-Bhakar5228",
    homepage: "https://hyglamofficial.com",
  },
  {
    id: 3,
    name: "FastAPI-AI-Microservice",
    description: "Asynchronous Python FastAPI service for AI prompt orchestration and task workers.",
    language: "Python",
    stargazers_count: 6,
    forks_count: 1,
    html_url: "https://github.com/Sourabh-Bhakar5228",
    homepage: "",
  },
  {
    id: 4,
    name: "MERN-Admin-Dashboard",
    description: "Modular administrative dashboard with role-based access control and analytics charts.",
    language: "JavaScript",
    stargazers_count: 5,
    forks_count: 1,
    html_url: "https://github.com/Sourabh-Bhakar5228",
    homepage: "",
  },
  {
    id: 5,
    name: "DevSync-Realtime-Code",
    description: "Real-time collaborative code editor with WebSockets and Dockerized code runners.",
    language: "TypeScript",
    stargazers_count: 7,
    forks_count: 2,
    html_url: "https://github.com/Sourabh-Bhakar5228",
    homepage: "",
  },
];

const ProjectsPage = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLang, setSelectedLang] = useState("all");

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchGitHubRepos = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          "https://api.github.com/users/Sourabh-Bhakar5228/repos?sort=updated&per_page=100"
        );
        if (!res.ok) throw new Error("GitHub API rate limit or error");
        const data = await res.json();

        // Filter out private repos and forks (public original projects only)
        const publicRepos = data.filter(
          (repo) => !repo.private && !repo.fork
        );

        if (publicRepos && publicRepos.length > 0) {
          setRepos(publicRepos);
        } else {
          setRepos(fallbackRepos);
        }
      } catch (err) {
        console.warn("GitHub API error, using curated repositories:", err);
        setRepos(fallbackRepos);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubRepos();
  }, []);

  // Filter repos by search and language
  const filteredRepos = repos.filter((repo) => {
    const matchesSearch =
      repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (repo.description &&
        repo.description.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesLang =
      selectedLang === "all" ||
      (repo.language &&
        repo.language.toLowerCase() === selectedLang.toLowerCase());
    return matchesSearch && matchesLang;
  });

  // Extract unique languages for filter tabs
  const languages = [
    "all",
    ...Array.from(
      new Set(
        repos
          .map((r) => r.language)
          .filter(Boolean)
      )
    ),
  ];

  return (
    <div style={{ paddingTop: "120px", paddingBottom: "80px", minHeight: "100vh" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <div className="section-tag">GitHub & Production Portfolio</div>
          <h1 className="section-title">
            All <span className="text-gradient">Projects</span>
          </h1>
          <p className="section-subtitle">
            Live production platforms, client products, and real-time public repositories fetched directly from GitHub.
          </p>
        </div>

        {/* Part 1: Flagship Featured Production Projects */}
        <div style={{ marginBottom: "60px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "24px",
            }}
          >
            <FiLayers color="#38bdf8" size={20} />
            <h2 style={{ fontSize: "1.5rem", fontWeight: "700", margin: 0 }}>
              Flagship Production Deployments
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
              gap: "28px",
            }}
          >
            {flagshipProjects.map((proj, idx) => (
              <div key={idx} className="project-card">
                <div className="project-banner-wrap">
                  <img src={proj.image} alt={proj.name} />
                  <div className="project-banner-overlay" />
                  <span className="project-category-badge">Featured Production</span>
                </div>

                <div className="project-body">
                  <h3 className="project-title">{proj.name}</h3>
                  <p className="project-desc">{proj.description}</p>

                  <div className="project-tags-list">
                    {proj.tech.map((t, tIdx) => (
                      <span key={tIdx} className="project-tag">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="project-links" style={{ marginTop: "auto" }}>
                    {proj.homepage && (
                      <a
                        href={proj.homepage}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-neon-primary"
                        style={{ padding: "10px 18px", fontSize: "0.88rem", flex: 1 }}
                      >
                        <FiExternalLink />
                        <span>Live Site</span>
                      </a>
                    )}
                    <a
                      href={proj.html_url}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-neon-secondary"
                      style={{ padding: "10px 18px", fontSize: "0.88rem" }}
                    >
                      <FiGithub />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Part 2: Live GitHub Repositories Section */}
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "16px",
              marginBottom: "24px",
              paddingBottom: "16px",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <FiGithub color="#38bdf8" size={22} />
              <div>
                <h2 style={{ fontSize: "1.4rem", fontWeight: "700", margin: 0 }}>
                  Public GitHub Repositories
                </h2>
                <div style={{ fontSize: "0.82rem", color: "#94a3b8" }}>
                  Fetched dynamically from GitHub API (@Sourabh-Bhakar5228)
                </div>
              </div>
            </div>

            {/* Search Box */}
            <div style={{ position: "relative", width: "100%", maxWidth: "320px" }}>
              <FiSearch
                style={{
                  position: "absolute",
                  left: "14px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#94a3b8",
                }}
              />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search repositories..."
                style={{
                  width: "100%",
                  padding: "10px 14px 10px 38px",
                  background: "rgba(15, 23, 42, 0.8)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "10px",
                  color: "#ffffff",
                  fontSize: "0.9rem",
                  outline: "none",
                }}
              />
            </div>
          </div>

          {/* Language Filter Tabs */}
          {languages.length > 1 && (
            <div
              style={{
                display: "flex",
                gap: "8px",
                flexWrap: "wrap",
                marginBottom: "30px",
              }}
            >
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setSelectedLang(lang)}
                  className={`skill-tab-btn ${selectedLang === lang ? "active" : ""}`}
                  style={{ padding: "6px 14px", fontSize: "0.85rem" }}
                >
                  {lang === "all" ? "All Languages" : lang}
                </button>
              ))}
            </div>
          )}

          {/* Loading Skeletons */}
          {loading ? (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                gap: "20px",
              }}
            >
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <div
                  key={n}
                  className="glass-panel"
                  style={{ height: "180px", padding: "20px", opacity: 0.5 }}
                />
              ))}
            </div>
          ) : filteredRepos.length === 0 ? (
            <div
              className="glass-panel"
              style={{ padding: "40px", textAlign: "center" }}
            >
              <p style={{ color: "#94a3b8", fontSize: "1.1rem" }}>
                No repositories found matching "{searchTerm}".
              </p>
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
                gap: "22px",
              }}
            >
              {filteredRepos.map((repo) => (
                <div
                  key={repo.id || repo.name}
                  className="glass-panel"
                  style={{
                    padding: "24px",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: "10px",
                      marginBottom: "10px",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "1.15rem",
                        fontWeight: "700",
                        color: "#ffffff",
                        wordBreak: "break-word",
                        margin: 0,
                      }}
                    >
                      {repo.name}
                    </h3>

                    <div style={{ display: "flex", gap: "8px", flexShrink: 0 }}>
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: "#38bdf8", padding: "4px" }}
                        title="View Source on GitHub"
                      >
                        <FiGithub size={18} />
                      </a>
                      {repo.homepage && (
                        <a
                          href={repo.homepage}
                          target="_blank"
                          rel="noreferrer"
                          style={{ color: "#34d399", padding: "4px" }}
                          title="Open Live Deployment"
                        >
                          <FiExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  <p
                    style={{
                      fontSize: "0.88rem",
                      color: "#94a3b8",
                      lineHeight: "1.5",
                      marginBottom: "18px",
                      flexGrow: 1,
                    }}
                  >
                    {repo.description || "Production-focused codebase and developer utilities."}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      fontSize: "0.8rem",
                      fontFamily: "var(--font-mono)",
                      color: "#64748b",
                      marginTop: "auto",
                      paddingTop: "12px",
                      borderTop: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    {repo.language && (
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                          color: "#7dd3fc",
                          background: "rgba(56, 189, 248, 0.08)",
                          padding: "2px 8px",
                          borderRadius: "6px",
                        }}
                      >
                        <FiCode size={13} /> {repo.language}
                      </span>
                    )}

                    <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                      <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                        <FiStar size={13} color="#f59e0b" /> {repo.stargazers_count || 0}
                      </span>
                      <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                        <FiGitBranch size={13} /> {repo.forks_count || 0}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
