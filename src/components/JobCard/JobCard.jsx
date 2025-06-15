import { FaGlobeAmericas } from "react-icons/fa";
import "../JobCard/JobCard.css";
import { MdOutlineArrowOutward } from "react-icons/md";

const JobCard = ({
  id,
  category,
  title,
  location,
  isRemote = false,
  postedDate,
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
      <div className="job-card__date">{postedDate}</div>
      <a
        href={applyLink}
        className="job-card__apply-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Apply Now <MdOutlineArrowOutward size={16} />
      </a>
    </div>
  </div>
);

export default JobCard;
