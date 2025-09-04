import "./Progress.css";
const Progress = () => {
  return (
    <>
      <div className="parent-progress">
        <div className="primary-container sub-progress">
          <h2 className="progress-heading">Empowered by Progress</h2>
          <p className="progress-para secondary-container">
            From concept to deployment, the process involves planning,
            designing, development, testing, optimization, and finally launching
            the website to ensure functionality and user experience
          </p>
          <div className="desktop-progress-bar"></div>
          <div className="mobile-progress-bar"></div>
        </div>
      </div>
    </>
  );
};

export default Progress;
