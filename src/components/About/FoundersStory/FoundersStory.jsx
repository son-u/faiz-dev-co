import FoundersCard from "./FoundersCard";
import { foundersData } from "../../../data/data.js";
import "./FoundersStory.css";

const FoundersStory = () => {
  return (
    <div className="founders">
      <div className="founders__container">
        <div className="founders__cards">
          {foundersData.map((founder) => (
            <FoundersCard
              key={founder.id}
              founder={founder}
              variant={founder.variant}
            />
          ))}
        </div>

        <div className="founders__description">
          <h5 className="founders__description-heading shine">
            Founders' Story
          </h5>
          <h2 className="founders__description-title">
            Building Strong, Lasting Partnerships
          </h2>
          <p className="founders__description-text">
            In 2024, Sonu, an accomplished MCA graduate and full stack
            developer, partnered with Faiz, a forward-thinking B.Tech student
            specializing in front-end development, after connecting online.
            Together, they founded a dynamic web agency that combines Sonu's
            deep technical expertise with Faiz's innovative design intuition.
            Their collaboration seamlessly merges robust functionality with
            modern, user-centric aesthetics, driving the creation of digital
            solutions that truly stand out. Their journey embodies the spirit of
            collaboration and relentlessly pushes the boundaries of digital
            innovation every day.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FoundersStory;
