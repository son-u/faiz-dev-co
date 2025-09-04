import TechGrid from "./components/TechGrid/TechGrid";
import SectionHeader from "./components/SectionHeader/SectionHeader";
import "./PortfolioShowcase.css";

const PortfolioShowcase = () => {
  return (
    <section className="portfolio-showcase">
      <SectionHeader />
      <TechGrid />
    </section>
  );
};

export default PortfolioShowcase;
