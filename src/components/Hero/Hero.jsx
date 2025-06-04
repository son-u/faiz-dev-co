import "./Hero.css";
import { Link } from "react-router-dom";
import heroImg from "../../assets/images/others/hero_macbook_img.png";
const Hero = () => {
  return (
    <>
      <div className="parent-container">
        <div className="primary-container sub-container">
          <h1 className="hero_heading">
            We Build Products <br />{" "}
            <span className="hero_heading_span">That Drive Success.</span>
          </h1>
          <p className="hero_small_para">
            Specializing in innovative web design and development.
          </p>
          <div className="hero-btn_container">
            <Link to="#contact">
              <button className="hero-btn hero-btn-1">get a quote</button>
            </Link>
            <Link to="#services">
              <button className="hero-btn hero-btn-2">view services</button>
            </Link>
          </div>
          <div className="hero_img_container">
            <img src={heroImg} alt="Hero_image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
