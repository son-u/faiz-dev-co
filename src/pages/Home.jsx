import React from "react";
import { Helmet } from "react-helmet-async";

import Hero from "../components/Hero/Hero";
import Progress from "../components/Progress/Progress";
import Featured from "../components/Featured/Featured";
import TabSwitcher from "../components/TabSwitcher/TabSwitcher";
import TrustedBy from "../components/TrustedBy/TrustedBy";
import Counter from "../components/Counter/Counter";
import Services from "../components/Services/Services";
import Pricing from "../components/Pricing/Pricing";
import Testimonials from "../components/Testimonials/Testimonials";
import Contact from "../components/Contact/Contact";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Faiz Dev & Co.</title>
        <meta
          name="description"
          content="Faiz Dev & Co. is a top web development agency offering responsive website design, SEO services, e-commerce solutions, custom web applications, and digital marketing."
        />
        <meta
          name="keywords"
          content="Faiz Dev & Co, web development services, responsive website design, SEO optimization, WordPress development, e-commerce web development, custom web apps, digital marketing agency, affordable web design for small businesses"
        />
        <link rel="canonical" href="https://www.faizdevandco.in/" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.faizdevandco.in/" />
        <meta
          property="og:title"
          content="Faiz Dev & Co. | Web Development & Digital Solutions"
        />
        <meta
          property="og:description"
          content="Discover Faiz Dev & Co.—your trusted partner for custom websites, SEO, digital marketing, and web applications tailored to your business."
        />
      </Helmet>

      <Hero />
      <Progress />
      <Featured />
      <TabSwitcher />
      <TrustedBy />
      <Services />
      <Counter />
      <Pricing />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Home;
