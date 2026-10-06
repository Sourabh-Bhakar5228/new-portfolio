import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import {
  FiDownload,
  FiHome,
  FiUser,
  FiBriefcase,
  FiLayers,
  FiFileText,
  FiMail,
  FiChevronRight,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";

const logoImg = "/assets/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change & reset scroll
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Home", path: "/", icon: <FiHome /> },
    { name: "About", path: "/about", icon: <FiUser /> },
    { name: "Experience", path: "/experience", icon: <FiBriefcase /> },
    { name: "Projects", path: "/projects", icon: <FiLayers /> },
    { name: "Resume", path: "/resume", icon: <FiFileText /> },
    { name: "Contact", path: "/contact", icon: <FiMail /> },
  ];

  return (
    <>
      <nav className={`custom-navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          {/* Brand Logo */}
          <Link
            to="/"
            className="navbar-brand-custom"
            onClick={() => setMobileMenuOpen(false)}
          >
            <img
              src={logoImg}
              alt="Sourabh Bhakar Logo"
              className="brand-logo-badge"
              style={{
                objectFit: "cover",
                padding: 0,
                border: "1px solid rgba(56, 189, 248, 0.4)",
                boxShadow: "0 0 15px rgba(56, 189, 248, 0.25)",
              }}
            />
            <div>
              <div className="brand-name">Sourabh Bhakar</div>
              <div className="brand-subtitle">
                Full Stack • AI
              </div>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <ul className="nav-menu-desktop">
            {navLinks.map((item) => {
              const isActive =
                item.path === "/"
                  ? location.pathname === "/"
                  : location.pathname.startsWith(item.path);

              return (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={`nav-link-item ${isActive ? "active" : ""}`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
            <li>
              <a
                href="/sourabh-bhakar.pdf"
                download="Sourabh_Bhakar_Resume.pdf"
                className="nav-btn-hire"
                style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}
              >
                <FiDownload />
                <span>Resume</span>
              </a>
            </li>
          </ul>

          {/* Mobile Hamburger Toggle Button */}
          <button
            className={`mobile-toggle-btn ${mobileMenuOpen ? "active" : ""}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </nav>

      {/* Mobile Backdrop Overlay */}
      {mobileMenuOpen && (
        <div
          className="mobile-nav-backdrop"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Slide-down Glass Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? "open" : ""}`}>
        <div className="mobile-drawer-header">
          <div className="mobile-drawer-brand">
            <img
              src={logoImg}
              alt="Sourabh Bhakar Logo"
              className="brand-logo-badge small"
              style={{
                objectFit: "cover",
                padding: 0,
                border: "1px solid rgba(56, 189, 248, 0.4)",
                boxShadow: "0 0 15px rgba(56, 189, 248, 0.25)",
              }}
            />
            <div>
              <div className="brand-name" style={{ fontSize: "1.1rem" }}>Sourabh Bhakar</div>
              <div className="brand-subtitle">Full Stack & AI Engineer</div>
            </div>
          </div>
          <button
            className="mobile-drawer-close-btn"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <HiX />
          </button>
        </div>



        {/* Menu Navigation Links */}
        <div className="mobile-nav-list">
          {navLinks.map((item) => {
            const isActive =
              item.path === "/"
                ? location.pathname === "/"
                : location.pathname.startsWith(item.path);

            return (
              <Link
                key={item.name}
                to={item.path}
                className={`mobile-nav-link ${isActive ? "active" : ""}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="mobile-nav-link-content">
                  <span className="mobile-nav-icon">{item.icon}</span>
                  <span className="mobile-nav-label">{item.name}</span>
                </div>
                <FiChevronRight className="mobile-nav-chevron" />
              </Link>
            );
          })}
        </div>

        {/* Mobile Drawer Footer Actions */}
        <div className="mobile-drawer-footer">
          <a
            href="/sourabh-bhakar.pdf"
            download="Sourabh_Bhakar_Resume.pdf"
            className="btn-neon-primary"
            style={{ width: "100%", justifyContent: "center", padding: "12px 18px" }}
          >
            <FiDownload />
            <span>Download Resume (PDF)</span>
          </a>

          <div className="mobile-social-row">
            <a
              href="https://github.com/Sourabh-Bhakar5228"
              target="_blank"
              rel="noreferrer"
              className="mobile-social-btn"
              title="GitHub"
            >
              <FiGithub />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/sourabh-bhakar/"
              target="_blank"
              rel="noreferrer"
              className="mobile-social-btn"
              title="LinkedIn"
            >
              <FiLinkedin />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:bhakarsoursbh@gmail.com"
              className="mobile-social-btn"
              title="Email"
            >
              <FiMail />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
