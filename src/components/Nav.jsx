import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
  display: flex;
  margin: 0;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: whitesmoke;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);

  #menu, #menu2 {
    display: flex;
    gap: 20px;
  }

  a {
    text-decoration: none;
    color: black;
    font-size: 17px;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    padding: 10px;
    
    #menu, #menu2 {
      justify-content: center;
      gap: 10px;
    }
  }
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  flex-shrink: 0;

  span {
    &:first-child {
      color: black;
    }
    &:last-child {
      color: #1E90FF;
    }
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Nav = () => {
  return (
    <StyledNav>
      <Link to="/">
        <Title>
          <span>UBER</span>
          <span>NEWS</span>
        </Title>
      </Link>
      <div id="menu">
        <Link to="/sobre">Sobre</Link>
        <Link to="/lista">Eventos</Link>
        <Link to="/cadastro">Divulgue</Link>
      </div>
      <div id="menu2">
        <Link to="/contato">Contato</Link>
        <Link to="/carreira">Carreira</Link>
      </div>
    </StyledNav>
  );
};

export default Nav;