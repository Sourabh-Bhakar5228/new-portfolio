import React, { useState } from "react";
import confetti from "canvas-confetti";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiCheck,
  FiCopy,
  FiDownload,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#38bdf8", "#818cf8", "#a855f7", "#10b981"],
      });
    } catch (err) {
      console.log(err);
    }

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 5000);
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section className="section-wrapper" id="contact">
      <div className="contact-container">
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <div className="section-tag">Get In Touch</div>
          <h2 className="section-title">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="section-subtitle">
            Have an open software engineering role, project, or collaboration? My inbox is always open.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left: Contact Info */}
          <div className="contact-info-panel">
            <h3 style={{ fontSize: "1.8rem", fontWeight: "700", marginBottom: "8px" }}>
              Start a Conversation
            </h3>
            <p style={{ color: "#94a3b8", fontSize: "1rem", lineHeight: "1.7" }}>
              I am actively looking for software engineering opportunities (Full Stack, Backend, Frontend, and AI integrations). Feel free to reach out directly via email, phone, or LinkedIn!
            </p>

            {/* Email Card */}
            <div className="contact-item-card">
              <div className="contact-icon-wrap">
                <FiMail />
              </div>
              <div style={{ flexGrow: 1 }}>
                <div style={{ fontSize: "0.8rem", color: "#94a3b8", fontFamily: "var(--font-mono)" }}>
                  EMAIL ME
                </div>
                <a
                  href="mailto:bhakarsoursbh@gmail.com"
                  style={{ fontSize: "1.05rem", fontWeight: "600", color: "#ffffff" }}
                >
                  bhakarsoursbh@gmail.com
                </a>
              </div>
              <button
                onClick={() => copyToClipboard("bhakarsoursbh@gmail.com", "email")}
                style={{
                  background: "transparent",
                  border: "none",
                  color: copiedEmail ? "#10b981" : "#94a3b8",
                  cursor: "pointer",
                  padding: "8px",
                }}
                title="Copy Email"
              >
                {copiedEmail ? <FiCheck size={18} /> : <FiCopy size={18} />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="contact-item-card">
              <div className="contact-icon-wrap">
                <FiPhone />
              </div>
              <div style={{ flexGrow: 1 }}>
                <div style={{ fontSize: "0.8rem", color: "#94a3b8", fontFamily: "var(--font-mono)" }}>
                  CALL / WHATSAPP
                </div>
                <a
                  href="tel:+918307802850"
                  style={{ fontSize: "1.05rem", fontWeight: "600", color: "#ffffff" }}
                >
                  +91 8307802850
                </a>
              </div>
              <button
                onClick={() => copyToClipboard("+918307802850", "phone")}
                style={{
                  background: "transparent",
                  border: "none",
                  color: copiedPhone ? "#10b981" : "#94a3b8",
                  cursor: "pointer",
                  padding: "8px",
                }}
                title="Copy Phone"
              >
                {copiedPhone ? <FiCheck size={18} /> : <FiCopy size={18} />}
              </button>
            </div>

            {/* Location Card */}
            <div className="contact-item-card">
              <div className="contact-icon-wrap">
                <FiMapPin />
              </div>
              <div>
                <div style={{ fontSize: "0.8rem", color: "#94a3b8", fontFamily: "var(--font-mono)" }}>
                  LOCATION
                </div>
                <div style={{ fontSize: "1.05rem", fontWeight: "600", color: "#ffffff" }}>
                  Gurugram, Haryana, India (Open to International Relocation)
                </div>
              </div>
            </div>

            {/* Resume Download and Social Links */}
            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginTop: "10px" }}>
              <a
                href="/bhakar-ai.pdf"
                download="Sourabh_Bhakar_Resume.pdf"
                className="btn-neon-primary"
                style={{ flex: 1 }}
              >
                <FiDownload />
                <span>Download Resume (PDF)</span>
              </a>

              <a
                href="https://www.linkedin.com/in/sourabh-bhakar/"
                target="_blank"
                rel="noreferrer"
                className="btn-neon-secondary"
                title="LinkedIn Profile"
              >
                <FiLinkedin size={18} />
              </a>

              <a
                href="https://github.com/Sourabh-Bhakar5228"
                target="_blank"
                rel="noreferrer"
                className="btn-neon-secondary"
                title="GitHub Profile"
              >
                <FiGithub size={18} />
              </a>
            </div>
          </div>

          {/* Right: Message Form */}
          <div className="glass-panel" style={{ padding: "36px" }}>
            <h3 style={{ fontSize: "1.4rem", fontWeight: "700", marginBottom: "20px" }}>
              Send a Direct Message
            </h3>

            {submitted ? (
              <div
                style={{
                  padding: "24px",
                  background: "rgba(16, 185, 129, 0.15)",
                  border: "1px solid rgba(16, 185, 129, 0.3)",
                  borderRadius: "14px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    background: "#10b981",
                    color: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 12px auto",
                    fontSize: "1.5rem",
                  }}
                >
                  <FiCheck />
                </div>
                <h4 style={{ color: "#ffffff", marginBottom: "8px" }}>Message Sent Successfully!</h4>
                <p style={{ color: "#cbd5e1", fontSize: "0.92rem", margin: 0 }}>
                  Thank you for reaching out, {formData.name || "friend"}. I will respond to your inquiry promptly!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div>
                  <label style={{ fontSize: "0.85rem", color: "#cbd5e1", marginBottom: "6px", display: "block" }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Henderson"
                    className="contact-input-field"
                  />
                </div>

                <div>
                  <label style={{ fontSize: "0.85rem", color: "#cbd5e1", marginBottom: "6px", display: "block" }}>
                    Your Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. alex@company.com"
                    className="contact-input-field"
                  />
                </div>

                <div>
                  <label style={{ fontSize: "0.85rem", color: "#cbd5e1", marginBottom: "6px", display: "block" }}>
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Software Engineer Role / Project Discussion"
                    className="contact-input-field"
                  />
                </div>

                <div>
                  <label style={{ fontSize: "0.85rem", color: "#cbd5e1", marginBottom: "6px", display: "block" }}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your team, tech stack, or the project requirements..."
                    className="contact-input-field"
                    style={{ resize: "vertical" }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-neon-primary"
                  style={{ width: "100%", padding: "14px" }}
                >
                  <FiSend />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
