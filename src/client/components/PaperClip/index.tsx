import React from "react";
import styled from "styled-components";

export const StyledPaperClip = styled.div`
  background: transparent;
  height: 40px;
  width: 15px;
  border-radius: 10px;
  border: 2px solid #afabab;
  display: inline-block;
  position: absolute;
  top: -12px;
  left: calc(50% - 10px);
  z-index: 2;
  transform: rotate(140deg);

  &:after {
    width: 11px;
    height: 20px;
    content: " ";
    background: transparent;
    display: block;
    position: absolute;
    right: 2px;
    top: 5px;
    border-radius: 10px;
    border: 2px solid #afabab;
    border-bottom: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  @media screen and (max-width: 768px) {
    left: 50%;
  }
`;

const PaperClip = () => {
  return <StyledPaperClip />;
};

export default PaperClip;
