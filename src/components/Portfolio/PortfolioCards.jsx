import { useState, useRef } from "react";
import { portfolioData } from "../Portfolio/portfolioData";
import { HiOutlineExternalLink } from "react-icons/hi";
import ImageLoader from "./ImageLoader";
import "./PortfolioCards.css";

const PortfolioCards = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(4);
  const gridRef = useRef(null);

  const filteredCards = portfolioData.filter(
    (card) => activeCategory === "all" || card.category === activeCategory
  );
  const visibleCards = filteredCards.slice(0, visibleCount);

  const handleFilterClick = (category) => {
    setActiveCategory(category);
    setVisibleCount(4);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <div className="portfolio-cards" id="portfolios">
      <div className="portfolio-cards__filter-tabs">
        <button
          className={`portfolio-cards__filter-btn ${
            activeCategory === "all" ? "active" : ""
          }`}
          onClick={() => handleFilterClick("all")}
        >
          All
        </button>
        <button
          className={`portfolio-cards__filter-btn ${
            activeCategory === "real-estate" ? "active" : ""
          }`}
          onClick={() => handleFilterClick("real-estate")}
        >
          Real Estate
        </button>
        <button
          className={`portfolio-cards__filter-btn ${
            activeCategory === "tours-travels" ? "active" : ""
          }`}
          onClick={() => handleFilterClick("tours-travels")}
        >
          Tours &amp; Travels
        </button>
        <button
          className={`portfolio-cards__filter-btn ${
            activeCategory === "healthcare" ? "active" : ""
          }`}
          onClick={() => handleFilterClick("healthcare")}
        >
          Healthcare
        </button>
        <button
          className={`portfolio-cards__filter-btn ${
            activeCategory === "others" ? "active" : ""
          }`}
          onClick={() => handleFilterClick("others")}
        >
          Others
        </button>
      </div>

      <div className="portfolio-cards__grid" ref={gridRef}>
        {visibleCards.map((card, index) => (
          <div
            key={index}
            className="portfolio-card"
            style={{ "--index": index }}
          >
            <ImageLoader
              src={card.imageSrc}
              alt={card.title}
              className="card-image"
            />
            <div className="card-content">
              <div className="card-title-btn">
                <h3 className="card-title">{card.title}</h3>
              </div>
              <p className="card-description">{card.description}</p>
              <a
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
              >
                View Live <HiOutlineExternalLink className="card-link__icon" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < filteredCards.length && (
        <button
          className="portfolio-cards__load-more-btn"
          onClick={handleLoadMore}
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default PortfolioCards;
