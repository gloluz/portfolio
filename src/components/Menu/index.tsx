import React from "react";

import Item from "../Item";
import { MenuContainer } from "../Layout";

export type ItemMenu = "skills" | "projects" | "education" | "profile";

export interface MenuProps {
  onClick: (itemMenu: ItemMenu) => any;
}

const Menu = ({ onClick }: MenuProps) => {
  return (
    <MenuContainer>
      <Item rotate="3" onClick={() => onClick("profile")}>
        Profil
      </Item>
      <Item rotate="-1" onClick={() => onClick("skills")}>
        Compétences
      </Item>
      <Item rotate="2" onClick={() => onClick("projects")}>
        Projets
      </Item>
      <Item rotate="-2" onClick={() => onClick("education")}>
        Expériences
      </Item>
    </MenuContainer>
  );
};

export default Menu;
