import React from "react";
import styled from "styled-components";

export default function () {
  return (
    <>
      <Nav>
        <Logo>DimbaCrazy</Logo>
        <Categories>
          <Category>Home</Category>
          <Category>News</Category>
          <Category>KPL</Category>
          <Category>EPL</Category>
          <Category>Betting</Category>
          <Category>More</Category>
        </Categories>
      </Nav>
    </>
  );
}
const Logo = styled.div`
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 14px;
  font-weight: 700;
`;

const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Nav = styled.nav`
  height: 50px;
  background-color: #000;
  color: #fff;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

const Category = styled.div`
  padding: 0 25px;
`;
