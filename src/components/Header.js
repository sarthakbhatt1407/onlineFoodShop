import React from "react";
import styled from "styled-components";
import HeaderCart from "./headerComps/HeaderCart";
import Links from "./headerComps/Links";
const HeaderPart = styled.header`
  display: flex;
  justify-content: space-between;

  align-items: center;
`;

const Header = (props) => {
  return (
    <HeaderPart>
      <Links onClick={props.onClick} />
      <HeaderCart onClickCart={props.onClickCart} />
    </HeaderPart>
  );
};

export default Header;
