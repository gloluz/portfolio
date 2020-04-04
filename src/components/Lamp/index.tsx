import React from "react";
import styled from "styled-components";

export const Wire = styled.div`
  width: 4px;
  background-color: #000;
  position: absolute;
  top: 0;
  bottom: 600px;
  left: 50%;
  display: none;

  &:before {
    content: "";
    display: block;
    width: 8px;
    background-color: #000;
    height: 20px;
    position: absolute;
    bottom: 0;
    left: -2px;
  }

  @media screen and (max-width: 768px) and (min-height: 650px) {
    display: block;
  }
`;

export const Halo = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  background: radial-gradient(#ffffff, #bce4fd 68%);
  position: absolute;
  left: -98px;
  bottom: -140px;
  z-index: -1;
`;

export const Bulb = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background-color: #fffdb9;
  position: absolute;
  left: -28px;
  bottom: -60px;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);

  &:before {
    content: "";
    display: block;
    background-color: #ffd891;
    width: 4px;
    height: 20px;
    position: absolute;
    top: 0;
    left: calc(50% - 2px);
  }

  &:after {
    content: "";
    display: block;
    border: 3px solid #ffd891;
    box-sizing: border-box;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    position: absolute;
    top: 20px;
    left: calc(50% - 6px);
  }
`;

const Lamp = () => {
  return (
    <Wire>
      <Halo />
      <Bulb />
    </Wire>
  );
};

export default Lamp;
