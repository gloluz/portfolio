import React from "react";
import { createGlobalStyle } from "styled-components";

import Avatar from "./components/Avatar";
import Desk from "./components/Desk";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
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
    </div>
  );
}

export default App;
