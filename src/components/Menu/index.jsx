import React from "react";
import styled from "styled-components";

const MenuList = styled.div`
  /* border: 1px solid red; */
  height: 25em;
  width: 45em;

  position: fixed;
  top: 0;
  right: 0;
`;

const Menu = () => {
  return <MenuList></MenuList>;
};

export default Menu;
