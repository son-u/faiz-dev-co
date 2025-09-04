import Skeleton from "./Skeleton";

const SkeletonFoundersCard = ({ variant }) => (
  <div
    className={`skeleton-founders__card ${
      variant ? `skeleton-founders__card--${variant}` : ""
    }`}
  >
    <div className="skeleton-founders__image">
      <Skeleton
        width="80px"
        height="80px"
        style={{ borderRadius: "50%", border: "2px solid rgb(236, 236, 236)" }}
      />
    </div>
    <div className="skeleton-founders__info">
      <Skeleton height="12px" width="50%" style={{ margin: "0.5rem 0" }} />
      <Skeleton height="12px" width="70%" style={{ margin: "0.5rem 0" }} />
      <Skeleton height="12px" width="40%" style={{ margin: "0.5rem 0" }} />
    </div>
    <div className="skeleton-founders__social">
      <Skeleton
        height="30px"
        width="30px"
        style={{ borderRadius: "4px", margin: "0 4px" }}
      />
      <Skeleton
        height="30px"
        width="30px"
        style={{ borderRadius: "4px", margin: "0 4px" }}
      />
    </div>
  </div>
);

const SkeletonFoundersStory = () => (
  <div className="skeleton-founders">
    <div className="skeleton-founders__container">
      <div className="skeleton-founders__cards">
        <SkeletonFoundersCard variant="first" />
        <SkeletonFoundersCard variant="second" />
      </div>
      <div className="skeleton-founders__description">
        <Skeleton
          height="18px"
          width="200px"
          style={{ marginBottom: "0.5rem" }}
        />
        <Skeleton
          className="title-skeleton"
          height="40px"
          width="350px"
          style={{ marginBottom: "1rem" }}
        />
        {[...Array(5)].map((_, i) => (
          <Skeleton
            key={i}
            height="18px"
            width="95%"
            style={{ marginBottom: "0.75rem" }}
          />
        ))}
      </div>
    </div>
  </div>
);

export default SkeletonFoundersStory;
