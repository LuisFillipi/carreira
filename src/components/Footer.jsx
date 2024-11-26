import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  background-color: whitesmoke;
  padding: 10px 0;
  font-size: 14px;
  font-weight: bold;
  box-shadow: 0px -2px 5px rgba(0, 0, 0, 0.1);
`;

const Footer = () => {
  return (
    <StyledFooter>Todos os direitos reservados.</StyledFooter>
  );
};

export default Footer;
