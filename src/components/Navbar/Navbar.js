import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FiDownload } from "react-icons/fi";

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

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className={`custom-navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        {/* Brand Logo */}
        <Link to="/" className="navbar-brand-custom">
          <div className="brand-logo-badge">SB</div>
          <div>
            <div className="brand-name">Sourabh Bhakar</div>
            <div style={{ fontSize: "0.75rem", color: "#38bdf8", fontFamily: "var(--font-mono)" }}>
              Full Stack • AI
            </div>
          </div>
        </Link>

        {/* Status Beacon on Desktop */}
        <div className="status-beacon d-none d-xl-flex">
          <span className="status-dot" />
          <span>Open to International Relocation & Remote</span>
        </div>

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
              href="/bhakar-ai.pdf"
              download="Sourabh_Bhakar_Resume.pdf"
              className="nav-btn-hire"
              style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}
            >
              <FiDownload />
              <span>Resume</span>
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger Toggle */}
        <button
          className="mobile-toggle-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer">
          <div className="status-beacon" style={{ alignSelf: "flex-start", marginBottom: "10px" }}>
            <span className="status-dot" />
            <span>Open to Relocation & Remote</span>
          </div>
          {navLinks.map((item) => {
            const isActive =
              item.path === "/"
                ? location.pathname === "/"
                : location.pathname.startsWith(item.path);

            return (
              <Link
                key={item.name}
                to={item.path}
                className={`nav-link-item ${isActive ? "active" : ""}`}
                style={{ fontSize: "1.1rem", padding: "8px 0" }}
              >
                {item.name}
              </Link>
            );
          })}
          <a
            href="/bhakar-ai.pdf"
            download="Sourabh_Bhakar_Resume.pdf"
            className="btn-neon-primary"
            style={{ marginTop: "12px", width: "100%" }}
          >
            <FiDownload />
            <span>Download Resume</span>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
