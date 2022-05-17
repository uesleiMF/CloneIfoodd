import styled from "styled-components";

export const NavBar = styled.nav`
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  height: 70px;
  left: 0px;
  top: 0px;
  border: 1px solid rgba(0, 0, 0, 0.4);
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);

  svg {
    font-size: 30px;
    color: rgba(13, 95, 239, 0.32);
    margin: 5px 5px 0 0;
  }
`;

export const SeachContainer = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
`;

export const Container = styled.div`
  justify-content: center;
`;

export const Links = styled.a`
  display: flex;
  text-align: center;
  justify-content: center;
`;

export const SearchBar = styled.form`
  /* position: ; */
  width: 400px;
  height: auto;
  left: 0%;
  right: 0%;
  margin: auto;
  padding: auto;
`;

export const LogoImage = styled.img`
  width: 10rem;
  height: 3rem;
`;
