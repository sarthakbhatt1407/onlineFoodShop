import React from "react";
import styled from "styled-components";
const AddressFormBox = styled.div`
  & h3 {
    text-align: center;
  }
  padding: 0.5rem 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FormBox = styled.form`
  background-color: red;
  display: grid;
  /* flex-direction: column; */
  width: 70%;
  grid-template-columns: 1fr 1fr;
  padding: 0%.5rem 1rem;
  justify-content: center;
  align-items: center;
`;
const Label = styled.label``;
const Input = styled.input`
  background-color: #ffffff;
  border: 1px solid #c6c6c6;
  padding: 0.5rem 0.4rem;
  width: 80%;
  border-radius: 0.3rem;
  margin: 0.4rem 0;
`;
const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;
const TotalBox = styled.div`
  & p {
    display: inline;
  }
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: flex-end;
  background-color: green;
`;
const OrderButton = styled.button`
  background-color: yellow;
  /* background-color: #f54749; */
  border: none;
  padding: 0.4rem 0.6rem;
  border-radius: 0.4rem;
  color: white;
  font-size: 16px;
`;
const Subtotal = styled.p`
  text-align: end;
  margin-right: 3rem;
  margin-bottom: 0.6rem;
  font-size: 18px;
  letter-spacing: 0.8px;
`;
const CartAddressForm = () => {
  return (
    <AddressFormBox>
      <h3>Fill Address</h3>
      <FormBox>
        <InputBox>
          <Label htmlFor="name">Name</Label>
          <Input type="text" id="name" />
        </InputBox>
        <InputBox>
          <Label htmlFor="contact">Contact</Label>
          <Input type="text" id="contact" />
        </InputBox>
        <InputBox>
          <Label htmlFor="email">Email</Label>
          <Input type="text" id="email" />
        </InputBox>
        <InputBox>
          <Label htmlFor="address">Address</Label>
          <Input type="text" id="address" />
        </InputBox>
        <InputBox>
          <Label htmlFor="pincode">Pin Code</Label>
          <Input type="number" id="pincode" />
        </InputBox>
        <InputBox>
          <Label htmlFor="city">City</Label>
          <Input type="text" id="city" />
        </InputBox>
        <InputBox>
          <Label htmlFor="country">Country</Label>
          <Input type="text" id="country" />
        </InputBox>
        <TotalBox>
          <Subtotal>Subtotal : $100</Subtotal>
          <OrderButton>Order Now</OrderButton>
        </TotalBox>
      </FormBox>
    </AddressFormBox>
  );
};

export default CartAddressForm;
