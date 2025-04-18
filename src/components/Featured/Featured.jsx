import React from 'react'
import "./Featured.css";
import { featuredProjects } from '../../data/data.js';

const FeaturedCard = ({ project }) => {
  return (
    <div className="featured-card">
      <div className="featured-card__image-container">
        <div className="featured-card__bg-container">
          <img
            src={project.backgroundImage}
            alt="Background"
            className="featured-card__bg-image"
          />
          <span className="featured-card__title">{project.projectName}</span>
          <span className="featured-card__subtitle">{project.website}</span>
        </div>
        <img
          src={project.hoverImage}
          alt="Featured Project Hover"
          className="featured-card__hover-image"
        />
      </div>
    </div>
  );
};

export default function Featured() {
  return (
    <div className="parent-featured-container">
      <div className="primary-container sub-featured-container">
        <h2 className="featured-heading">Featured Projects</h2>
        <p className="featured-para secondary-container">
          Here are some awesome featured projects: custom, responsive, and
          user-friendly websites with modern design, fast performance, mobile
          compatibility, SEO optimization, and security
        </p>
        <div className="featured-cards">
          {featuredProjects.map((project) => (
            <FeaturedCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
