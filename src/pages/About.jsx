import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import "../styles/About.css";

import AboutHero from "../components/About/AboutHero/AboutHero";
import WhyChooseUs from "../components/About/WhyChooseUs/WhyChooseUs";
import ProjectIdeaBanner from "../components/About/ProjectIdeaBanner/ProjectIdeaBanner";
import LazyLoadSection from "../components/LazyLoadSection";

import {
  SkeletonFoundersStory,
  SkeletonAgileTeam,
} from "../components/Skeleton";

const FoundersStory = lazy(() =>
  import("../components/About/FoundersStory/FoundersStory")
);
const AgileTeam = lazy(() => import("../components/About/AgileTeam/AgileTeam"));

const About = () => (
  <>
    <Helmet>
      <title>About Us | Faiz Dev & Co.</title>
      <meta
        name="description"
        content="Explore Faiz Dev & Co.'s legacy and commitment to excellence. We deliver responsive web design, custom applications, SEO strategies, and digital marketing solutions."
      />
      <meta
        name="keywords"
        content="Faiz Dev & Co, web development agency, custom web applications, SEO experts, digital marketing, responsive design, React development, web design agency"
      />
      <link rel="canonical" href="https://www.faizdevandco.in/about" />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Faiz Dev & Co." />
      <meta property="og:url" content="https://www.faizdevandco.in/about" />
      <meta property="og:title" content="About Us | Faiz Dev & Co." />
      <meta
        property="og:description"
        content="Learn about Faiz Dev & Co., a trusted web development and digital solutions agency offering expert services in web design, SEO, and React applications."
      />
    </Helmet>

    <AboutHero />

    <LazyLoadSection rootMargin="150px">
      <Suspense fallback={<SkeletonFoundersStory />}>
        <FoundersStory />
      </Suspense>
    </LazyLoadSection>

    <WhyChooseUs />

    <LazyLoadSection rootMargin="150px">
      <Suspense fallback={<SkeletonAgileTeam />}>
        <AgileTeam />
      </Suspense>
    </LazyLoadSection>

    <ProjectIdeaBanner />
  </>
);

export default About;
