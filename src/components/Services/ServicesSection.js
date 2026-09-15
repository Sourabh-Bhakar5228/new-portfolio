import React from "react";
import {
  FiLayout,
  FiCpu,
  FiServer,
  FiDatabase,
  FiCloud,
  FiShield,
} from "react-icons/fi";

const services = [
  {
    icon: <FiLayout />,
    title: "Full Stack Web Apps",
    desc: "End-to-end web applications built with React.js, Next.js, and TypeScript. Optimized for high responsiveness, SEO, and fluid UX.",
  },
  {
    icon: <FiCpu />,
    title: "AI & LLM Integration",
    desc: "Intelligent conversational chatbots, context streaming, automated LLM prompt workflows, and AI assistants (like Lots247 Legal Chatbot).",
  },
  {
    icon: <FiServer />,
    title: "REST & WebSocket APIs",
    desc: "Clean, modular API architectures built with NestJS, Express.js, and FastAPI. Real-time event communication via WebSockets.",
  },
  {
    icon: <FiDatabase />,
    title: "Database Modeling",
    desc: "Schema design, relational structuring in PostgreSQL/MySQL, NoSQL pipelines in MongoDB, and high-speed in-memory caching with Redis.",
  },
  {
    icon: <FiCloud />,
    title: "Docker & Cloud Setup",
    desc: "Containerizing microservices with Docker and Docker Compose, setting up CI/CD automation pipelines, and deploying to AWS/Vercel.",
  },
  {
    icon: <FiShield />,
    title: "RBAC & Payment Gateways",
    desc: "Enterprise-grade role-based access control (RBAC), JWT authentication, Razorpay payment processing, and transactional emailing.",
  },
];

const ServicesSection = () => {
  return (
    <section className="section-wrapper" id="services">
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <div className="section-tag">What I Offer</div>
        <h2 className="section-title">
          Specialized <span className="text-gradient">Services</span>
        </h2>
        <p className="section-subtitle">
          Delivering production-grade software solutions with a focus on speed, reliability, and maintainability.
        </p>
      </div>

      <div className="services-grid">
        {services.map((srv, index) => (
          <div key={index} className="service-card">
            <div className="service-icon-box">{srv.icon}</div>
            <h3 className="service-title">{srv.title}</h3>
            <p className="service-desc">{srv.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
