import React, { useState } from "react";

import Item from "../Item";
import { MenuContainer } from "../Layout";
import {
  LogoBurgerMenu,
  BurgerMenuContainer,
  MenuButton,
  OverlayMenu
} from "./styles";

export type ItemMenu = "skills" | "projects" | "education" | "profile";

export interface MenuProps {
  onClick: (itemMenu: ItemMenu) => any;
  currentPage: ItemMenu;
}

const Menu = ({ onClick, currentPage }: MenuProps) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <MenuContainer>
        <Item
          onClick={() => onClick("profile")}
          selected={currentPage === "profile"}
        >
          Profil
        </Item>
        <Item
          onClick={() => onClick("skills")}
          selected={currentPage === "skills"}
        >
          Compétences
        </Item>
        <Item
          onClick={() => onClick("projects")}
          selected={currentPage === "projects"}
        >
          Projets
        </Item>
        <Item
          onClick={() => onClick("education")}
          selected={currentPage === "education"}
        >
          Expériences
        </Item>
      </MenuContainer>

      <BurgerMenuContainer>
        <MenuButton onClick={() => setShowMenu(!showMenu)}>
          <LogoBurgerMenu show={showMenu} />
        </MenuButton>
      </BurgerMenuContainer>

      {showMenu && (
        <OverlayMenu onClick={() => setShowMenu(false)}>
          <Item
            onClick={() => onClick("profile")}
            selected={currentPage === "profile"}
          >
            Profil
          </Item>
          <Item
            onClick={() => onClick("skills")}
            selected={currentPage === "skills"}
          >
            Compétences
          </Item>
          <Item
            onClick={() => onClick("projects")}
            selected={currentPage === "projects"}
          >
            Projets
          </Item>
          <Item
            onClick={() => onClick("education")}
            selected={currentPage === "education"}
          >
            Expériences
          </Item>
        </OverlayMenu>
      )}
    </>
  );
};

export default Menu;
