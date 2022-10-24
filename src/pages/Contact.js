import React, { Fragment, useState } from "react";
import styled from "styled-components";
import bgImg from "../assets/contact.jpg";
import HelpIcon from "@mui/icons-material/Help";

const ContactBox = styled.div`
  overflow: hidden;
  height: 80vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 1rem;
  background-image: url(${bgImg});
  background-repeat: no-repeat;
  background-size: cover;
`;
const LeftDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70%;
`;
const LeftTextDiv = styled.div`
  padding: 1rem;
  width: 50%;
  & h1 {
    margin-bottom: 2rem;
  }
`;
const RightDiv = styled.div`
  padding: 0 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 70%;

  & textarea {
    border: 1px solid #c6c6c6;
    margin: 0.6rem 0 0 0;
  }
`;
const NameDiv = styled.div`
  display: flex;
  gap: 3rem;
`;
const InpBox = styled.input`
  background-color: #ffffff;
  border: 1px solid #c6c6c6;
  padding: 0.5rem 0.4rem;
  display: block;
  border-radius: 0.3rem;
  margin: 0.4rem 0;
`;
const LabelBox = styled.label`
  color: black;
`;
const Button = styled.button`
  width: 20%;
  margin-top: 1.2rem;
  padding: 0.4rem 0;
  border: none;
  background-color: #f54749;
  border-radius: 0.3rem;
  color: white;
  font-size: 16px;
`;

const Footer = styled.footer`
  background-color: #f54749;
  color: white;
  display: flex;
  align-items: center;
  height: 3rem;
  justify-content: end;
  padding: 0 0.7rem;
`;
const FooterDiv = styled.div`
  display: flex;
  gap: 0.4rem;
`;

const Contact = () => {
  const defaultInpFields = {
    fName: "",
    lName: "",
    email: "",
    message: "",
  };
  const [inputFields, setInputFields] = useState(defaultInpFields);
  const [queryList, setQueryList] = useState([]);
  const onChangeHandler = (e) => {
    const field = e.target.id;
    const value = e.target.value;
    if (field == "email") {
      if (value.trim().includes("@")) {
        const element = document.getElementById(field);
        element.style.border = "none";
        element.placeholder = "";
      }
    } else if (value.trim().length > 0) {
      const element = document.getElementById(field);
      element.style.border = "none";
      element.placeholder = "";
    }
    setInputFields({
      ...inputFields,
      [field]: value,
    });
  };
  const onBlurHandler = (e) => {
    const field = e.target.id;
    const value = e.target.value;
    if (value.trim().length < 1) {
      const element = document.getElementById(field);
      element.style.border = "2px solid red";
      if (field == "fName") {
        element.placeholder = "Enter Valid First Name";
      } else if (field == "lName") {
        element.placeholder = "Enter Valid Last Name";
      } else if (field == "email") {
        element.placeholder = "Enter Valid Email Address";
      } else if (field == "message") {
        element.placeholder = "Enter Valid Message";
      }
    }
  };
  const onSubmitHandler = () => {
    if (submitHandler()) {
      setQueryList([...queryList, inputFields]);
      console.log(inputFields);
      setInputFields(defaultInpFields);
    } else {
      alert("wrong input");
    }
  };

  const submitHandler = () => {
    const fName = document.getElementById("fName").value;
    const lName = document.getElementById("lName").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    if (
      fName.trim().length > 0 &&
      lName.trim().length > 0 &&
      email.trim().includes("@") &&
      message.trim().length > 0
    ) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <Fragment>
      <ContactBox>
        <LeftDiv>
          <LeftTextDiv>
            <h1>Contact Us</h1>
            <p>
              Need to get in touch with us?Need to get in touch with us?Need to
              get in touch with us?Need to get in touch with us?Need to get in
              touch with us?
            </p>
          </LeftTextDiv>
        </LeftDiv>
        <RightDiv>
          <NameDiv>
            <div>
              <LabelBox htmlFor="fName">First Name</LabelBox>
              <InpBox
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
                type="text"
                id="fName"
                value={inputFields.fName}
              />
            </div>
            <div>
              <LabelBox htmlFor="lName">Last Name</LabelBox>
              <InpBox
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
                type="text"
                id="lName"
                value={inputFields.lName}
              />
            </div>
          </NameDiv>
          <LabelBox htmlFor="email">Email</LabelBox>
          <InpBox
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
            type="email"
            id="email"
            value={inputFields.email}
          />
          <LabelBox htmlFor="message">What can we help you?</LabelBox>
          <textarea
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
            id="message"
            rows={6}
            cols={10}
            value={inputFields.message}
          />
          <Button onClick={onSubmitHandler}>Submit</Button>
          <Button
            onClick={() => {
              console.log(queryList);
            }}
          >
            Show
          </Button>
        </RightDiv>
      </ContactBox>
      <Footer>
        <FooterDiv>
          <HelpIcon />
          <p>Help</p>
        </FooterDiv>
      </Footer>
    </Fragment>
  );
};

export default Contact;
