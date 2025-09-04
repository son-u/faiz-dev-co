import Skeleton from "./Skeleton";
const SkeletonAgileTeam = () => (
  <section className="skeleton-agile-team">
    <div className="skeleton-agile-team__content">
      <div className="skeleton-agile-team__info">
        <Skeleton
          height="23px"
          width="180px"
          style={{ marginBottom: "1rem" }}
        />
        <Skeleton height="20px" width="80%" style={{ marginBottom: "1rem" }} />
        <Skeleton height="16px" width="80%" style={{ marginBottom: "2rem" }} />
        <div className="skeleton-agile-team__features">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="skeleton-agile-team__feature">
              <Skeleton
                height="20px"
                width="30px"
                style={{ borderRadius: "10px", marginRight: "0.5rem" }}
              />
              <Skeleton height="16px" width="110px" />
            </div>
          ))}
        </div>
      </div>

      <div className="skeleton-agile-team__image-wrapper">
        <Skeleton height="100%" width="100%" />
      </div>
    </div>
  </section>
);

export default SkeletonAgileTeam;
