import React from "react";
import styled from "styled-components";

import Item from "../Item";

const MenuList = styled.div`
  height: 15em;
  width: 35em;
  justify-content: flex-end;
  position: fixed;
  top: 40px;
  right: 0;
`;

const Menu = () => {
  return (
    <MenuList>
      <Item>Skills</Item>
      <Item>Projects</Item>
      <Item>Education</Item>
    </MenuList>
  );
};

export default Menu;
