import React from "react";
import styled from "styled-components";
import logo from "../../assets/logo.svg";

const LinksBox = styled.div`
  display: flex;
  gap: 6rem;
  align-items: center;
`;
const Logo = styled.img`
  width: 3rem;
  border-radius: 50%;
  margin-right: 0.4rem;
`;
const TabLink = styled.a`
  text-decoration: none;
  color: black;
  cursor: pointer;

  &:hover {
    color: #f54749;
  }
`;
const Links = (props) => {
  const onClickHandler = (e) => {
    const data = e.target.childNodes[0].data.toLowerCase();
    props.onClick(data);
  };
  return (
    <LinksBox>
      <Logo src={logo} />
      <TabLink onClick={onClickHandler}>Home</TabLink>
      <TabLink onClick={onClickHandler}>About</TabLink>
      <TabLink onClick={onClickHandler}>Contact Us</TabLink>
    </LinksBox>
  );
};

export default Links;
