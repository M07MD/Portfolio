import styled from "styled-components";

const Nav = () => {
  return (
    <StyledNav>
      <a id="logo" href="#">
        Portfolio
      </a>
      <ul>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Our Work</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
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
