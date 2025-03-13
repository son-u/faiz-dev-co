import React from "react";
import { TiTick } from "react-icons/ti";
import developmentImg from "../../../assets/images/illustrations/development.svg";
import "./AgileTeam.css";

const AgileTeamFeature = ({ feature }) => (
  <div className="agile-team__feature">
    <TiTick className="agile-team__feature-icon" />
    <span>{feature}</span>
  </div>
);

const AgileTeam = () => {
  const features = [
    "Active Collabration",
    "On-Schedule Delivery",
    "After Sales Services",
    "24x7 On-Support",
  ];

  return (
    <div className="agile-team">
      <div className="agile-team__content">
        <div className="agile-team__info">
          <h3 className="agile-team__heading">
            Let our <span className="agile-team__highlight">Agile Team</span>{" "}
            understand and serve your needs.
          </h3>
          <p className="agile-team__description">
            Let our agile team decode your vision and deliver attuned digital
            solutions. We are experts in web design, development, and strategy,
            and we are dedicated to exceeding your expectations and goals
            efficiently.
          </p>
          <div className="agile-team__features">
            {features.map((feature, index) => (
              <AgileTeamFeature key={index} feature={feature} />
            ))}
          </div>
        </div>

        <div className="agile-team__image-wrapper">
          <img
            src={developmentImg}
            alt="Development Illustration"
            className="agile-team__image"
          />
        </div>
      </div>
    </div>
  );
};

export default AgileTeam;
