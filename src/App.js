import React from "react";
import styled from "styled-components";
import { useApi } from "./components/context";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./components/nav";
import Home from "./components/home";
import Footer from "./components/footer";
import SinglePost from "./components/singlePost";
import Loader from "./components/loader";
import NotFound from "./components/404";

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
      <Router>
        <Nav />
        <Page>
          <Switch>
            <Route exact path="/" component={Content} />
            <Route
              path="/product/:slug"
              render={(props) => <SinglePost {...props} />}
            />
            <Route exact path="/not-found" component={NotFound} />
            <Route component={NotFound} />
          </Switch>
        </Page>
        <Footer />
      </Router>
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
