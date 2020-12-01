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

export default Nav;
