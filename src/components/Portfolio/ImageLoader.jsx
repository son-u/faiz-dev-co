import { useState } from "react";
import Skeleton from "../Skeleton/Skeleton";

const ImageLoader = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={className}
      style={{ position: "relative", background: "#f0f0f0" }}
    >
      {!isLoaded && (
        <Skeleton
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            borderRadius: "inherit",
          }}
          width="100%"
          height="100%"
        />
      )}
      <img
        src={src}
        alt={alt}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: isLoaded ? 1 : 0,
          transition: "opacity 0.3s ease-in-out",
        }}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

export default ImageLoader;
