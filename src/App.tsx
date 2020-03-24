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
    background-color: #fff;

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
              "Rendez-vous dans le menu pour en découvrir plus sur mon profil."
            ]}
          />
        )}
        {itemMenuSelected === "skills" && (
          <ScrollingTextBubble
            position="right"
            scrollingTexts={[
              "J'ai acquéri plusieurs compétences durant ma formation",
              "Scrollez pour les découvrir."
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
        {itemMenuSelected === "skills" && <Skills />}
        {itemMenuSelected === "projects" && <Projects />}
        {itemMenuSelected === "education" && <Profile />}
      </Container>
    </>
  );
}

export default App;
