import React from "react";
import { pricingPlans } from "../../data/data.js";
import "./Pricing.css";

const Pricing = () => {
  return (
    <section className="pricing-section">
      <div className="pricing__container">
        <div className="pricing__header text-center">
          <h2 className="pricing__title">Pricing</h2>
        </div>

        <div className="pricing__cards">
          {pricingPlans.map((plan, index) => (
            <div className="pricing__card" key={index}>
              <div className="pricing__tag">{plan.title}</div>
              <h2 className="pricing__description">{plan.description}</h2>
              <div className="pricing__price">
                ₹{plan.price}{" "}
                <span className="pricing__price-period">/{plan.period}</span>
              </div>
              <ul className="pricing__features">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex}>{feature}</li>
                ))}
              </ul>
              <a href={plan.cta.link} className="btn btn-pricing">
                {plan.cta.text}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;