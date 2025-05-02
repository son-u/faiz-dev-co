import React from "react";
import { Helmet } from "react-helmet-async";
import "../styles/Portfolio.css";
import PortfolioCards from "../components/Portfolio/PortfolioCards";
import RecentProjects from "../components/RecentProjects/RecentProjects";
import FaqSection from "../components/FaqSection/FaqSection";

const Portfolio = () => (
  <>
    <Helmet>
      <title>About - Faiz Dev &amp; Co.</title>
      <meta
        name="description"
        content="Explore Faiz Dev & Co.'s portfolio of responsive web designs, custom applications, and SEO-optimized digital solutions crafted to drive business success."
      />
      <meta
        name="keywords"
        content="portfolio web design, professional web development, responsive websites, custom web applications, SEO-optimized websites, Faiz Dev & Co. projects, react developer near me, siliguri developer"
      />
      <link rel="canonical" href="https://www.faizdevandco.in/portfolio" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Faiz Dev &amp; Co." />
      <meta property="og:url" content="https://www.faizdevandco.in/portfolio" />
      <meta property="og:title" content="Portfolio | Faiz Dev &amp; Co." />
      <meta
        property="og:description"
        content="Explore Faiz Dev & Co.'s portfolio of responsive web designs, custom applications, and SEO-optimized digital solutions crafted to drive business success."
      />
    </Helmet>

    <RecentProjects />
    <div className="portfolio-banner">
      <div className="portfolio-banner__content">
        <h1 className="portfolio-banner__heading shine">
          Our Work,
          <br /> Your Success
        </h1>
        <p className="portfolio-banner__description">
          Explore our creative portfolio featuring standout projects in Real
          Estate, Tour &amp; Travels, Healthcare, and beyond.
        </p>
      </div>
    </div>
    <PortfolioCards />
    <FaqSection />
  </>
);

export default Portfolio;
