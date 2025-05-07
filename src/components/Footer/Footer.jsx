import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { AiTwotoneCode } from "react-icons/ai";
import { MdArrowForwardIos } from "react-icons/md";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__content primary-container">
          <div className="footer__company-info">
            <img
              className="footer__logo"
              src="/site-main-logo.png"
              alt="Faiz Dev & Co. Logo"
            />
            <p className="footer__description">
              A web agency based in North India, delivering innovative
              website design and development.
            </p>
            <div className="footer__social-icons">
              <a
                href="https://www.linkedin.com/company/faiz-dev-co"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="footer__social-icon" />
              </a>
              <a
                href="https://www.instagram.com/faiz_dev_co/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="footer__social-icon" />
              </a>
            </div>
          </div>

          <div className="footer__company-links">
            <ul className="footer__links-list">
              <li className="footer__heading">Company</li>

              <li>
                <Link to="/coming-soon" className="footer__link">
                  <MdArrowForwardIos className="footer__link-icon" /> Career
                </Link>
              </li>
              <li>
                <Link to="/policy-page" className="footer__link">
                  <MdArrowForwardIos className="footer__link-icon" /> Privacy
                  Policy
                </Link>
              </li>
              <li>
                <Link to="/refund-page" className="footer__link">
                  <MdArrowForwardIos className="footer__link-icon" /> Refund
                  Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-page" className="footer__link">
                  <MdArrowForwardIos className="footer__link-icon" /> Terms &
                  Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer__quick-links">
            <ul className="footer__links-list">
              <li className="footer__heading">Quick Links</li>

              <li>
                <Link to="/about" className="footer__link">
                  <MdArrowForwardIos className="footer__link-icon" /> About Us
                </Link>
              </li>
              <li>
                <Link to="/#contact" className="footer__link">
                  <MdArrowForwardIos className="footer__link-icon" /> Contact Us
                </Link>
              </li>
              <li>
                <Link to="/#pricing" className="footer__link">
                  <MdArrowForwardIos className="footer__link-icon" /> Pricing
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="footer__link">
                  <MdArrowForwardIos className="footer__link-icon" /> Portfolio
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      <div className="footer__bottom container">
        <p className="footer__bottom-text footer__bottom-text--primary">
          © 2025 - All Rights Reserved | Faiz Dev & Co.
        </p>
        <p className="footer__bottom-text footer__bottom-text--secondary">
          <AiTwotoneCode /> Coded by Sonu & Faiz.
        </p>
      </div>
    </>
  );
};

export default Footer;
