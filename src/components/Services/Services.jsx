import React from "react";
import { servicesData } from "../../data/data.js";
import "./Services.css";

const Services = () => {
  return (
    <div className="service-parent-container"  id="services">
      <div className="primary-container">
        <h2 className="service-heading">Our Services</h2>
        <p className="service-para secondary-container">
          Elevating brands with cutting-edge web solutions, seamless designs,
          and real-time innovation for a powerful digital presence.
        </p>
        <div className="services-grid">
          {servicesData.map((service) => (
            <div className="service-card" key={service.id}>
              <div className="service-icon">
                <img src={service.icon} alt={service.alt} />
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;


