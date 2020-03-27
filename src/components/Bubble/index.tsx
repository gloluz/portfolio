import React, { ReactNode } from "react";
import styled, { css, keyframes } from "styled-components";

export type LeftRight = "left" | "right";

interface BubbleStylesProps {
  position: LeftRight;
}

const bubbleAppear = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;

const BubbleStyles = styled.div<BubbleStylesProps>`
  height: 10em;
  width: 18em;
  position: fixed;
  bottom: 32em;
  left: 2em;
  animation: 0.4s ${bubbleAppear} cubic-bezier(0.5, 0.9, 0.6, 1.5);

  &:after {
    content: "";
    height: 60px;
    width: 60px;
    position: absolute;
    left: 50%;
    bottom: -40px;
    z-index: 1;
    background: radial-gradient(
        50% 100% at 100% 0%,
        #bce4ff 100%,
        transparent 100%
      ),
      radial-gradient(100% 100% at 100% 0%, #fafafa 100%, transparent 100%);
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
  font-size: 18px;
  text-transform: uppercase;
  padding: 15px;
`;

export interface BubbleProps {
  children: ReactNode;
  position: LeftRight;
}

const Bubble = ({ children, position }: BubbleProps) => {
  return (
    <BubbleStyles position={position}>
      <Text>{children}</Text>
    </BubbleStyles>
  );
};

export default Bubble;
