import React from "react";
import styled from "styled-components";

import Item from "../Item";
import Flex from "../Layout/Flex";

const MenuList = styled.div`
  height: 15em;
  width: 100%;
  justify-content: flex-end;
  position: absolute;
  top: 10px;
  right: 20px;
`;

export type ItemMenu = "skills" | "projects" | "education" | "profile";

export interface MenuProps {
  onClick: (itemMenu: ItemMenu) => any;
}

const Menu = ({ onClick }: MenuProps) => {
  return (
    <MenuList>
      <Flex direction="row" justify="flex-end">
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
      </Flex>
    </MenuList>
  );
};

export default Menu;
