import React from "react";
import { createGlobalStyle } from "styled-components";

import Avatar from "./components/Avatar";
import Desk from "./components/Desk";
import Menu from "./components/Menu";
import BubbleLeft from "./components/BubbleLeft";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Open Sans", sans-serif;
    margin: 0;
    background: #aaddff;
    /* overflow: hidden; */
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <Avatar />
      <Desk />
      <Menu />
      <BubbleLeft>Hello I'm Gloria Luzio, web developer</BubbleLeft>
      <Menu />
    </div>
  );
}

export default App;
