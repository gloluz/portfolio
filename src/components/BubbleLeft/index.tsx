import React, { ReactNode } from "react";
import styled from "styled-components";

const BubbleStyles = styled.div`
  height: 12em;
  width: 20em;
  position: fixed;
  top: 6em;
  left: 2em;

  &:after {
    content: "";
    background: radial-gradient(
        50% 100% at 100% 0%,
        #abddff 100%,
        transparent 100%
      ),
      radial-gradient(100% 100% at 100% 0%, #fafafa 100%, transparent 100%);
    height: 60px;
    width: 60px;
    position: absolute;
    bottom: -30px;
    right: 43px;
    z-index: 1;
  }

  &:before {
    content: "";
    border-radius: 50%;
    background-color: #fafafa;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
  }
`;

const Text = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 800;
  font-size: 20px;
  text-transform: uppercase;
  padding: 15px;
`;

export interface BubbleProps {
  children: ReactNode;
}

const BubbleLeft = ({ children }: BubbleProps) => {
  return (
    <BubbleStyles>
      <Text>{children}</Text>
    </BubbleStyles>
  );
};

export default BubbleLeft;
