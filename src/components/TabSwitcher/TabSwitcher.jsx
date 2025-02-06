import { useState } from "react";
import { tabsData } from "../../data/data.js";
import "./TabSwitcher.css";

const TabSwitcher = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTabClick = (index) => {
    if (index === activeIndex || isTransitioning) return;

    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex(index);
      setIsTransitioning(false);
    }, 400);
  };

  const activeTab = tabsData[activeIndex];

  return (
    <div className="tab-switcher-container">
      <div className="tab-switcher-content">
        <h2 className="tab-switcher-heading">
          We believe in <strong>Long Term Partnership.</strong>
        </h2>
        <p className="tab-switcher-subtitle">
          We prioritize trust, quality, and consistent support to build strong,
          lasting relationships with our clients.
        </p>

        <div className="tab-switcher-buttons">
          {tabsData.map((tab, index) => (
            <button
              key={tab.id}
              className={`tab-switcher-button ${
                index === activeIndex ? "active" : ""
              }`}
              onClick={() => handleTabClick(index)}
            >
              <span className="tab-number">{tab.number}</span> {tab.title}
            </button>
          ))}
        </div>

        <div className="tab-switcher-text-content">
          <div
            className="tab-switcher-text-inner"
            style={{
              opacity: isTransitioning ? 0 : 1,
              transition: "all 0.4s ease-in-out",
            }}
          >
            {activeTab.paragraphs.map((paragraph, index) => (
              <p key={index} className="tab-switcher-paragraph">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="tab-switcher-image-container">
        <img
          className="tab-switcher-image"
          src={activeTab.image}
          alt={activeTab.title}
          style={{
            opacity: isTransitioning ? 0 : 1,
            transition: "all 0.4s ease-in-out",
          }}
        />
      </div>
    </div>
  );
};

export default TabSwitcher;
