import "../styles/Careers.css";
import JobCard from "../components/JobCard/JobCard";
import { careersData } from "../data/data";

const Careers = () => {
  return (
    <div className="primary-container career_parent_container">
      <div className="top_heading_container">
        <h1 className="career_heading">
          Find the perfect <br className="breakline" />{" "}
          <span> Job for you</span>
        </h1>
        <h6 className="career_small_heading">
          Earn from the real world projects <br />{" "}
          <span>Perfect side hustle! </span>
        </h6>
      </div>

      <div className="careers-section__grid">
        {careersData.map((job) => (
          <JobCard key={job.id} {...job} />
        ))}
      </div>
    </div>
  );
};

export default Careers;
