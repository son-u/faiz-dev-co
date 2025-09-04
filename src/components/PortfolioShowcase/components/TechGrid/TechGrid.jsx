import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiNodedotjs,
  SiFigma,
  SiWordpress,
  SiCss3,
  SiPhp,
} from "react-icons/si";
import { FaPlus } from "react-icons/fa6";
import Card from "../Card/Card";
import CtaCard from "../CtaCard/CtaCard";
import "./TechGrid.css";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const techItems = [
  { type: "empty" },
  { type: "logo", Icon: SiReact },
  { type: "empty" },
  { type: "logo", Icon: SiNextdotjs },
  { type: "empty" },
  { type: "logo", Icon: SiJavascript },
  { type: "cta" },
  { type: "logo", Icon: SiNodedotjs },
  { type: "empty" },
  { type: "logo", Icon: SiFigma },
  { type: "plus" },
  { type: "logo", Icon: SiWordpress },
  { type: "logo", Icon: SiCss3 },
  { type: "empty" },
  { type: "plus" },
  { type: "empty" },
  { type: "logo", Icon: SiPhp },
];

const TechGrid = () => {
  return (
    <motion.div
      className="tech-grid"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {techItems.map((item, index) => {
        if (item.type === "cta") {
          return <CtaCard key={index} variants={itemVariants} />;
        }
        return (
          <Card key={index} type={item.type} variants={itemVariants}>
            {item.type === "logo" && <item.Icon />}
            {item.type === "plus" && <FaPlus />}
          </Card>
        );
      })}
    </motion.div>
  );
};

export default TechGrid;
