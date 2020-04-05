import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Menu, { ItemMenu } from "./components/Menu";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experiences from "./components/Experiences";

import Profile from "./components/Profile";
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
    <Router>
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
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
