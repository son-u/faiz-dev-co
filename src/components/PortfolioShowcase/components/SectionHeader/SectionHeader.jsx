import { Link } from "react-router-dom";
import "./SectionHeader.css";
import { FaArrowRight } from "react-icons/fa6";

const SectionHeader = () => {
  return (
    <div className="section-header">
      <h1 className="section-title">
        Recent <span className="highlight-box">Projects</span>
      </h1>
      <p className="section-description">
        Explore our innovative web projects, where cutting-edge design and
        powerful digital solutions transform ideas into success.
      </p>
      <Link to="#portfolios" className="section-cta-button">
        Explore All Projects
        <FaArrowRight />
      </Link>
    </div>
  );
};

export default SectionHeader;
