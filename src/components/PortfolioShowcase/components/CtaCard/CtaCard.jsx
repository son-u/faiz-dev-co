import { Link } from "react-router-dom";
import "./CtaCard.css";
import { motion } from "framer-motion";

const CtaCard = ({ variants }) => {
  return (
    <motion.div className="cta-card" variants={variants}>
      <div className="cta-card-content">
        <div className="cta-text">
          <h3>30+ Successful Projects Launched</h3>
        </div>
        <Link to="/#contact" className="cta-button">
          Get a Free Quote
        </Link>
      </div>
    </motion.div>
  );
};

export default CtaCard;
