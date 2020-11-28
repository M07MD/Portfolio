// import images
import home1 from "../img/home1.jpg";

// import styled
import styled from "styled-components";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              <span>Dreams</span> come{" "}
            </h2>
          </Hide>
          <Hide>
            <h2>true .</h2>
          </Hide>
        </div>
        <p>contact us for any web services</p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <img src={home1} alt="" />
      </Image>
    </About>
  );
};

// Styled Component

const About = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: #fff;
`;

const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;

const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    /* max-width: 270px; */
    width: 100%;
    height: 80vh;
    object-fit: cover;
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: grayscale(80%);
    border-radius: 5px;
    flex: 1;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

export default AboutSection;
