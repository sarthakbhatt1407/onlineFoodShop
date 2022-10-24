import { Badge } from "@mui/material";
import React from "react";
import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useSelector } from "react-redux";

const HeaderCartBox = styled.div`
  display: flex;
  padding: 0.4rem 0.7rem;
  border-radius: 0.4rem;
  color: white;
  background-color: #f54749;
`;

const HeaderCart = (props) => {
  const cartTotalItems = useSelector((state) => state.items);
  const value = cartTotalItems.length;

  return (
    <HeaderCartBox onClick={props.onClickCart}>
      <Badge badgeContent={value} color="primary">
        <ShoppingCartOutlinedIcon color="action" style={{ color: "white" }} />
      </Badge>
    </HeaderCartBox>
  );
};

export default HeaderCart;
