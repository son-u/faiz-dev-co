import { Link } from "react-router-dom";
import "../styles/NotFound.css";


const NotFound = () => {
  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <h1 className="notfound-title">404</h1>
        <p className="notfound-message">Oops! This component does not yet exist!</p>
        <Link to="/" className="notfound-button">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;