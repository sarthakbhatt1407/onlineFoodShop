import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
const MealMainBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.4rem 1rem;
  align-items: center;
`;
const InfoBox = styled.div`
  color: black;
`;
const ActionBox = styled.div`
  color: black;
`;
const ActionButton = styled.button`
  border: none;
  background-color: #f54749;
  margin: 0 0.3rem;
  padding: 0.2rem 0.4rem;
  border-radius: 0.4rem;
  color: white;
`;
const Quantity = styled.input``;

const AvailableMeals = (props) => {
  const { name, description: desc, price, amount } = props.meal;
  const [quantity, setQuantity] = useState(1);

  const plusHandler = () => {
    setQuantity(quantity + 1);
    console.log(quantity);
  };
  const minusHandler = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const onchageHandler = (e) => {
    const value = parseInt(e.target.value);
    setQuantity(value);
  };
  const disptach = useDispatch();
  const addToCartHandler = () => {
    disptach({ type: "add", meal: props.meal, amountValue: quantity });
  };

  return (
    <MealMainBox>
      <InfoBox>
        <h1>{name}</h1>
        <p>{desc}</p>
        <h3>${price}</h3>
      </InfoBox>
      <ActionBox>
        <ActionButton onClick={plusHandler}>+</ActionButton>
        <Quantity type="number" onChange={onchageHandler} value={quantity} />
        <ActionButton onClick={minusHandler}>-</ActionButton>
        <ActionButton onClick={addToCartHandler}>Add to Cart</ActionButton>
      </ActionBox>
    </MealMainBox>
  );
};

export default AvailableMeals;
