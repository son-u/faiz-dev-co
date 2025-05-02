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
        <title>Faiz Dev &amp; Co.</title>
        <meta
          name="description"
          content="Leading web development agency specializing in responsive web design, SEO optimization, e-commerce development, custom web apps & digital marketing.."
        />
        <meta
          name="keywords"
          content="affordable responsive web design for small businesses, web development services, custom WordPress solutions for businesses, SEO-friendly web design services, mobile-first web development agency, web design strategies for small businesses, bespoke e-commerce web design agency, affordable responsive website templates"
        />
        <link rel="canonical" href="https://www.faizdevandco.in/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.faizdevanco.in/" />
        <meta property="og:title" content="Faiz Dev & Co." />
        <meta
          property="og:description"
          content="Leading web development agency specializing in responsive web design, SEO optimization, e-commerce development, custom web apps & digital marketing.."
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
