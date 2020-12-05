// import comonents
import AboutSection from "../components/AboutSection";
import FaqSection from "../components/FaqSection";
import ServicesSection from "../components/ServicesSection";

// Animation
import { motion } from "framer-motion";
import { pageAnim } from "../animation";
import styled from "styled-components";

const AboutUs = () => {
  return (
    <AboutPage variants={pageAnim} initial="hidden" animate="show" exit="exit">
      <AboutSection />
      <ServicesSection />
      <FaqSection />
    </AboutPage>
  );
};

const AboutPage = styled(motion.div)`
  overflow: hidden;
`;

export default AboutUs;
