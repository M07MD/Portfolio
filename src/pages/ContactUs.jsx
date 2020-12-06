import { motion } from "framer-motion";
import { pageAnim, titleAnim } from "../animation";
import styled from "styled-components";

const ContactUs = () => {
  return (
    <ContactPage
      variants={pageAnim}
      initial="hidden"
      animate="show"
      exit="exit">
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Get in touch</motion.h2>
        </Hide>
      </Title>

      <div>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <a href="https://www.facebook.com/mido.ebrahim.100">Facebook</a>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <a href="https://www.linkedin.com/in/mohamed-mamdouh-78a1b4139/">
              Linked in
            </a>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <a href="https://github.com/M07MD">Github</a>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <a href="https://www.instagram.com/mohamed__mamdouh.96/">
              Instagram
            </a>
          </Social>
        </Hide>
      </div>
    </ContactPage>
  );
};

const ContactPage = styled(motion.div)`
  background: #fff;
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  @media (max-width: 992px) {
    padding: 2rem 2rem;
    font-size: 1rem;
  }
`;

const Title = styled.div`
  margin-bottom: 4rem;
  color: #000000;
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  a {
    margin: 2rem;
    text-decoration: none;
    font-size: 2rem;
    color: #282828;
  }
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
`;

export default ContactUs;
