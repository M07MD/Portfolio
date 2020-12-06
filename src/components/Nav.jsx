import styled from "styled-components";

// Router
import { Link, useLocation } from "react-router-dom";

// Framer Motion
import { motion } from "framer-motion";

const Nav = () => {
  const { pathname } = useLocation();

  return (
    <StyledNav>
      <Link id="logo" to="/">
        Portfolio
      </Link>
      <ul>
        <li>
          <Link to="/">About Us</Link>
          <Line
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "50%" : "0%" }}
            transition={{ duration: 0.7 }}
          />
        </li>
        <li>
          <Link to="/work">Our Work</Link>
          <Line
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/work" ? "50%" : "0%" }}
            transition={{ duration: 0.7 }}
          />
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
          <Line
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contact" ? "50%" : "0%" }}
            transition={{ duration: 0.7 }}
          />
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.div`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  position: sticky;
  z-index: 3;
  top: 0;
  a {
    color: #ffffff;
    text-decoration: none;
  }

  ul {
    list-style: none;
    display: flex;
    li {
      padding-left: 5rem;
      position: relative;
    }
  }

  #logo {
    font-size: 2rem;
    font-family: "lobster", cursive;
    font-weight: lighter;
  }

  @media (max-width: 576px) {
    flex-direction: column;
    padding: 2rem 1rem;
    #logo {
      display: inline-block;
      margin: 1rem;
    }
    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
      li {
        padding: 0;
      }
    }
  }
`;

const Line = styled(motion.div)`
  width: 5%;
  height: 0.3rem;
  background: #23d997;
  position: absolute;
  bottom: -80%;
  left: 50%;
  @media (max-width: 576px) {
    left: 0;
  }
`;

export default Nav;
