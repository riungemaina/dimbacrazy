import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function () {
  return (
    <>
      <Wrapper>
        <Error>Error: 404</Error>
        <p>
          onto the edges of the internet, knowledge as we know it, &amp;
          beyond!!
        </p>
        <NA>We could not find that, anywhere...</NA>
        <p>
          anyway keep exploring:- <br />
          <Link to="/">
            <Bttn>Home</Bttn>
          </Link>
          <Button href="wikipedia.com">Wikipedia</Button>
          <Button href="instagram.com">Instagram</Button>
          <Button href="twitter.com">Twitter</Button>
        </p>
      </Wrapper>
    </>
  );
}

// check how to declare two styled components at once | share styles between components
const Bttn = styled.button`
  width: fit-content;
  padding: 5px 10px;
  background-color: #006d04;
  color: #fffefe;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.95em;
  margin: 10px 0 0 10px;
  border-radius: 2px;
  text-decoration: none;
  transition: background-color 0.3s;
  display: inline-block;
  border: none;

  &:hover {
    background-color: #7b0090;
    cursor: pointer;
  }
`;

const Button = styled.a`
  width: fit-content;
  padding: 5px 10px;
  background-color: #006d04;
  color: #fffefe;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.95em;
  margin: 10px 0 0 10px;
  border-radius: 2px;
  text-decoration: none;
  transition: background-color 0.3s;
  display: inline-block;

  &:hover {
    background-color: #7b0090;
  }
`;

const NA = styled.p`
  font-size: 2em;
  text-transform: lowercase;
  text-align: center;
`;

const Wrapper = styled.div`
  width: 600px;
  margin: 30px auto;
  padding: 10px;
  background-color: rgb(230 230 230 / 0.95);
  border-radius: 5px;
  color: #0c0021;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  border: 2px solid #fff;

  p {
    padding: 10px;
  }
`;

const Error = styled.h4`
  text-align: center;
  font-size: 5em;
  text-transform: uppercase;
  color: #c50e00;
`;
