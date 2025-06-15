import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { pricingPlans } from "../../data/data";
import "./Pricing.css";
import pricingImg from "../../assets/images/others/custom-arrow.svg";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const Pricing = () => {
  const [activeTab, setActiveTab] = useState("wordpress");
  const plansToShow = pricingPlans[activeTab];

  return (
    <section className="pricing-section" id="pricing">
      <div className="pricing__container">
        <div className="pricing__header text-center">
          <h2 className="pricing__title">Pricing</h2>
        </div>

        <div className="pricing_tabs_container">
          <div className="pricing__tabs">
            {["wordpress", "custom"].map((tabKey) => (
              <button
                key={tabKey}
                className={`pricing__tab-btn ${
                  activeTab === tabKey ? "active" : ""
                }`}
                onClick={() => setActiveTab(tabKey)}
              >
                {tabKey === "wordpress" ? "WordPress" : "Custom-Coded"}
              </button>
            ))}
          </div>
        </div>

        <div className="pricing__cards">
          <AnimatePresence exitBeforeEnter>
            {plansToShow.map((plan) => (
              <motion.div
                className={`pricing__card${
                  plan.isCustomContact ? " pricing__card--custom" : ""
                }`}
                key={plan.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.3 }}
              >
                <div>
                  <div className="pricing__tag">{plan.title}</div>
                  <h2 className="pricing__description">{plan.description}</h2>

                  {plan.price != null && (
                    <div className="pricing__price">
                      ₹{plan.price.toLocaleString("en-IN")}
                      {plan.period && (
                        <span className="pricing__price-period">
                          /{plan.period}
                        </span>
                      )}
                    </div>
                  )}

                  {plan.features.length > 0 && (
                    <ul className="pricing__features">
                      {plan.features.map(({ text, limited, info }, idx) => (
                        <li key={idx} className={limited ? "is-limited" : ""}>
                          <span className="feature__check">✓</span>
                          <span className="feature__text">{text}</span>
                          {limited && info && (
                            <button
                              type="button"
                              className="info-btn"
                              aria-label="More info about this feature"
                            >
                              i<span className="tooltip">{info}</span>
                            </button>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="pricing__bottom">
                  {plan.isCustomContact && (
                    <div className="custom-talk">
                      <h1 className="custom-talk__title">Let's Talk!</h1>
                      <img src={pricingImg} alt="pricing_img" />
                    </div>
                  )}

                  <a
                    href={plan.cta.link}
                    className="btn-pricing"
                    {...(plan.isCustomContact
                      ? { "aria-label": "Contact us for a custom quote" }
                      : {})}
                  >
                    {plan.cta.text}
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
