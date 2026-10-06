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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedLocation, setCopiedLocation] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/bhakarsoursbh@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            _subject:
              formData.subject ||
              `New Portfolio Contact Inquiry from ${formData.name}`,
            message: formData.message,
            _captcha: "false",
            _template: "table",
          }),
        }
      );

      const data = await response.json();

      if (response.ok || data.success) {
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
      } else {
        throw new Error(data.message || "Failed to send message via server.");
      }
    } catch (err) {
      console.warn("Direct form submit fallback:", err);
      // Fallback: If network issue or blocked, trigger mailto link so user message is never lost
      const mailtoUrl = `mailto:bhakarsoursbh@gmail.com?subject=${encodeURIComponent(
        formData.subject || `Inquiry from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;

      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else if (type === "phone") {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } else if (type === "location") {
      setCopiedLocation(true);
      setTimeout(() => setCopiedLocation(false), 2000);
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
            Have an open software engineering role, project, or collaboration?
            My inbox is always open.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left: Contact Info */}
          <div className="contact-info-panel">
            <h3
              style={{
                fontSize: "1.8rem",
                fontWeight: "700",
                marginBottom: "8px",
              }}
            >
              Start a Conversation
            </h3>
            <p
              style={{ color: "#94a3b8", fontSize: "1rem", lineHeight: "1.7" }}
            >
              I am actively looking for software engineering opportunities (Full
              Stack, Backend, Frontend, and AI integrations). Feel free to reach
              out directly via email, phone, or LinkedIn!
            </p>

            {/* Email Card */}
            <div className="contact-item-card">
              <div className="contact-icon-wrap">
                <FiMail />
              </div>
              <div style={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "#94a3b8",
                    fontFamily: "var(--font-mono)",
                    lineHeight: "1.2",
                    marginBottom: "3px",
                  }}
                >
                  EMAIL ME
                </div>
                <a
                  href="mailto:bhakarsoursbh@gmail.com"
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: "600",
                    color: "#ffffff",
                    lineHeight: "1.3",
                  }}
                >
                  bhakarsoursbh@gmail.com
                </a>
              </div>
              <button
                onClick={() =>
                  copyToClipboard("bhakarsoursbh@gmail.com", "email")
                }
                style={{
                  background: "transparent",
                  border: "none",
                  color: copiedEmail ? "#10b981" : "#94a3b8",
                  cursor: "pointer",
                  padding: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
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
              <div style={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "#94a3b8",
                    fontFamily: "var(--font-mono)",
                    lineHeight: "1.2",
                    marginBottom: "3px",
                  }}
                >
                  CALL / WHATSAPP
                </div>
                <a
                  href="tel:+918307802850"
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: "600",
                    color: "#ffffff",
                    lineHeight: "1.3",
                  }}
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
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
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
              <div style={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "#94a3b8",
                    fontFamily: "var(--font-mono)",
                    lineHeight: "1.2",
                    marginBottom: "3px",
                  }}
                >
                  LOCATION
                </div>
                <div
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: "600",
                    color: "#ffffff",
                    lineHeight: "1.3",
                  }}
                >
                  Gurugram, Haryana, India
                </div>
              </div>
              <button
                onClick={() =>
                  copyToClipboard("Gurugram, Haryana, India", "location")
                }
                style={{
                  background: "transparent",
                  border: "none",
                  color: copiedLocation ? "#10b981" : "#94a3b8",
                  cursor: "pointer",
                  padding: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
                title="Copy Location"
              >
                {copiedLocation ? <FiCheck size={18} /> : <FiCopy size={18} />}
              </button>
            </div>

            {/* Resume Download and Social Links */}
            <div
              style={{
                display: "flex",
                gap: "14px",
                flexWrap: "wrap",
                marginTop: "10px",
              }}
            >
              <a
                href="/sourabh-bhakar.pdf"
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
            <h3
              style={{
                fontSize: "1.4rem",
                fontWeight: "700",
                marginBottom: "20px",
              }}
            >
              Send a Direct Message
            </h3>

            {submitted ? (
              <div
                style={{
                  padding: "30px 24px",
                  background: "rgba(16, 185, 129, 0.12)",
                  border: "1px solid rgba(16, 185, 129, 0.35)",
                  borderRadius: "18px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "50%",
                    background: "#10b981",
                    color: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 16px auto",
                    fontSize: "1.6rem",
                    boxShadow: "0 0 25px rgba(16, 185, 129, 0.4)",
                  }}
                >
                  <FiCheck />
                </div>
                <h4 style={{ color: "#ffffff", fontSize: "1.25rem", fontWeight: "700", marginBottom: "8px" }}>
                  Message Delivered Directly to Email!
                </h4>
                <p style={{ color: "#cbd5e1", fontSize: "0.94rem", lineHeight: "1.6", maxWidth: "420px", margin: "0 auto 20px auto" }}>
                  Thank you for reaching out, <strong style={{ color: "#ffffff" }}>{formData.name || "friend"}</strong>. Your inquiry has been dispatched to <strong style={{ color: "#38bdf8" }}>bhakarsoursbh@gmail.com</strong>. Sourabh will reply to you shortly!
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", subject: "", message: "" });
                  }}
                  className="btn-neon-secondary"
                  style={{ padding: "10px 22px", fontSize: "0.9rem" }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div>
                  <label
                    style={{
                      fontSize: "0.85rem",
                      color: "#cbd5e1",
                      marginBottom: "6px",
                      display: "block",
                    }}
                  >
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
                  <label
                    style={{
                      fontSize: "0.85rem",
                      color: "#cbd5e1",
                      marginBottom: "6px",
                      display: "block",
                    }}
                  >
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
                  <label
                    style={{
                      fontSize: "0.85rem",
                      color: "#cbd5e1",
                      marginBottom: "6px",
                      display: "block",
                    }}
                  >
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
                  <label
                    style={{
                      fontSize: "0.85rem",
                      color: "#cbd5e1",
                      marginBottom: "6px",
                      display: "block",
                    }}
                  >
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
                  disabled={isSubmitting}
                  className="btn-neon-primary"
                  style={{
                    width: "100%",
                    padding: "14px",
                    opacity: isSubmitting ? 0.75 : 1,
                    cursor: isSubmitting ? "not-allowed" : "pointer",
                  }}
                >
                  <FiSend />
                  <span>
                    {isSubmitting
                      ? "Delivering to bhakarsoursbh@gmail.com..."
                      : "Send Message"}
                  </span>
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
