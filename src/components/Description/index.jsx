import React from "react";
import styled from "styled-components";

const Profil = styled.div`
  /* border: 1px solid red; */
  height: 15em;
  width: 30em;
  font-size: 24px;

  position: fixed;
  top: 0;
  left: 2em;
`;

const Description = () => {
  return (
    <Profil>
      <div>Hello, I'm Gloria Luzio</div>
    </Profil>
  );
};

export default Description;
