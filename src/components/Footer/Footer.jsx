import React from "react";
import { FaFacebookF, FaInstagram, FaHeart } from "react-icons/fa";
import { MdArrowForwardIos } from "react-icons/md";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__content container">
          
          <div className="footer__company-info">
            <img
              className="footer__logo"
              src="/site-main-logo.png"
              alt="Faiz Dev & Co. Logo"
            />
            <p className="footer__description">
              A web agency based in Northeast India, delivering innovative
              website design and development.
            </p>
            <div className="footer__social-icons">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="footer__social-icon" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="footer__social-icon" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="footer__company-links">
            <ul className="footer__links-list">
              <li className="footer__heading">Company</li>
              <li>
                <MdArrowForwardIos className="footer__link-icon" /> Contact Us
              </li>
              <li>
                <MdArrowForwardIos className="footer__link-icon" />
                Privacy Policy
              </li>
              <li>
                <MdArrowForwardIos className="footer__link-icon" />
                Career
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="footer__quick-links">
            <ul className="footer__links-list">
              <li className="footer__heading">Quick Links</li>
              <li>
                <MdArrowForwardIos className="footer__link-icon" /> About Us
              </li>
              <li>
                <MdArrowForwardIos className="footer__link-icon" /> Pricing
              </li>
              <li>
                <MdArrowForwardIos className="footer__link-icon" /> Portfolio
              </li>
            </ul>
          </div>
        </div>
      </footer>

      {/* Below-Footer Section */}
      <div className="footer__bottom">
        <p className="footer__bottom-text footer__bottom-text--primary">
          © 2025 - All Rights Reserved | Faiz Dev & Co.
        </p>
        <p className="footer__bottom-text footer__bottom-text--secondary">
          Developed with <FaHeart className="footer__heart-icon" />{" "}
          <a href="#" target="_blank" rel="noopener noreferrer">
            Faiz Dev & Co.
          </a>
        </p>
      </div>
    </>
  );
};

export default Footer;
