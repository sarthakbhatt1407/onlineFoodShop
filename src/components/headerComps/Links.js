import React from "react";
import { Link } from "react-router-dom";
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
  return (
    <LinksBox>
      <Link to="/">
        <Logo src={logo} />
      </Link>
      <Link to="/">
        <TabLink>Home</TabLink>
      </Link>
      <Link to="/contact-us">
        <TabLink>Contact Us</TabLink>
      </Link>
    </LinksBox>
  );
};

export default Links;
