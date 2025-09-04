import { Link } from "react-router-dom";
import "./../styles/ComingSoon.css";

const ComingSoon = () => {
  return (
    <div className="parent_coming_soon_container primary-container">
      <div className="sub_parent_container">
        <h3 className="coming_soon_title">Coming Soon!</h3>
        <p className="coming_soon_para">This component is under development.</p>
        <Link to="/" className="coming-soon-button">
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default ComingSoon;
