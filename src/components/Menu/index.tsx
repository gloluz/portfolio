import React from "react";
import styled from "styled-components";

import Item from "../Item";

const MenuList = styled.div`
  height: 15em;
  width: 35em;
  justify-content: flex-end;
  position: absolute;
  top: 40px;
  right: 0;
`;

export type ItemMenu = "skills" | "projects" | "education";

export interface MenuProps {
  onClick: (itemMenu: ItemMenu) => any;
}

const Menu = ({ onClick }: MenuProps) => {
  return (
    <MenuList>
      <Item onClick={() => onClick("skills")}>Compétences</Item>
      <Item onClick={() => onClick("projects")}>Projets</Item>
      <Item onClick={() => onClick("education")}>Formation</Item>
    </MenuList>
  );
};

export default Menu;
