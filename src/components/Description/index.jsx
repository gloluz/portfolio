import React from "react";
import styled from "styled-components";

const Profil = styled.div`
  border: 2px solid #333;
  border-radius: 50%;
  background-color: #fafafa;
  padding: 15px;
  height: 6em;
  width: 12em;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 28px;

  position: fixed;
  top: 2em;
  left: 2em;
`;

const Description = () => {
  return (
    <Profil>
      <div>Hello, I'm Gloria Luzio, web developper</div>
    </Profil>
  );
};

export default Description;
