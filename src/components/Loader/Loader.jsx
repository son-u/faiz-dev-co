import React from "react";
import "./Loader.css";
import loaderGif from "../../assets/images/others/fdc-loader.gif";

const Loader = () => {
  return (
    <div className="loader-container">
      <img src={loaderGif} alt="Loading..." className="loader-gif" />
    </div>
  );
};

export default Loader;
