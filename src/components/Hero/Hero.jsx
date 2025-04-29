import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
import { IoArrowForwardOutline } from "react-icons/io5";
import heroImg from "../../assets/images/illustrations/building_websites-hero-img.svg"
const Hero = () => {
  return (
    <>
    <div className="parent-container">
      <div className="primary-container sub-container">
        <div className="hero-left">
          <h2 className="hero-h2 marker">We Build Products That Drive Success.</h2>
          <p className="hero-para">
            Specializing in innovative web design and development, we transform
            your vision into engaging, user-friendly digital experiences that
            drive results and elevate your brand.
          </p>
          <Link to="/#contact" className="btn btn-secondary hero-btn">
            Get a Quote <IoArrowForwardOutline />
          </Link>
        </div>
        <div className="hero-right">
            <img className="hero-img bounce-illustration" src={heroImg} alt="hero-img"/>
        </div>
      </div>
    </div>
      <div className="hero-wave"></div>
    </>
  );
};

export default Hero;