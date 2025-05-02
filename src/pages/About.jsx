import React from "react";
import { Helmet } from "react-helmet-async";
import "../styles/About.css";
import AboutHero from "../components/About/AboutHero/AboutHero";
import FoundersStory from "../components/About/FoundersStory/FoundersStory";
import WhyChooseUs from "../components/About/WhyChooseUs/WhyChooseUs";
import AgileTeam from "../components/About/AgileTeam/AgileTeam";
import ProjectIdeaBanner from "../components/About/ProjectIdeaBanner/ProjectIdeaBanner";

const About = () => (
  <>
    <Helmet>
      <title>About - Faiz Dev &amp; Co.</title>
      <meta
        name="description"
        content="Explore Faiz Dev &amp; Co. legacy and commitment to excellence. Our seasoned team delivers responsive web design, bespoke web applications, comprehensive SEO strategies, and targeted digital marketing solutions."
      />
      <meta
        name="keywords"
        content="web development agency, about Faiz Dev & Co, web design experts, SEO optimization team, custom web app developers, digital marketing agency, responsive design team, react based application, web developer near me, react developer near me"
      />
      <link rel="canonical" href="https://www.faizdevandco.in/about" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Faiz Dev &amp; Co." />
      <meta property="og:url" content="https://www.faizdevandco.in/about" />
      <meta property="og:title" content="About Us | Faiz Dev &amp; Co." />
      <meta
        property="og:description"
        content="web development agency, about Faiz Dev & Co, web design experts, SEO optimization team, custom web app developers, digital marketing agency, responsive design team, react based application, web developer near me, react developer near me"
      />
    </Helmet>

    <AboutHero />
    <FoundersStory />
    <WhyChooseUs />
    <AgileTeam />
    <ProjectIdeaBanner />
  </>
);

export default About;
