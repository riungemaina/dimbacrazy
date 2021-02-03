import React from "react";
import styled from "styled-components";

import Nav from "./components/nav";
import Home from "./components/home";

export default function App() {
  return (
    <>
      <Nav />
      <Page>
        <Home />
      </Page>
    </>
  );
}

const Page = styled.div`
  max-width: 980px;
  background-color: #fff;
  margin: 0 auto;
  padding: 30px 10px;
`;
