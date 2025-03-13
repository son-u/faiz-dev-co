import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const FoundersCard = ({ founder, variant }) => {
  return (
    <div
      className={`founders__card ${
        variant ? `founders__card--${variant}` : ""
      }`}
    >
      <img
        className="founders__card-image"
        src={founder.image}
        alt={`Founder ${founder.name}`}
      />
      <h5 className="founders__card-post">{founder.post}</h5>
      <h5 className="founders__card-name">{founder.name}</h5>
      <h5 className="founders__card-role">{founder.role}</h5>
      <div className="founders__social-icons">
        <Link
          to={founder.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="icon-img" />
        </Link>
        <Link
          to={founder.social.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="icon-img" />
        </Link>
      </div>
    </div>
  );
};

export default FoundersCard;
