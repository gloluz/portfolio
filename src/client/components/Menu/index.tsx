import React, { useState } from "react";

import Item from "./Item";
import { MenuContainer } from "../Layout";
import {
  LogoBurgerMenu,
  BurgerMenuContainer,
  MenuButton,
  OverlayMenu
} from "./styles";

export type ItemMenu = "skills" | "projects" | "education" | "profile";

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <MenuContainer>
        <Item path="/">Profil</Item>
        <Item path="/competences">Compétences</Item>
        <Item path="/projets">Projets</Item>
        <Item path="/experiences">Expériences</Item>
      </MenuContainer>

      <BurgerMenuContainer>
        <MenuButton onClick={() => setShowMenu(!showMenu)}>
          <LogoBurgerMenu show={showMenu} />
        </MenuButton>
      </BurgerMenuContainer>

      {showMenu && (
        <OverlayMenu onClick={() => setShowMenu(false)}>
          <Item path="/">Profil</Item>
          <Item path="/competences">Compétences</Item>
          <Item path="/projets">Projets</Item>
          <Item path="/experiences">Expériences</Item>
        </OverlayMenu>
      )}
    </>
  );
};

export default Menu;
