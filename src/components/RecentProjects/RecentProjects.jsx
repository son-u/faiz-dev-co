import React from "react";
import "./RecentProjects.css";

const RecentProjects = () => {
  return (
    <div className="recent-parent-container">
      <div className="sub-recent-container">
        <div className="recent-left-container">
          <div className="curve-container">
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
          <h1>hello from right</h1>
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;
