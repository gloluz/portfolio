import React, { useState } from "react";

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

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
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
      <GlobalStyle />

      <Menu onClick={handleClick} />
      <Container className="container">
        {showDesk && itemMenuSelected === "profile" && <Profile />}
        {itemMenuSelected === "skills" && (
          <Skills selectedTab={itemMenuSelected} />
        )}
        {itemMenuSelected === "projects" && (
          <Projects selectedTab={itemMenuSelected} />
        )}
        {itemMenuSelected === "education" && (
          <Experiences selectedTab={itemMenuSelected} />
        )}
      </Container>
    </>
  );
}

export default App;
