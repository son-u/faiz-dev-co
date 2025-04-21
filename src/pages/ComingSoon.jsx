import React from "react";
import { Link } from "react-router-dom";
import "./../styles/ComingSoon.css";

const ComingSoon = () => {
  return (
    <div className="coming-soon-container">
      <div className="coming-soon-content">
        <h1 className="coming-soon-title">We're Launching Soon</h1>
        <p className="coming-soon-text">
          Our website is under construction. Stay tuned for something amazing!
        </p>
        <Link to="/" className="coming-soon-button">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ComingSoon;
