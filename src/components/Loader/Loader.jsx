import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <img src="/fdc-loader.gif" alt="Loading..." className="loader-gif" loading="eager"/>
    </div>
  );
};

export default Loader;
