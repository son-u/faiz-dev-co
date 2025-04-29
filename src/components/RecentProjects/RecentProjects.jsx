import React from "react";
import "./RecentProjects.css";
import projectMockup from "../../assets/images/others/recentProject-mockup.webp";
import dottedCurve from "../../assets/images/others/curve_dotted_img.png";

const RecentProjects = () => {
  return (
    <div className="recent-parent-container">
      <div className="sub-recent-container">
        <div className="recent-left-container">
          <div
            style={{ backgroundImage: `url(${dottedCurve})` }}
            className="curve-container"
          >
            <h3 className="curve-heading">
              Recent <br /> <span className="shine">Projects</span>
            </h3>
            <p className="curve-description">
              Discover our innovative web agency projects showcasing remarkable
              creativity, cutting-edge design, and powerful digital solutions
              that transform ideas into success.
            </p>
          </div>
        </div>

        <div className="recent-right-container">
          <img
            className="project__mockup bounce-illustration"
            src={projectMockup}
            alt="Project__Mockup"
          />
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;
