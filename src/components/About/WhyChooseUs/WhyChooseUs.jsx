import React from "react";
import { chooseUs } from "../../../data/data";
import "./WhyChooseUs.css";


const WhyChooseUsCard = ({ Icon, title, description, extraClass }) => {
  return (
    <div className={`whychooseus__card ${extraClass ? extraClass : ""}`}>
      <div className="whychooseus__card__icon">
        <Icon size={50} />
      </div>
      <h3 className="whychooseus__card__title">{title}</h3>
      <p className="whychooseus__card__description">{description}</p>
    </div>
  );
};

const WhyChooseUs = () => {
  return (
    <div className="whychooseus">
      <div className="whychooseus__header">
        <h1 className="whychooseus__title">Why</h1>
        <h2 className="whychooseus__subtitle">Choose Us?</h2>
        <p className="whychooseus__tagline">
          Our Passion For Web Development And Commitment To Quality Make Us The
          Ideal Partner For Your Business.
        </p>
      </div>

      <div className="whychooseus__grid">
        {chooseUs.map((chooseItem) => (
          <WhyChooseUsCard key={chooseItem.id} {...chooseItem} />
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
