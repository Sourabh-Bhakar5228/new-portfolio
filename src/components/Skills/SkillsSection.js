import React, { useState } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiPython,
  SiFastapi,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiPrisma,
  SiRedis,
  SiDocker,
  SiAmazonaws,
  SiGit,
  SiLinux,
} from "react-icons/si";
import { FaRobot, FaBrain, FaLock, FaServer } from "react-icons/fa";

const skillsData = [
  // Frontend
  {
    name: "React.js",
    category: "frontend",
    level: "Advanced (2+ yrs)",
    desc: "Custom hooks, Virtual DOM, state management, SPA performance, and 3D integration.",
    icon: <SiReact />,
    progress: 95,
  },
  {
    name: "Next.js",
    category: "frontend",
    level: "Advanced",
    desc: "Server-side rendering (SSR), SSG, App Router, API routes, and SEO-optimized apps.",
    icon: <SiNextdotjs />,
    progress: 92,
  },
  {
    name: "TypeScript",
    category: "frontend",
    level: "Proficient",
    desc: "Strict type safety, generic interfaces, scalable enterprise frontend & backend code.",
    icon: <SiTypescript />,
    progress: 90,
  },
  {
    name: "JavaScript (ES6+)",
    category: "frontend",
    level: "Expert",
    desc: "Async/await, closures, event loop, functional programming, and modern ECMAScript.",
    icon: <SiJavascript />,
    progress: 96,
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    level: "Expert",
    desc: "Responsive utility-first layouts, modern dark themes, animations & custom tokens.",
    icon: <SiTailwindcss />,
    progress: 95,
  },
  {
    name: "Redux / Toolkit",
    category: "frontend",
    level: "Proficient",
    desc: "Global state slices, thunks, RTK Query caching, and state synchronization.",
    icon: <SiRedux />,
    progress: 88,
  },

  // Backend
  {
    name: "Node.js",
    category: "backend",
    level: "Advanced (2+ yrs)",
    desc: "Non-blocking event-driven architecture, high concurrency I/O, and microservices.",
    icon: <SiNodedotjs />,
    progress: 94,
  },
  {
    name: "NestJS",
    category: "backend",
    level: "Proficient",
    desc: "Enterprise modular architecture, dependency injection, decorators, and scalable APIs.",
    icon: <SiNestjs />,
    progress: 88,
  },
  {
    name: "Express.js",
    category: "backend",
    level: "Advanced",
    desc: "Custom middleware, secure routing, error interceptors, and high-performance endpoints.",
    icon: <SiExpress />,
    progress: 93,
  },
  {
    name: "Python",
    category: "backend",
    level: "Proficient",
    desc: "Backend services, data parsing, scripting, and AI orchestration pipelines.",
    icon: <SiPython />,
    progress: 86,
  },
  {
    name: "FastAPI",
    category: "backend",
    level: "Proficient",
    desc: "Ultra-fast asynchronous Python APIs, Pydantic type validation, OpenAPI docs.",
    icon: <SiFastapi />,
    progress: 87,
  },
  {
    name: "REST & WebSockets",
    category: "backend",
    level: "Advanced",
    desc: "Clean RESTful design, real-time bi-directional streaming, socket events.",
    icon: <FaServer />,
    progress: 92,
  },

  // Database
  {
    name: "MongoDB",
    category: "database",
    level: "Advanced",
    desc: "Aggregation pipelines, schema modeling with Mongoose, indexing, and sharding.",
    icon: <SiMongodb />,
    progress: 92,
  },
  {
    name: "PostgreSQL",
    category: "database",
    level: "Proficient",
    desc: "Relational data schema, complex joins, indexing, ACID transactions, and optimization.",
    icon: <SiPostgresql />,
    progress: 88,
  },
  {
    name: "MySQL",
    category: "database",
    level: "Proficient",
    desc: "Structured queries, stored procedures, relations, and production stability.",
    icon: <SiMysql />,
    progress: 85,
  },
  {
    name: "Prisma ORM",
    category: "database",
    level: "Proficient",
    desc: "Type-safe database migrations, declarative schema models, and queries.",
    icon: <SiPrisma />,
    progress: 86,
  },
  {
    name: "Redis",
    category: "database",
    level: "Proficient",
    desc: "In-memory caching, session storage, rate limiting, and pub/sub message brokers.",
    icon: <SiRedis />,
    progress: 82,
  },

  // DevOps / Cloud
  {
    name: "Docker & Compose",
    category: "devops",
    level: "Proficient",
    desc: "Multi-stage container builds, containerized dev environments, and orchestration.",
    icon: <SiDocker />,
    progress: 86,
  },
  {
    name: "AWS (S3 / EC2)",
    category: "devops",
    level: "Intermediate",
    desc: "Cloud storage, virtual instances, server configuration, and environment setup.",
    icon: <SiAmazonaws />,
    progress: 78,
  },
  {
    name: "Git & GitHub/GitLab",
    category: "devops",
    level: "Advanced",
    desc: "Git branching strategies, code reviews, PR workflows, CI/CD integrations.",
    icon: <SiGit />,
    progress: 94,
  },
  {
    name: "Linux & Vercel",
    category: "devops",
    level: "Proficient",
    desc: "Server administration, bash commands, SSH, edge deployment, and CI pipelines.",
    icon: <SiLinux />,
    progress: 88,
  },

  // AI & Architecture
  {
    name: "AI Chatbots & LLMs",
    category: "ai",
    level: "Production Implemented",
    desc: "Built Lots247 legal chatbot, context management, prompt engineering, and API integration.",
    icon: <FaRobot />,
    progress: 90,
  },
  {
    name: "Gemini / OpenAI APIs",
    category: "ai",
    level: "Advanced",
    desc: "Function calling, prompt chains, token optimization, and intelligent workflows.",
    icon: <FaBrain />,
    progress: 89,
  },
  {
    name: "Authentication & RBAC",
    category: "ai",
    level: "Advanced",
    desc: "JWT, OAuth, role-based access control, session tokens, and security best practices.",
    icon: <FaLock />,
    progress: 94,
  },
];

const SkillsSection = () => {
  const [filter, setFilter] = useState("all");

  const categories = [
    { id: "all", label: "All Skills" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "database", label: "Databases" },
    { id: "devops", label: "DevOps & Cloud" },
    { id: "ai", label: "AI & Security" },
  ];

  const filteredSkills =
    filter === "all"
      ? skillsData
      : skillsData.filter((skill) => skill.category === filter);

  return (
    <section className="section-wrapper" id="skills">
      <div className="skills-container">
        <div style={{ textAlign: "center", marginBottom: "35px" }}>
          <div className="section-tag">Capabilities</div>
          <h2 className="section-title">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive overview of technologies, tools, and frameworks I use to engineer robust digital products.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="skills-tab-bar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`skill-tab-btn ${filter === cat.id ? "active" : ""}`}
              onClick={() => setFilter(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-card-top">
                <div className="skill-icon-wrap">{skill.icon}</div>
                <span className="skill-level-badge">{skill.level}</span>
              </div>

              <h4 className="skill-name">{skill.name}</h4>
              <p className="skill-desc">{skill.desc}</p>

              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "0.75rem",
                    fontFamily: "var(--font-mono)",
                    color: "#94a3b8",
                    marginBottom: "6px",
                  }}
                >
                  <span>Proficiency</span>
                  <span style={{ color: "#38bdf8" }}>{skill.progress}%</span>
                </div>
                <div className="skill-progress-track">
                  <div
                    className="skill-progress-bar"
                    style={{ width: `${skill.progress}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
