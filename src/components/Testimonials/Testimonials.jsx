import React from "react";
import { testimonialsData } from "../../data/data.js";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials__container">
        <div className="testimonials__header">
          <h2 className="testimonials__title">Client Testimonials</h2>
        </div>
        <TestimonialRow testimonials={testimonialsData} />
        <TestimonialRow testimonials={testimonialsData} reverse />
      </div>
    </section>
  );
};

const TestimonialRow = ({ testimonials, reverse }) => {
  const duplicatedTestimonials = [...testimonials, ...testimonials];
  return (
    <div className="testimonials__scroll">
      <div
        className={`testimonials__track ${
          reverse
            ? "testimonials__track--reverse"
            : "testimonials__track--normal"
        }`}
      >
        {duplicatedTestimonials.map((testimonial, index) => (
          <TestimonialCard
            key={`${testimonial.id}-${index}`}
            testimonial={testimonial}
          />
        ))}
      </div>
    </div>
  );
};

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="testimonials__card">
      <div className="testimonials__card-header">
        <img
          src={testimonial.image}
          alt="Client"
          className="testimonials__card-image"
          loading="lazy"
        />
        <div className="testimonials__customer-info">
          <div className="testimonials__customer-name">{testimonial.name}</div>
          <div className="testimonials__customer-position">
            {testimonial.position}
          </div>
        </div>
      </div>
      <p className="testimonials__card-text">{testimonial.text}</p>
    </div>
  );
};

export default Testimonials;
