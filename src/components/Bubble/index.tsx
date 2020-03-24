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
  height: 12em;
  width: 20em;
  position: absolute;
  top: 4em;
  left: ${({ position }) => (position === "left" ? "2em" : "24em")};
  animation: 0.4s ${bubbleAppear} cubic-bezier(0.5, 0.9, 0.6, 1.5);

  ${({ position }) =>
    position === "left" &&
    css`
      transform-origin: right bottom;
    `}

  ${({ position }) =>
    position === "right" &&
    css`
      transform-origin: left bottom;
    `}

  &:after {
    content: "";
    height: 60px;
    width: 60px;
    position: absolute;
    bottom: -40px;
    z-index: 1;
    background: radial-gradient(
        50% 100% at ${({ position }) => (position === "left" ? "100%" : "0%")}
          0%,
        #bce4ff 100%,
        transparent 100%
      ),
      radial-gradient(
        100% 100% at ${({ position }) => (position === "left" ? "100%" : "0%")}
          0%,
        #fafafa 100%,
        transparent 100%
      );

    ${({ position }) =>
      position === "left" &&
      css`
        left: 50%;
      `};

    ${({ position }) =>
      position === "right" &&
      css`
        right: 50%;
      `};
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
