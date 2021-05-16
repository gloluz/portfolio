import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import Menu from "./components/Menu";
import Skills from "./containers/Skills";
import Projects from "./containers/Projects";
import Experiences from "./containers/Experiences";
import NoRoute from "./containers/NoRoute";
import Profile from "./containers/Profile";
import { Container } from "./components/Layout";
import PictureSplashScreen from "-!file-loader!../client/assets/Pictures/splashScreen.jpg";
import { createGlobalStyle } from "styled-components";
import LightContext from "./Context/LightContext";

interface GlobalStyleProps {
  background?: string;
}

export const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  body {
    font-family: "Open Sans", sans-serif;
    margin: 0;
    background-color: ${(p) => p.background || "#bce4ff"};
    overflow-x: hidden;
    transition: all 0.5s ease;
  }
`;

function App() {
  const [lightOn, setLightOn] = useState(true);

  const url = process.env.PUBLIC_URL || "";

  return (
    <>
      <Helmet>
        <link rel="Gloria Luzio" href="https://www.glorialuzio.fr" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="Iw0TmDSpmWOQSvq3ve0MRkT_F5Yj773nhaANq6eoHjI" />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:400,800|Vibur&display=swap"
          rel="stylesheet"
        />

        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR"></meta>
        <meta property="og:image" content={url + PictureSplashScreen} />
      </Helmet>

      <LightContext.Provider
        value={{ lightOn, switch: () => setLightOn(!lightOn) }}
      >
        <Menu />

        <GlobalStyle background={!lightOn ? "#97b9d0" : undefined} />

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
      </LightContext.Provider>
    </>
  );
}

export default App;
