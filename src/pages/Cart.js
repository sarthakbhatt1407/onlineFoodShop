import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import CartAddressForm from "../components/cartAddressForm/CartAddressForm";
import Modal from "../UI/Modal";
import CartItems from "./CartItems";

const CartBox = styled.div`
  color: black;
`;
const H1 = styled.h1`
  text-align: center;
  margin: 0.5rem 0;
  font-weight: 400;
`;
const Para = styled.p`
  text-align: center;
  margin: 0.5rem 0;
  color: rgb(168, 168, 168);
`;
const TableBox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
`;
const Table = styled.table`
  border-spacing: 0 0.5rem;
`;
const TableHead = styled.thead`
  &:first-child {
    background-color: rgb(234, 232, 232);
  }
`;
const TableBody = styled.tbody``;
const TableTr = styled.tr``;
const TableTd = styled.td`
  &:not(:last-child) {
    padding: 0.5rem 5rem;
  }

  text-align: center;
`;
const CartLastOption = styled.div``;
const CartButtonsDiv = styled.div`
  width: 96%;
  display: flex;
  justify-content: end;
  gap: 2rem;
  align-items: center;
`;
const OrderButton = styled.button`
  background-color: #f54749;
  border: none;
  padding: 0.8rem 2.3rem;
  border-radius: 0.4rem;
  color: white;
  font-size: 16px;
`;
const ContinueShopping = styled.button`
  background-color: #f54749;
  border: none;
  color: white;
  padding: 0.8rem 1rem;
  border-radius: 0.4rem;
  color: white;
`;
const Subtotal = styled.p`
  text-align: end;
  margin-right: 3rem;
  margin-bottom: 0.6rem;
  font-size: 18px;
  letter-spacing: 0.8px;
`;
const CrossButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 25px;
  position: absolute;
  top: 0;
  left: 96%;
`;
const Cart = (props) => {
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();
  const totalAmount = useSelector((state) => state.totalAmount);
  const emptyCart = useSelector((state) => state.emptyCart);

  const [addressPage, setAddressPage] = useState(emptyCart);
  const checkoutClickHandler = () => {};
  const cartTable = (
    <TableBox>
      <Table>
        <TableHead>
          <TableTr key="">
            <TableTd>Name</TableTd>
            <TableTd>Price</TableTd>
            <TableTd>Quantity</TableTd>
            <TableTd>Total</TableTd>
            <TableTd></TableTd>
          </TableTr>
        </TableHead>
        <TableBody>
          {items.map((item) => {
            return <CartItems key={item.id} item={item} />;
          })}
        </TableBody>
      </Table>
    </TableBox>
  );
  return (
    <Modal onClick={props.onClick}>
      <CrossButton onClick={props.onClick}>╳</CrossButton>
      {emptyCart && <p>Keep Scrolling</p>}
      {!emptyCart && (
        <CartBox>
          <H1>Shopping Cart</H1>
          <Para>Complete your purchase by clicking Checkout Button</Para>
          {cartTable}
        </CartBox>
      )}
      <CartLastOption>
        {!emptyCart && (
          <Subtotal>Subtotal : ${parseInt(totalAmount)} </Subtotal>
        )}
        <CartButtonsDiv>
          {!addressPage && (
            <ContinueShopping onClick={props.onClick}>
              Continue Shopping
            </ContinueShopping>
          )}
          {!addressPage && (
            <OrderButton onClick={checkoutClickHandler}>Checkout</OrderButton>
          )}
        </CartButtonsDiv>
      </CartLastOption>
    </Modal>
  );
};

export default Cart;
