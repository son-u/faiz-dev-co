import { useState } from "react";
import { faqData } from "../../data/data";
import { HiOutlinePlus, HiOutlineMinus } from "react-icons/hi";
import "./FaqSection.css";

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="faq">
      <div className="faq__container">
        <h1 className="faq__heading">Frequently Asked Questions</h1>
        <p className="faq__description">
          Discover quick answers to your most frequently asked questions about
          our agency, creative process, and project successes.
        </p>

        <div className="faq__accordion">
          {faqData.map((item, index) => (
            <div key={index} className="faq__item">
              <button
                className={`faq__item-header ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => toggleAccordion(index)}
              >
                {item.question}
                <span className="faq__icon">
                  {activeIndex === index ? (
                    <HiOutlineMinus />
                  ) : (
                    <HiOutlinePlus />
                  )}
                </span>
              </button>
              <div
                className={`faq__item-content ${
                  activeIndex === index ? "active" : ""
                }`}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
