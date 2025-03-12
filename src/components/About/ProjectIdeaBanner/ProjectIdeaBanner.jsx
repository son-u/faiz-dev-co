import React from "react";
import { Link } from "react-router-dom";
import "./ProjectIdeaBanner.css";

const ProjectIdeaBanner = () => {
  return (
    <div className="project-idea-banner">
      <div className="project-idea-banner__container">
        <div className="project-idea-banner__text">
          <h2 className="project-idea-banner__heading">
            Have a project idea in mind?
          </h2>
          <h3 className="project-idea-banner__subheading">
            Let's transform it into a brand that stands out
          </h3>
        </div>
        <div className="project-idea-banner__action">
          <Link to="#contact" className="project-idea-banner__button">
            Let's make it Happen?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectIdeaBanner;
