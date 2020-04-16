import React, { useContext } from "react";
import styled from "styled-components";

import LightContext from "../../Context/LightContext";

export const Wire = styled.div`
  width: 4px;
  height: 100%;
  position: absolute;
  background-color: #000;

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
`;

export const Halo = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  background: radial-gradient(#ffffff, rgba(255, 255, 255, 0) 68%);
  position: absolute;
  left: -98px;
  bottom: -140px;
  z-index: -1;
`;

interface BulbProps {
  isOn: boolean;
}

export const Bulb = styled.div<BulbProps>`
  cursor: pointer;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background-color: ${({ isOn }) =>
    isOn ? "#fffdb9" : "rgba(255, 255, 255, 0.3)"};
  position: absolute;
  left: -28px;
  bottom: -60px;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);

  &:before {
    content: "";
    display: block;
    background-color: ${({ isOn }) => (isOn ? "#ffd891" : "#777")};
    width: 4px;
    height: 20px;
    position: absolute;
    top: 0;
    left: calc(50% - 2px);
  }

  &:after {
    content: "";
    display: block;
    border: 3px solid ${({ isOn }) => (isOn ? "#ffd891" : "#777")};
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
  const context = useContext(LightContext);

  return (
    <Wire>
      {context.lightOn && <Halo />}
      <Bulb onClick={context.switch} isOn={context.lightOn} />
    </Wire>
  );
};

export default Lamp;
