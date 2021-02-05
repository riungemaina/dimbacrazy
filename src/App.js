import React from "react";
import styled from "styled-components";

import Nav from "./components/nav";
import Home from "./components/home";
import Footer from "./components/footer";
import SinglePost from "./components/singlePost";

export default function App() {
  return (
    <>
      <Nav />
      <Page>
        <SinglePost />
        {/* <Home /> */}
      </Page>
      <Footer />
    </>
  );
}

const Page = styled.div`
  max-width: 980px;
  background-color: #fff;
  margin: 0 auto;
  padding: 30px 10px 0;
  min-height: 85vh;
`;
