import { useState, useRef } from "react";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Portfolio Inquiry",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [focusedField, setFocusedField] = useState("");
  const formRef = useRef(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

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
            ...formData,
            _subject: `${formData.name} - Portfolio Inquiry`,
            _template: "box",
            _autoresponse: `Thank you for contacting me! I'll get back to you soon.`,
          }),
        }
      );

      if (!response.ok) throw new Error("Network response was not ok");

      setIsSubmitting(false);
      setSubmitted(true);

      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: "",
          email: "",
          subject: "Portfolio Inquiry",
          message: "",
        });
      }, 4000);
    } catch (err) {
      console.error("Submission error:", err);
      setIsSubmitting(false);
      setError("Failed to send message. Please try again later.");

      if (formRef.current) {
        formRef.current.classList.add("shake-animation");
        setTimeout(() => {
          formRef.current.classList.remove("shake-animation");
        }, 500);
      }
    }
  };

  // Social media links
  const socialLinks = [
    { name: "GitHub", icon: "github", url: "/" },
    { name: "LinkedIn", icon: "linkedin", url: "/" },
    { name: "Twitter", icon: "twitter", url: "/" },
    { name: "Instagram", icon: "instagram", url: "/" },
  ];

  // Contact info items
  const contactItems = [
    {
      icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
      title: "Location",
      content: "Based in India",
    },
    {
      icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
      title: "Email",
      content: "bhakarsoursbh@gmail.com",
    },
    {
      icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
      title: "Availability",
      content: "Mon-Fri • 9AM-6PM IST",
    },
  ];

  return (
    <>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css"
      />

      <section id="contact" className="contact-section">
        <div className="contact-container">
          {/* Header */}
          <div className="text-center mb-5 fade-in-up">
            <h1 className="display-4 fw-bold text-white mb-4">
              <span className="gradient-text">Contact Me</span>
            </h1>
            <p className="lead text-light mx-auto fade-in-up-delayed">
              Interested in working together? Feel free to reach out!
            </p>
          </div>

          <div className="row g-5 align-items-start">
            {/* Contact Information Card */}
            <div className="col-lg-5">
              <div className="fade-in-right">
                <div className="contact-card">
                  <div className="card-body p-4">
                    <h3 className="card-title h2 fw-bold text-white mb-4">
                      Let's Connect
                    </h3>

                    <div className="d-flex flex-column gap-4">
                      {contactItems.map((item, i) => (
                        <div
                          key={i}
                          className="d-flex align-items-center fade-in-up"
                          style={{ animationDelay: `${i * 0.2}s` }}
                        >
                          <div className="flex-shrink-0 me-3">
                            <div className="contact-icon">
                              <svg
                                width="24"
                                height="24"
                                fill="none"
                                stroke="white"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d={item.icon}
                                />
                              </svg>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-white fw-semibold mb-1">
                              {item.title}
                            </h4>
                            <p className="text-light mb-0">{item.content}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Social Links */}
                    <div className="mt-5 pt-3">
                      <h5 className="text-white fw-semibold mb-3">Follow Me</h5>
                      <div className="d-flex gap-3">
                        {socialLinks.map((social, i) => (
                          <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            style={{ animationDelay: `${0.5 + i * 0.1}s` }}
                          >
                            <div className="social-icon">
                              <i className={`bi bi-${social.icon}`} />
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-7">
              <div className="fade-in-left">
                <div ref={formRef} className="contact-card">
                  <div className="card-body p-4">
                    {submitted ? (
                      <div className="text-center py-5 fade-in">
                        <div className="success-icon">
                          <svg
                            width="48"
                            height="48"
                            fill="none"
                            stroke="white"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <h3 className="display-6 fw-bold text-white mb-3">
                          Message Sent!
                        </h3>
                        <p className="text-light">
                          Thank you for reaching out! I'll get back to you soon.
                        </p>
                        <div className="d-flex justify-content-center mt-4 gap-2">
                          {[0, 0.2, 0.4].map((delay) => (
                            <div
                              key={delay}
                              className="dot-animate"
                              style={{ animationDelay: `${delay}s` }}
                            />
                          ))}
                        </div>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit}>
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_template" value="box" />
                        <input
                          type="hidden"
                          name="_subject"
                          value="New Portfolio Contact!"
                        />
                        <input
                          type="hidden"
                          name="_autoresponse"
                          value="Thanks for contacting me! I'll get back to you soon."
                        />

                        <h3 className="card-title h2 fw-bold text-white mb-4">
                          Send a Message
                        </h3>

                        {error && (
                          <div className="alert alert-danger fade-in">
                            {error}
                          </div>
                        )}

                        <div className="row g-3">
                          <div className="col-md-6">
                            <div
                              className="mb-3 fade-in-up"
                              style={{ animationDelay: "0.1s" }}
                            >
                              <label className="form-label text-light fw-semibold">
                                Your Name *
                              </label>
                              <input
                                type="text"
                                className={`form-control ${
                                  focusedField === "name" ? "focused-input" : ""
                                }`}
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                onFocus={() => setFocusedField("name")}
                                onBlur={() => setFocusedField("")}
                                placeholder="John Doe"
                                required
                              />
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div
                              className="mb-3 fade-in-up"
                              style={{ animationDelay: "0.2s" }}
                            >
                              <label className="form-label text-light fw-semibold">
                                Email Address *
                              </label>
                              <input
                                type="email"
                                className={`form-control ${
                                  focusedField === "email"
                                    ? "focused-input"
                                    : ""
                                }`}
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                onFocus={() => setFocusedField("email")}
                                onBlur={() => setFocusedField("")}
                                placeholder="john@example.com"
                                required
                              />
                            </div>
                          </div>

                          <div className="col-12">
                            <div
                              className="mb-3 fade-in-up"
                              style={{ animationDelay: "0.3s" }}
                            >
                              <label className="form-label text-light fw-semibold">
                                Subject *
                              </label>
                              <input
                                type="text"
                                className={`form-control ${
                                  focusedField === "subject"
                                    ? "focused-input"
                                    : ""
                                }`}
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                onFocus={() => setFocusedField("subject")}
                                onBlur={() => setFocusedField("")}
                                required
                              />
                            </div>
                          </div>

                          <div className="col-12">
                            <div
                              className="mb-4 fade-in-up"
                              style={{ animationDelay: "0.4s" }}
                            >
                              <label className="form-label text-light fw-semibold">
                                Your Message *
                              </label>
                              <textarea
                                className={`form-control ${
                                  focusedField === "message"
                                    ? "focused-input"
                                    : ""
                                }`}
                                name="message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                onFocus={() => setFocusedField("message")}
                                onBlur={() => setFocusedField("")}
                                placeholder="Hello, I'd like to talk about..."
                                required
                              />
                            </div>
                          </div>

                          <div className="col-12">
                            <div
                              className="fade-in-up"
                              style={{ animationDelay: "0.5s" }}
                            >
                              <button
                                type="submit"
                                className="submit-button"
                                disabled={isSubmitting}
                              >
                                {isSubmitting ? (
                                  <>
                                    <span>Sending...</span>
                                    <div className="submit-spinner" />
                                  </>
                                ) : (
                                  "Send Message"
                                )}
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
