import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
const TableTr = styled.tr``;
const TableTd = styled.td`
  &:not(:last-child) {
    padding: 0.5rem 5rem;
  }

  text-align: center;
`;
const RemoverButton = styled.button`
  border: none;
  padding: 0.2rem 0.72rem;
  border-radius: 0.4rem;
  background-color: transparent;
  &:hover {
    background-color: #e9e7e7;
  }
`;

const CartItems = (props) => {
  const { item } = props;
  const dispatch = useDispatch();
  const itemRemoverHandler = () => {
    dispatch({ type: "remover", item: item });
  };
  return (
    <TableTr key={item.id}>
      <TableTd>{item.name}</TableTd>
      <TableTd>${item.price}</TableTd>
      <TableTd>{item.amount}</TableTd>
      <TableTd>${parseInt(item.amount * item.price)}</TableTd>
      <TableTd>
        <RemoverButton onClick={itemRemoverHandler}>X</RemoverButton>
      </TableTd>
    </TableTr>
  );
};

export default CartItems;
