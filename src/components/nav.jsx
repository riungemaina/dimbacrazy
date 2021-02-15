import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// LaLiga
// Serie A
// laliga,
// seriea,

export default function () {
  return (
    <>
      <Nav>
        <Logo>DimbaCrazy</Logo>
        <Categories>
          <Category>
            <StyledLink to={`/`}>Home</StyledLink>
          </Category>
          <Category>
            <StyledLink to={`/category/news`}>News</StyledLink>
          </Category>
          <Category>
            <StyledLink to={`/category/kpl`}>KPL</StyledLink>
          </Category>
          <Category>
            <StyledLink to={`/category/epl`}>EPL</StyledLink>
          </Category>
          <Category>
            <StyledLink to={`/category/betting`}>Betting</StyledLink>
          </Category>
          <Category>More</Category>
        </Categories>
      </Nav>
    </>
  );
}

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: inherit;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    color: inherit;
    text-decoration: inherit;
  }
`;

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
