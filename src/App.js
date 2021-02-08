import React from "react";
import styled from "styled-components";
import { useApi } from "./components/context";

import Nav from "./components/nav";
import Home from "./components/home";
import Footer from "./components/footer";
import SinglePost from "./components/singlePost";
import Loader from "./components/loader";

export default function App() {
  const api = useApi();
  const Loaded = api.Loaded();

  function Content() {
    if (Loaded) {
      return <Home />;
    } else return <Loader />;
  }
  return (
    <>
      <Nav />
      <Page>
        <SinglePost />
        {/* <Content /> */}
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
