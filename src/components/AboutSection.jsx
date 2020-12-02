// import images
import home1 from "../img/home1.png";

// import styled components
import { About, Description, Hide, Image } from "../styles";

// Framer Motion
import { motion } from "framer-motion";

const AboutSection = () => {
  const h2Anim = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 2 } },
  };

  const titleAnim = {
    hidden: { x: 100 },
    show: {
      x: 0,
      transition: {
        duration: 1,
        ease: "linear",
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <About>
      <Description>
        <motion.div
          variants={titleAnim}
          initial="hidden"
          animate="show"
          className="title">
          <Hide>
            <motion.h2 variants={h2Anim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={h2Anim}>
              <span>Dreams</span> come{" "}
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={h2Anim}>true .</motion.h2>
          </Hide>
        </motion.div>
        <p>contact us for any web services</p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <img src={home1} alt="" />
      </Image>
    </About>
  );
};

export default AboutSection;
