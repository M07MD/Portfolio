// import images
import home1 from "../img/home1.png";

// import styled components
import { About, Description, Hide, Image } from "../styles";

// Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";

import Wave from "./Wave";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              <span>Dreams</span> come{" "}
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true .</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>contact us for any web services</motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt="" />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
