import React from "react";
import "./AboutHero.css";

const AboutHero = () => {
  return (
    <div className="about-hero">
      <div className="about-hero__content">
        <div className="about-hero__left">
          <h3 className="about-hero__heading">About Our Company</h3>
          <h2 className="about-hero__subheading">
            Leading the Way in <br />
            <span className="about-hero__highlight">Web Development</span>
          </h2>
        </div>
        <div className="about-hero__right">
          <p className="about-hero__description">
            Welcome to Faiz Dev &amp; Co.—a forward-thinking web agency where
            innovation meets design. Founded in 2024 by two passionate
            co-founders, we believe every brand deserves a powerful digital
            presence. Our mission is to transform creative ideas into
            captivating digital experiences that drive growth and success.
            Leveraging cutting-edge technology and strategic insight, we craft
            custom solutions that yield measurable success and empower
            businesses to thrive online, embodying excellence, innovation, and
            collaboration.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
