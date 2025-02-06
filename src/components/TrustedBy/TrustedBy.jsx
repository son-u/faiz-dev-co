import React from "react";
import { clientLogos } from "../../data/data.js";
import "./TrustedBy.css";

const TrustedBy = () => {
  return (
    <div className="trusted-by-section" id="clients">
      <div className="trusted-by-container">
        <div className="trusted-by-heading">
          <h2 className="trusted-by-title">Trusted By</h2>
        </div>
        <div className="trusted-by-description">
          <p className="trusted-by-text">
            Serving clients across industries like tech, retail, hospitality,
            and non-profits, we provide unique products and services to match
            their needs.
          </p>
        </div>
      </div>
      <div className="trusted-by-marquee-wrapper">
        <div className="trusted-by-marquee">
          <div className="trusted-by-logos">
            {clientLogos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Trusted_brand_logo_${index + 1}`}
                loading="lazy"
              />
            ))}
            {clientLogos.map((logo, index) => (
              <img
                key={`duplicate-${index}`}
                src={logo}
                alt={`Trusted_brand_logo_${index + 1}`}
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
