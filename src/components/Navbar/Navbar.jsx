import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 3) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={isScrolled ? "scrolled" : ""}>
      <nav className="navbar primary-container">
        <div className="navbar-logo-container">
          <Link to="/">
            <img
              className="nav-logo"
              src="/site-main-logo.png"
              alt="nav_logo"
              loading="eager"
            />
          </Link>
        </div>
        <div
          className={`hamburger-menu ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`nav-content ${isMenuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link to="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to="/#services" onClick={toggleMenu}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/#pricing" onClick={toggleMenu}>
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/portfolio" onClick={toggleMenu}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/#contact" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
            <li>
              <a
                className="btn btn-primary btn-ctrl"
                href="tel:+917294800465"
                onClick={toggleMenu}
              >
                +91 7294800465
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
