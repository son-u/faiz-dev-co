import { FaGlobeAmericas } from "react-icons/fa";
import "../JobCard/JobCard.css";
import { MdOutlineArrowOutward } from "react-icons/md";

const JobCard = ({
  id,
  category,
  title,
  location,
  isRemote = false,
  isActive,
  applyLink,
  icon: CategoryIcon,
}) => (
  <div id={id} className="job-card">
    <div className="job-card__header">
      <div className="job-card__category">
        <CategoryIcon className="job-card__category-icon" />
        <span className="job-card__category-text">{category}</span>
      </div>
      <h3 className="job-card__title">{title}</h3>
    </div>

    <div className="job-card__details">
      <div className="job-card__location">
        <FaGlobeAmericas className="job-card__location-icon" />
        <span>{location}</span>
        {isRemote && <span className="job-card__remote">Remote</span>}
      </div>
    </div>

    <div className="job-card__footer">
      {isActive ? (
        <div className="job-card__status active">
          <span className="job-card__status-indicator"></span>
          <span>Active</span>
        </div>
      ) : (
        <div className="job-card__status inactive">
          <span className="job-card__status-indicator"></span>
          <span>Inactive</span>
        </div>
      )}

      <a
        href={isActive ? applyLink : "#"}
        className={`job-card__apply-link ${!isActive ? "disabled" : ""}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => !isActive && e.preventDefault()}
      >
        Apply Now <MdOutlineArrowOutward size={16} />
      </a>
    </div>
  </div>
);

export default JobCard;
