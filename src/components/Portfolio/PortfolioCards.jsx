import React, { useState, useEffect, useRef } from "react";
// import { cardData } from "../../data";
import { HiOutlineExternalLink } from "react-icons/hi";
import "./PortfolioCards.css";

const PortfolioCards = () => {
  const cardData = [
    {
      category: "real-estate",
      title: "Next Level Real Estate",
      imageSrc: "https://faizdevandco.online/images/portfolio/p-1.png",
      description:
        "Innovative solutions for buying, selling, and managing properties with ease.",
      link: "https://www.nextlevelrealestate.ae",
    },
    {
      category: "healthcare",
      title: "Brokylyn Helthcare",
      imageSrc: "https://faizdevandco.online/images/portfolio/p-2.png",
      description:
        "Exceptional healthcare services for the Brooklyn community, prioritizing wellness and care.",
      link: "https://www.brooklynplaza.org",
    },
    {
      category: "healthcare",
      title: "NYC Healthcare",
      imageSrc: "https://faizdevandco.online/images/portfolio/p-3.png",
      description:
        "Comprehensive healthcare for NYC residents, ensuring better health and peace of mind.",
      link: "https://www.nychealthandhospitals.org",
    },
    {
      category: "healthcare",
      title: "Mediclinic",
      imageSrc: "https://faizdevandco.online/images/portfolio/p-4.png",
      description:
        "Advanced healthcare services tailored to your medical needs with expert care.",
      link: "https://www.mediclinic.ae",
    },
    {
      category: "real-estate",
      title: "Ex Arabia",
      imageSrc: "https://faizdevandco.online/images/portfolio/p-5.png",
      description:
        "Premium real estate solutions in Arabian markets, offering unmatched service.",
      link: "https://exarabiauae.com",
    },
    {
      category: "tours-travels",
      title: "BCD Travels",
      imageSrc: "https://faizdevandco.online/images/portfolio/p-6.png",
      description:
        "Plan your perfect vacation with expert travel packages and great deals.",
      link: "https://bcdtravel.es",
    },
    {
      category: "others",
      title: "Breezy",
      imageSrc: "https://faizdevandco.online/images/portfolio/p-7.png",
      description:
        "Effortless services for a more breezy and organized to make your better lifestyle.",
      link: "https://breezyhomeservices.com.au",
    },
    {
      category: "others",
      title: "Maid to Clean",
      imageSrc: "https://faizdevandco.online/images/portfolio/p-8.png",
      description:
        "Top-notch cleaning services ensuring sparkling spaces for your home or office.",
      link: "https://www.maidtoclean.com.au",
    },
  ];

  const [activeCategory, setActiveCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(4);
  const gridRef = useRef(null);

  const filteredCards = cardData.filter(
    (card) => activeCategory === "all" || card.category === activeCategory
  );

  const visibleCards = filteredCards.slice(0, visibleCount);

  useEffect(() => {
    if (gridRef.current) {
      gridRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [activeCategory]);

  const handleFilterClick = (category) => {
    setActiveCategory(category);
    setVisibleCount(4);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <div className="portfolio-cards">
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
            <img src={card.imageSrc} alt={card.title} className="card-image" />
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
