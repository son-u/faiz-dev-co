import React from "react";
import "../styles/About.css";
import AboutHero from "../components/About/AboutHero/AboutHero";
import FoundersStory from "../components/About/FoundersStory/FoundersStory";
import WhyChooseUs from "../components/About/WhyChooseUs/WhyChooseUs";
import AgileTeam from "../components/About/AgileTeam/AgileTeam";
import ProjectIdeaBanner from "../components/About/ProjectIdeaBanner/ProjectIdeaBanner";

const About = () => {
  return (
    <>
      <AboutHero />
      <FoundersStory />
      <WhyChooseUs />
      <AgileTeam />
      <ProjectIdeaBanner />
      
    </>
  );
};

export default About;
