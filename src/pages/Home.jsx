import React from "react";
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
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <Progress />
      <Featured />
      <TabSwitcher />
      <TrustedBy />
      <Services />
      <Counter />
      <Pricing />
      <Testimonials />
      <Contact/>
      <Footer/>
    </div>
  );
};

export default Home;
