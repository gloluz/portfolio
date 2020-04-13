import React from "react";
import { Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import Menu from "./components/Menu";
import Skills from "./containers/Skills";
import Projects from "./containers/Projects";
import Experiences from "./containers/Experiences";
import NoRoute from "./containers/NoRoute";

import Profile from "./containers/Profile";
import { createGlobalStyle } from "styled-components";
import { Container } from "./components/Layout";
import PictureSplashScreen from "../client/assets/Pictures/splashScreen.jpg";

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
      <Helmet>
        <link rel="Gloria Luzio" href="https://www.glorialuzio.fr" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:400,800|Vibur&display=swap"
          rel="stylesheet"
        />

        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR"></meta>
        <meta property="og:image" content={PictureSplashScreen} />
      </Helmet>

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
