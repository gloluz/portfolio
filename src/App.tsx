import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

import Avatar from "./components/Avatar";
import Desk from "./components/Desk";
import Menu, { ItemMenu } from "./components/Menu";
import ScrollingTextBubble from "./components/ScrollingTextBubble";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Profile from "./components/Profile";

const GlobalStyle = createGlobalStyle`
  
  body {
    font-family: "Open Sans", sans-serif;
    margin: 0;
    background-color: #fafafa;

  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
`;

const SplashScreen = styled.div`
  position: relative;
  background-color: #bce4ff;
  min-height: 400px;

  @media screen and (min-width: 768px) {
    height: 100vh;
    width: 100vw;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

function App() {
  const [itemMenuSelected, setItemMenuSelected] = useState<ItemMenu | null>(
    null
  );

  const handleClick = (itemMenu: ItemMenu) => {
    setItemMenuSelected(itemMenu);
  };

  return (
    <>
      <SplashScreen>
        <GlobalStyle />
        <Avatar />
        <Desk />
        <Menu onClick={handleClick} />
        {itemMenuSelected === null && (
          <ScrollingTextBubble
            position="left"
            scrollingTexts={[
              "Bonjour je m'appelle Gloria Luzio,",
              "bienvenue sur mon portfolio !",
              "Scrollez pour découvrir mon profil."
            ]}
          />
        )}
        {itemMenuSelected === "skills" && (
          <ScrollingTextBubble
            position="right"
            scrollingTexts={[
              "React, React Native, Javascript, HTML/CSS",
              "Node.JS, Express, MongoDB, TypeScript, SCSS."
            ]}
          />
        )}
        {itemMenuSelected === "projects" && (
          <ScrollingTextBubble
            position="left"
            scrollingTexts={[
              "J'ai réalisé plusieurs projets en HTML/CSS, React, React native côté front,",
              " et MongoDB, Express, Node.Js côté back.",
              "Scrollez pour découvrir mes projets."
            ]}
          />
        )}
        {itemMenuSelected === "education" && (
          <ScrollingTextBubble
            position="right"
            scrollingTexts={[
              "J'ai suivi le bootcamp à Le Reacteur, à Paris,",
              "de janvier à mars 2020.",
              "Scrollez pour découvrir mon parcours."
            ]}
          />
        )}
      </SplashScreen>
      <Container>
        <Skills />
        <Projects />
        <Profile />
      </Container>
    </>
  );
}

export default App;
