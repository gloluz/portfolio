import React from "react";
import { Switch, Route } from "react-router-dom";

import Menu from "./components/Menu";
import Skills from "./containers/Skills";
import Projects from "./containers/Projects";
import Experiences from "./containers/Experiences";
import NoRoute from "./containers/NoRoute";

import Profile from "./containers/Profile";
import { createGlobalStyle } from "styled-components";
import { Container } from "./components/Layout";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Open Sans", sans-serif;
    margin: 0;
    background-color: #bce4ff;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />

      <Menu />

      <Container className="container">
        <Switch>
          <Route exact path="/">
            <Profile />
          </Route>

          <Route exact path="/competences">
            <Skills />
          </Route>

          <Route exact path="/projets">
            <Projects />
          </Route>

          <Route exact path="/experiences">
            <Experiences />
          </Route>

          <Route component={NoRoute} />
        </Switch>
      </Container>
    </>
  );
}

export default App;
