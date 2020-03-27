import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

import Avatar from "./components/Avatar";
import Desk from "./components/Desk";
import Menu, { ItemMenu } from "./components/Menu";
import ScrollingTextBubble from "./components/ScrollingTextBubble";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import { Container } from "./components/Layout";

const GlobalStyle = createGlobalStyle`
  
  body {
    font-family: "Open Sans", sans-serif;
    margin: 0;
    background-color: #bce4ff;

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

function App() {
  const [itemMenuSelected, setItemMenuSelected] = useState<ItemMenu>("profile");
  const [showDesk, setShowDesk] = useState<boolean>(true);

  const handleClick = (itemMenu: ItemMenu) => {
    setItemMenuSelected(itemMenu);

    if (itemMenu === "profile") {
      setShowDesk(true);
    } else {
      setShowDesk(false);
    }
  };

  return (
    <>
      <SplashScreen>
        <GlobalStyle />
        <Avatar />
        {showDesk && itemMenuSelected === "profile" && <Desk />}

        <Menu onClick={handleClick} />
        {itemMenuSelected === "profile" && (
          <ScrollingTextBubble
            position="left"
            scrollingTexts={[
              "Bonjour je m'appelle Gloria Luzio,",
              "bienvenue sur mon portfolio !",
              "anciennement infirmière, je me suis reconvertie",
              "dans le domaine du développement web / mobile"
            ]}
          />
        )}
        {itemMenuSelected === "skills" && (
          <ScrollingTextBubble
            position="right"
            scrollingTexts={[
              "J'ai acquis plusieurs compétences durant ma formation",
              "notamment en Javascript, React, React Native, Node Js, Mongo DB"
            ]}
          />
        )}
        {itemMenuSelected === "projects" && (
          <ScrollingTextBubble
            position="left"
            scrollingTexts={[
              "J'ai réalisé plusieurs projets que vous pouvez découvrir"
            ]}
          />
        )}
        {itemMenuSelected === "education" && (
          <ScrollingTextBubble
            position="right"
            scrollingTexts={[
              "J'ai suivi le bootcamp à Le Reacteur de janvier à mars 2020",
              "Avant cela je travaillais en tant qu'infirmière à l'hôpital Robert Debré."
            ]}
          />
        )}
      </SplashScreen>
      <Container>
        {itemMenuSelected === "skills" && <Skills />}
        {itemMenuSelected === "projects" && <Projects />}
        {itemMenuSelected === "education" && <Education />}
      </Container>
    </>
  );
}

export default App;
