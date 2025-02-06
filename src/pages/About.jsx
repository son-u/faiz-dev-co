import React from 'react'
import { TiTick } from "react-icons/ti";
import developmentImg from "../assets/images/illustrations/development.svg";
import "../styles/About.css"
const About = () => {
  return (
    <>
      
      <div className="second-parent-container">
        <div className="container second-sub-container">
          <div className="left-container">
            <h3 className="left-container-heading">
              Let our <span className="agile-span">Agile Team</span> understand
              and serve your needs.
            </h3>
            <p className="left-container-para">
              Let our agile team decode your vision and deliver attuned digital
              solutions. We expertise in web design, development, and strategy,
              we're dedicated to exceeding your expectations and goals
              efficiently
            </p>
            <div className="small-container">
              <div className="item-container">
                <TiTick /> Active Colloboration
              </div>
              <div className="item-container">
                <TiTick /> On-Shedule Delivery
              </div>
              <div className="item-container">
                <TiTick /> After Sales Services
              </div>
              <div className="item-container">
                <TiTick /> 24x7 On-Support
              </div>
            </div>
          </div>

          <div className="right-container">
            <img
              src={developmentImg}
              alt="development-img"
              className="right-container-img"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default About