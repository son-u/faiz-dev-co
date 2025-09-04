import "./Card.css";
import { motion } from "framer-motion";

const Card = ({ children, type, variants }) => {
  const cardTypeClass = `card--${type}`;
  const hoverEffect = type !== "empty" ? { y: -6, scale: 1.05 } : {};

  return (
    <motion.div
      className={`card ${cardTypeClass}`}
      variants={variants}
      whileHover={hoverEffect}
      transition={{ duration: 0.2, ease: "easeInOut" }}
    >
      <div className="card-content">{children}</div>
    </motion.div>
  );
};

export default Card;
