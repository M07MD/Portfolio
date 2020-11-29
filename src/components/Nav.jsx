import styled from "styled-components";

// Router
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <StyledNav>
      <Link id="logo" to="/">
        Portfolio
      </Link>
      <ul>
        <li>
          <Link to="/">About Us</Link>
        </li>
        <li>
          <Link to="/work">Our Work</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
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
    font-size: 1.5rem;
    font-family: "lobster", cursive;
    font-weight: lighter;
  }
`;

export default Nav;
