import React from "react";
import "../styles/Portfolio.css";
import PortfolioCards from "../components/Portfolio/PortfolioCards";
import RecentProjects from "../components/RecentProjects/RecentProjects";
import FaqSection from "../components/FaqSection/FaqSection";
import Footer from "../components/Footer/Footer";

const Portfolio = () => {
  return (
    <>
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
      <Footer />
    </>
  );
};

export default Portfolio;
